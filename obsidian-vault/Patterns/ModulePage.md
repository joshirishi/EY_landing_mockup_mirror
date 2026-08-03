---
type: pattern
description: Full module page shell — chrome stack, section structure, scroll anchors, end CTA
tags: [pattern, module, chrome, template]
---

# Pattern: Module Page Shell

Standard template for every learning module page (`/foundational`, `/ai-tax-prompting`, `/copilot-hub`).

## Chrome stack

```tsx
<SiteHeader variant="learning" onNavigate={navigate} skipLinkTarget="#module-content" />
<ModuleHeader
  currentModuleId="ai-tax-prompting"
  onNavigate={navigate}
  onBack={onBack}
/>
```

`ModuleHeader` is `position: sticky; top: 0; z-index: 200`.

## Section template

Every in-page section must:

1. Have an `id` matching its `SubModule.id` from `curriculum.ts`
2. Set `scrollMarginTop: SUBNAV_SCROLL_MARGIN` so scroll-spy doesn't hide content
3. Use full-bleed background with railed content inside
4. **Center-align section titles and subtitles** — both the heading and its supporting subtitle use `textAlign: 'center'` (or equivalent). This is consistent across all module pages; do not left-align section headers.

```tsx
import { SUBNAV_SCROLL_MARGIN, contentRailStyle, spacing } from '@/design-kit';

<section
  id="pipeline"
  style={{
    scrollMarginTop: SUBNAV_SCROLL_MARGIN,
    background: colors.confidentBlack,      // dark surface
    padding: spacing.sectionPadding,
  }}
>
  <div style={contentRailStyle}>
    {/* section content */}
  </div>
</section>
```

## Surface alternation

Alternate dark → neutral → light across sections. See [[Patterns/SurfaceRhythm]].

```tsx
const SURFACE = {
  dark:    { bg: colors.confidentBlack, heading: colors.onDark,       body: colors.gray02, eyebrow: colors.yellow },
  neutral: { bg: colors.offWhite,       heading: colors.confidentBlack, body: colors.gray01, eyebrow: colors.eyebrowGold },
  light:   { bg: colors.white,          heading: colors.confidentBlack, body: colors.gray01, eyebrow: colors.eyebrowGold },
};
```

## End-of-module CTA

```tsx
<EYWhatsNext
  title={<>Ready for the next module?</>}
  ctaLabel="Continue to M365 Copilot Hub"
  onContinue={() => navigate('/copilot-hub')}
/>
<ModulePrevNext currentModuleId="ai-tax-prompting" onNavigate={navigate} />
```

## Complete shell

```tsx
function MyModulePage({ onBack, onNavigate }) {
  return (
    <>
      <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#module-content" />
      <ModuleHeader currentModuleId="my-module" onNavigate={onNavigate} onBack={onBack} />

      <section id="module-content" style={{ scrollMarginTop: SUBNAV_SCROLL_MARGIN, background: colors.confidentBlack, padding: spacing.sectionPadding }}>
        <div style={contentRailStyle}>
          {/* Hero content */}
        </div>
      </section>

      <section id="section-two" style={{ scrollMarginTop: SUBNAV_SCROLL_MARGIN, background: colors.offWhite, padding: spacing.sectionPadding }}>
        <div style={contentRailStyle}>
          {/* Section content */}
        </div>
      </section>

      {/* ... more sections ... */}

      <EYWhatsNext title="What's next" ctaLabel="Continue" onContinue={() => onNavigate('/next-route')} />
      <ModulePrevNext currentModuleId="my-module" onNavigate={onNavigate} />
    </>
  );
}
```

## Related

- [[Components/SiteHeader]], [[Components/ModuleHeader]], [[Components/EYWhatsNext]]
- [[Patterns/SurfaceRhythm]], [[Patterns/ContentRail]]
- [[Curriculum/phase1-modules]] — sub-module IDs
