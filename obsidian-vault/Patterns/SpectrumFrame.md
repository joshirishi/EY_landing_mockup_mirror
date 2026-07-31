---
type: pattern
description: EY Frame and Spectrum gradient usage — when, where, and how to apply
tags: [pattern, spectrum, frame, gradient, brand]
---

# Pattern: Spectrum Frame

The EY Spectrum gradient and L-shaped frame are signature brand elements. Use precisely where specified.

---

## Spectrum gradient presets

7 presets in `spectrumGradients`. Yellow always anchors the start.

| Preset | Stops | Typical use |
|--------|-------|-------------|
| 1 | Yellow → Orange → Magenta | Warm, energetic |
| 2 | Yellow → Magenta → Red | Alert, dynamic |
| 3 | Yellow → Magenta → Teal | Default for `EYCard` |
| 4 | Yellow → Purple → Blue | Deep, technical (default for `EYFrame`) |
| 5 | Yellow → Lime → Teal | Fresh, growth |
| 6 | Yellow → Green → Blue | Positive, clear |
| 7 | Yellow → Orange → Teal | Versatile, warm |

```tsx
import { spectrumCss, spectrumGradients } from '@/design-kit';

// CSS string for background or border-image
const gradient = spectrumCss(4);  // "linear-gradient(90deg, #FFE600, #B400FF, #4696FF)"

// Raw stops array
const [start, mid, end] = spectrumGradients[3];  // 0-indexed
```

---

## Where to use spectrum gradients

| Use case | How |
|----------|-----|
| Hero top rule (decorative line above H1) | `background: spectrumCss(n)`, `height: 3px` |
| Footer accent top line | `EYFooter gradient={n}` prop |
| Card frame border overlay | `EYCard gradient={n}` prop |
| Pipeline category color coding | `spectrumGradients[i]` for per-category accent |
| 7 Elements facets | One spectrum color per element |

**Not for:** Full-page section backgrounds, body text, primary buttons.

---

## EYFrame usage

The L-shaped frame is used for **hero callouts and brand moments** on dark backgrounds.

```tsx
import { EYFrame } from '@/design-kit';

<EYFrame
  variant="spectrum"
  gradient={4}
  headline="The Future of"
  headlineEnd="AI in Tax"
  subheading="Empowering every EY tax professional."
  cta="Start your journey"
  showApproach={true}
/>
```

### Frame stroke formula

```tsx
import { frameStroke } from '@/design-kit';
// Use for custom frame implementations
const stroke = frameStroke(containerWidthPx);        // ÷ 120
const stroke = frameStroke(containerWidthPx, true);  // ÷ 60 (square)
```

### EYCard frame border

`EYCard` draws a simplified frame using `spectrumGradients[preset - 1]`:
- Top border: `startColor`
- Left border: `startColor`
- Right border: `endColor`
- Open bottom (L-shape implied by 3-side border)

---

## Rules

- Always use spectrum gradients on **dark** (`confidentBlack`) backgrounds
- Spectrum is a **stroke/accent** — never fill a large area with it
- Yellow always anchors the gradient start (first stop)
- For multi-element pages, use **different presets** per element for variety

---

## Related

- [[Components/EYCard]] — `gradient` prop
- [[Components/EYFrame]] — full frame component
- [[Components/EYFooter]] — `gradient` prop
- [[Design/design-system]] — `spectrumGradients` token reference
