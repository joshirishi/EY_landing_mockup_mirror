from __future__ import annotations

from datetime import UTC, date, datetime, timedelta
from decimal import Decimal

import polars as pl
import pytest

from trading_agents.data.adjust import adjust_prices
from trading_agents.data.amfi import parse_nav_all
from trading_agents.data.pit import PitError, PitTable
from trading_agents.data.raw import RawStore, RawStoreError
from trading_agents.screener import screen

T0 = datetime(2026, 9, 1, 12, tzinfo=UTC)


def _ts(rows: list[datetime]) -> pl.Series:
    return pl.Series("known_at", rows, dtype=pl.Datetime("us", "UTC"))


def test_raw_store_immutability(tmp_path):
    s = RawStore(tmp_path)
    e = s.save("bhavcopy", "2026-09-01.csv", b"a,b\n1,2\n", T0)
    assert s.save("bhavcopy", "2026-09-01.csv", b"a,b\n1,2\n", T0) == e  # idempotent
    assert len(s.entries()) == 1
    with pytest.raises(RawStoreError, match="different content"):
        s.save("bhavcopy", "2026-09-01.csv", b"changed", T0)
    with pytest.raises(RawStoreError, match="timezone"):
        s.save("bhavcopy", "x", b"", datetime(2026, 9, 1))
    (tmp_path / e.path).write_bytes(b"tampered")
    with pytest.raises(RawStoreError, match="modified"):
        s.read("bhavcopy", "2026-09-01.csv")


def test_pit_hides_future_and_uses_latest_known(tmp_path):
    t = PitTable(tmp_path, "fundamentals", key=["symbol", "period"])
    t.append(
        pl.DataFrame({"symbol": ["A"], "period": ["Q1"], "eps": [10.0], "known_at": _ts([T0])})
    )
    t.append(
        pl.DataFrame(
            {
                "symbol": ["A"],
                "period": ["Q1"],
                "eps": [9.0],  # restatement
                "known_at": _ts([T0 + timedelta(days=30)]),
            }
        )
    )
    before, after = T0 + timedelta(days=1), T0 + timedelta(days=31)
    assert t.query(before)["eps"].to_list() == [10.0]
    assert t.query(after)["eps"].to_list() == [9.0]
    assert t.query(T0 - timedelta(days=1)).is_empty()


def test_pit_validation(tmp_path):
    t = PitTable(tmp_path, "d", key=["k"])
    with pytest.raises(PitError, match="missing"):
        t.append(pl.DataFrame({"k": [1]}))
    with pytest.raises(PitError, match="Datetime"):
        t.append(pl.DataFrame({"k": [1], "known_at": [T0.replace(tzinfo=None)]}))
    with pytest.raises(PitError, match="timezone"):
        t.query(datetime(2026, 1, 1))


def test_snapshot_id_is_replayable(tmp_path):
    t = PitTable(tmp_path, "prices", key=["symbol", "date"])
    row = {"symbol": ["A"], "date": [date(2026, 9, 1)], "close": [100.0]}
    t.append(pl.DataFrame({**row, "known_at": _ts([T0])}))
    as_of = T0 + timedelta(days=1)
    sid, df = t.snapshot_id(as_of), t.query(as_of)
    # Later data arrives; the replay of the earlier date must be unchanged.
    t.append(
        pl.DataFrame(
            {
                "symbol": ["A"],
                "date": [date(2026, 9, 2)],
                "close": [101.0],
                "known_at": _ts([T0 + timedelta(days=2)]),
            }
        )
    )
    assert t.snapshot_id(as_of) == sid
    assert t.query(as_of).equals(df)
    assert t.snapshot_id(T0 + timedelta(days=3)) != sid


def test_adjust_split_respects_known_at():
    bars = pl.DataFrame(
        {
            "symbol": ["A"] * 3,
            "date": [date(2026, 9, d) for d in (1, 2, 3)],
            "open": [200.0, 200.0, 100.0],
            "high": [200.0, 200.0, 100.0],
            "low": [200.0, 200.0, 100.0],
            "close": [200.0, 200.0, 100.0],
            "traded_value": [1.0] * 3,
        }
    )
    actions = pl.DataFrame(
        {
            "symbol": ["A"],
            "ex_date": [date(2026, 9, 3)],
            "factor": [2.0],
            "known_at": _ts([T0 + timedelta(days=1)]),
        }
    )
    adj, log = adjust_prices(bars, actions, T0 + timedelta(days=5))
    assert adj.sort("date")["close"].to_list() == [100.0, 100.0, 100.0]
    assert log.height == 1
    raw_view, log0 = adjust_prices(bars, actions, T0)  # split not yet announced
    assert raw_view.sort("date")["close"].to_list() == [200.0, 200.0, 100.0]
    assert log0.is_empty()


NAV = """Open Ended Schemes(Equity Scheme - Large Cap Fund)

Axis Mutual Fund
Scheme Code;ISIN Div Payout/ISIN Growth;ISIN Div Reinvestment;Scheme Name;Net Asset Value;Date
120465;INF846K01DP8;-;Axis Bluechip Fund - Direct Plan - Growth;61.2345;01-Sep-2026
120466;INF846K01DQ6;-;Axis Bluechip Fund - Regular;N.A.;01-Sep-2026
"""


def test_amfi_parse():
    df = parse_nav_all(NAV)
    assert df.height == 1  # N.A. skipped, headers ignored
    row = df.row(0, named=True)
    assert row["scheme_code"] == "120465"
    assert row["nav"] == Decimal("61.2345")
    assert row["nav_date"] == date(2026, 9, 1)


def test_phase0_exit_gate_replay_reproduces_universe(tmp_path):
    """Replay any date and reproduce the exact universe (requirements §9, Phase 0)."""
    bars_t = PitTable(tmp_path, "bars", key=["symbol", "date"])
    start = date(2026, 8, 1)

    def day(i: int, value: float) -> pl.DataFrame:
        d = start + timedelta(days=i)
        return pl.DataFrame(
            {
                "symbol": ["A"],
                "date": [d],
                "close": [100.0],
                "traded_value": [value],
                "circuit_hit": [False],
                "known_at": _ts([datetime(d.year, d.month, d.day, 13, tzinfo=UTC)]),
            }
        )

    for i in range(20):
        bars_t.append(day(i, 10 * 10_000_000))
    ref = pl.DataFrame(
        {
            "symbol": ["A"],
            "market_cap": [5000.0 * 10_000_000],
            "is_sme": [False],
            "on_surveillance": [False],
        }
    )
    as_of = datetime(2026, 8, 20, 14, tzinfo=UTC)
    first = screen(bars_t.query(as_of).drop("known_at"), ref, as_of.date())
    sid = bars_t.snapshot_id(as_of)
    for i in range(20, 30):  # data keeps arriving, now illiquid
        bars_t.append(day(i, 1.0))
    again = screen(bars_t.query(as_of).drop("known_at"), ref, as_of.date())
    assert first["symbol"].to_list() == ["A"]
    assert again.equals(first)
    assert bars_t.snapshot_id(as_of) == sid
