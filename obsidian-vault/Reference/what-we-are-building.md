---
type: reference
source-file: docs/WHAT_WE_ARE_BUILDING.md
last-updated: 2026-07-30T00:00:00Z
tags: [product-intent, principles, audience]
---

# What We Are Building — EY.ai Tax Labs

Source: `docs/WHAT_WE_ARE_BUILDING.md`

**Product name:** EY.ai Tax Labs (also referred to as EY India AI Tax Hub)  
**Audience:** EY tax professionals  
**Source of truth for intent:** the HTML mockups in this repo (not a generic marketing site)

## Purpose

Build an **interactive learning hub** that helps tax people:

1. Understand AI in a tax context
2. Learn how to prompt well
3. Apply those skills inside **Microsoft 365 Copilot** (Word, Excel, PowerPoint, Outlook, M365 Chat)
4. Use Copilot **safely** — with licensing, prompts, FAQs, and security guidance

This is a **guided training experience**, not a brochure landing page.

## Curriculum Shape

| Stage | Focus | Primary HTML reference |
|-------|-------|------------------------|
| **Part 1** | Foundational Concepts — GenAI, RAG, agents, tax-relevant demos & quizzes | `reference/html/Foundational_Concepts.html` |
| **Part 2** | Basics of Prompting — structure, techniques, tax templates, practice | `reference/html/ai-tax-prompting1.html` |
| **Part 3** | M365 Copilot Deep Dive — app tabs, sample prompts, use cases, useful links, security | `reference/html/copilot_dashboard.html` |

**Flow:** Part 1 → Part 2 → Part 3 (M365 Copilot)

## What "done" should feel like

- One branded product: **EY.ai Tax Labs**
- Clear progression between parts/modules
- **Learn by doing** — click apps, explore prompts, demos, quizzes (not slide decks only)
- Tax-specific Copilot content (sample prompts + workflows per Microsoft app)
- Enablement & trust: useful EY links + security section
- Visual language aligned with EY (dark hub + EY yellow)

## Brand & Design Guardrails

| File | Role |
|------|------|
| `reference/html/ey_design_system.html` | EY logo, color, type, frames, web components |
| `reference/html/m365-copilot-redesign.html` | Cleaner "hub" UI direction for Copilot experience |

Prefer EY brand tokens (`#FFE600`, confident black / dark greys) over generic AI-purple aesthetics.

## Principles for Future Work

- **Content from the HTML** — treat `reference/html/` as the narrative source, not `index.html` or `dist/`
- **Learn by doing** — interactions, not just copy
- **Tax context throughout** — all examples, prompts, and exercises are tax-relevant

See [[Design/design-principles]] for brand rules.  
See [[Curriculum/overview]] for the full route map.
