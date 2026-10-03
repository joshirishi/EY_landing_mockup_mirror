"""Pre-registered thesis schema (requirements §4).

A thesis missing any required field, or with inconsistent prices, is rejected at construction.
The content hash is computed over the canonical JSON of every field except the hash itself,
so any later edit to a stored thesis is detectable.
"""

from __future__ import annotations

import hashlib
import json
from datetime import date, datetime, timedelta, timezone
from decimal import Decimal
from enum import StrEnum
from typing import Annotated, Self

from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator

IST = timezone(timedelta(hours=5, minutes=30), name="IST")

Price = Annotated[Decimal, Field(gt=0)]
Probability = Annotated[float, Field(ge=0.0, le=1.0)]
NonEmptyStr = Annotated[str, Field(min_length=1)]


class Direction(StrEnum):
    LONG = "long"
    SHORT = "short"


class Exchange(StrEnum):
    NSE = "NSE"
    BSE = "BSE"
    NYSE = "NYSE"
    NASDAQ = "NASDAQ"
    AMFI = "AMFI"  # mutual fund schemes


class RedTeamVerdict(StrEnum):
    PENDING = "pending"
    SURVIVED = "survived"
    KILLED = "killed"


class _Frozen(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")


class EntryZone(_Frozen):
    low: Price
    high: Price

    @model_validator(mode="after")
    def _ordered(self) -> Self:
        if self.low > self.high:
            raise ValueError("entry_zone.low must be <= entry_zone.high")
        return self

    @property
    def mid(self) -> Decimal:
        return (self.low + self.high) / 2


class Catalyst(_Frozen):
    description: NonEmptyStr
    expected_date: date


class Evidence(_Frozen):
    """A numeric fact. Every fact must cite the tool-call result it came from (§8)."""

    fact: NonEmptyStr
    tool_call_id: NonEmptyStr


class Thesis(_Frozen):
    thesis_id: NonEmptyStr
    agent_id: NonEmptyStr
    model_version: NonEmptyStr
    prompt_version: NonEmptyStr
    created_at: datetime

    instrument: NonEmptyStr
    exchange: Exchange
    direction: Direction
    entry_zone: EntryZone
    target: Price
    stop: Price
    horizon_days: Annotated[int, Field(gt=0, le=130)]  # trading days
    catalyst: Catalyst
    evidence: Annotated[list[Evidence], Field(min_length=1)]
    p_target: Probability
    expected_excess_return: Decimal  # fraction vs. benchmark, after costs (0.031 = +3.1%)
    falsifiers: Annotated[list[NonEmptyStr], Field(min_length=1)]
    position_size_suggestion: Annotated[Decimal, Field(gt=0, le=1)]  # fraction of portfolio

    red_team_verdict: RedTeamVerdict = RedTeamVerdict.PENDING
    red_team_objections: list[str] = Field(default_factory=list)

    data_snapshot_ids: Annotated[list[NonEmptyStr], Field(min_length=1)]

    @field_validator("created_at")
    @classmethod
    def _to_ist(cls, v: datetime) -> datetime:
        if v.tzinfo is None:
            raise ValueError("created_at must be timezone-aware")
        return v.astimezone(IST)

    @model_validator(mode="after")
    def _price_geometry(self) -> Self:
        z = self.entry_zone
        if self.direction is Direction.LONG:
            if not self.stop < z.low:
                raise ValueError("long thesis: stop must be below entry_zone.low")
            if not self.target > z.high:
                raise ValueError("long thesis: target must be above entry_zone.high")
        else:
            if not self.stop > z.high:
                raise ValueError("short thesis: stop must be above entry_zone.high")
            if not self.target < z.low:
                raise ValueError("short thesis: target must be below entry_zone.low")
        return self

    @property
    def reward_to_risk(self) -> Decimal:
        """Reward-to-risk measured from the middle of the entry zone."""
        mid = self.entry_zone.mid
        return abs(self.target - mid) / abs(mid - self.stop)

    def canonical_json(self) -> str:
        return json.dumps(
            self.model_dump(mode="json"), sort_keys=True, separators=(",", ":"), ensure_ascii=False
        )

    def content_hash(self) -> str:
        return hashlib.sha256(self.canonical_json().encode("utf-8")).hexdigest()
