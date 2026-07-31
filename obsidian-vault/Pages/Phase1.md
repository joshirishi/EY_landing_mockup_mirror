---
type: page
route: /phase1
source: src/imports/Frame353/index.tsx (Phase1View)
chrome: SiteHeader hub + ModuleHeader phase-overview
description: Phase 1 course card grid — five modules with unlock states, workshop picker
tags: [page, phase-overview, figma-export]
---

# Phase 1 Overview (`/phase1`)

Course card grid for Phase 1 — Foundational Training Workshops. Figma export showing five module cards with their unlock states.

## Source

`src/imports/Frame353/index.tsx` — `Phase1View` component.

## Chrome

```tsx
<SiteHeader variant="hub" onNavigate={navigate} />
<ModuleHeader mode="phase-overview" onNavigate={navigate} onBack={() => navigate('/phased')} />
```

## Module cards

| Module | Route | Status |
|--------|-------|--------|
| Foundational Concepts of AI | `/foundational` | Available |
| AI Tax Prompting | `/ai-tax-prompting` | Available |
| M365 Copilot Dashboard | `/copilot-hub` | Available |
| AI Governance in Tax | `/ai-governance` | Coming soon |
| Advanced Tax Workflows | `/advanced-workflows` | Coming soon |

## Navigation props

```tsx
<Phase1View
  onNavigate={navigate}
  onNavigateToFoundational={() => navigate('/foundational')}
  onNavigateToAiTaxPrompting={() => navigate('/ai-tax-prompting')}
  onNavigateToCopilotHub={() => navigate('/copilot-hub')}
/>
```

## Course card pattern

Each card shows:
- Module number badge
- Module title (exact match from `curriculum.ts`)
- Estimated time
- Unlock state indicator
- CTA navigating to module route

## Related

- [[Pages/FoundationalConcepts]], [[Pages/AiTaxPrompting]], [[Pages/M365CopilotHub]] — module destinations
- [[Pages/PhasedEngagement]] — parent overview page
- [[Components/ModuleHeader]] — `phase-overview` mode
- [[Curriculum/phase1-modules]] — module data source
