# Tax Labs UI Corrections — Cross-Check Checklist
**Version:** Phase 1 | **Date:** 24 July 2026 | **Dev:** Rishi | **Reviewer:** Gayatri / Priyadarshini

Legend: `[ ]` = Pending · `[x]` = Done · `[~]` = Blocked / Waiting

---

## SECTION 1 — Copilot Engine Architecture (Hero Section)

| # | Correction | Priority | Status | Notes |
|---|-----------|----------|--------|-------|
| 1 | Remove "Copilot Engine" text label — keep logo only | HIGH | [ ] | ref_12, ref_13 |
| 2 | Rename "MS360 / MS-365" → **"M365 Copilot"** everywhere | CRITICAL | [ ] | Search + replace all files |
| 3 | Replace descriptive text under Chat / RAG / Human in Loop / Model with logos only | HIGH | [ ] | ref_14–ref_21 |
| 4 | Add "AI Knowledge ↔ M365 Copilot" context above architecture diagram | MEDIUM | [ ] | No curved text |
| 5 | **Delete** entire "Code Processing Pipeline" section | HIGH | [ ] | `CoreProcessingPipeline.tsx` |
| 6 | Reduce text density across architecture display — max 2-3 words per label | MEDIUM | [ ] | — |

---

## SECTION 2 — Phased Approach & UI Options

| # | Correction | Priority | Status | Notes |
|---|-----------|----------|--------|-------|
| 7 | Show both Option 1 (Timeline) and Option 2 (Cards) to Manju for approval, then disable non-selected | CRITICAL | [~] | **BLOCKED — waiting for Manju's approval** |

---

## SECTION 3 — Workshop Cards & Naming (Phase 1–4)

| # | Correction | Priority | Status | Notes |
|---|-----------|----------|--------|-------|
| 8 | Change "AI/ML Fundamentals" → **"AI Fundamentals"** | HIGH | [ ] | Remove "ML" from all card titles |
| 9 | Remove all time-duration text (e.g. "×1.5 hrs each", "2 workshops") from all phase cards | HIGH | [ ] | ref_37 and all phase descriptions |
| 10 | Standardise card format: Brief intro → Coverage → Deliverables across all phases | MEDIUM | [ ] | See template in guide |
| 11 | **Phase 1 card** — update coverage item to "AI Fundamentals for Tax" (from "AI concepts in Tax") | HIGH | [ ] | ref_36–ref_44 |
| 12 | **Phase 2 card** — verify "Document fetching automation" text with Gayatri before keeping | HIGH | [~] | **BLOCKED — waiting for updated HTML** |
| 13 | **Phase 3 card** — confirm "Advanced Prompt Engineering" and "AI Agent Integration" content with Gayatri | HIGH | [~] | **BLOCKED — waiting for updated HTML** |
| 14 | **Phase 4 card** — confirm "Governance & AI Reinforcement" content accuracy | HIGH | [~] | **BLOCKED — waiting for updated HTML** |

---

## SECTION 4 — Card State Management & Layout

| # | Correction | Priority | Status | Notes |
|---|-----------|----------|--------|-------|
| 15 | Reduce card size / padding so all 4 cards fit visible on screen without scrolling | HIGH | [ ] | Test on HP Elite + 1920×1080 |
| 16 | Implement 3 card states: **Unlocked** (yellow CTA) · **Locked** (greyed CTA) · **Completed** (green + checkmark) | MEDIUM | [ ] | Phase 1 = Unlocked by default |
| 17 | Add encouragement text on locked cards: "Complete Phase X to unlock this module" | MEDIUM | [ ] | — |

---

## SECTION 5 — Visual & Design Requirements

| # | Correction | Priority | Status | Notes |
|---|-----------|----------|--------|-------|
| 18 | Apply design team's arch/globe background element to cards (subtle, z-index 0, opacity ~10%) | MEDIUM | [~] | **BLOCKED — waiting for design asset from EY Design Team** |
| 19 | Ensure entire page fits in one viewport with zero scrolling at 100% zoom (presentation mode) | CRITICAL | [ ] | Test on HDMI projector + boardroom TV |

---

## SECTION 6 — Missing Content & File Management

| # | Correction | Priority | Status | Notes |
|---|-----------|----------|--------|-------|
| 20 | Receive & integrate updated HTML from Gayatri (sent Tue 21 Jul 11:30 AM) for Part 1, 2 & 3 content | CRITICAL | [~] | **BLOCKED — Gayatri to send file** |
| 21 | Verify all images/assets from ZIP folder are present and paths are correct (logos, M365 icons, backgrounds) | HIGH | [ ] | Check `/public/` or `/assets/` paths |

---

## SECTION 7 — Content Verification & Approval

| # | Correction | Priority | Status | Notes |
|---|-----------|----------|--------|-------|
| 22 | Full content accuracy review across all 4 phases — grammar, terminology, M365 naming, no time durations | HIGH | [ ] | Gayatri reviews · Rishi implements |

---

## SECTION 8 — Testing & Validation

| # | Correction | Priority | Status | Notes |
|---|-----------|----------|--------|-------|
| 23 | Responsive testing on: 1920×1080, 1366×768, 2560×1440, projector, boardroom TV, 30%–150% zoom | HIGH | [ ] | After all content corrections done |

---

## Priority-Ordered Implementation Sequence

### Do First (Unblocked HIGH/CRITICAL)
- [ ] #2 — M365 naming fix
- [ ] #1 — Remove "Copilot Engine" text
- [ ] #5 — Delete Code Processing Pipeline
- [ ] #8 — AI/ML → AI Fundamentals
- [ ] #9 — Remove time durations
- [ ] #11 — Phase 1 card content update
- [ ] #19 — Single-screen viewport fit

### Do Second (Unblocked MEDIUM)
- [ ] #3 — Logos only in architecture
- [ ] #6 — Reduce text density
- [ ] #10 — Standardise card format
- [ ] #15 — Card sizing & layout
- [ ] #16 — Card state implementation (Locked / Unlocked / Completed)
- [ ] #17 — Locked card encouragement text
- [ ] #4 — AI Knowledge / M365 context line
- [ ] #21 — Verify all image assets

### Blocked — External Dependencies
- [~] #7 — Manju to approve UI option (Timeline vs Cards)
- [~] #12 — Phase 2 content from Gayatri's updated HTML
- [~] #13 — Phase 3 content from Gayatri's updated HTML
- [~] #14 — Phase 4 content from Gayatri's updated HTML
- [~] #18 — Arch/globe design asset from EY Design Team
- [~] #20 — Updated HTML file delivery from Gayatri

### Final Gate (Run after all above)
- [ ] #22 — Content verification sign-off (Gayatri + Manju)
- [ ] #23 — Full responsive + presentation testing

---

## Approval Owners

| Decision | Owner | Status |
|----------|-------|--------|
| UI Option (Timeline vs Cards) | Manju | [~] Pending |
| Updated HTML content (Parts 1, 2, 3) | Gayatri | [~] Pending delivery |
| Arch/globe card background asset | EY Design Team | [~] Pending |
| Final content sign-off | Gayatri | [ ] After implementation |
| Live deployment sign-off | Manju | [ ] After testing |

---

*Last updated: 26 July 2026 · Next review: Upon Gayatri's HTML delivery*
