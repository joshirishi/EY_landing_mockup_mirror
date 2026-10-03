"""Append-only, hash-chained thesis ledger (requirements §4).

Rules enforced here:
- Records are immutable: UPDATE and DELETE are blocked by database triggers.
- Corrections append a new version of the same thesis_id; the original stays.
- The owner's decision (execute / skip / modify) and fill price are separate records.
- Every record carries the hash of the previous record, so `verify()` detects tampering.

SQLite keeps v1 dependency-free; the schema maps one-to-one onto the Postgres tables
planned in the tech stack (§7).
"""

from __future__ import annotations

import hashlib
import json
import sqlite3
from collections.abc import Iterator
from dataclasses import dataclass
from datetime import UTC, datetime
from decimal import Decimal
from enum import StrEnum
from pathlib import Path
from typing import Any

from trading_agents.thesis import Thesis

GENESIS_HASH = "0" * 64

_SCHEMA = """
CREATE TABLE IF NOT EXISTS records (
    seq          INTEGER PRIMARY KEY AUTOINCREMENT,
    kind         TEXT NOT NULL CHECK (kind IN ('thesis', 'decision')),
    thesis_id    TEXT NOT NULL,
    version      INTEGER NOT NULL,
    payload      TEXT NOT NULL,
    content_hash TEXT NOT NULL,
    prev_hash    TEXT NOT NULL,
    record_hash  TEXT NOT NULL UNIQUE,
    recorded_at  TEXT NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS ux_thesis_version
    ON records (thesis_id, version) WHERE kind = 'thesis';
CREATE TRIGGER IF NOT EXISTS records_no_update BEFORE UPDATE ON records
BEGIN SELECT RAISE(ABORT, 'ledger is append-only'); END;
CREATE TRIGGER IF NOT EXISTS records_no_delete BEFORE DELETE ON records
BEGIN SELECT RAISE(ABORT, 'ledger is append-only'); END;
"""


class LedgerError(Exception):
    pass


class OwnerDecision(StrEnum):
    EXECUTE = "execute"
    SKIP = "skip"
    MODIFY = "modify"


@dataclass(frozen=True)
class Record:
    seq: int
    kind: str
    thesis_id: str
    version: int
    payload: dict[str, Any]
    content_hash: str
    prev_hash: str
    record_hash: str
    recorded_at: str


def _record_hash(
    prev_hash: str, kind: str, thesis_id: str, version: int, content_hash: str, recorded_at: str
) -> str:
    material = "|".join([prev_hash, kind, thesis_id, str(version), content_hash, recorded_at])
    return hashlib.sha256(material.encode("utf-8")).hexdigest()


def _canonical(payload: dict[str, Any]) -> str:
    return json.dumps(payload, sort_keys=True, separators=(",", ":"), ensure_ascii=False)


