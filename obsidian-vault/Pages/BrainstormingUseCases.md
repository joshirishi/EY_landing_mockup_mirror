---
type: page
route: /brainstorming-use-cases
source: src/pages/BrainstormingUseCases.tsx
chrome: SiteHeader learning + SectionNav
description: Brainstorming Use Cases — supporting page for Phase 2 content, sticky section nav
tags: [page, supporting, phase2]
---

# Brainstorming Use Cases (`/brainstorming-use-cases`)

Supporting page for AI use-case brainstorming content. Uses the SectionNav sticky strip pattern (not ModuleHeader — this is not a curriculum module).

## Chrome

`SiteHeader variant="learning"` + `SectionNav` component (local to page).

## SectionNav pattern

- Sticky strip below breadcrumb, `z-index: 50`
- Background: `rgba(26,26,36,0.95)` + `backdropFilter: blur(8px)`
- Anchor buttons: 12px EYInterstate Regular, `onDarkMuted` → `yellow` when active
- Active indicator: `2px solid yellow` bottom border
- Scroll: `container.scrollTo({ top, behavior: 'smooth' })` on the `.overflow-auto` Root div
- Active tracking: `IntersectionObserver` with `rootMargin: "-20% 0px -60% 0px"`

See [[Design/interaction-patterns]] for full SectionNav details.

## Navigation

```tsx
<BrainstormingUseCases
  onBack={() => navigate('/phased')}
  onNavigate={navigate}
/>
```

## Related

- [[Pages/PhasedEngagement]] — entry point (back destination)
- [[Design/interaction-patterns]] — SectionNav scroll behavior
- [[Pages/GuidanceImplementation]] — sibling supporting page
