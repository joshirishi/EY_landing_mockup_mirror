"""Parser for the AMFI daily NAV file (NAVAll.txt).

Format (semicolon separated, with category/AMC header lines interleaved):
Scheme Code;ISIN Div Payout/ISIN Growth;ISIN Div Reinvestment;Scheme Name;Net Asset Value;Date
Verify against a real file before relying on this: the format is not under our control.
"""

from __future__ import annotations

from datetime import date, datetime
from decimal import Decimal, InvalidOperation

import polars as pl


def parse_nav_all(text: str) -> pl.DataFrame:
    rows: list[tuple[str, str, str, str, Decimal, date]] = []
    for line in text.splitlines():
        parts = [p.strip() for p in line.split(";")]
        if len(parts) != 6 or not parts[0].isdigit():
            continue  # header, category or AMC line
        try:
            nav = Decimal(parts[4])
            nav_date = datetime.strptime(parts[5], "%d-%b-%Y").date()
        except (InvalidOperation, ValueError):
            continue  # "N.A." or malformed rows are skipped, never guessed
        rows.append((parts[0], parts[1], parts[2], parts[3], nav, nav_date))
    schema: dict[str, pl.DataType | type[pl.DataType]] = {
        "scheme_code": pl.String,
        "isin_growth": pl.String,
        "isin_reinvest": pl.String,
        "scheme_name": pl.String,
        "nav": pl.Decimal(20, 4),
        "nav_date": pl.Date,
    }
    return pl.DataFrame(rows, schema=schema, orient="row")