class Ledger:
    def __init__(self, path: str | Path = ":memory:") -> None:
        if path != ":memory:":
            Path(path).parent.mkdir(parents=True, exist_ok=True)
        self._db = sqlite3.connect(str(path), isolation_level=None)
        self._db.row_factory = sqlite3.Row
        self._db.executescript(_SCHEMA)

    def close(self) -> None:
        self._db.close()

    # -- writes -----------------------------------------------------------------------------

    def append_thesis(self, thesis: Thesis, *, correction_of: int | None = None) -> Record:
        """Append a thesis. Pass `correction_of=<version>` to record a corrected version."""
        latest = self.latest_version(thesis.thesis_id)
        if correction_of is None:
            if latest is not None:
                raise LedgerError(f"{thesis.thesis_id} already exists; record a correction instead")
            version = 1
        else:
            if latest != correction_of:
                raise LedgerError(
                    f"correction must supersede the latest version ({latest}), got {correction_of}"
                )
            version = correction_of + 1
        payload = {"thesis": thesis.model_dump(mode="json"), "supersedes_version": correction_of}
        return self._append(
            "thesis", thesis.thesis_id, version, payload, content_hash=thesis.content_hash()
        )

    def record_decision(
        self,
        thesis_id: str,
        decision: OwnerDecision,
        *,
        fill_price: Decimal | None = None,
        note: str = "",
    ) -> Record:
        version = self.latest_version(thesis_id)
        if version is None:
            raise LedgerError(f"unknown thesis {thesis_id}")
        if decision is OwnerDecision.SKIP and fill_price is not None:
            raise LedgerError("a skipped thesis has no fill price")
        if decision is not OwnerDecision.SKIP and fill_price is None:
            raise LedgerError("execute/modify decisions need the actual fill price")
        payload = {
            "decision": decision.value,
            "fill_price": None if fill_price is None else str(fill_price),
            "note": note,
        }
        return self._append(
            "decision",
            thesis_id,
            version,
            payload,
            content_hash=hashlib.sha256(_canonical(payload).encode()).hexdigest(),
        )

    def _append(
        self, kind: str, thesis_id: str, version: int, payload: dict[str, Any], *, content_hash: str
    ) -> Record:
        recorded_at = datetime.now(UTC).isoformat()
        self._db.execute("BEGIN IMMEDIATE")
        try:
            row = self._db.execute(
                "SELECT record_hash FROM records ORDER BY seq DESC LIMIT 1"
            ).fetchone()
            prev_hash = row["record_hash"] if row else GENESIS_HASH
            rhash = _record_hash(prev_hash, kind, thesis_id, version, content_hash, recorded_at)
            cur = self._db.execute(
                "INSERT INTO records (kind, thesis_id, version, payload, content_hash, prev_hash,"
                " record_hash, recorded_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                (
                    kind,
                    thesis_id,
                    version,
                    _canonical(payload),
                    content_hash,
                    prev_hash,
                    rhash,
                    recorded_at,
                ),
            )
            self._db.execute("COMMIT")
        except Exception:
            self._db.execute("ROLLBACK")
            raise
        assert cur.lastrowid is not None
        return Record(
            cur.lastrowid,
            kind,
            thesis_id,
            version,
            payload,
            content_hash,
            prev_hash,
            rhash,
            recorded_at,
        )

    # -- reads ------------------------------------------------------------------------------

    def latest_version(self, thesis_id: str) -> int | None:
        row = self._db.execute(
            "SELECT MAX(version) AS v FROM records WHERE kind = 'thesis' AND thesis_id = ?",
            (thesis_id,),
        ).fetchone()
        return None if row["v"] is None else int(row["v"])

    def get_thesis(self, thesis_id: str, version: int | None = None) -> Thesis:
        version = version or self.latest_version(thesis_id)
        row = self._db.execute(
            "SELECT payload FROM records WHERE kind = 'thesis' AND thesis_id = ? AND version = ?",
            (thesis_id, version),
        ).fetchone()
        if row is None:
            raise LedgerError(f"unknown thesis {thesis_id} v{version}")
        return Thesis.model_validate(json.loads(row["payload"])["thesis"])

    def records(self) -> Iterator[Record]:
        for row in self._db.execute("SELECT * FROM records ORDER BY seq"):
            yield Record(
                seq=row["seq"],
                kind=row["kind"],
                thesis_id=row["thesis_id"],
                version=row["version"],
                payload=json.loads(row["payload"]),
                content_hash=row["content_hash"],
                prev_hash=row["prev_hash"],
                record_hash=row["record_hash"],
                recorded_at=row["recorded_at"],
            )

    def verify(self) -> None:
        """Recompute every hash. Raises LedgerError on the first broken link."""
        prev = GENESIS_HASH
        for r in self.records():
            if r.prev_hash != prev:
                raise LedgerError(f"chain broken at seq {r.seq}")
            if r.kind == "thesis":
                expected_content = Thesis.model_validate(r.payload["thesis"]).content_hash()
            else:
                expected_content = hashlib.sha256(_canonical(r.payload).encode()).hexdigest()
            if r.content_hash != expected_content:
                raise LedgerError(f"content hash mismatch at seq {r.seq}")
            expected = _record_hash(
                prev, r.kind, r.thesis_id, r.version, r.content_hash, r.recorded_at
            )
            if r.record_hash != expected:
                raise LedgerError(f"record hash mismatch at seq {r.seq}")
            prev = r.record_hash
