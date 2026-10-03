from __future__ import annotations

from decimal import Decimal

import pytest

from trading_agents.costs import (
    COST_SCHEDULES,
    TAX_SCHEDULES,
    after_tax_return,
    net_return,
    round_trip_costs,
)
from trading_agents.thesis import Direction

S = COST_SCHEDULES["FY2025-26"]


def test_round_trip_components():
    c = round_trip_costs(100, Decimal("1000"), Decimal("1100"), S)
    buy, sell = Decimal(100_000), Decimal(110_000)
    turnover = buy + sell
    assert c.brokerage == 0
    assert c.stt == turnover * Decimal("0.001")  # 210
    assert c.stamp_duty == buy * Decimal("0.00015")  # 15
    assert c.slippage == turnover * Decimal("0.001")  # 10 bps per side
    assert c.gst == (c.exchange_txn + c.sebi_fee) * Decimal("0.18")
    # 210 STT + 15 stamp + 210 slippage + 6.24 exchange + 0.21 SEBI + 1.16 GST + 15.93 DP
    assert c.total == pytest.approx(Decimal("458.54"), abs=Decimal("0.01"))


def test_brokerage_cap():
    s = S.model_copy(update={"brokerage_pct": Decimal("0.0003")})
    c = round_trip_costs(1000, Decimal("1000"), Decimal("1000"), s)
    assert c.brokerage == Decimal(40)  # ₹20 cap on each side


def test_net_return_long_and_short():
    gross_long = net_return(100, Decimal("1000"), Decimal("1100"), S)
    assert Decimal("0.09") < gross_long < Decimal("0.10")
    short = net_return(100, Decimal("1000"), Decimal("900"), S, Direction.SHORT)
    assert Decimal("0.09") < short < Decimal("0.10")


def test_after_tax():
    t = TAX_SCHEDULES["FY2025-26"]
    assert after_tax_return(Decimal("0.10"), t) == Decimal("0.10") * (1 - Decimal("0.208"))
    assert after_tax_return(Decimal("-0.05"), t) == Decimal("-0.05")
