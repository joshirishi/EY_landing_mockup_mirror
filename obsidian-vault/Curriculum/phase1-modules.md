---
type: reference
source-file: src/design-kit/curriculum.ts
last-updated: 2026-07-30T00:00:00Z
tags: [curriculum, phase1, modules]
---

# Phase 1 Modules

**Phase label:** Phase 1: Foundational Training Workshops  
**Phase path:** `/phase1`

## Module Map

| Order | ID | Title | Route | Est. Time | Status |
|-------|----|-------|-------|-----------|--------|
| 1 | `foundational` | Foundational Concepts of AI | `/foundational` | ~45 min | Live |
| 2 | `ai-tax-prompting` | AI Tax Prompting | `/ai-tax-prompting` | ~30 min | Live |
| 3 | `copilot-hub` | M365 Copilot Dashboard | `/copilot-hub` | ~60 min | Live |
| 4 | `ai-governance` | AI Governance in Tax | `/ai-governance` | ~25 min | Coming soon |
| 5 | `advanced-workflows` | Advanced Tax Workflows | `/advanced-workflows` | ~40 min | Coming soon |

---

## Module 1 — Foundational Concepts of AI

**Route:** `/foundational`  
**Source HTML:** `src/imports/Foundational_Concepts.html` (token bridge via `FoundationalConcepts.tsx`)

### Sub-modules

**Learn group:**
- `act-now` — Act Now
- `rise-of-ai` — Understanding AI (news card grid, lightbox)
- `evolution` — Evolution (timeline breadcrumb, concentric nest, era panel)
- `terminology` — Guided Demo / Key Terms simulation

**Apply group:**
- `cheatsheet` — Cheat Sheet (CREATE / UNDERSTAND / ORGANIZE / THINK accordion grid)
- `genai-vs-agents` — GenAI vs Agents (sticky comparison table)
- `quiz` — Quiz (multi-card with feedback states)

### Key sections (HTML IDs)

| Section ID | Surface | Pattern |
|------------|---------|---------|
| `#home` / `.hero` | Dark | Video hero, play overlay |
| `#rise-of-ai` | Dark | News card grid, lightbox |
| `#reality-check` | Neutral | "Wrong assumptions" interactive |
| `#strategic-divide` | Light | Two-path comparison + VS divider |
| `#evolution` | Dark | Timeline breadcrumb, concentric nest |
| `#terminology` | Light | Key terms / simulation |
| `#cheatsheet` | Neutral | Accordion columns with cheat rows |
| `#genai-vs-agents` | Dark | GVA compare grid |
| `#quiz` | Light | Multi-card quiz |

---

## Module 2 — AI Tax Prompting

**Route:** `/ai-tax-prompting`  
**Implementation:** Native React (`pages/AiTaxPrompting.tsx`)

### Sub-modules

**Learn group:**
- `pipeline` — Prompt Basics (prompt flow diagram)
- `team-briefing` — Team Briefing (briefing cards)
- `elements` — 7 Elements (left facet nav + detail pane, spectrum-colored facets)
- `lazy-vs-pro` — Weak vs Strong (side-by-side prompts)
- `stack-builder` — Stack Builder (interactive prompt stack composer)
- `advanced` — Techniques (bucket toggle, CoT / decomposition / ensemble panels)

**Apply group:**
- `match-activity` — Activity (drag-match exercise)
- `dos-donts` — Do's & Don'ts (two-column golden rules)

---

## Module 3 — M365 Copilot Dashboard

**Route:** `/copilot-hub`  
**Implementation:** Native React (`pages/M365CopilotHub.tsx`)

### Sub-modules

**Learn group:**
- `prompt-repository` — M365 Apps (Word/Excel/PPT/Outlook/M365 Chat tabs)

**Apply group:**
- `useful-links` — Useful Links
- `security` — Security & Governance

### Section patterns

| Section | Pattern |
|---------|---------|
| `#prompt-repository` | App tabs — app-colored eyebrows, use-case grid, Copilot prompt panel |
| Laptop stage | Floating app widgets → jump to tab |
| `#useful-links` | Link list |
| `#security` | Security & governance content |

---

## Module 4 — AI Governance in Tax
**Status:** Coming soon — no sub-modules yet

## Module 5 — Advanced Tax Workflows
**Status:** Coming soon — no sub-modules yet
