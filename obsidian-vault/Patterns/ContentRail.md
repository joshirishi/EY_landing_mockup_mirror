---
type: pattern
description: Full-bleed section background with railed content — the layout primitive for every section
tags: [pattern, layout, content-rail]
---

# Pattern: Content Rail

Every section in the app follows the same two-layer structure:
1. **Full-bleed background** — spans the full viewport width
2. **Railed content** — constrained to `layout.contentWidth` (`min(90%, 1440px)`)

## The rule

> Section backgrounds are full-bleed. Content sits in the rail. **Never** set a `maxWidth` on a section wrapper — only on its content child.

## Implementation

### Option A — React style (preferred)

```tsx
import { contentRailStyle, spacing, colors } from '@/design-kit';

<section style={{
  background: colors.offWhite,
  padding: spacing.sectionPadding,     // 72px top/bottom, auto sides
}}>
  <div style={contentRailStyle}>       // ← max-width constrained content
    <EYHeading level={2}>Section title</EYHeading>
    <EYBody>Section body copy.</EYBody>
  </div>
</section>
```

### Option B — Vertical-only padding (when side padding is handled by child grid)

```tsx
<section style={{
  background: colors.confidentBlack,
  paddingTop: spacing.sectionPaddingY,
  paddingBottom: spacing.sectionPaddingY,
  paddingLeft: contentInlinePad,
  paddingRight: contentInlinePad,
}}>
  <div style={contentRailStyle}>
    {/* content */}
  </div>
</section>
```

### Option C — CSS class

```html
<section style="background: #1A1A24; padding: 72px 0;">
  <div class="ey-content-rail">
    <!-- content -->
  </div>
</section>
```

`.ey-content-rail` is defined in `src/styles/globals.css` and mirrors `contentRailStyle`.

## Token values

| Token | Value |
|-------|-------|
| `layout.contentWidth` | `min(90%, 1440px)` |
| `spacing.sectionPadding` | `72px ${contentInlinePad}` |
| `spacing.sectionPaddingY` | `72px` |
| `contentInlinePad` | `calc((100% - min(90%, 1440px)) / 2)` |

## Anti-patterns

```tsx
// ❌ Wrong — hardcoded width
<section style={{ maxWidth: 1200, margin: '0 auto' }}>

// ❌ Wrong — content width set on section instead of child
<section style={{ width: '80%', background: '#F6F6FA' }}>

// ✅ Correct
<section style={{ background: colors.offWhite, padding: spacing.sectionPadding }}>
  <div style={contentRailStyle}>…</div>
</section>
```

## Related

- [[Design/design-system]] — `layout` and `spacing` tokens
- [[Patterns/ModulePage]] — shows full section structure in context
- [[Patterns/SurfaceRhythm]] — surface tones for section backgrounds
