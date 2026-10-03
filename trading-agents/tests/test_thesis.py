from __future__ import annotations

from datetime import datetime
from decimal import Decimal

import pytest
from pydantic import ValidationError

from tests.conftest import make_thesis


def test_valid_thesis_and_reward_to_risk(thesis):
    assert thesis.entry_zone.mid == Decimal("1250")
    # (1380 - 1250) / (1250 - 1180) = 130 / 70
    assert thesis.reward_to_risk == Decimal(130) / Decimal(70)


def test_created_at_normalised_to_ist():
    t = make_thesis(created_at=datetime.fromisoformat("2026-09-26T13:10:00+00:00"))
    assert t.created_at.hour == 18 and t.created_at.minute == 40


@pytest.mark.parametrize(
    "overrides",
    [
        {"created_at": datetime(2026, 9, 26, 18, 40)},  # naive timestamp
        {"evidence": []},
        {"falsifiers": []},
        {"data_snapshot_ids": []},
        {"p_target": 1.2},
        {"stop": "1250"},  # stop inside entry zone
        {"target": "1250"},  # target inside entry zone
        {"entry_zone": {"low": "1300", "high": "1200"}},
        {"evidence": [{"fact": "x", "tool_call_id": ""}]},
        {"unexpected_field": 1},
    ],
)
def test_rejects_invalid(overrides):
    with pytest.raises(ValidationError):
        make_thesis(**overrides)


def test_short_geometry():
    t = make_thesis(direction="short", target="1100", stop="1300")
    assert t.reward_to_risk == Decimal(150) / Decimal(50)
    with pytest.raises(ValidationError):
        make_thesis(direction="short")  # long-shaped prices


def test_hash_is_stable_and_sensitive(thesis):
    assert thesis.content_hash() == make_thesis().content_hash()
    assert thesis.content_hash() != make_thesis(p_target=0.46).content_hash()
