from __future__ import annotations

from datetime import date, timedelta

import polars as pl

from trading_agents.screener import screen

CR = 10_000_000
START = date(2026, 9, 1)


def _bars(symbol: str, value: float, circuit_days: int = 0, n: int = 25) -> list[dict]:
    return [
        {
            "symbol": symbol,
            "date": START + timedelta(days=i),
            "close": 100.0,
            "traded_value": value,
            "circuit_hit": i >= n - circuit_days,
        }
        for i in range(n)
    ]


def test_filters():
    bars = pl.DataFrame(
        _bars("GOOD", 10 * CR)
        + _bars("THIN", 1 * CR)
        + _bars("SMALLCAP", 10 * CR)
        + _bars("CIRCUIT", 10 * CR, circuit_days=3)
        + _bars("ASM", 10 * CR)
        + _bars("SME", 10 * CR)
        + _bars("NEW", 10 * CR, n=5)
    )
    ref = pl.DataFrame(
        {
            "symbol": ["GOOD", "THIN", "SMALLCAP", "CIRCUIT", "ASM", "SME", "NEW"],
            "market_cap": [
                5000 * CR,
                5000 * CR,
                500 * CR,
                5000 * CR,
                5000 * CR,
                5000 * CR,
                5000 * CR,
            ],
            "is_sme": [False, False, False, False, False, True, False],
            "on_surveillance": [False, False, False, False, True, False, False],
        }
    )
    out = screen(bars, ref, as_of=START + timedelta(days=30))
    assert out["symbol"].to_list() == ["GOOD"]


def test_point_in_time():
    # Liquidity only arrives after as_of; the screener must not see it.
    rows = _bars("LATE", 1 * CR, n=20) + [
        {**r, "date": r["date"] + timedelta(days=20), "traded_value": 50.0 * CR}
        for r in _bars("LATE", 1 * CR, n=20)
    ]
    ref = pl.DataFrame(
        {
            "symbol": ["LATE"],
            "market_cap": [5000.0 * CR],
            "is_sme": [False],
            "on_surveillance": [False],
        }
    )
    bars = pl.DataFrame(rows)
    assert screen(bars, ref, as_of=START + timedelta(days=19)).is_empty()
    assert screen(bars, ref, as_of=START + timedelta(days=45))["symbol"].to_list() == ["LATE"]
