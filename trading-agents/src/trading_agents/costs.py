"""Indian cash-equity (delivery) cost and tax model (requirements §2, §5, §8).

Rates change with budgets and exchange circulars, so every rate sits in a schedule keyed by
financial year. The FY2025-26 defaults below are approximate and must be checked against
current NSE/SEBI circulars, your broker's tariff and a CA before scores are trusted.
"""

from __future__ import annotations

from decimal import Decimal

from pydantic import BaseModel, ConfigDict

from trading_agents.thesis import Direction

BPS = Decimal("0.0001")


class CostSchedule(BaseModel):
    model_config = ConfigDict(frozen=True)

    financial_year: str
    brokerage_pct: Decimal = Decimal("0")  # many discount brokers charge 0 on delivery
    brokerage_cap_inr: Decimal = Decimal("20")  # per executed order
    stt_pct: Decimal = Decimal("0.001")  # delivery: 0.1% on buy and sell
    exchange_txn_pct: Decimal = Decimal("0.0000297")  # NSE cash
    sebi_fee_pct: Decimal = Decimal("0.000001")  # ₹10 per crore
    stamp_duty_buy_pct: Decimal = Decimal("0.00015")  # 0.015% on the buy side only
    gst_pct: Decimal = Decimal("0.18")  # on brokerage + exchange + SEBI fees
    dp_charge_per_sell_inr: Decimal = Decimal("15.93")  # depository charge incl. GST, per scrip
    slippage_bps_per_side: Decimal = Decimal("10")


class TaxSchedule(BaseModel):
    model_config = ConfigDict(frozen=True)

    financial_year: str
    # Listed equity held under 12 months. Frequent trading may instead be taxed as business
    # income at slab rates (§8): override this rate per FY once a CA has confirmed treatment.
    short_term_rate: Decimal = Decimal("0.20")
    cess_pct: Decimal = Decimal("0.04")


COST_SCHEDULES: dict[str, CostSchedule] = {"FY2025-26": CostSchedule(financial_year="FY2025-26")}
TAX_SCHEDULES: dict[str, TaxSchedule] = {"FY2025-26": TaxSchedule(financial_year="FY2025-26")}


class TradeCosts(BaseModel):
    model_config = ConfigDict(frozen=True)

    brokerage: Decimal
    stt: Decimal
    exchange_txn: Decimal
    sebi_fee: Decimal
    stamp_duty: Decimal
    gst: Decimal
    dp_charge: Decimal
    slippage: Decimal

    @property
    def total(self) -> Decimal:
        return (
            self.brokerage
            + self.stt
            + self.exchange_txn
            + self.sebi_fee
            + self.stamp_duty
            + self.gst
            + self.dp_charge
            + self.slippage
        )


def _brokerage(value: Decimal, s: CostSchedule) -> Decimal:
    return min(value * s.brokerage_pct, s.brokerage_cap_inr)


def round_trip_costs(
    quantity: int,
    entry: Decimal,
    exit_: Decimal,
    s: CostSchedule,
    direction: Direction = Direction.LONG,
) -> TradeCosts:
    """All-in charges for opening and closing one cash-equity position, in ₹."""
    if quantity <= 0:
        raise ValueError("quantity must be positive")
    buy_px, sell_px = (entry, exit_) if direction is Direction.LONG else (exit_, entry)
    buy_value, sell_value = buy_px * quantity, sell_px * quantity
    turnover = buy_value + sell_value

    brokerage = _brokerage(buy_value, s) + _brokerage(sell_value, s)
    exchange_txn = turnover * s.exchange_txn_pct
    sebi_fee = turnover * s.sebi_fee_pct
    return TradeCosts(
        brokerage=brokerage,
        stt=turnover * s.stt_pct,
        exchange_txn=exchange_txn,
        sebi_fee=sebi_fee,
        stamp_duty=buy_value * s.stamp_duty_buy_pct,
        gst=(brokerage + exchange_txn + sebi_fee) * s.gst_pct,
        dp_charge=s.dp_charge_per_sell_inr,
        slippage=turnover * s.slippage_bps_per_side * BPS,
    )


def net_return(
    quantity: int,
    entry: Decimal,
    exit_: Decimal,
    s: CostSchedule,
    direction: Direction = Direction.LONG,
) -> Decimal:
    """Return on capital deployed, after all costs, as a fraction."""
    sign = 1 if direction is Direction.LONG else -1
    gross = sign * (exit_ - entry) * quantity
    costs = round_trip_costs(quantity, entry, exit_, s, direction).total
    return (gross - costs) / (entry * quantity)


def after_tax_return(pre_tax: Decimal, t: TaxSchedule) -> Decimal:
    """Apply short-term tax to a gain. Losses are left untaxed (set-off is handled per FY)."""
    if pre_tax <= 0:
        return pre_tax
    return pre_tax * (1 - t.short_term_rate * (1 + t.cess_pct))
