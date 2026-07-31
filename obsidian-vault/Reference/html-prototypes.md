---
type: reference
source-file: README.md
last-updated: 2026-07-30T00:00:00Z
tags: [reference, html, prototypes, blueprint]
---

# Reference HTML Prototypes

The HTML files in `reference/html/` are the **product blueprint** — they define narrative, interactions, and content intent. The live app implements that curriculum in React.

> When unsure what to build next, re-read the reference HTML. Do not treat root `index.html` or `dist/` as product content.

## Mapping: Reference → Live

| Reference HTML | Live Implementation |
|----------------|---------------------|
| `reference/html/Foundational_Concepts.html` | `/foundational` — HTML injected via `FoundationalConcepts.tsx` with token bridge |
| `reference/html/ai-tax-prompting1.html` | `/ai-tax-prompting` — rebuilt as native React |
| `reference/html/copilot_dashboard.html` | `/copilot-hub` — native React, hub layout |
| `reference/html/AI_Labs_1.1.html` | `/copilot-hub` — combined with above |
| `reference/html/m365-copilot-redesign.html` | `/copilot-hub` — preferred layout direction |
| `reference/html/ey_design_system.html` | Informs `src/design-kit/` tokens and components |
| `reference/html/phase1.html` | `/phase1` — course card hub |
| `reference/html/EY_Tax_Labs_Phase_Presentation.html` | `/phased` — phased engagement overview |

## Working Copies (in `src/imports/`)

These are what the app actually loads:
- `src/imports/Foundational_Concepts.html` — active lesson for Module 1
- `src/imports/AiTaxPrompting.html` — active lesson for Module 2

## Reference PDFs

| File | Contents |
|------|----------|
| `reference/PDFs/ACFrOg...==.pdf` | Phase 2 — Tax AI Discovery & Opportunity Design (9 slides) |

See [[Content/phase2-workshop]] for full Phase 2 PDF content.
