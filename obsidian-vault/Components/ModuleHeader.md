---
type: component
file: src/design-kit/LearningNav.tsx
description: Level 2 breadcrumb + Learn/Apply tab nav for module pages, with scroll-spy
tags: [component, chrome, navigation, module, tabs]
---

# ModuleHeader

Figma Level 2 breadcrumb (node 3508:4135), rendered beneath `SiteHeader variant="learning"` on all module pages. Handles workshop navigation (Row A) and in-page section tabs (Row B).

## Import

```tsx
import {
  ModuleHeader, ModulePrevNext,
  SUBNAV_SCROLL_OFFSET, SUBNAV_SCROLL_MARGIN,
  useModuleSectionHashScroll
} from '@/design-kit';
```

---

## Props

Two overloaded shapes:

### Module page mode (default)

```tsx
<ModuleHeader
  currentModuleId="ai-tax-prompting"
  onNavigate={navigate}
  onBack={onBack}
  onSectionClick={(id) => scrollTo(id)}   // optional — for iframe modules
  sectionStatus="Section 3 of 8"          // optional status text
/>
```

### Phase-overview mode

```tsx
<ModuleHeader
  mode="phase-overview"
  onNavigate={navigate}
  onBack={() => navigate('/phased')}
/>
```

---

## Visual structure

**Row A — Workshop/Module navigation (both modes)**

```
[← yellow circle] [Tax Labs ›] [Workshop picker dropdown ▾]   [Module N/5] [Sub-module M/8]
```

- Back circle: `colors.yellow` fill, navigates back
- Breadcrumb: `colors.gray01` text
- Workshop picker: shows current module title with order badge; opens dropdown with full module list
- Progress chips: "Module N of 5" + "Sub-module M of 8"

**Row B — Learn/Apply section tabs (module pages only)**

```
[ Learn ]  Act Now  |  Understanding AI  |  Evolution  |  ...    [ Apply ]  Cheat Sheet  |  Quiz
```

- Tab clusters from `getSubModuleGroups(moduleId)` in `curriculum.ts`
- Active section: `3px solid colors.yellow` bottom border
- Scroll-spy: `IntersectionObserver` auto-highlights active section
- Clicking scrolls to section using `SUBNAV_SCROLL_MARGIN`

---

## Scroll offset

`ModuleHeader` is `position: sticky; top: 0; z-index: 200`. All module page sections must account for this:

```tsx
import { SUBNAV_SCROLL_MARGIN } from '@/design-kit';

<section id="pipeline" style={{ scrollMarginTop: SUBNAV_SCROLL_MARGIN }}>
```

`ModuleHeader` syncs its live height to `--ey-subnav-scroll-offset` on the root element.  
`SUBNAV_SCROLL_OFFSET = 100` is the fallback constant.

---

## ModulePrevNext

Previous/Next module footer bar — rendered at the bottom of module pages:

```tsx
<ModulePrevNext currentModuleId="ai-tax-prompting" onNavigate={navigate} />
```

Visual: off-white bar, uppercase "PREVIOUS" / "NEXT" labels, module title with yellow hover underline.

---

## useModuleSectionHashScroll

Hook for hash-based scroll on initial page load:

```tsx
import { useModuleSectionHashScroll } from '@/design-kit';
useModuleSectionHashScroll(); // reads window.location.hash, scrolls to section
```

---

## Related

- [[Components/SiteHeader]] — Level 1 chrome above ModuleHeader
- [[Patterns/ModulePage]] — full shell usage
- [[Curriculum/phase1-modules]] — module and sub-module data
- [[Pages/AiTaxPrompting]], [[Pages/FoundationalConcepts]], [[Pages/M365CopilotHub]]
