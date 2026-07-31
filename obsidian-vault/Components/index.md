---
type: index
description: All design-kit React components — when to use, props, import path
last-updated: 2026-07-31
tags: [components, design-kit, ey-brand]
---

# Component Catalog

All components live in `src/design-kit/` and are re-exported from a single entry point:

```tsx
import { EYButton, EYCard, EYFrame, EYLogo, EYNavbar, EYFooter,
         SiteHeader, ModuleHeader, EYWhatsNext, EYWhatsNextHighlight,
         EYEyebrow, EYHeading, EYBody, EYDisplay, EYSubheading,
         EYCTA, EYCaption, EYQuote, SectionAnchorTitle,
         PlatformModeBadge, ModulePrevNext } from '@/design-kit';
```

---

## Component registry

| Component | File | Category | Notes |
|-----------|------|----------|-------|
| [[Components/EYLogo]] | `EYLogo.tsx` | Brand | Logo lockup — mark-only, stacked, horizontal |
| [[Components/EYButton]] | `EYButton.tsx` | Action | primary / secondary / text variants |
| [[Components/EYCard]] | `EYCard.tsx` | Content | Insight card with Spectrum frame overlay |
| [[Components/EYFrame]] | `EYFrame.tsx` | Brand | L-shaped Spectrum/Yellow hero frame |
| [[Components/EYTypography]] | `EYTypography.tsx` | Text | All text components — Heading, Body, Eyebrow, etc. |
| [[Components/SiteHeader]] | `SiteHeader.tsx` | Chrome | Hub and learning top bar |
| [[Components/ModuleHeader]] | `LearningNav.tsx` | Chrome | Level 2 breadcrumb + Learn/Apply tabs |
| [[Components/EYWhatsNext]] | `EYWhatsNext.tsx` | CTA | End-of-module handoff card |
| [[Components/EYNavbar]] | `EYNavbar.tsx` | Chrome | Simpler global sticky nav |
| [[Components/EYFooter]] | `EYFooter.tsx` | Chrome | Footer with Spectrum top accent |

---

## Tokens & helpers (not components)

| Export | File | Use |
|--------|------|-----|
| `colors`, `fonts`, `typeScale`, `spacing`, `layout` | `tokens.ts` | Raw design values |
| `contentRailStyle`, `contentInlinePad` | `tokens.ts` | Content rail helpers |
| `spectrumGradients`, `spectrumCss` | `tokens.ts` | Gradient presets |
| `frameStroke` | `tokens.ts` | Frame stroke calculator |
| `MODULES`, `PHASES`, `getModule`, etc. | `curriculum.ts` | Curriculum data |
| `SUBNAV_SCROLL_OFFSET`, `SUBNAV_SCROLL_MARGIN` | `LearningNav.tsx` | Scroll offset constants |
| `useModuleSectionHashScroll` | `LearningNav.tsx` | Hash-based section scroll hook |
