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

## Live sections (2026-08)

| ID | Content | Source |
|----|---------|--------|
| `#p3-bingo` | AI Fluency Bingo | Workshop / Echo notes |
| `#p3-prompts` | Quick Recall — 10 agent-writing practices | `reference/Agent Best Practices mailer content.xlsx` → `src/data/agent-best-practices.ts` |
| `#p3-your-use-cases` | Use-case buckets | Shared with Phase 2 |
| `#p3-hitl` | Human-in-the-loop | `reference/HILT/art-01…08` → `public/hitl/` → `HitlUnderstandModal` |
| `#p5-templates` | Workshop Reference Library (two catalogs) | Priya PPT + 9 agent examples — [[Reference/source-map]] |

## Related

- [[Pages/PhasedEngagement]] — entry point (back destination)
- [[Pages/BrainstormingUseCases]] — sibling supporting page (same bookshelf)
- [[Content/phase3-guidance]] — content documented in vault
- [[Reference/source-map]] — reference folder graph
- [[Reference/index]] — `reference/` inventory
