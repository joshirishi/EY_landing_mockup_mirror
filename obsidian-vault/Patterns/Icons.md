---
type: pattern
description: Icon rules — Lucide React only, stroke/line style, forbidden patterns
tags: [pattern, icons, lucide]
---

# Pattern: Icons

## The rule

**Lucide React only.** Line/stroke icons. No emoji as UI icons.

```tsx
import { ArrowRight, FileSearch, ChevronDown } from 'lucide-react';

<ArrowRight size={16} strokeWidth={1.75} />
```

## Sizing

| Context | Size | strokeWidth |
|---------|------|-------------|
| Inline with body text | 16px | 1.75 |
| Standalone / card icons | 20px | 1.75 |
| Hero / large display | 24px+ | 1.5 |

## Color

Always `currentColor` — inherits from parent's `color`. Never hardcode an icon fill color.

```tsx
// ✅ Correct — inherits from parent
<span style={{ color: colors.yellow }}>
  <ArrowRight size={16} />
</span>

// ❌ Wrong — hardcoded color on icon
<ArrowRight size={16} color="#FFE600" />
```

## In HTML lessons

Use inline SVG matching Lucide stroke style:

```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
```

## Forbidden

| Pattern | Why |
|---------|-----|
| Emoji (👇 ✅ ➡️ 🔥) | Not accessible, breaks EY brand |
| Filled/solid icon sets | EY kit uses line icons only |
| Font Awesome / heroicons | Inconsistent stroke weight with Lucide |
| Background-image icons | Can't be themed with `currentColor` |

## Common icons in this codebase

| Icon | Used in |
|------|---------|
| `ArrowRight` | `EYWhatsNext` CTA, `EYButton` arrow prop |
| `ChevronDown` | Accordion expand indicators |
| `FileSearch` | Home pillar cards |
| `Play` / `PlayCircle` | Video hero overlay |
| `Lock` | Coming-soon module cards |
| `Check` / `X` | Quiz feedback states |

## Related

- [[Patterns/AccordionComparison]] — stroke SVG in HTML lessons
- [[Components/EYWhatsNext]] — ArrowRight usage
- [[Design/design-system]] — design principles
