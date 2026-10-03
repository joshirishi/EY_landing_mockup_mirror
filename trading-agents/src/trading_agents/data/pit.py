"""Point-in-time tables (requirements §6).

Every row carries `known_at`, the moment it became publicly known. A query takes an `as_of`
cutoff and sees only rows known by then, keeping the latest-known version of each key, so a
restated figure replaces an earlier one only from the moment of the restatement.

Rows are stored as Parquet parts under `<root>/<dataset>/part-<n>.parquet` and are never
rewritten. `snapshot_id` is a hash of the parts visible at `as_of`; log it with each thesis
(`data_snapshot_ids`) so the exact inputs can be replayed.
"""

from __future__ import annotations

import hashlib
from collections.abc import Sequence
from datetime import datetime
from pathlib import Path

import polars as pl

KNOWN_AT = "known_at"


class PitError(Exception):
    pass


class PitTable:
    def __init__(self, root: str | Path, dataset: str, key: Sequence[str]) -> None:
        self.dir = Path(root) / dataset
        self.dataset = dataset
        self.key = list(key)

    def _parts(self) -> list[Path]:
        return sorted(self.dir.glob("part-*.parquet"))

    def append(self, rows: pl.DataFrame) -> Path:
        missing = {*self.key, KNOWN_AT} - set(rows.columns)
        if missing:
            raise PitError(f"{self.dataset}: missing columns {sorted(missing)}")
        if rows.schema[KNOWN_AT] != pl.Datetime("us", "UTC"):
            raise PitError(f"{self.dataset}: known_at must be Datetime[us, UTC]")
        self.dir.mkdir(parents=True, exist_ok=True)
        path = self.dir / f"part-{len(self._parts()):06d}.parquet"
        rows.write_parquet(path)
        return path

    def _visible_parts(self, as_of: datetime) -> list[Path]:
        # A part is visible if any of its rows is known by as_of.
        return [
            p
            for p in self._parts()
            if pl.scan_parquet(p).select(pl.col(KNOWN_AT).min()).collect().item() <= as_of
        ]

    def query(self, as_of: datetime) -> pl.DataFrame:
        if as_of.tzinfo is None:
            raise PitError("as_of must be timezone-aware")
        parts = self._visible_parts(as_of)
        if not parts:
            return pl.DataFrame()
        df = pl.concat([pl.read_parquet(p) for p in parts], how="vertical_relaxed")
        return (
            df.filter(pl.col(KNOWN_AT) <= as_of)
            .sort([*self.key, KNOWN_AT])
            .unique(subset=self.key, keep="last", maintain_order=True)
        )

    def snapshot_id(self, as_of: datetime) -> str:
        """Stable id for what `query(as_of)` can see: hash of visible parts' content."""
        h = hashlib.sha256(f"{self.dataset}|{as_of.isoformat()}".encode())
        for p in self._visible_parts(as_of):
            h.update(p.name.encode())
            h.update(hashlib.sha256(p.read_bytes()).digest())
        return f"{self.dataset}@{h.hexdigest()[:16]}"
