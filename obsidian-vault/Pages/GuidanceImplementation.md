---
type: page
route: /guidance-implementation
source: src/pages/GuidanceImplementation.tsx
chrome: SiteHeader learning + SectionNav
description: Guidance & Implementation — supporting page for Phase 3 content
tags: [page, supporting, phase3]
---

# Guidance & Implementation (`/guidance-implementation`)

Supporting page for AI implementation guidance content. Uses the SectionNav sticky strip pattern.

## Chrome

`SiteHeader variant="learning"` + `SectionNav` (local to page).

## Navigation

```tsx
<GuidanceImplementation
  onBack={() => navigate('/phased')}
  onNavigate={navigate}
/>
```

## SectionNav pattern

Same as [[Pages/BrainstormingUseCases]] — see [[Design/interaction-patterns]] for full SectionNav implementation details.

## Related

- [[Pages/PhasedEngagement]] — entry point (back destination)
- [[Pages/BrainstormingUseCases]] — sibling supporting page
- [[Content/phase3-guidance]] — content documented in vault
