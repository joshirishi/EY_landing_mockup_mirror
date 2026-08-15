# EY.ai Tax Labs — Learning Hub

**EY.ai Tax Labs** (also referred to as the EY India AI Tax Hub) is an interactive training platform for EY tax professionals. It is **not** a marketing landing page — it is a guided learning experience that takes learners from AI foundations through prompting skills to practical Microsoft 365 Copilot workflows in a tax context.

This repository contains the live React application, the EY design kit, HTML lesson sources, and reference prototypes that define product intent.

| | |
|---|---|
| **Audience** | EY tax professionals (India AI Tax Hub enablement) |
| **Product shape** | Modular curriculum — Phase 1 workshops live today; Phases 2–4 planned |
| **Design source** | [Figma — Landing page mockup](https://www.figma.com/design/cfsKAPHNR9Ymuc8ZILs1uV/Landing-page-mockup) + IDEATION frames |
| **Content source of truth** | HTML prototypes in `reference/html/` (see [Reference vs live pages](#reference-html-vs-live-react-pages)) |

For deeper product intent, see [`docs/WHAT_WE_ARE_BUILDING.md`](docs/WHAT_WE_ARE_BUILDING.md).

---

## Project purpose & audience

Tax teams need more than slide decks to adopt AI safely. EY.ai Tax Labs delivers **learn-by-doing** training:

1. **Understand AI** in a tax-relevant context (GenAI, RAG, agents, terminology)
2. **Learn to prompt well** with structured exercises and tax-specific examples
3. **Apply skills in M365 Copilot** (Word, Excel, PowerPoint, Outlook, Teams, M365 Chat)
4. **Use Copilot safely** — licensing, governance, FAQs, and security guidance

The experience is branded, progressive, and interactive: learners click through apps, run demos, take quizzes, and practice prompts — not just read static copy.

---

## What we've built

### Entry & navigation

| Route | Page | Status |
|-------|------|--------|
| `/` | Phased engagement overview (4-phase journey) — app landing | Live |
| `/phased` | Redirects to `/` | Live |
| `/phase1` | Phase 1 course card hub — unlocks the three live modules | Live |

### Phase 1 modules (live)

| # | Module | Route | Est. time | Highlights |
|---|--------|-------|-----------|------------|
| 1 | **Foundational Concepts of AI** | `/foundational` | ~45 min | Act Now, AI evolution timeline, terminology, GenAI cheat sheet, LLM vs Agent comparison, interactive quiz |
| 2 | **AI Tax Prompting** | `/ai-tax-prompting` | ~30 min | Prompt pipeline, 7 Elements tabs, weak vs strong prompts, stack builder, techniques, MCQ + match activities, golden rules |
| 3 | **M365 Copilot Dashboard** | `/copilot-hub` | ~60 min | App tabs with sample prompts, laptop-stage demo, use-case cards, useful EY links, security & governance |

### Coming soon (in curriculum nav, not yet routed)

| Module | Route | Status |
|--------|-------|--------|
| AI Governance in Tax | `/ai-governance` | Coming soon |
| Advanced Tax Workflows | `/advanced-workflows` | Coming soon |

### Key features implemented

- **Curriculum-driven navigation** — `src/design-kit/curriculum.ts` is the single source of truth for module titles, routes, Learn/Apply section tabs, and prev/next flow
- **Module header & in-page nav** — sticky sub-navigation with hash-based section scrolling (`LearningNav`, `ModuleHeader`)
- **HTML lesson embeds** — Foundational Concepts renders from `src/imports/Foundational_Concepts.html` into the React page with a token bridge so EY styling stays consistent
- **Native React modules** — AI Tax Prompting and M365 Copilot Hub are fully React pages with interactive widgets (tabs, activities, walkthroughs)
- **Phased layout system** — fluid, production-width layouts (no canvas zoom-shrink) for `/` (phased landing) and `/phase1`
- **EY design kit** — shared tokens, typography, buttons, cards, headers, footers, and "What's Next" progression blocks
- **Echo feedback SDK** — in-app comment FAB for stakeholder review (see [Echo feedback](#echo-feedback))
- **Vercel deployment** — SPA rewrites configured in `vercel.json`

---

## Tech stack

| Layer | Technology | Notes |
|-------|------------|-------|
| **Build tool** | [Vite 6](https://vitejs.dev/) | Fast dev server, ESM-native |
| **UI framework** | [React 18](https://react.dev/) | Functional components + hooks |
| **Language** | TypeScript | `.tsx` throughout `src/` |
| **Routing** | [React Router 7](https://reactrouter.com/) | Browser router in `src/app/routes.tsx` |
| **Styling** | Tailwind CSS 4 + inline tokens | `@tailwindcss/vite` plugin; EY tokens take precedence over raw Tailwind colors |
| **Design system** | Custom EY design kit | `src/design-kit/` — tokens, typography, shared components |
| **Icons** | [Lucide React](https://lucide.dev/) | Line/stroke icons only (no emoji as UI icons) |
| **Animation** | Motion (Framer Motion successor) | Used for transitions in interactive sections |
| **Fonts** | EYInterstate | Weights 300 / 400 / 700 only; files in `Fonts/` → copied to `public/fonts/` |
| **HTML lessons** | Raw HTML imports | Vite `?raw` import + DOM injection with scoped CSS token bridge |
| **Charts / UI extras** | Recharts, Embla Carousel, React Hook Form, etc. | Available for interactive lesson widgets |
| **Package manager** | pnpm (preferred) or npm | Lockfile: `pnpm-lock.yaml` |
| **Deployment** | Vercel | Client-side SPA with catch-all rewrite |

### Path alias

`@/` resolves to `src/` (configured in `vite.config.ts`).

---

## Repository structure

| Path | Purpose |
|------|---------|
| `src/app/` | App shell (`App.tsx`) and React Router configuration (`routes.tsx`) |
| `src/pages/` | Live module pages — `FoundationalConcepts.tsx`, `AiTaxPrompting.tsx`, `M365CopilotHub.tsx` |
| `src/design-kit/` | EY tokens, typography, curriculum map, shared UI (`EYButton`, `EYCard`, `LearningNav`, etc.) |
| `src/imports/` | Figma-exported views (`Home2/`, `Frame353/`) and HTML lesson sources (`Foundational_Concepts.html`, `AiTaxPrompting.html`) |
| `src/assets/` | Bundled images and static assets referenced from React |
| `src/styles/` | Global CSS — theme vars, fonts, Tailwind entry |
| `public/` | Static files served at `/` — fonts, pipeline SVGs, lesson images, icons |
| `Fonts/` | Source EY Interstate font files (copied to `public/fonts/` for serving) |
| `docs/` | Product docs, content briefs, plans, attributions — **design spec is canonical in `src/DESIGN.md`**; `docs/design/` holds a legacy Motif spec only |
| `reference/` | Original HTML/CSS prototypes and design exports — **not part of the running app** |
| `skills/` | Agent skills for design and implementation workflows (Cursor automation) |
| `.cursor/rules/` | Cursor rules enforcing EY design tokens in generated UI |

### Important files

| File | Role |
|------|------|
| `src/design-kit/curriculum.ts` | Module titles, routes, sub-sections, Learn/Apply groups |
| `src/design-kit/tokens.ts` | Canonical EY colors, fonts, spacing, content width |
| `src/styles/theme.css` | CSS custom properties (`--foreground`, `--ey-content-width`, etc.) |
| `src/DESIGN.md` | **Canonical design reference** — tokens, component catalog, UI patterns by page type, do's/don'ts; read before building UI |
| `docs/WHAT_WE_ARE_BUILDING.md` | Product intent and curriculum overview |

---

## How to run locally

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Install & start

```bash
# With pnpm (recommended)
pnpm install
pnpm dev

# With npm
npm install
npm run dev
```

The dev server starts via Vite (default: `http://localhost:5173`).

### Build for production

```bash
pnpm build   # or: npm run build
```

Output goes to `dist/` (gitignored).

---

## Curriculum & routes map

Phase 1 is labeled **"Phase 1: Foundational Training Workshops"** in the app. Internal code uses `PHASE_*` constants; user-facing copy uses **Module** / **Sub-module**.

### Phase 1 modules

| Order | Module ID | Title | Route | Sub-sections (Learn → Apply) |
|-------|-----------|-------|-------|------------------------------|
| 1 | `foundational` | Foundational Concepts of AI | `/foundational` | Act Now · Understanding AI · Evolution · Key Terms → Cheat Sheet · GenAI vs Agents · Quiz |
| 2 | `ai-tax-prompting` | AI Tax Prompting | `/ai-tax-prompting` | Prompt Basics · Team Briefing · 7 Elements · Weak vs Strong · Stack Builder · Techniques → Activity · Do's & Don'ts |
| 3 | `copilot-hub` | M365 Copilot Dashboard | `/copilot-hub` | M365 Apps → Useful Links · Security & Governance |
| 4 | `ai-governance` | AI Governance in Tax | `/ai-governance` | Coming soon |
| 5 | `advanced-workflows` | Advanced Tax Workflows | `/advanced-workflows` | Coming soon |

### Full route table

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home2` (import) | Landing / entry |
| `/` | `PhasedEngagementView` | Four-phase journey overview (landing) |
| `/phase1` | `Phase1View` | Course card hub — links to all Phase 1 modules |
| `/foundational` | `FoundationalConcepts` | Module 1 — HTML lesson embed |
| `/ai-tax-prompting` | `AiTaxPrompting` | Module 2 — native React |
| `/copilot-hub` | `M365CopilotHub` | Module 3 — native React |

Section deep-links use hash anchors (e.g. `/foundational#cheatsheet`, `/ai-tax-prompting#match-activity`).

---

## Design system notes

**Canonical reference:** [`src/DESIGN.md`](src/DESIGN.md) — the full design spec for this repo (tokens, component catalog, UI patterns by page type, do's/don'ts). The older Motif DS 4.17 doc in `docs/design/` is legacy and not used in this codebase.

All UI must use the EY design kit — no ad-hoc hex colors, no Tailwind palette utilities (`bg-blue-500`, etc.).

### Canonical sources

| Concern | Source |
|---------|--------|
| JS tokens | `src/design-kit/tokens.ts` — `colors`, `fonts`, `typeScale`, `spacing`, `layout` |
| CSS vars | `src/styles/theme.css` — `var(--foreground)`, `var(--ey-brand-yellow)`, etc. |
| Typography components | `src/design-kit/EYTypography.tsx` — `EYHeading`, `EYBody`, `EYEyebrow` |
| Kit entry point | `import { colors, fonts, contentRailStyle, EYHeading } from '@/design-kit'` |

### Content rail (global width)

Page content sits in a single tokenized rail — default **80%** width:

```ts
// src/design-kit/tokens.ts
layout.contentWidth = '80%'
```

`main.tsx` writes this to `--ey-content-width` at startup. Change the one value in `tokens.ts` and all pages update. Use `contentRailStyle` or the `ey-content-rail` CSS class — never hardcode `maxWidth: 1200`.

### EY Yellow rule

`#FFE600` (EY Yellow) is a **marker/accent only** — vertical bars, active tab indicators, badges on dark backgrounds. Never use it for body text on white or large decorative fills.

### Typography

- Font: **EYInterstate** only
- Allowed weights: **300** (light), **400** (regular), **700** (bold) — no 500/600

### Icons

Line/stroke icons from **Lucide React** only. No emoji as UI icons.

Full checklist and patterns: see [`src/DESIGN.md`](src/DESIGN.md) (canonical) and `.cursor/rules/ey-design-tokens.mdc` (Cursor enforcement).

---

## Reference HTML vs live React pages

The HTML files in `reference/html/` are the **product blueprint** — they define narrative, interactions, and content intent. The live app implements that curriculum in React.

| Reference HTML | Live implementation |
|----------------|---------------------|
| `reference/html/Foundational_Concepts.html` | `/foundational` — HTML injected via `FoundationalConcepts.tsx` with token bridge |
| `reference/html/ai-tax-prompting1.html` | `/ai-tax-prompting` — rebuilt as native React |
| `reference/html/copilot_dashboard.html`, `AI_Labs_1.1.html`, `m365-copilot-redesign.html` | `/copilot-hub` — native React, hub layout from redesign direction |
| `reference/html/ey_design_system.html` | Informs `src/design-kit/` tokens and components |

**Working copies** of lesson HTML also live in `src/imports/` (e.g. `Foundational_Concepts.html`) — these are what the app actually loads.

When unsure what to build next, re-read the reference HTML. Do not treat root `index.html` or `dist/` as product content.

---

## Recent UI improvements (summary)

Work to date focused on production-ready layouts, clearer learning flow, and brand-aligned interactions:

- **Phased layout overhaul** — widened content rail and section containers for 1920px / 120% zoom; fluid layouts replace canvas zoom-shrink on `/phased` and `/phase1`
- **Foundational Concepts** — phased lesson layout, evolution timeline with full era names and nest drill-down, GenAI cheat sheet (CREATE / UNDERSTAND / ORGANIZE / THINK grid, accordion below 900px), LLM vs Agent comparison table, simplified quiz UI, GVA equation hidden for clearer comparison focus
- **AI Tax Prompting** — 7 Elements tabbed cards, two-part activity (5-question MCQ + 10-pair match game), 7 Do's / 7 Don'ts golden rules, techniques catalog rebuild; wizard tab temporarily disabled pending nested framework redesign
- **M365 Copilot Hub** — laptop-stage hero with real MS app logos, combined use-case cards + interactive prompt scenes, Copilot walkthrough with consistent Continue flow, constant-height chat panel, ask-step explainer card timing
- **Module navigation** — curriculum-driven header, Learn/Apply tabs, prev/next module links, hash-based section scrolling, "What's Next" progression styling
- **Design token enforcement** — dark-module surfaces, velocity-bar brand colors, pipeline ring label (M365), repo hygiene and agent skills for consistent implementation

---

## Echo feedback

The [Echo](https://echo.analyzthis.com) comment SDK is loaded from `index.html`. After opening the app in a browser, a blue feedback button (FAB) appears in the bottom-right. Click it to leave threaded comments visible in the Echo AppDetails dashboard — useful for stakeholder review during development.

---

## Related documentation

| Document | Contents |
|----------|----------|
| [`docs/WHAT_WE_ARE_BUILDING.md`](docs/WHAT_WE_ARE_BUILDING.md) | Product intent, curriculum shape, principles |
| [`src/DESIGN.md`](src/DESIGN.md) | **Canonical design reference** — tokens, component catalog, UI patterns by page type, do's/don'ts |
| [`docs/design/EY-India-AI-Tax-Hub-Design-System.md`](docs/design/EY-India-AI-Tax-Hub-Design-System.md) | **Legacy / deprecated** — Motif DS 4.17 spec (`ds-cards.tsx`, `motif-ds.tsx`); not used in this codebase — use [`src/DESIGN.md`](src/DESIGN.md) instead |
| [`docs/ATTRIBUTIONS.md`](docs/ATTRIBUTIONS.md) | Image and asset attributions |
| [`docs/plans/TAX_LABS_CORRECTIONS_CHECKLIST.md`](docs/plans/TAX_LABS_CORRECTIONS_CHECKLIST.md) | Open corrections and polish items |

---

## One-line reminder

> **EY.ai Tax Labs is a modular, interactive training hub for EY tax professionals — AI foundations → prompting → M365 Copilot in real tax workflows, with brand, security, and enablement baked in.**
