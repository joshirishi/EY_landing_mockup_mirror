# Trading Agents

AI agents that propose trades with a pre-registered, falsifiable thesis. A human reviews and
executes every trade. Agents are scored on risk-adjusted, benchmark-relative, after-cost returns
and on the calibration of their reasoning, not on raw P&L.

Requirements: [Trading Agents — Requirements Document](https://claude.ai/artifact/KEZg7tBczx6TLRrwSczxbC)
(summary in [`docs/requirements.md`](docs/requirements.md)).

> This is a personal system design, not financial advice. Suggestion-only with manual
> execution; no automated order placement in v1.

## Status

Deterministic core for Phases 0–2 is in place. No LLM agents or data feeds yet.

| Module | Requirements | What it does |
| --- | --- | --- |
| `thesis.py` | §4 | Pydantic thesis schema; rejects missing fields and inconsistent prices; SHA-256 content hash |
| `ledger.py` | §4 | Append-only, hash-chained ledger (SQLite); versioned corrections; separate owner decisions; `verify()` |
| `costs.py` | §2, §5, §8 | Indian delivery cost model (STT, stamp duty, exchange, SEBI, GST, DP, slippage) and short-term tax, per financial year |
| `screener.py` | §2, §3 | Point-in-time universe filters: liquidity, market cap, ASM/GSM, SME, circuit hits |
| `guardrails.py` | §8 | Hard limits outside the LLM: position, sector, open positions, reward-to-risk, drawdown pause, failed/stale citations |
| `scoring.py` | §5 | Exit simulation, composite per-thesis score, agent scorecards, red-team kill precision |
| `data/raw.py` | §6 | Raw file store: files kept as downloaded, SHA-256 manifest with `known_at`, overwrite and tamper detection |
| `data/pit.py` | §6 | Point-in-time Parquet tables: `as_of` queries, latest-known version per key, replayable snapshot IDs |
| `data/adjust.py` | §6 | Split/bonus price adjustment from raw prices, only actions known by `as_of`, with an adjustment log |
| `data/amfi.py` | §6 | AMFI NAVAll parser (format to be verified against a real file) |
| `evaluation.py` | §1, §9 | Graduation gate: 60 theses, 6 months, bootstrap CI, Brier vs. base rate, drawdown vs. benchmark |

## Develop

```bash
uv sync                 # Python 3.12
uv run pytest
uv run ruff check . && uv run ruff format --check .
uv run mypy
```

Secrets go in `.env` (see `.env.example`), never in code.

## Roadmap

| Phase | Exit gate | State |
| --- | --- | --- |
| 0. Data foundation | Replay any date and reproduce the exact universe and prices | Point-in-time store, adjustment, screener, cost model done; downloaders (bhavcopy, corporate actions, surveillance lists) to do |
| 1. Equity agent + ledger | 20 valid theses, zero schema or citation failures | Schema + ledger done; agent, tools, Telegram digest to do |
| 2. Red team + scoring | Scores reproducible from ledger alone | Scoring done; red-team agent, post-mortems, dashboard to do |
| 3. Forward paper trading | Section 1 success criteria met | Gate implemented |
| 4–6 | See requirements §9 | Not started |
