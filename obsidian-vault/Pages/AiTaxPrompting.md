---
type: page
route: /ai-tax-prompting
source: src/pages/AiTaxPrompting.tsx
chrome: SiteHeader learning + ModuleHeader module
module-id: ai-tax-prompting
estimated-time: ~30 min
description: Module 2 — AI Tax Prompting, 8 sub-module sections with interactive widgets
tags: [page, module, learning]
---

# AI Tax Prompting (`/ai-tax-prompting`)

Module 2 of Phase 1. React-native module with alternating SURFACE tones and multiple interactive widgets.

## Chrome

```tsx
<SiteHeader variant="learning" onNavigate={navigate} skipLinkTarget="#module-content" />
<ModuleHeader currentModuleId="ai-tax-prompting" onNavigate={navigate} onBack={onBack} />
```

## Sub-modules (from `curriculum.ts`)

| ID | Label | Group |
|----|-------|-------|
| `pipeline` | Prompt Basics | learn |
| `team-briefing` | Team Briefing | learn |
| `elements` | 7 Elements | learn |
| `lazy-vs-pro` | Weak vs Strong | learn |
| `stack-builder` | Stack Builder | learn |
| `advanced` | Techniques | learn |
| `match-activity` | Activity | apply |
| `dos-donts` | Do's & Don'ts | apply |

## Section anatomy

| Section ID | Pattern | Surface |
|------------|---------|---------|
| `#module-content` | Hero — stock image, left gradient scrim, spectrum top rule, yellow H1 highlight | Dark |
| `#pipeline` | Prompt flow step diagram (SteppedFlow) | Neutral |
| `#team-briefing` | Briefing overview cards | Light |
| `#elements` | 7 Elements — left facet nav + detail pane (spectrum-colored facets) | Dark |
| `#lazy-vs-pro` | Side-by-side weak vs strong prompt comparison | Neutral |
| `#stack-builder` | Interactive prompt stack composer (PromptStackBuilder widget) | Light |
| `#advanced` | Techniques — bucket toggle + CoT/decomposition/ensemble panels | Dark |
| `#match-activity` | Drag-and-match exercise | Neutral |
| `#dos-donts` | Do's / Don'ts two-column list | Light |

## Reusable widgets (local to this page)

| Widget | Description |
|--------|-------------|
| `SteppedFlow` | Numbered steps with connectors |
| `TechniqueExampleQuote` | Quoted prompt example with author/technique label |
| `EightElementsWizard` | Left-nav facet picker + detail pane |
| `PromptStackBuilder` | Interactive drag-and-drop prompt composer |
| `AdvancedViewToggle` | Bucket/technique toggle for advanced section |
| `MatchResultBadge` | Correct/incorrect feedback on drag match |

## Section scroll margin

All `<section>` elements must set:

```tsx
style={{ scrollMarginTop: SUBNAV_SCROLL_MARGIN }}
```

## Related

- [[Components/ModuleHeader]] — tabs rendered from `curriculum.ts` sub-modules
- [[Pages/Phase1]] — navigates here from module card
- [[Patterns/ModulePage]] — full page shell template
- [[Patterns/SurfaceRhythm]] — dark/neutral/light alternation
