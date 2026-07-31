---
type: component
file: src/design-kit/EYFooter.tsx
description: Site footer with Spectrum top accent line, column headings in yellow, and social slot
tags: [component, chrome, footer]
---

# EYFooter

Site-wide footer with an optional Spectrum gradient top accent line.

## Import

```tsx
import { EYFooter } from '@/design-kit';
```

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `columns` | `{ heading: string; links: string[] }[]` | — | Footer link columns |
| `gradient` | `number` (1–7) | — | Spectrum preset for the top accent line |
| `copyright` | `string` | — | Bottom-left copyright text |
| `socialSlot` | `ReactNode` | — | Bottom-right social icon area |

## Visual anatomy

```
[Spectrum gradient accent line — full width, top of footer]
──────────────────────────────────────────────────────────
  COLUMN HEADING    COLUMN HEADING    COLUMN HEADING    ← yellow bold uppercase
  Link 1            Link 1            Link 1
  Link 2            Link 2            Link 2
──────────────────────────────────────────────────────────
  © 2024 EY…                                [social icons]
```

## Color rules

- Column headings: `colors.yellow` — this is a sanctioned yellow-on-dark use
- Link text: `colors.gray02` → white on hover
- Background: `colors.confidentBlack`

## Example

```tsx
<EYFooter
  gradient={3}
  columns={[
    { heading: 'About', links: ['Our Story', 'EY Brand'] },
    { heading: 'Resources', links: ['Documentation', 'Design Kit'] },
  ]}
  copyright="© 2024 Ernst & Young India"
/>
```

## Related

- [[Components/EYNavbar]] — nav partner at the top
- [[Design/design-principles]] — yellow usage rules
