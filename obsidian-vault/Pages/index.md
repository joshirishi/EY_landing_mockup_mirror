---
type: index
description: All routed pages in the EY Tax Labs SPA — source files, routes, chrome, sections
last-updated: 2026-08-04
tags: [pages, routes, navigation]
---

# Pages

## Route registry

| Route | Page | Source | Chrome |
|-------|------|--------|--------|
| `/` | [[Pages/Home]] | `src/imports/Home2/index.tsx` | `SiteHeader hub` |
| `/phased` | [[Pages/PhasedEngagement]] | `src/imports/Frame353/index.tsx` (PhasedEngagementView) | `SiteHeader hub` |
| `/phase1` | [[Pages/Phase1]] | `src/imports/Frame353/index.tsx` (Phase1View) | `SiteHeader hub` + `ModuleHeader phase-overview` |
| `/foundational` | [[Pages/FoundationalConcepts]] | `src/pages/FoundationalConcepts.tsx` | Learning + `ModuleHeader module` |
| `/ai-tax-prompting` | [[Pages/AiTaxPrompting]] | `src/pages/AiTaxPrompting.tsx` | Learning + `ModuleHeader module` |
| `/copilot-hub` | [[Pages/M365CopilotHub]] | `src/pages/M365CopilotHub.tsx` | Learning + `ModuleHeader module` |
| `/phase2` | [[Pages/BrainstormingUseCases]] | `src/pages/BrainstormingUseCases.tsx` | Learning + `ModuleHeader` |
| `/guidance-implementation` | [[Pages/GuidanceImplementation]] | `src/pages/GuidanceImplementation.tsx` | Learning + `ModuleHeader` |
| `/closure-ai-reinforcement` | ClosureAiReinforcement | `src/pages/ClosureAiReinforcement.tsx` | Learning + `ModuleHeader` |

## Page categories

**Hub pages** (marketing/overview): Home, PhasedEngagement  
**Phase overview**: Phase1 (five module cards + workshop picker)  
**Module pages** (learning content): FoundationalConcepts, AiTaxPrompting, M365CopilotHub  
**Supporting pages**: BrainstormingUseCases (`/phase2`), GuidanceImplementation, ClosureAiReinforcement

## Coming-soon modules

| Route | Module | Status |
|-------|--------|--------|
| `/ai-governance` | AI Governance in Tax | coming-soon |
| `/advanced-workflows` | Advanced Tax Workflows | coming-soon |

Source: `src/design-kit/curriculum.ts`
