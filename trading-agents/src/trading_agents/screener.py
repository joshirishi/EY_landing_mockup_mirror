"""Deterministic universe screener for the Equity Swing Agent (requirements §2, §3). No LLM.

Inputs are point-in-time: rows dated after `as_of` are dropped before any filter runs, so a
replay of a past date sees exactly what was known then.

bars:      symbol, date, close, traded_value (₹), circuit_hit (bool)
reference: symbol, market_cap (₹), is_sme (bool), on_surveillance (bool, ASM/GSM)
"""

from __future__ import annotations

from datetime import date

import polars as pl

from trading_agents.config import UniverseFilters


def screen(
    bars: pl.DataFrame, reference: pl.DataFrame, as_of: date, f: UniverseFilters | None = None
) -> pl.DataFrame:
    """Return the eligible universe with the metrics each filter used, sorted by liquidity."""
    f = f or UniverseFilters()
    window = max(f.median_window_days, f.circuit_window_sessions)

    recent = (
        bars.filter(pl.col("date") <= as_of)
        .sort("date")
        .group_by("symbol", maintain_order=True)
        .tail(window)
    )
    metrics = recent.group_by("symbol").agg(
        pl.col("traded_value").tail(f.median_window_days).median().alias("median_traded_value"),
        pl.col("traded_value").tail(f.median_window_days).count().alias("sessions"),
        pl.col("circuit_hit").tail(f.circuit_window_sessions).sum().alias("circuit_hits"),
        pl.col("close").last().alias("last_close"),
    )

    out = metrics.join(reference, on="symbol", how="inner").filter(
        pl.col("sessions") >= f.median_window_days,
        pl.col("median_traded_value") >= float(f.min_median_traded_value_inr),
        pl.col("market_cap") >= float(f.min_market_cap_inr),
        pl.col("circuit_hits") <= f.max_circuit_hits,
    )
    if f.exclude_surveillance:
        out = out.filter(~pl.col("on_surveillance"))
    if f.exclude_sme:
        out = out.filter(~pl.col("is_sme"))
    return out.sort("median_traded_value", descending=True)
