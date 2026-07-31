---
type: reference
source-file: src/design-kit/curriculum.ts
last-updated: 2026-07-30T00:00:00Z
tags: [curriculum, phases, modules, routes]
---

# Curriculum Overview

Source: `src/design-kit/curriculum.ts` — single source of truth for module titles, routes, and sub-sections.

## Product Shape

**EY.ai Tax Labs** is a multi-phase curriculum. Phase 1 workshops are live; Phases 2–4 are planned.

User-facing copy uses **Module / Sub-module** terminology. Internal code uses `PHASE_*` constants.

## Route Map

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home2` | Landing / entry |
| `/phased` | `PhasedEngagementView` | Four-phase journey overview |
| `/phase1` | `Phase1View` | Course card hub — links to all Phase 1 modules |
| `/foundational` | `FoundationalConcepts` | Module 1 — HTML lesson embed |
| `/ai-tax-prompting` | `AiTaxPrompting` | Module 2 — native React |
| `/copilot-hub` | `M365CopilotHub` | Module 3 — native React |

Section deep-links use hash anchors: `/foundational#cheatsheet`, `/ai-tax-prompting#match-activity`

## Phases

| Phase | Label | Status |
|-------|-------|--------|
| 1 | Foundational Training Workshops | Live |
| 2 | Phased Engagement — Brainstorming Use Cases (Weeks 3–4) | Building |
| 2b | AI Agents & Prompts (Weeks 5–6) | Planned |
| 3–4 | TBD | Planned |

See [[Curriculum/phase1-modules]] for Phase 1 detail.
See [[Content/phase2-workshop]] for Phase 2 PDF content.
