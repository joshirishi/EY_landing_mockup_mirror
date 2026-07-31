---
type: component
file: src/design-kit/SiteHeader.tsx
description: Shared top chrome — hub variant (Home/Phased) and learning variant (module pages)
tags: [component, chrome, navigation, header]
---

# SiteHeader

Shared top chrome for every page. Two variants with very different visual structures.

## Import

```tsx
import { SiteHeader, PlatformModeBadge } from '@/design-kit';
```

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `'hub' \| 'learning'` | `'hub'` | Which chrome to render |
| `activeSection` | `'home' \| 'tax-labs'` | `'tax-labs'` | Hub variant only — highlights active nav link |
| `onNavigate` | `(path: string) => void` | required | Route callback |
| `rightSlot` | `ReactNode` | — | Hub brand bar right-aligned extras |
| `skipLinkTarget` | `string` | — | Renders invisible "Skip to content" link for a11y |

---

## Hub variant (`variant="hub"`)

Used on: `/` (Home) and `/phased` (Phased Engagement).

Visual structure:
```
[3px yellow strip — full width]
[Off-black brand bar: EY mark + "India AI Tax Hub" | rightSlot]
[#2E2E38 section nav: "About EY India AI Tax Hub" | "EY.ai Tax Labs"]
```

- Active nav link: `colors.yellow` text
- Inactive nav link: `colors.gray02` → white on hover
- Focus ring: `2px solid colors.yellow`

## Learning variant (`variant="learning"`)

Used on: `/phase1`, `/foundational`, `/ai-tax-prompting`, `/copilot-hub`.

Visual structure:
```
[confidentBlack bar: EY mark + "EY.ai Tax Labs / INDIA TAX HUB" | PlatformModeBadge]
```

- No site-section nav row
- Logo/brand is a button that navigates to `/phased`
- `PlatformModeBadge` hidden on narrow screens
- Border-bottom: `1px solid #2E2E38`

## PlatformModeBadge

Separate export — small right-aligned status badge:

```tsx
<PlatformModeBadge />
// Renders: "Platform Mode: Active Learning" in yellow bold uppercase
```

---

## Usage patterns

```tsx
// Hub pages
<SiteHeader
  variant="hub"
  activeSection="tax-labs"
  onNavigate={navigate}
  skipLinkTarget="#main-content"
/>

// Module pages (always paired with ModuleHeader)
<SiteHeader
  variant="learning"
  onNavigate={navigate}
  skipLinkTarget="#module-content"
/>
<ModuleHeader currentModuleId="ai-tax-prompting" onNavigate={navigate} onBack={onBack} />
```

---

## Related

- [[Components/ModuleHeader]] — Level 2 chrome below SiteHeader on learning pages
- [[Patterns/ModulePage]] — full module page shell
- [[Pages/Home]] — uses hub variant
- [[Pages/AiTaxPrompting]] — uses learning variant
