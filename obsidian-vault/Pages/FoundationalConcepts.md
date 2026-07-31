---
type: page
route: /foundational
source: src/pages/FoundationalConcepts.tsx
chrome: SiteHeader learning + ModuleHeader module
module-id: foundational
estimated-time: ~45 min
description: Module 1 — Foundational Concepts of AI, HTML lesson rendered inside React with token bridge
tags: [page, module, learning, html-lesson]
---

# Foundational Concepts (`/foundational`)

Module 1 of Phase 1. Unlike other modules, this is an **embedded HTML lesson** rendered inside the React shell via a token bridge — not a native React component tree.

## Chrome

```tsx
<SiteHeader variant="learning" onNavigate={navigate} skipLinkTarget="#module-content" />
<ModuleHeader currentModuleId="foundational" onNavigate={navigate} onBack={onBack} />
```

## Source

- **React shell:** `src/pages/FoundationalConcepts.tsx`
- **HTML lesson content:** `src/imports/Foundational_Concepts.html`
- **Token bridge:** `TOKEN_BRIDGE` constant in `FoundationalConcepts.tsx` — scopes CSS custom properties under `#module-content`

## Sub-modules (from `curriculum.ts`)

| ID | Label | Group |
|----|-------|-------|
| `act-now` | Act Now | learn |
| `rise-of-ai` | Understanding AI | learn |
| `evolution` | Evolution | learn |
| `terminology` | Guided Demo | learn |
| `cheatsheet` | Cheat Sheet | apply |
| `genai-vs-agents` | GenAI vs Agents | learn |
| `quiz` | Quiz | apply |

## Section anatomy (inside HTML lesson)

| Section ID | Pattern | Surface |
|------------|---------|---------|
| `#home` / `.hero` | Video hero, play overlay, duration badge | Dark |
| `#rise-of-ai` | News card grid, lightbox on click | Dark `.rise-section` |
| `#reality-check` | "Wrong assumptions" interactive cards | Neutral |
| `#strategic-divide` | Two-path comparison + VS diamond divider + yellow footer CTA | Light |
| `#evolution` | Timeline breadcrumb, concentric nest diagram, era panel, analogy + chips | Dark `.evo-section` |
| `#terminology` | Key terms / guided demo | Light |
| `#cheatsheet` | Accordion columns (`<details>`) with cheat rows | Neutral |
| `#genai-vs-agents` | GVA compare grid (sticky column headers) | Dark `.gva-section` |
| `#quiz` | Multi-card quiz with success/destructive feedback states | Light |

## Token bridge

The HTML lesson cannot import JS tokens directly. `FoundationalConcepts.tsx` injects a `<style>` block inside `#module-content` that maps EY token values to CSS custom properties:

```tsx
const TOKEN_BRIDGE = `
  #module-content {
    --ey-yellow: ${colors.yellow};
    --ey-confident-black: ${colors.confidentBlack};
    /* ... all tokens ... */
  }
`;
```

The HTML lesson then uses `var(--ey-yellow)` etc.

## HTML lesson conventions

- Lucide-equivalent stroke SVGs in markup (not emoji)
- `.paths-cta` uses `confidentBlack` fill + white text
- Section padding uses `--section-padding` / `--ey-content-inline-pad`
- `.surface-dark`, `.surface-neutral`, `.surface-light` CSS classes for surface rhythm

## ModuleHeader section click override

Since the content is in an iframe-like scroll context, `ModuleHeader` receives `onSectionClick`:

```tsx
<ModuleHeader
  currentModuleId="foundational"
  onSectionClick={(id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
/>
```

## Related

- [[Patterns/HtmlLesson]] — HTML lesson patterns and token bridge guide
- [[Patterns/SurfaceRhythm]] — `.surface-*` class conventions
- [[Components/ModuleHeader]] — tab navigation
- [[Pages/Phase1]] — navigates here from module card
