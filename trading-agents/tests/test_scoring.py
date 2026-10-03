from __future__ import annotations

import math
from datetime import date
from decimal import Decimal

import pytest

from tests.conftest import make_thesis
from trading_agents.evaluation import bootstrap_mean_ci, graduation_gate
from trading_agents.scoring import (
    Bar,
    ThesisOutcome,
    brier,
    kill_precision,
    scorecard,
    simulate_exit,
    thesis_score,
)


def B(h, lo, c):
    return Bar(high=Decimal(h), low=Decimal(lo), close=Decimal(c))


def test_exit_target_stop_horizon(thesis):
    e = simulate_exit(thesis, Decimal(1250), [B(1300, 1230, 1290), B(1390, 1280, 1385)])
    assert (e.reason, e.target_hit, e.sessions_held) == ("target", True, 2)
    assert e.max_drawdown == pytest.approx(20 / 1250)

    e = simulate_exit(thesis, Decimal(1250), [B(1390, 1170, 1200)])  # both in one bar
    assert e.reason == "stop" and not e.target_hit

    flat = [B(1260, 1240, 1255)] * 15
    e = simulate_exit(thesis, Decimal(1250), flat)
    assert (e.reason, e.sessions_held, e.price) == ("horizon", 10, Decimal(1255))


def test_exit_short():
    t = make_thesis(direction="short", target="1100", stop="1300")
    e = simulate_exit(t, Decimal(1250), [B(1260, 1090, 1100)])
    assert e.reason == "target"


def _o(r, hit=True, p=0.6, killed=False, catalyst=True):
    return ThesisOutcome(
        thesis_id="x",
        p_target=p,
        target_hit=hit,
        excess_return=r,
        sigma_20d=0.02,
        horizon_days=10,
        catalyst_hit=catalyst,
        max_drawdown=0.03,
        killed_by_red_team=killed,
    )


def test_thesis_score_formula():
    o = _o(0.05, hit=True, p=0.6)
    expected = 0.5 * 0.05 / (0.02 * math.sqrt(10)) - 0.25 * 0.16 + 0.15 - 0.10 * 0.03
    assert thesis_score(o) == pytest.approx(expected)
    assert brier(0.6, 1) == pytest.approx(0.16)


def test_scorecard():
    outs = [_o(0.06), _o(0.11), _o(-0.03, hit=False, p=0.3), _o(0.0, killed=True)]
    c = scorecard(outs)
    assert c.n == 3
    assert c.hit_rate == pytest.approx(2 / 3)
    assert c.red_team_kill_share == 0.25
    assert (c.badges_5pct, c.badges_10pct) == (2, 1)
    assert c.avg_win_over_avg_loss == pytest.approx(0.085 / 0.03)
    assert c.brier < c.base_rate_brier


def test_kill_precision():
    assert kill_precision([-1.0, 0.5, -0.1, -0.2]) == 0.75
    assert kill_precision([]) is None


def test_bootstrap_ci_deterministic():
    vals = [0.01, 0.02, 0.03, -0.01, 0.015] * 12
    lo, hi = bootstrap_mean_ci(vals)
    assert lo < sum(vals) / len(vals) < hi
    assert (lo, hi) == bootstrap_mean_ci(vals)


def test_graduation_gate():
    good = [_o(0.02 + 0.001 * (i % 5), hit=i % 3 != 0, p=0.66 if i % 3 else 0.2) for i in range(60)]
    res = graduation_gate(good, date(2026, 1, 1), date(2026, 7, 15), 0.05, 0.08)
    assert res.passed, res.checks

    short = graduation_gate(good[:40], date(2026, 1, 1), date(2026, 3, 1), 0.05, 0.08)
    assert not short.passed
    assert not short.checks["at_least_60_closed_theses"]
    assert not short.checks["at_least_6_months_forward"]
