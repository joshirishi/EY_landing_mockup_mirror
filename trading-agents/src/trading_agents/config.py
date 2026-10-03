"""Tunable parameters. Defaults are the starting values from the requirements doc.

Everything here is a starting value to tune quarterly (requirements §9), so it lives in
config rather than in code. Secrets come from the environment via pydantic-settings.
"""

from __future__ import annotations

from decimal import Decimal

from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings, SettingsConfigDict

CRORE = Decimal("10000000")


class UniverseFilters(BaseModel):
    """Equity Swing Agent universe filters (requirements §2)."""

    min_median_traded_value_inr: Decimal = Field(default=5 * CRORE)
    median_window_days: int = 20
    min_market_cap_inr: Decimal = Field(default=1000 * CRORE)
    exclude_surveillance: bool = True  # ASM/GSM lists
    exclude_sme: bool = True
    max_circuit_hits: int = 2  # excluded at 3 or more...
    circuit_window_sessions: int = 10  # ...of the last 10 sessions


class Guardrails(BaseModel):
    """Hard portfolio limits, enforced in code outside the LLM (requirements §8)."""

    max_position_pct: Decimal = Decimal("0.05")
    max_sector_pct: Decimal = Decimal("0.25")
    max_open_swing_positions: int = 8
    min_reward_to_risk: Decimal = Decimal("1.5")
    drawdown_pause_pct: Decimal = Decimal("0.10")


class ScoringWeights(BaseModel):
    """Per-thesis composite score weights (requirements §5)."""

    w1_risk_adjusted_excess: float = 0.5
    w2_brier: float = 0.25
    w3_catalyst_hit: float = 0.15
    w4_max_drawdown: float = 0.10


class Settings(BaseSettings):
    """Process-wide settings. Secrets are read from the environment or a .env file."""

    model_config = SettingsConfigDict(env_prefix="TA_", env_file=".env", extra="ignore")

    anthropic_api_key: str | None = None
    ledger_path: str = "data/ledger.sqlite"
    universe: UniverseFilters = UniverseFilters()
    guardrails: Guardrails = Guardrails()
    scoring: ScoringWeights = ScoringWeights()
