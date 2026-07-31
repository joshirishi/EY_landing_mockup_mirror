---
type: component
file: src/design-kit/EYWhatsNext.tsx
description: End-of-module handoff CTA — dark card with yellow button, Getty background
tags: [component, cta, module-end]
---

# EYWhatsNext + EYWhatsNextHighlight

End-of-module handoff section (Figma 3455:18320). Always the **last content section** before `ModulePrevNext`.

## Import

```tsx
import { EYWhatsNext, EYWhatsNextHighlight } from '@/design-kit';
```

---

## Props — EYWhatsNext

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `eyebrow` | `string` | `"What's Next"` | Pill label above headline |
| `title` | `ReactNode` | required | Headline — wrap phrases in `EYWhatsNextHighlight` |
| `ctaLabel` | `string` | required | Yellow button text |
| `onContinue` | `() => void` | required | Button click handler |
| `id` | `string` | `"whats-next"` | Section anchor ID |

---

## EYWhatsNextHighlight

Wraps a phrase inside `EYWhatsNext.title` with EY Yellow color:

```tsx
<EYWhatsNext
  title={<>Ready to master <EYWhatsNextHighlight>AI prompting?</EYWhatsNextHighlight></>}
  ctaLabel="Continue to M365 Copilot Hub"
  onContinue={() => navigate('/copilot-hub')}
/>
```

---

## Visual anatomy

```
[Full-bleed Getty stock image]
[Dark gradient overlay]
  ┌─────────────────────────────────────────┐
  │ [WHAT'S NEXT]  ← yellow outline pill    │  ← #2E2E38 card, centered
  │                                         │
  │  Ready to master                        │
  │  AI prompting?      ← yellow highlight  │
  │                                         │
  │  [Continue to M365 Copilot Hub →]       │  ← yellow fill button (only sanctioned
  └─────────────────────────────────────────┘     yellow-fill CTA in the kit)
```

- Full-bleed section background: Getty image + dark gradient scrim
- Card: `#2E2E38` (`offBlack`), centered, constrained width
- Eyebrow pill: yellow outline, yellow text
- CTA button: **yellow fill + dark text** — this is the ONE sanctioned exception to "no yellow-fill buttons"

---

## Placement

```tsx
// At the bottom of every module page:
<EYWhatsNext
  eyebrow="What's Next"
  title={<>Continue your learning journey</>}
  ctaLabel="Go to M365 Copilot Hub"
  onContinue={() => navigate('/copilot-hub')}
/>
<ModulePrevNext currentModuleId="foundational" onNavigate={navigate} />
```

---

## Related

- [[Components/ModuleHeader]] — top chrome that bookends module content
- [[Patterns/ModulePage]] — full module page shell
- [[Pages/FoundationalConcepts]], [[Pages/AiTaxPrompting]], [[Pages/M365CopilotHub]]
