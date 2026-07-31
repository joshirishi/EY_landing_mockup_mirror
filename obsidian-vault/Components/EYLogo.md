---
type: component
file: src/design-kit/EYLogo.tsx
description: EY logo lockup in four variants — mark-only, stacked, horizontal-sm, horizontal-lg
tags: [component, brand, logo]
---

# EYLogo

The canonical EY brand mark. Four layout variants, two color themes.

## Import

```tsx
import { EYLogo } from '@/design-kit';
```

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `'stacked' \| 'horizontal-sm' \| 'horizontal-lg' \| 'mark-only'` | — | Logo lockup |
| `theme` | `'dark' \| 'light'` | — | Letter color: white (dark) vs off-black (light) |
| `onClick` | `() => void` | — | Optional click handler |

## Variant guide

| Variant | Use case |
|---------|----------|
| `mark-only` | Site headers (`SiteHeader`, `EYNavbar`), constrained spaces |
| `stacked` | Branded callouts with vertical space |
| `horizontal-sm` | Compact horizontal layouts |
| `horizontal-lg` | Hero sections, large branded areas |

## Usage in practice

`SiteHeader` uses `mark-only` in both hub and learning variants:

```tsx
// Inside SiteHeader — already handled, don't re-wrap
<EYLogo variant="mark-only" theme="dark" />
```

## Rules

- Always use on a brand-appropriate background
- `theme="dark"` → white letterforms (for dark/confidentBlack backgrounds)
- `theme="light"` → off-black letterforms (for white/offWhite backgrounds)
- Don't scale below accessible size — use `mark-only` before shrinking

## Related

- [[Components/SiteHeader]] — embeds EYLogo
- [[Components/EYNavbar]] — embeds EYLogo
