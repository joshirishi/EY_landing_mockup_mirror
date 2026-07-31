---
type: pattern
description: Dark/Neutral/Light surface alternation — the core visual rhythm of module pages
tags: [pattern, surface, color, rhythm]
---

# Pattern: Surface Rhythm

Module pages alternate three surface tones for visual hierarchy and rhythm. Never put the same surface twice in a row.

## The three tones

| Tone | Background | Heading | Body | Eyebrow |
|------|------------|---------|------|---------|
| `dark` | `confidentBlack` (#1A1A24) | `onDark` (white) | `gray02` | `yellow` |
| `neutral` | `offWhite` (#F6F6FA) | `confidentBlack` | `gray01` | `eyebrowGold` |
| `light` | `white` (#FFFFFF) | `confidentBlack` | `gray01` | `eyebrowGold` |

## Implementation (React modules)

```tsx
import { colors } from '@/design-kit';

const SURFACE = {
  dark: {
    bg:      colors.confidentBlack,
    heading: colors.onDark,
    body:    colors.gray02,
    eyebrow: colors.yellow,
  },
  neutral: {
    bg:      colors.offWhite,
    heading: colors.confidentBlack,
    body:    colors.gray01,
    eyebrow: colors.eyebrowGold,
  },
  light: {
    bg:      colors.white,
    heading: colors.confidentBlack,
    body:    colors.gray01,
    eyebrow: colors.eyebrowGold,
  },
} as const;

// Usage:
<section style={{ background: SURFACE.dark.bg }}>
  <EYEyebrow theme="dark">Act Now</EYEyebrow>
  <EYHeading level={2} style={{ color: SURFACE.dark.heading }}>Section Title</EYHeading>
  <EYBody style={{ color: SURFACE.dark.body }}>Body copy</EYBody>
</section>
```

## Implementation (HTML lessons)

CSS classes applied to `<section>` elements:

```html
<section class="surface-dark">…</section>
<section class="surface-neutral">…</section>
<section class="surface-light">…</section>
```

The token bridge in `FoundationalConcepts.tsx` defines these classes using EY token values.

## Rhythm example (AiTaxPrompting)

```
Hero           → dark
Pipeline       → neutral
Team Briefing  → light
7 Elements     → dark
Weak vs Strong → neutral
Stack Builder  → light
Advanced       → dark
Activity       → neutral
Do's & Don'ts  → light
```

## Rules

- **Never** use the same surface twice in a row
- Dark sections require `onDark*` text hierarchy (not `offBlack`/`gray01`)
- Eyebrow is always `yellow` on dark, `eyebrowGold` on neutral/light
- Hero sections are almost always dark

## Related

- [[Patterns/ModulePage]] — where SURFACE map lives
- [[Pages/AiTaxPrompting]] — reference implementation
- [[Design/design-principles]] — surface rhythm origin
- [[Design/design-system]] — token reference
