from __future__ import annotations

from decimal import Decimal

from tests.conftest import make_thesis
from trading_agents.guardrails import Portfolio, Position, ToolCallStatus, check

OK = {"tc-1": ToolCallStatus(ok=True)}


def _pf(**kw):
    base = {"equity": Decimal(1_000_000), "peak_equity": Decimal(1_000_000), "positions": []}
    base.update(kw)
    return Portfolio(**base)


def test_clean_thesis_passes(thesis):
    assert check(thesis, "IT", _pf(), OK) == []


def test_each_limit(thesis):
    big = make_thesis(position_size_suggestion=Decimal("0.06"))
    assert any("position size" in v for v in check(big, "IT", _pf(), OK))

    it_heavy = _pf(positions=[Position(symbol="A", sector="IT", market_value=Decimal(230_000))])
    assert any("sector IT" in v for v in check(thesis, "IT", it_heavy, OK))

    full = _pf(
        positions=[
            Position(symbol=f"S{i}", sector=f"X{i}", market_value=Decimal(1)) for i in range(8)
        ]
    )
    assert any("swing positions" in v for v in check(thesis, "IT", full, OK))

    tight = make_thesis(target="1300")  # (1300-1250)/(1250-1180) < 1.5
    assert any("reward-to-risk" in v for v in check(tight, "IT", _pf(), OK))

    dd = _pf(equity=Decimal(900_000))
    assert any("drawdown" in v for v in check(thesis, "IT", dd, OK))


def test_evidence_citations(thesis):
    assert any("unknown" in v for v in check(thesis, "IT", _pf(), {}))
    assert any(
        "failed" in v for v in check(thesis, "IT", _pf(), {"tc-1": ToolCallStatus(ok=False)})
    )
    assert any(
        "stale" in v
        for v in check(thesis, "IT", _pf(), {"tc-1": ToolCallStatus(ok=True, stale=True)})
    )
