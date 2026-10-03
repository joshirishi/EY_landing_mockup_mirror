"""Thesis outcomes, per-thesis scores and agent scorecards (requirements §5).

Per-thesis score:

    S = w1 * R_excess / sigma_h  -  w2 * Brier(p_target, y)  +  w3 * CatalystHit  -  w4 * DD_max

sigma_h is the instrument's 20-day daily volatility scaled to the thesis horizon
(sigma_20d * sqrt(horizon_days)), so the ratio compares like with like over the holding period.
"""

from __future__ import annotations

import math
import statistics
from collections.abc import Sequence
from decimal import Decimal

from pydantic import BaseModel, ConfigDict

from trading_agents.config import ScoringWeights
from trading_agents.thesis import Direction, Thesis


class Bar(BaseModel):
    model_config = ConfigDict(frozen=True)

    high: Decimal
    low: Decimal
    close: Decimal


class Exit(BaseModel):
    model_config = ConfigDict(frozen=True)

    price: Decimal
    reason: str  # "target" | "stop" | "horizon"
    sessions_held: int
    target_hit: bool
    max_drawdown: float  # worst adverse move from entry, as a positive fraction


def simulate_exit(thesis: Thesis, entry: Decimal, bars: Sequence[Bar]) -> Exit:
    """Walk daily bars after entry. If target and stop fall in the same bar, assume the stop
    hit first: the conservative choice when intraday order is unknown."""
    if not bars:
        raise ValueError("need at least one bar after entry")
    long = thesis.direction is Direction.LONG
    worst = Decimal(0)
    window = bars[: thesis.horizon_days]
    for i, b in enumerate(window, start=1):
        adverse = (entry - b.low) / entry if long else (b.high - entry) / entry
        worst = max(worst, adverse)
        stop_hit = b.low <= thesis.stop if long else b.high >= thesis.stop
        target_hit = b.high >= thesis.target if long else b.low <= thesis.target
        if stop_hit:
            return Exit(
                price=thesis.stop,
                reason="stop",
                sessions_held=i,
                target_hit=False,
                max_drawdown=float(worst),
            )
        if target_hit:
            return Exit(
                price=thesis.target,
                reason="target",
                sessions_held=i,
                target_hit=True,
                max_drawdown=float(worst),
            )
    return Exit(
        price=window[-1].close,
        reason="horizon",
        sessions_held=len(window),
        target_hit=False,
        max_drawdown=float(worst),
    )


def brier(p: float, y: int) -> float:
    return (p - y) ** 2


class ThesisOutcome(BaseModel):
    model_config = ConfigDict(frozen=True)

    thesis_id: str
    p_target: float
    target_hit: bool
    excess_return: float  # after costs, vs. benchmark over the same window
    sigma_20d: float  # daily volatility
    horizon_days: int
    catalyst_hit: bool
    max_drawdown: float
    killed_by_red_team: bool = False


def thesis_score(o: ThesisOutcome, w: ScoringWeights | None = None) -> float:
    w = w or ScoringWeights()
    sigma_h = o.sigma_20d * math.sqrt(o.horizon_days)
    if sigma_h <= 0:
        raise ValueError("volatility must be positive")
    return (
        w.w1_risk_adjusted_excess * o.excess_return / sigma_h
        - w.w2_brier * brier(o.p_target, int(o.target_hit))
        + w.w3_catalyst_hit * int(o.catalyst_hit)
        - w.w4_max_drawdown * o.max_drawdown
    )


class Scorecard(BaseModel):
    model_config = ConfigDict(frozen=True)

    n: int
    mean_excess_return: float
    sortino: float | None
    hit_rate: float
    avg_win_over_avg_loss: float | None
    brier: float
    base_rate_brier: float
    red_team_kill_share: float
    badges_5pct: int
    badges_10pct: int


def sortino(returns: Sequence[float], target: float = 0.0) -> float | None:
    if len(returns) < 2:
        return None
    downside = [min(0.0, r - target) ** 2 for r in returns]
    dd = math.sqrt(sum(downside) / len(returns))
    return None if dd == 0 else (statistics.fmean(returns) - target) / dd


def scorecard(outcomes: Sequence[ThesisOutcome]) -> Scorecard:
    """Agent-level scorecard over closed theses. Red-team kills count toward the kill share
    only; they were never traded, so they are excluded from return statistics."""
    if not outcomes:
        raise ValueError("no outcomes")
    traded = [o for o in outcomes if not o.killed_by_red_team]
    if not traded:
        raise ValueError("every thesis was killed; nothing to score")
    r = [o.excess_return for o in traded]
    wins = [x for x in r if x > 0]
    losses = [-x for x in r if x < 0]
    hit_rate = sum(o.target_hit for o in traded) / len(traded)
    return Scorecard(
        n=len(traded),
        mean_excess_return=statistics.fmean(r),
        sortino=sortino(r),
        hit_rate=hit_rate,
        avg_win_over_avg_loss=(
            statistics.fmean(wins) / statistics.fmean(losses) if wins and losses else None
        ),
        brier=statistics.fmean(brier(o.p_target, int(o.target_hit)) for o in traded),
        # A naive forecaster that always predicts the realised hit rate.
        base_rate_brier=hit_rate * (1 - hit_rate),
        red_team_kill_share=sum(o.killed_by_red_team for o in outcomes) / len(outcomes),
        badges_5pct=sum(x >= 0.05 for x in r),
        badges_10pct=sum(x >= 0.10 for x in r),
    )


def kill_precision(killed_would_have_scored: Sequence[float]) -> float | None:
    """Red team is rewarded for correct kills: a kill is correct if the killed thesis would
    have scored below zero (§5)."""
    if not killed_would_have_scored:
        return None
    return sum(s < 0 for s in killed_would_have_scored) / len(killed_would_have_scored)
