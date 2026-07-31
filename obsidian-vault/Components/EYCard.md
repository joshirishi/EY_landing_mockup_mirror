---
type: component
file: src/design-kit/EYCard.tsx
description: Insight card with Spectrum frame border, eyebrow, title, body, and CTA
tags: [component, card, content]
---

# EYCard

Insight card following the EY web component spec. Features a thumbnail with a Spectrum gradient frame overlay, eyebrow category label, title, optional body text, and a CTA link.

## Import

```tsx
import { EYCard } from '@/design-kit';
```

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `title` | `string` | required | Card headline |
| `eyebrow` | `string` | — | Uppercase category label (gold on light, yellow on dark) |
| `body` | `string` | — | Optional body text |
| `cta` | `string` | — | CTA link text (renders with → arrow) |
| `gradient` | `number` (1–7) | `3` | Spectrum preset for frame border overlay |
| `imageUrl` | `string` | — | Thumbnail background image URL |
| `imageHeight` | `number` | `140` | Thumbnail height in px |
| `theme` | `'light' \| 'dark'` | `'light'` | Surface tone |
| `onClick` | `() => void` | — | Makes card clickable with hover lift |
| `className`, `style` | — | — | Pass-through |
| `children` | `ReactNode` | — | Extra content inside card body |

## Visual anatomy

```
┌─────────────────────────────┐
│ [Thumbnail image]           │  ← imageHeight px
│  ╔══════════════════╗      │  ← Spectrum frame border (top/left/right)
│  ║                  ║      │     gradient preset from spectrumGradients
└─────────────────────────────┘
  [EYEBROW LABEL]              ← gold (light) or yellow (dark)
  Card title text              ← 16px bold, offBlack or white
  Optional body copy           ← 14px light, gray01 or gray02
  CTA link text →             ← bold, underlined
```

## Hover behavior

When `onClick` is provided: `translateY(-2px)` + `box-shadow: 0 8px 32px rgba(0,0,0,0.15)`.

## Theme differences

| Prop | Light | Dark |
|------|-------|------|
| Card bg | `white` | `confidentBlack` |
| Border | `gray02` | `offBlack` |
| Title | `offBlack` | `white` |
| Body | `gray01` | `gray02` |
| Eyebrow | `eyebrowGold` | `yellow` |

## Examples

```tsx
<EYCard
  eyebrow="Featured thinking"
  title="How can alumni networks create new opportunities?"
  body="Explore the power of EY alumni connections globally."
  cta="Read more"
  gradient={4}
  imageUrl="/assets/img.jpg"
  onClick={() => navigate('/article')}
/>

// Dark variant
<EYCard theme="dark" gradient={6} title="AI Governance" cta="Start →" />
```

## Used in

- [[Pages/Home]] — hub home featured content tiles
- [[Pages/Phase1]] — course module cards (similar visual pattern)
