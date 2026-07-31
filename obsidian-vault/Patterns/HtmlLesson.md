---
type: pattern
description: Embedded HTML lesson pattern with token bridge — used for FoundationalConcepts
tags: [pattern, html-lesson, token-bridge, embedded]
---

# Pattern: HTML Lesson with Token Bridge

Used in [[Pages/FoundationalConcepts]]. The lesson content is a standalone HTML file that cannot import JS tokens, so `FoundationalConcepts.tsx` injects a CSS `<style>` block (the "token bridge") that maps EY token values to CSS custom properties scoped to `#module-content`.

## Files

| File | Role |
|------|------|
| `src/pages/FoundationalConcepts.tsx` | React shell + token bridge injector |
| `src/imports/Foundational_Concepts.html` | Full HTML lesson content |

## Token bridge pattern

```tsx
// FoundationalConcepts.tsx
import { colors, fonts, spacing, contentInlinePad } from '@/design-kit';

const TOKEN_BRIDGE = `
  #module-content {
    --ey-yellow: ${colors.yellow};
    --ey-confident-black: ${colors.confidentBlack};
    --ey-off-black: ${colors.offBlack};
    --ey-off-white: ${colors.offWhite};
    --ey-gray01: ${colors.gray01};
    --ey-gray02: ${colors.gray02};
    --ey-on-dark: ${colors.onDark};
    --ey-eyebrow-gold: ${colors.eyebrowGold};
    --ey-font-bold: ${fonts.bold};
    --ey-font-regular: ${fonts.regular};
    --ey-font-light: ${fonts.light};
    --section-padding: ${spacing.sectionPadding};
    --ey-content-inline-pad: ${contentInlinePad};
  }
`;
```

The HTML lesson then uses `var(--ey-yellow)`, `var(--ey-font-bold)`, etc.

## HTML lesson CSS conventions

### Surface classes

```css
.surface-dark    { background: var(--ey-confident-black); }
.surface-neutral { background: var(--ey-off-white); }
.surface-light   { background: #ffffff; }
```

### Typography

```css
.ey-eyebrow { font-family: var(--ey-font-bold); font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase; }
```

### Icon rule

Use inline SVG matching Lucide stroke style — **never emoji**:

```html
<!-- ✅ Correct -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">…</svg>

<!-- ❌ Wrong -->
<span>✅</span>
```

### CTA style

`.paths-cta` uses `confidentBlack` fill + white text (the sanctioned light-page CTA):

```css
.paths-cta {
  background: var(--ey-confident-black);
  color: #ffffff;
}
```

## Section IDs

HTML lesson sections must use the same IDs as `curriculum.ts` sub-modules so `ModuleHeader` scroll-spy works:

```html
<section id="rise-of-ai">…</section>
<section id="evolution">…</section>
<section id="cheatsheet">…</section>
```

## ModuleHeader integration

Because the content is in a scroll context separate from the window, pass `onSectionClick`:

```tsx
<ModuleHeader
  currentModuleId="foundational"
  onSectionClick={(id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }}
  onNavigate={navigate}
  onBack={onBack}
/>
```

## Related

- [[Pages/FoundationalConcepts]] — the page using this pattern
- [[Patterns/SurfaceRhythm]] — `.surface-*` classes
- [[Components/ModuleHeader]] — scroll-spy integration
