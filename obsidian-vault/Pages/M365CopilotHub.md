---
type: page
route: /copilot-hub
source: src/pages/M365CopilotHub.tsx
chrome: SiteHeader learning + ModuleHeader module
module-id: copilot-hub
estimated-time: ~60 min
description: Module 3 — M365 Copilot Dashboard with per-app prompt repository and laptop stage
tags: [page, module, learning, copilot, m365]
---

# M365 Copilot Hub (`/copilot-hub`)

Module 3 of Phase 1. M365 app-themed prompting repository with a laptop/app-stage metaphor.

## Chrome

```tsx
<SiteHeader variant="learning" onNavigate={navigate} skipLinkTarget="#module-content" />
<ModuleHeader currentModuleId="copilot-hub" onNavigate={navigate} onBack={onBack} />
```

## Sub-modules (from `curriculum.ts`)

| ID | Label | Group |
|----|-------|-------|
| `prompt-repository` | M365 Apps | learn |
| `useful-links` | Useful Links | apply |
| `security` | Security & Governance | apply |

## Section anatomy

| Section ID | Pattern | Surface |
|------------|---------|---------|
| `#module-content` (hero) | Full-bleed dark, stock image, scrim, spectrum top rule | Dark |
| `#prompt-repository` | App tabs (Word/Excel/PPT/Outlook/M365 Chat) — app-colored eyebrows | Dark |
| Laptop stage | Floating app widgets dock → jump to tab; "coming soon" dock items | Dark |
| Per-app tab content | Use-case grid + Copilot prompt panel + screenshot column | Neutral |
| `#useful-links` | Link list | Light |
| `#security` | Security & governance content | Neutral |

## M365 app color coding

Tab eyebrows use M365 app identity colors (CSS vars only, not in tokens.ts):

| App | CSS var |
|-----|---------|
| Word | `--ey-app-word` |
| Excel | `--ey-app-excel` |
| PowerPoint | `--ey-app-ppt` |
| Outlook | `--ey-app-outlook` |
| M365 Chat | `--ey-app-copilot` |

> **Rule:** M365 colors are for app chrome identity only — all structural layout still uses EY tokens.

## Laptop stage pattern

A "laptop" visual metaphor where each M365 app icon on the dock jumps the user to that app's content tab. "Coming soon" items are grayed out with a lock state. Clicking an active app icon scrolls to the corresponding content section.

## Related

- [[Pages/Phase1]] — navigates here from module card
- [[Patterns/ModulePage]] — page shell
- [[Components/ModuleHeader]] — tab navigation
- [[Reference/source-map]] — M365 PPTX, screen recordings, agent-practices xlsx
- `src/data/agent-best-practices.ts` — same mailer sheet as Phase 3 Quick Recall
