---
type: vault-index
last-updated: 2026-08-17T00:00:00Z
tags: [index, vault, ey-tax-labs]
---

# EY.ai Tax Labs — Knowledge Vault

Reference vault for the EY India AI Tax Hub learning platform. Lives in `obsidian-vault/` inside the repo.
Last full build: 2026-08-17

## Product in one line

> EY.ai Tax Labs is a modular, interactive training hub for EY tax professionals — AI foundations → prompting → M365 Copilot in real tax workflows, with brand, security, and enablement baked in.

---

## Design system

| Note | Contents |
|------|----------|
| [[Design/design-system]] | Canonical design tokens, typography, colors, components |
| [[Design/design-principles]] | EY brand rules — yellow usage, surface rhythm, icon rules |
| [[Design/interaction-patterns]] | Animation, hover, section-nav, card hover, HITL stagger patterns |

## Component catalog (new)

| Note | Contents |
|------|----------|
| [[Components/index]] | Full component registry with import reference |
| [[Components/EYButton]] | primary / secondary / text button |
| [[Components/EYCard]] | Insight card with Spectrum frame |
| [[Components/EYFrame]] | L-shaped hero frame |
| [[Components/EYTypography]] | All text components |
| [[Components/SiteHeader]] | Hub + learning top chrome |
| [[Components/ModuleHeader]] | Level 2 breadcrumb + Learn/Apply tabs |
| [[Components/EYWhatsNext]] | End-of-module handoff CTA |
| [[Components/EYNavbar]] | Simple sticky nav |
| [[Components/EYFooter]] | Footer with Spectrum accent |
| [[Components/EYLogo]] | Logo lockup variants |

## Pages (new)

| Note | Contents |
|------|----------|
| [[Pages/index]] | Full route registry |
| [[Pages/Home]] | Hub landing — hero, pillars, Tax Labs entry |
| [[Pages/PhasedEngagement]] | Phase overview — timeline, Core Processing Pipeline |
| [[Pages/Phase1]] | Course card grid — 5 modules |
| [[Pages/FoundationalConcepts]] | Module 1 — HTML lesson with token bridge |
| [[Pages/AiTaxPrompting]] | Module 2 — 8 sections + interactive widgets |
| [[Pages/M365CopilotHub]] | Module 3 — M365 app tabs + laptop stage |
| [[Pages/BrainstormingUseCases]] | Supporting — use-case brainstorming |
| [[Pages/GuidanceImplementation]] | Supporting — guidance & implementation |

## UI Patterns (new)

| Note | Contents |
|------|----------|
| [[Patterns/index]] | Pattern directory |
| [[Patterns/ModulePage]] | Full module page shell template |
| [[Patterns/SurfaceRhythm]] | Dark/Neutral/Light alternation |
| [[Patterns/ContentRail]] | Full-bleed section + railed content |
| [[Patterns/HtmlLesson]] | HTML lesson + token bridge |
| [[Patterns/SectionNav]] | Sticky section nav (supporting pages) |
| [[Patterns/AccordionComparison]] | Accordion, comparison grid, quiz cards |
| [[Patterns/SpectrumFrame]] | Spectrum gradient and EYFrame usage |
| [[Patterns/Icons]] | Lucide-only icon rules |

## Curriculum & Content

| Note | Contents |
|------|----------|
| [[Curriculum/overview]] | Full module map, routes, sub-sections |
| [[Curriculum/phase1-modules]] | Phase 1 — 5 modules with sub-sections and status |
| [[Content/phase2-workshop]] | Phase 2 PDF content — word-for-word from slides |
| [[Content/phase2-slide-1]] through [[Content/phase2-slide-9]] | All 9 Phase 2 slides |
| [[Content/phase3-guidance]] | Phase 3 PDF content — 8 slides, panel structure |

## Skills

| Note | Contents |
|------|----------|
| [[Skills/index]] | All Claude skills — when to use which |

## Reference

| Note | Contents |
|------|----------|
| [[Reference/index]] | Full `reference/` folder inventory |
| [[Reference/source-map]] | How each reference file connects to live data and pages |
| [[Reference/repo-structure]] | File paths, tech stack, how to run |
| [[Reference/html-prototypes]] | Reference HTML files and their live counterparts |
| [[Reference/what-we-are-building]] | Product intent and principles |

---

## Key source files

| File | Purpose |
|------|---------|
| `src/design-kit/curriculum.ts` | Module titles, routes, sub-sections (single source of truth) |
| `src/design-kit/tokens.ts` | EY colors, fonts, spacing, content width |
| `src/design-kit/index.ts` | Single component import entry point |
| `src/styles/theme.css` | CSS custom properties |
| `src/DESIGN.md` | Canonical design reference |
| `src/app/routes.tsx` | React Router route config |
| `docs/WHAT_WE_ARE_BUILDING.md` | Product intent |
