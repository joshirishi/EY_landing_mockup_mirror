---
type: component
file: src/design-kit/EYFrame.tsx
description: L-shaped Spectrum/Yellow frame with optional Approach Line — hero callout component
tags: [component, brand, hero, frame]
---

# EYFrame

The signature EY L-shaped frame. Used for hero callouts and brand moments, typically on dark backgrounds.

## Import

```tsx
import { EYFrame } from '@/design-kit';
```

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `'spectrum' \| 'yellow' \| 'breakthrough'` | — | Frame color style |
| `gradient` | `number` (1–7) | — | Spectrum preset (for `variant="spectrum"`) |
| `headline` | `string` | — | Primary headline |
| `headlineEnd` | `string` | — | Second line of headline |
| `subheading` | `string` | — | Supporting text below headline |
| `cta` | `string` | — | CTA button label |
| `showApproach` | `boolean` | — | Renders three yellow squares + tagline |

## Visual anatomy

```
  ┌──────────────────────────
  │ [Headline text]
  │ [Headline end]
  │
  │ [Subheading]
  │ [CTA button]
└──────────────────────────────
 ■ ■ ■  [Approach line tagline]   ← if showApproach=true
```

The L-shape is formed by top + left Spectrum gradient or yellow strokes. Stroke thickness is computed from `frameStroke()`.

## Frame stroke formula

```tsx
import { frameStroke } from '@/design-kit';
// Pass the longest edge in px
frameStroke(1200)          // ÷ 120 → 10px
frameStroke(600, true)     // ÷ 60 → 10px (square)
```

## Variants

| Variant | Frame color | Use case |
|---------|-------------|----------|
| `spectrum` | Spectrum gradient (1–7) | Most hero uses |
| `yellow` | `#FFE600` solid | Brand emphasis |
| `breakthrough` | Mixed | Special callouts |

## Rules

- Use on **dark** (`confidentBlack`) backgrounds only
- Content sits inside the frame content area — not the border itself
- Frame border is decorative; never clip content with it

## Used in

- [[Pages/Home]] — hero section
- [[Pages/PhasedEngagement]] — phased overview hero
