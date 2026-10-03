"""Corporate-action price adjustment (requirements §6).

Raw prices are never modified. Adjusted series are derived on demand and every factor applied
is returned in an adjustment log. Only actions known by `as_of` are applied, so a replay does
not see a split that had not been announced yet.

actions: symbol, ex_date, factor, known_at   (factor = old shares -> new shares; 2-for-1 split
or 1:1 bonus = 2.0; prices before ex_date are divided by the factor)
"""

from __future__ import annotations

from datetime import datetime

import polars as pl


def adjust_prices(
    bars: pl.DataFrame, actions: pl.DataFrame, as_of: datetime
) -> tuple[pl.DataFrame, pl.DataFrame]:
    """Return (adjusted bars, log). bars need symbol, date and OHLC columns plus traded_value."""
    if actions.is_empty():
        return bars, pl.DataFrame(schema={"symbol": pl.String, "ex_date": pl.Date, "factor": pl.Float64})
    known = actions.filter(pl.col("known_at") <= as_of).select("symbol", "ex_date", "factor")
    joined = bars.join(known, on="symbol", how="left").with_columns(
        pl.when(pl.col("date") < pl.col("ex_date")).then(pl.col("factor")).otherwise(1.0).alias("_f")
    )
    cum = joined.group_by("symbol", "date").agg(pl.col("_f").product().alias("cum_factor"))
    out = bars.join(cum, on=["symbol", "date"]).with_columns(
        *[(pl.col(c) / pl.col("cum_factor")).alias(c) for c in ("open", "high", "low", "close") if c in bars.columns]
    )
    return out.drop("cum_factor"), known.sort("symbol", "ex_date")
