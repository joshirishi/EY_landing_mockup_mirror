"""Raw file store (requirements §6): files are kept exactly as downloaded.

Each file is recorded in a manifest with its SHA-256 and the time it became publicly known.
Re-saving identical bytes is a no-op; saving different bytes under the same name is an error,
because a silent overwrite would break replay.
"""

from __future__ import annotations

import hashlib
import json
from dataclasses import asdict, dataclass
from datetime import datetime
from pathlib import Path


class RawStoreError(Exception):
    pass


@dataclass(frozen=True)
class RawFile:
    dataset: str
    name: str
    sha256: str
    known_at: str  # ISO-8601, timezone-aware
    path: str


class RawStore:
    def __init__(self, root: str | Path) -> None:
        self.root = Path(root)
        self._manifest = self.root / "manifest.jsonl"

    def entries(self) -> list[RawFile]:
        if not self._manifest.exists():
            return []
        with self._manifest.open(encoding="utf-8") as fh:
            return [RawFile(**json.loads(line)) for line in fh if line.strip()]

    def save(self, dataset: str, name: str, content: bytes, known_at: datetime) -> RawFile:
        if known_at.tzinfo is None:
            raise RawStoreError("known_at must be timezone-aware")
        digest = hashlib.sha256(content).hexdigest()
        for e in self.entries():
            if e.dataset == dataset and e.name == name:
                if e.sha256 == digest:
                    return e
                raise RawStoreError(f"{dataset}/{name} already stored with different content")
        rel = Path(dataset) / name
        path = self.root / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(content)
        entry = RawFile(dataset, name, digest, known_at.isoformat(), str(rel))
        with self._manifest.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(asdict(entry), sort_keys=True) + "\n")
        return entry

    def read(self, dataset: str, name: str) -> bytes:
        for e in self.entries():
            if e.dataset == dataset and e.name == name:
                data = (self.root / e.path).read_bytes()
                if hashlib.sha256(data).hexdigest() != e.sha256:
                    raise RawStoreError(f"{dataset}/{name} was modified after it was stored")
                return data
        raise RawStoreError(f"{dataset}/{name} not found")
