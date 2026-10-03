"""Hard limits enforced in code, outside the LLM (requirements §8).

`check()` returns every violation rather than stopping at the first, so the owner digest and the
kill log can show all reasons a thesis was blocked.
"""

from __future__ import annotations

from collections.abc import Mapping, Set
from decimal import Decimal

from pydantic import BaseModel, ConfigDict

from trading_agents.config import Guardrails
from trading_agents.thesis import Thesis


class Position(BaseModel):
    model_config = ConfigDict(frozen=True)

    symbol: str
    sector: str
    market_value: Decimal


class Portfolio(BaseModel):
    model_config = ConfigDict(frozen=True)

    equity: Decimal  # current total portfolio value
    peak_equity: Decimal
    positions: list[Position] = []

    @property
    def drawdown(self) -> Decimal:
        return Decimal(0) if self.peak_equity <= 0 else 1 - self.equity / self.peak_equity


class ToolCallStatus(BaseModel):
    model_config = ConfigDict(frozen=True)

    ok: bool
    stale: bool = False


def check(
    thesis: Thesis,
    sector: str,
    portfolio: Portfolio,
    tool_calls: Mapping[str, ToolCallStatus],
    g: Guardrails | None = None,
    *,
    swing_symbols: Set[str] | None = None,
) -> list[str]:
    """Return human-readable violations; an empty list means the thesis may go to the owner."""
    g = g or Guardrails()
    v: list[str] = []

    if portfolio.drawdown >= g.drawdown_pause_pct:
        v.append(
            f"portfolio drawdown {portfolio.drawdown:.1%} >= {g.drawdown_pause_pct:.0%}: "
            "new suggestions paused until owner review"
        )

    size = thesis.position_size_suggestion
    if size > g.max_position_pct:
        v.append(f"position size {size:.1%} exceeds max {g.max_position_pct:.0%}")

    sector_value = sum(
        (p.market_value for p in portfolio.positions if p.sector == sector), Decimal(0)
    )
    sector_after = sector_value / portfolio.equity + size
    if sector_after > g.max_sector_pct:
        v.append(f"sector {sector} would reach {sector_after:.1%}, max {g.max_sector_pct:.0%}")

    open_swing = [
        p for p in portfolio.positions if swing_symbols is None or p.symbol in swing_symbols
    ]
    if len(open_swing) >= g.max_open_swing_positions:
        v.append(f"{len(open_swing)} swing positions open, max {g.max_open_swing_positions}")

    if thesis.reward_to_risk < g.min_reward_to_risk:
        v.append(f"reward-to-risk {thesis.reward_to_risk:.2f} below {g.min_reward_to_risk}")

    for e in thesis.evidence:
        status = tool_calls.get(e.tool_call_id)
        if status is None:
            v.append(f"evidence cites unknown tool call {e.tool_call_id!r}")
        elif not status.ok:
            v.append(f"evidence cites failed tool call {e.tool_call_id!r}")
        elif status.stale:
            v.append(f"evidence cites stale data from {e.tool_call_id!r}")

    return v
