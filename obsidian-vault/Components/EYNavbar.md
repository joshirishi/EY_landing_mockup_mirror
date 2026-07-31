---
type: component
file: src/design-kit/EYNavbar.tsx
description: Global sticky nav bar — simpler alternative to SiteHeader for standalone pages
tags: [component, chrome, navigation]
---

# EYNavbar

A simpler sticky navigation bar. Use `SiteHeader` for hub and learning pages; `EYNavbar` is for lighter nav needs.

## Import

```tsx
import { EYNavbar } from '@/design-kit';
```

## Props

| Prop | Type | Notes |
|------|------|-------|
| `items` | `NavItem[]` | Nav link list |
| `onLogoClick` | `() => void` | Logo click handler |
| `rightSlot` | `ReactNode` | Extra right-aligned actions |

## `NavItem` type

```tsx
type NavItem = {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
};
```

## Active link style

Active item: white text + `2px solid colors.yellow` bottom border.  
Inactive: `colors.gray02` → white on hover.

## When to use vs SiteHeader

| Situation | Use |
|-----------|-----|
| Hub home (`/`) | `SiteHeader variant="hub"` |
| Learning/module pages | `SiteHeader variant="learning"` + `ModuleHeader` |
| Standalone page needing simple nav | `EYNavbar` |

## Related

- [[Components/SiteHeader]] — full-featured top chrome
- [[Components/EYFooter]] — always paired with a nav at bottom
