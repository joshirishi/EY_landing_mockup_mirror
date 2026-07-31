---
type: page
route: /phased
source: src/imports/Frame353/index.tsx (PhasedEngagementView)
chrome: SiteHeader hub
description: Phased engagement overview — timeline cards, Core Processing Pipeline infographic, navigation to Phase 1
tags: [page, hub, overview, figma-export]
---

# Phased Engagement (`/phased`)

Hub-level overview of the EY.ai Tax Labs journey. Figma export showing the three-phase structure, timeline cards, and the Core Processing Pipeline diagram.

## Source

`src/imports/Frame353/index.tsx` — `PhasedEngagementView` component (Figma export).

## Chrome

```tsx
<SiteHeader variant="hub" activeSection="tax-labs" onNavigate={navigate} />
```

## Sections

| Pattern | Description |
|---------|-------------|
| **Timeline cards** | `TimelineCard` components — phase milestones in sequence |
| **Core Processing Pipeline** | `CoreProcessingPipeline.tsx` — 1200×820px infographic, scales to container |
| **Phase 1 CTA** | Navigates to `/phase1` |
| **Brainstorming CTA** | Navigates to `/brainstorming-use-cases` |
| **Implementation CTA** | Navigates to `/guidance-implementation` |

## Core Processing Pipeline

Source: `src/imports/Frame353/CoreProcessingPipeline.tsx`

- 1200×820px logical canvas, scaled with `DISPLAY_SCALE`
- **Left side:** Yellow processing cards (Chat, RAG, Human Review, Model)
- **Center:** Copilot center ring
- **Right side:** M365 app icons on semicircular orbit
- Shared geometry constants: `CX`, `CY`, `R`

## Navigation props

```tsx
<PhasedEngagementView
  onNavigateToPhase1={() => navigate('/phase1')}
  onNavigateToBrainstorming={() => navigate('/brainstorming-use-cases')}
  onNavigateToImplementation={() => navigate('/guidance-implementation')}
/>
```

## Related

- [[Pages/Phase1]] — primary CTA destination
- [[Pages/BrainstormingUseCases]] — secondary destination
- [[Pages/GuidanceImplementation]] — secondary destination
- [[Pages/Home]] — navigates here from Tax Labs entry
