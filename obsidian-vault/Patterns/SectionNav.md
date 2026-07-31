---
type: pattern
description: Sticky section nav strip used on supporting pages (BrainstormingUseCases, GuidanceImplementation)
tags: [pattern, navigation, sticky, section-nav]
---

# Pattern: SectionNav

Sticky in-page section navigation strip. Used on supporting pages that are **not** curriculum modules (i.e. no `ModuleHeader`).

**Used in:** [[Pages/BrainstormingUseCases]], [[Pages/GuidanceImplementation]]

---

## Visual structure

```
[Section A] [Section B] [Section C] [Section D]
 ─────── active indicator (2px yellow bottom border)
```

- Background: `rgba(26,26,36,0.95)` + `backdropFilter: blur(8px)`
- `position: sticky; top: 0; z-index: 50`
- Buttons: 12px EYInterstate Regular, `onDarkMuted` → `yellow` when active

---

## Implementation

```tsx
const SECTIONS = [
  { id: 'intro', label: 'Introduction' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'templates', label: 'Templates' },
];

function SectionNav({ activeId, onNavigate }: { activeId: string; onNavigate: (id: string) => void }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(26,26,36,0.95)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      gap: 0,
      padding: '0 16px',
    }}>
      {SECTIONS.map(s => (
        <button
          key={s.id}
          onClick={() => onNavigate(s.id)}
          style={{
            padding: '10px 14px',
            fontSize: 12,
            fontFamily: fonts.regular,
            color: activeId === s.id ? colors.yellow : colors.onDarkMuted,
            borderBottom: activeId === s.id ? `2px solid ${colors.yellow}` : '2px solid transparent',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}
```

---

## Scroll behavior

Scroll target: the `.overflow-auto` Root div (not `window`), because the app root has `overflow: auto`:

```tsx
const container = document.querySelector('.overflow-auto');
const target = document.getElementById(sectionId);
if (container && target) {
  container.scrollTo({ top: target.offsetTop - NAV_HEIGHT, behavior: 'smooth' });
}
```

---

## Active tracking

`IntersectionObserver` with `root` set to the scroll container:

```tsx
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) setActiveId(e.target.id);
    });
  },
  {
    root: document.querySelector('.overflow-auto'),
    rootMargin: '-20% 0px -60% 0px',
  }
);
```

---

## Difference from ModuleHeader

| | SectionNav | ModuleHeader |
|--|------------|--------------|
| Used on | Supporting pages (brainstorming, guidance) | Curriculum modules (foundational, prompting, copilot) |
| Workshop picker | No | Yes |
| Learn/Apply clusters | No | Yes |
| Progress chips | No | Yes |
| Source | Local to page | `src/design-kit/LearningNav.tsx` |

---

## Related

- [[Components/ModuleHeader]] — the curriculum equivalent
- [[Pages/BrainstormingUseCases]], [[Pages/GuidanceImplementation]]
- [[Design/interaction-patterns]] — full SectionNav scroll details
