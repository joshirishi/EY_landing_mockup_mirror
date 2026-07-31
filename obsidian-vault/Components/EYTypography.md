---
type: component
file: src/design-kit/EYTypography.tsx
description: All EY text components — Heading, Body, Eyebrow, Display, CTA, Caption, Quote
tags: [component, typography, text]
---

# EYTypography

All text rendering in the EY kit. Every component accepts `theme="light" | "dark"`, `className`, and `style`.

## Import

```tsx
import {
  EYEyebrow, EYDisplay, EYHeading, EYSubheading,
  EYBody, EYCTA, EYCaption, EYQuote, SectionAnchorTitle
} from '@/design-kit';
```

---

## Component reference

### `EYEyebrow`
Uppercase category label. 13px bold, +0.04em tracking.

```tsx
<EYEyebrow theme="dark">Understanding AI</EYEyebrow>
// dark: yellow | light: eyebrowGold (#B89B00)
```

### `EYDisplay`
Hero display text. 64px bold, -0.025em tracking.

```tsx
<EYDisplay theme="dark">The Future of AI in Tax</EYDisplay>
```

### `EYHeading`
Headings at three levels.

| Level | Size | Weight |
|-------|------|--------|
| 1 | 40px | 700 |
| 2 | 32px | 700 |
| 3 | 20px | 700 |

```tsx
<EYHeading level={1} theme="light">Section Title</EYHeading>
<EYHeading level={2}>Subsection</EYHeading>
<EYHeading level={3}>Card title</EYHeading>
```

### `EYSubheading`
Supporting headline. 19px regular, -0.01em.

```tsx
<EYSubheading>Supporting context for the section above</EYSubheading>
```

### `EYBody`
Body copy. 16px light, -0.01em. **Applies `maxWidth: 640` by default.**

```tsx
<EYBody>Body copy text here.</EYBody>
// Override max-width when full-width is intentional:
<EYBody style={{ maxWidth: 'none' }}>Full-width.</EYBody>
```

### `EYCTA`
Underlined bold link text. 16px bold, -0.02em. Not a button.

```tsx
<EYCTA>Learn more about this module</EYCTA>
```

### `EYCaption`
Muted caption. 12px light.

```tsx
<EYCaption>Source: EY Tax Knowledge Base</EYCaption>
```

### `EYQuote`
Georgia pull-quote. 22px italic.

```tsx
<EYQuote>"AI is not replacing tax expertise — it's amplifying it."</EYQuote>
```

### `SectionAnchorTitle`
In-page section heading with anchor ID for scroll-spy.

```tsx
<SectionAnchorTitle id="pipeline">Prompt Flow</SectionAnchorTitle>
```

---

## When NOT to use components

- Inside Figma-export pages (`Home2`, `Frame353`): these often hardcode `font-['EYInterstate:Bold']` — acceptable for legacy exports, new code should use kit components
- Inside HTML lessons (`Foundational_Concepts.html`): use CSS custom properties via `TOKEN_BRIDGE`

---

## Related

- [[Design/design-system]] — full type scale table
- [[Patterns/HtmlLesson]] — token bridge for embedded HTML
