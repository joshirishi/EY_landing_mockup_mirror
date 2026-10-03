# Requirements summary

The source of truth is the
[Trading Agents — Requirements Document](https://claude.ai/artifact/KEZg7tBczx6TLRrwSczxbC)
(dated 2026-09-26). This page records the decisions the code depends on and how they were
interpreted.

## Decisions encoded in code

| Topic | Value | Code |
| --- | --- | --- |
| Equity universe | 20-day median traded value ≥ ₹5 cr; market cap ≥ ₹1,000 cr; no ASM/GSM, no SME; excluded at 3+ circuit hits in last 10 sessions | `config.UniverseFilters`, `screener.py` |
| Guardrails | ≤ 5% per position, ≤ 25% per sector, ≤ 8 open swing positions, reward-to-risk ≥ 1.5, pause at 10% drawdown | `config.Guardrails`, `guardrails.py` |
| Score weights | w1 = 0.5, w2 = 0.25, w3 = 0.15, w4 = 0.10 | `config.ScoringWeights` |
| Graduation | ≥ 60 closed theses, ≥ 6 months, mean excess > 0 with 95% bootstrap CI excluding 0, Brier < base rate, drawdown ≤ benchmark | `evaluation.py` |

## Interpretations (confirm or change)

1. **Volatility in the score.** `R_excess / σ_20d` uses σ_20d (daily) scaled to the horizon:
   σ_20d × √horizon_days, so a 10-day return is compared with 10-day volatility.
2. **Same-bar target and stop.** With only daily bars, if both are touched on one day the stop
   is assumed to have hit first.
3. **Reward-to-risk** is measured from the middle of the entry zone.
4. **Base-rate forecaster** for the Brier comparison always predicts the realised hit rate,
   giving Brier = h(1 − h).
5. **Red-team kills** count toward kill share but are excluded from return statistics.
6. **Ledger store.** SQLite with triggers blocking UPDATE/DELETE and a hash chain, until the
   Postgres 16 store in §7 is set up; the schema maps directly.
7. **Costs and tax.** FY2025-26 rates are approximate defaults (delivery STT 0.1% each side,
   stamp duty 0.015% buy, NSE exchange 0.00297%, SEBI ₹10/cr, GST 18%, DP ₹15.93/sell,
   10 bps slippage per side, 20% STCG + 4% cess). Verify with a CA before trusting scores.
