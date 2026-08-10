# Echo Thread Tracker — Tax Labs AI

**Last audit:** 2026-08-10  
**Branch:** `feature/phases-2-3-4-content-updates`  
**Open AI-ready threads:** see `echo-open-threads-audit.json`

## Why comments feel "floating"

Echo pins feedback to **DOM selectors on a URL**, not to Git branches. The same issue can appear as multiple threads on:

- Production: `ey-landing-mockup.vercel.app`
- Preview: `ey-landing-mockup-git-feature-...vercel.app`

**Use this tracker + Echo filters** (`page_url`, `status: open/resolved`) to see what is done vs still open.

## Status legend

| Status | Meaning |
|--------|---------|
| **Resolved** | Fixed on branch; thread closed in Echo |
| **Implemented — resolve pending** | Code on branch; Echo still open until bulk resolve |
| **Gap** | Still needs code |
| **Deferred** | Blocked (assets, stakeholder sign-off) |

## By page (open count at last audit)

| Page | Open | Notes |
|------|------|-------|
| `/foundational` | 36 | Mix of copy tweaks + Figma/asset redesigns |
| `/closure-ai-reinforcement` | 18 | Gayatri Aug 9 hero simplification — addressed in latest commit |
| `/phased` | 15 | Most phase card copy done; hierarchy/layout threads remain |
| `/guidance-implementation` | 8 | Mostly "remove section" — likely done on branch, need resolve |
| `/phase2` | 6 | Section removals — likely done on branch |
| `/phase1` | 7 | Minor UX; dashboard fix done |

## Phased page — Gayatri deliverables (Aug 9)

| Thread | Request | Branch status |
|--------|---------|---------------|
| `5651916a` | Phase 2 deliverable: Recommendation Note + templates | **Fixed** |
| `aab93e6f` | Phase 3: Library of Prompt templates | **Fixed** |
| `20118a20` | Phase 3: 5-10 self-developed agents | **Fixed** |
| `578a3104` | Remove ascent subtitle | **Fixed** |
| `64217fbf` / `2268970d` | Need hierarchy on step section | **Gap** — design pass |

## Closure — Gayatri Aug 9 batch

| Thread | Request | Branch status |
|--------|---------|---------------|
| `e149bde4` | Common accountability card + new question | **Fixed** |
| `8fc09737` | Remove flow chips row | **Fixed** |
| `70a69673` | Remove left capability card | **Fixed** |
| `fcbd4c82` | Remove "AI May Help You" | **Fixed** |
| `be1a08ec` | Remove capability chips | **Fixed** |
| `814565c9` | Remove risk intro disclaimer | **Fixed** |
| `054cf596` / `beaaabcf` | Remove Today's Question | **Fixed** (prior commit) |

## Deferred (do not implement yet)

See `echo-deferred-backlog.txt` — Copilot Hub reorg, newspaper images, PPT assets, Memory Refresh DnD.

## Machine-readable files

- `echo-open-threads-audit.json` — full open thread list
- `echo-gap-analysis.json` — auto-categorized buckets
