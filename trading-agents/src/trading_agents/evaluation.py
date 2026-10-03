"""Graduation gate from paper to real money (requirements §1 success criteria, §9 Phase 3)."""

from __future__ import annotations

import random
import statistics
from collections.abc import Sequence
from datetime import date

from pydantic import BaseModel, ConfigDict

from trading_agents.scoring import ThesisOutcome, scorecard

MIN_CLOSED_THESES = 60
MIN_PAPER_DAYS = 182  # ~6 months of forward paper trading


def bootstrap_mean_ci(
    values: Sequence[float], *, level: float = 0.95, resamples: int = 10_000, seed: int = 0
) -> tuple[float, float]:
    """Percentile bootstrap interval for the mean. Seeded so results are reproducible."""
    if len(values) < 2:
        raise ValueError("need at least two values")
    rng = random.Random(seed)
    n = len(values)
    means = sorted(statistics.fmean(rng.choices(values, k=n)) for _ in range(resamples))
    lo = means[int((1 - level) / 2 * resamples)]
    hi = means[int((1 + level) / 2 * resamples) - 1]
    return lo, hi


class GateResult(BaseModel):
    model_config = ConfigDict(frozen=True)

    passed: bool
    checks: dict[str, bool]
    ci_95: tuple[float, float] | None


def graduation_gate(
    outcomes: Sequence[ThesisOutcome],
    first_day: date,
    last_day: date,
    portfolio_max_drawdown: float,
    benchmark_max_drawdown: float,
) -> GateResult:
    traded = [o for o in outcomes if not o.killed_by_red_team]
    checks = {
        "at_least_60_closed_theses": len(traded) >= MIN_CLOSED_THESES,
        "at_least_6_months_forward": (last_day - first_day).days >= MIN_PAPER_DAYS,
    }
    ci = None
    if len(traded) >= 2:
        card = scorecard(outcomes)
        ci = bootstrap_mean_ci([o.excess_return for o in traded])
        checks["mean_excess_positive_ci_excludes_zero"] = card.mean_excess_return > 0 and ci[0] > 0
        checks["brier_beats_base_rate"] = card.brier < card.base_rate_brier
    else:
        checks["mean_excess_positive_ci_excludes_zero"] = False
        checks["brier_beats_base_rate"] = False
    checks["drawdown_no_worse_than_benchmark"] = portfolio_max_drawdown <= benchmark_max_drawdown
    return GateResult(passed=all(checks.values()), checks=checks, ci_95=ci)
