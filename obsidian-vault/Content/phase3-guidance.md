---
name: phase3-guidance
description: Phase 3 Guidance for Implementation — full page content, panel structure, and verbatim PDF content (8 slides)
metadata:
  type: project
---

# Phase 3 — Guidance for Implementation

**Route:** `/guidance-implementation`  
**Component:** `src/pages/GuidanceImplementation.tsx`  
**PDF source:** `reference/PDF/phase3.pdf` (current). Older notes cited `reference/PDFs/ACFrOgBcEOY38Vo...==.pdf`.

---

## Page Structure (6 panels)

### Panel 1 — Hands-On Build Workshop (Slides 1+2)
- **H1:** "Hands-On Build Workshop"
- **Subtitle:** "Building Tax Prompt Libraries and Microsoft 365 Copilot Agents"
- **Quote (verbatim):** "The objective is no longer awareness. Participants should spend more time in Copilot than looking at slides."
- **Steps:** 01 Build → 02 Test → 03 Refine
- **Workshop objective:** Translate Phase 2 use cases into practical AI solutions for the tax function.
- **Today's build zone:** Prompt engineering · M365 Copilot Agents · Human review controls
- **Expected outcomes:** Tax Prompt Templates · Draft Agent Instructions · Pilot Use Cases · Human Review Framework · AI Adoption Playbook
- **Deliverable:** Facilitator deck + detailed handouts

### Panel 2 — Building Better Tax Prompts (Slide 3)
- 8 components: Persona · Context · Instructions · Tone & style · Examples · Output indicator · Constraints · Grounding
- Example prompt seed: "You are a senior Indian tax professional specialising in transfer pricing and international taxation."
- Payoff line: "Good outputs start with good prompts."

### Panel 3 — Instruction Components / M365 Agent (Slide 4)
- 7 components: Purpose · Knowledge sources · Core responsibilities · Workflow · Output format · Escalation rules · Guardrails
- Agent workflow: 01 Receive request → 02 Search repository → 03 Summaries findings → 04 Identify gaps → 05 Prepare output
- Example purpose: "Assist tax teams in gathering and organising transfer pricing documentation."

### Panel 4 — HITL (Slide 5) — **Zara's peak moment**
- Banner: "AI assists with drafts and structure. Tax professionals decide the final position."
- Flow: Human input → Prompt / Agent → Draft output → **Human review** (yellow) → Final tax position
- Validate: Facts · Assumptions · Calculations · Legal references · Recommendations · Final conclusions
- Never delegate: Technical tax positions · Tax authority submissions · Litigation strategy · Return sign-offs · Professional opinions
- Golden Rule: "AI assists. Tax professionals decide."
- **Interaction:** whileInView stagger (delay 0.12s per step) + scale pulse on step 04 (delay 0.7s, scale 1→1.04→1)

### Panel 5 — Workshop Reference Library (live shelf, not the old slide menu)
- One bookshelf, two catalogs — see [[Reference/source-map]]
- **Prompt Template Library** — 21 books from `reference/3.1 - Sample Prompt Templates_Priya.pptx` → `src/data/prompt-library.ts`
- **Agent Template Library** — 9 books (purpose / actions / outcome) from Sheet1 of `Sample use cases.xlsx` (**file absent**) → `src/data/agent-template-library.ts` · [[Content/phase2-slide-6]]
- UI: `PromptBookshelfLibrary` on `#p5-templates`

### Panel 6 — Agent Library + Closing (Slides 7+8) — hidden
- Same 9 agents as the Agent Template Library (`SHOW_P3_AGENT_TEMPLATES = false`)
- You now have: Identified tax AI opportunities · Built prompt templates · Designed AI-enabled processes · Built Copilot Agent instructions
- Closing: "Controlled deployment, user adoption and continuous refinement of the Tax AI operating model."

---

## Interaction Patterns
- **Sticky section nav** — 6 anchors, IntersectionObserver on `.overflow-auto` container
- **HITL animation** — whileInView stagger + yellow box pulse (Zara's pick, Peak-End Rule)
- **Card hover states** — `background 150ms ease` on all dark cards; `box-shadow` lift on light cards

See [[Design/design-system]] for token reference.
