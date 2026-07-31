---
name: interaction-patterns
description: Established interaction patterns across the EY Tax Labs SPA — animations, hover states, section nav, and UX decisions
metadata:
  type: project
---

# Interaction Patterns — EY.ai Tax Labs

**Last updated:** 2026-07-31

---

## Section Navigation (SectionNav component)

Used on: `/brainstorming-use-cases`, `/guidance-implementation`

- Sticky strip below the breadcrumb, `z-index: 50`
- Background: `rgba(26,26,36,0.95)` + `backdropFilter: blur(8px)`
- Anchor buttons: 12px EYInterstate Regular, `C.onDarkMuted` → `C.yellow` when active
- Active indicator: `2px solid C.yellow` bottom border on active button
- Scroll behavior: `container.scrollTo({ top, behavior: 'smooth' })` where container = `.overflow-auto` Root div
- Active tracking: `IntersectionObserver` with `rootMargin: "-20% 0px -60% 0px"`, `root: .overflow-auto`

---

## HITL Stagger Animation (Phase 3, Panel 4)

Zara's peak moment — Peak-End Rule applied to the Human-in-the-Loop flow.

- Each step box: `motion.div` with `whileInView={{ opacity:1, y:0 }}` stagger `delay: i * 0.12s`
- Step 04 "Human review" (yellow): nested `motion.div` with `whileInView={{ scale:[1, 1.04, 1] }}` after `delay: 0.7s`
- `viewport={{ once: true, margin: "-100px" }}`
- Total runtime: ~900ms

---

## Card Hover States

Applied across all pages from 2026-07-31:

**Dark surface cards** (on `confidentBlack` or `offBlack`):
```
onMouseEnter: background → rgba(255,255,255,0.08)
onMouseLeave: background → rgba(255,255,255,0.04)
transition: background 150ms ease
```

**Light surface cards** (on `offWhite` or `white`):
```
onMouseEnter: box-shadow → 0 4px 16px rgba(26,26,36,0.14)
onMouseLeave: box-shadow → 0 2px 8px rgba(26,26,36,0.07)
transition: box-shadow 150ms ease
```

**Table rows** (on white background):
```
onMouseEnter: background → rgba(26,26,36,0.03)
onMouseLeave: background → transparent
transition: background 120ms ease
```

---

## FROM/TO Stagger (Phase 2 Panel 1)

- `motion.li` on TO bullets: `initial={{ opacity:0, y:8 }}`, `animate={{ opacity:1, y:0 }}`
- `transition: { delay: 0.4 + i * 0.1, duration: 0.3, ease: "easeOut" }`

---

## Build/Test/Refine Entrance (Phase 3 Panel 1)

- `motion.div` on each step box: `initial={{ opacity:0, y:12 }}`, `animate={{ opacity:1, y:0 }}`
- `transition: { delay: i * 0.15, duration: 0.35, ease: "easeOut" }`
- `whileHover={{ backgroundColor: "rgba(255,255,255,0.09)" }}`

---

## Expandable Prompt Categories (Phase 2 Panel 5)

- Click-to-expand on 4 prompt category cards
- State: `expandedCat: string | null`
- Visual: background lightens from `rgba(255,255,255,0.04)` → `rgba(255,255,255,0.08)` when open

---

## NumberedRow Component

Shared pattern across Phase 2 and Phase 3 for all element lists (8 prompt, 7 agent, etc.):
```tsx
// grid: 36px (number) | 140–160px (label) | 1fr (description)
// padding: 11–13px 0, borderBottom
// props: n, label, desc/question, color, light (boolean for dark/light surface)
```

See [[Reference/repo-structure]] for file locations.
