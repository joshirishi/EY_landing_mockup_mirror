---
type: component
file: src/design-kit/EYButton.tsx
description: Three sanctioned EY button styles — primary, secondary, text
tags: [component, action, button]
---

# EYButton

Three variants, all using `EYInterstate:Bold` and token colors.

## Import

```tsx
import { EYButton } from '@/design-kit';
```

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `'primary' \| 'secondary' \| 'text'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Padding/font scale |
| `children` | `ReactNode` | required | Button label |
| `arrow` | `boolean` | — | Appends → suffix |
| `...rest` | `ButtonHTMLAttributes` | — | All native button props pass through |

## Variants

| Variant | Background | Text | Hover |
|---------|------------|------|-------|
| `primary` | `confidentBlack` | white | `offBlack` fill |
| `secondary` | transparent | `offBlack` | `offBlack` fill + white text |
| `text` | transparent | `offBlack`, underlined | yellow text |

## Sizes

| Size | Padding | Font |
|------|---------|------|
| `sm` | 8px 20px | 13px |
| `md` | 12px 28px | 14px |
| `lg` | 16px 36px | 16px |

## Rules

- **Never** fill a button with solid EY Yellow — `EYButton` explicitly forbids this
- Use `primary` for main actions on **dark** or **neutral** backgrounds
- Use `secondary` for alternative actions on light backgrounds
- Use `text` for in-line navigation links
- For the sanctioned yellow-fill CTA (dark module only), use `EYWhatsNext`'s built-in button — don't replicate it with `EYButton`

## Examples

```tsx
<EYButton variant="primary" arrow>Start Learning</EYButton>
<EYButton variant="secondary" size="sm">View all modules</EYButton>
<EYButton variant="text">Read more</EYButton>
```

## Used in

- [[Pages/AiTaxPrompting]] — module CTAs
- [[Pages/M365CopilotHub]] — action buttons
- [[Components/EYWhatsNext]] — uses its own internal yellow CTA (not EYButton)
