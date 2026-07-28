# What We Are Building — EY.ai Tax Labs

**Product name:** EY.ai Tax Labs (also referred to as EY India AI Tax Hub)  
**Audience:** EY tax professionals  
**Source of truth for intent:** the HTML mockups in this repo (not a generic marketing site)

---

## Purpose

Build an **interactive learning hub** that helps tax people:

1. Understand AI in a tax context  
2. Learn how to prompt well  
3. Apply those skills inside **Microsoft 365 Copilot** (Word, Excel, PowerPoint, Outlook, M365 Chat)  
4. Use Copilot **safely** — with licensing, prompts, FAQs, and security guidance

This is a **guided training experience**, not a brochure landing page.

---

## Product shape (curriculum)

The HTML defines a **multi-module path**. Shared chrome shows **Module 1–4**; later modules may still be placeholders.

| Stage | Focus | Primary HTML reference |
|--------|--------|-------------------------|
| **Part 1** | Foundational Concepts — GenAI, RAG, agents, tax-relevant demos & quizzes | `reference/html/Foundational_Concepts.html` |
| **Part 2** | Basics of Prompting — structure, techniques, tax templates, practice | `reference/html/ai-tax-prompting1.html` |
| **Part 3** | M365 Copilot Deep Dive — app tabs, sample prompts, use cases, useful links, security | `reference/html/copilot_dashboard.html`, `reference/html/AI_Labs_1.1.html`, redesign in `reference/html/m365-copilot-redesign.html` |
| **Modules 3–4** | Planned in nav; content not fully defined in mockups yet | Greyed-out module chips in the HTML |

**Flow the mockups already encode:**  
Part 1 → Part 2 → Part 3 (M365 Copilot).

---

## What “done” should feel like

- One branded product: **EY.ai Tax Labs**
- Clear progression between parts/modules
- **Learn by doing** — click apps, explore prompts, demos, quizzes (not slide decks only)
- Tax-specific Copilot content (sample prompts + workflows per Microsoft app)
- Enablement & trust: useful EY links (license check, prompt library, FAQs) + security section
- Visual language aligned with EY (dark hub + EY yellow; see design system)

---

## Brand & design guardrails

| File | Role |
|------|------|
| `reference/html/ey_design_system.html` | EY logo, color, type, frames, web components — follow this for look & feel |
| `reference/html/m365-copilot-redesign.html` | Cleaner “hub” UI direction for the Copilot deep-dive experience |

Prefer EY brand tokens (e.g. `#FFE600`, confident black / dark greys) over generic AI-purple aesthetics.

---

## How to use the HTML files

**Treat as product blueprint:**

- `reference/html/Foundational_Concepts.html` — Part 1 learning content & interactions  
- `reference/html/ai-tax-prompting1.html` — Part 2 prompting workshop  
- `reference/html/copilot_dashboard.html` / `reference/html/AI_Labs_1.1.html` — Part 3 interactive Copilot hub  
- `reference/html/m365-copilot-redesign.html` — preferred layout direction for Part 3  
- `reference/html/ey_design_system.html` — brand system  

**Not the product story:**

- Root `index.html` — app shell only  
- `dist/` — build output (gitignored)  

Live React pages under `src/pages/` and HTML mirrors under `src/imports/` implement the curriculum; use `reference/html/` as the narrative source when in doubt.

---

## Principles for future work

1. Preserve the **module/part journey** and tax + Copilot focus.  
2. Prefer **interactive learning** over static marketing sections.  
3. Keep **security / governance / EY resource links** as first-class sections, not footnotes.  
4. When unsure what to build next, re-read the HTML mockups — they define intent.  
5. Do not turn this into a generic AI chatbot product or a pure Figma showcase without the learning path.

---

## One-line reminder

> **We are building EY.ai Tax Labs: a modular, interactive training hub for EY tax professionals — AI foundations → prompting → M365 Copilot in real tax workflows, with brand, security, and enablement baked in.**

*Last aligned from HTML mockup assessment. Update this file when the product direction or module map changes.*
