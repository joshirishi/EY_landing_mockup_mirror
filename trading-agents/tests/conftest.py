from __future__ import annotations

from datetime import date, datetime
from decimal import Decimal
from typing import Any

import pytest

from trading_agents.thesis import IST, Thesis


def make_thesis(**overrides: Any) -> Thesis:
    base: dict[str, Any] = {
        "thesis_id": "eq-2026-09-26-007",
        "agent_id": "equity-swing",
        "model_version": "model-x",
        "prompt_version": "p1",
        "created_at": datetime(2026, 9, 26, 18, 40, tzinfo=IST),
        "instrument": "XYZ",
        "exchange": "NSE",
        "direction": "long",
        "entry_zone": {"low": "1240", "high": "1260"},
        "target": "1380",
        "stop": "1180",
        "horizon_days": 10,
        "catalyst": {"description": "Q2 results", "expected_date": date(2026, 10, 14)},
        "evidence": [{"fact": "20-day volume 1.8x the 90-day average", "tool_call_id": "tc-1"}],
        "p_target": 0.45,
        "expected_excess_return": Decimal("0.031"),
        "falsifiers": ["Management guidance cut"],
        "position_size_suggestion": Decimal("0.04"),
        "data_snapshot_ids": ["snap-2026-09-26"],
    }
    base.update(overrides)
    return Thesis.model_validate(base)


@pytest.fixture
def thesis() -> Thesis:
    return make_thesis()
