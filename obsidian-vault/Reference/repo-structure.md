---
type: reference
source-file: README.md
last-updated: 2026-08-17T00:00:00Z
tags: [repo, structure, tech-stack]
---

# Repository Structure & Tech Stack

Source: `README.md`  
Repo path: `/Users/rishikeshjoshi/EY_landing_mockup`

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Build tool | Vite 6 | Fast dev server, ESM-native |
| UI framework | React 18 | Functional components + hooks |
| Language | TypeScript | `.tsx` throughout `src/` |
| Routing | React Router 7 | Browser router in `src/app/routes.tsx` |
| Styling | Tailwind CSS 4 + inline tokens | EY tokens take precedence |
| Design system | Custom EY design kit | `src/design-kit/` |
| Icons | Lucide React | Line/stroke icons only |
| Animation | Motion (Framer Motion successor) | Transitions in interactive sections |
| Fonts | EYInterstate | Weights 300 / 400 / 700 only |
| HTML lessons | Raw HTML imports | Vite `?raw` + DOM injection + token bridge |
| Package manager | pnpm (preferred) or npm | Lockfile: `pnpm-lock.yaml` |
| Deployment | Vercel | SPA with catch-all rewrite |

Path alias: `@/` → `src/`

## Directory Map

| Path | Purpose |
|------|---------|
| `src/app/` | App shell + React Router config |
| `src/pages/` | Live module pages |
| `src/design-kit/` | EY tokens, typography, curriculum map, shared UI |
| `src/imports/` | Figma-export views + HTML lesson sources |
| `src/assets/` | Bundled images |
| `src/styles/` | Global CSS — theme vars, fonts, Tailwind entry |
| `public/` | Static files — fonts, pipeline SVGs, lesson images |
| `docs/` | Product docs, content briefs, plans |
| `reference/` | Workshop originals — decks, xlsx, HTML, HITL art (not the running app) |
| `reference/html/` | Reference HTML prototypes — product blueprint |
| `reference/PDF/` | Current Phase 3 PDF (`phase3.pdf`) |
| `src/data/prompt-library.ts` | Priya PPT → Prompt Template Library |
| `src/data/agent-template-library.ts` | 9 M365 agent examples → Agent Template Library |
| `src/data/agent-best-practices.ts` | Agent Best Practices xlsx → Quick Recall + Copilot Hub |
| `skills/` | Agent skills for design/implementation workflows |

## Key Files

| File | Role |
|------|------|
| `src/design-kit/curriculum.ts` | Module titles, routes, sub-sections |
| `src/design-kit/tokens.ts` | Canonical EY colors, fonts, spacing, content width |
| `src/styles/theme.css` | CSS custom properties |
| `src/DESIGN.md` | **Canonical design reference** |
| `docs/WHAT_WE_ARE_BUILDING.md` | Product intent |

## How to Run

```bash
pnpm install
pnpm dev       # starts at http://localhost:5173
pnpm build     # output to dist/
```

See [[Reference/index]] and [[Reference/source-map]] for the full `reference/` graph.
See [[Reference/html-prototypes]] for reference HTML files.
See [[Design/design-system]] for design tokens.
