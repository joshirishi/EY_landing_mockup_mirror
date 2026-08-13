/**
 * Shared end-of-module Ascent trek — Priya trek callouts + completion quotes.
 * Hub defaults live in AscentJourneyInfographic; this builds per-module progress.
 */

import AscentJourneyInfographic, {
  type AscentCalloutEntry,
  type AscentOverrides,
  type AscentStageNodeEntry,
  type AscentStageTitleEntry,
} from "./AscentJourneyInfographic";
import { SUBNAV_SCROLL_MARGIN } from "@/design-kit/LearningNav";
import { colors } from "@/design-kit";

export type AscentModuleKey = "m1_1" | "m1_2" | "m1_3" | "m2" | "m3" | "m4";

export const MODULE_COMPLETION_QUOTES: Record<AscentModuleKey, string> = {
  m1_1: "I am confident in the foundational concepts of AI and ready to reimagine tax with AI-powered ways of working.",
  m1_2: "I understand prompt elements and techniques and can effectively communicate with AI.",
  m1_3: "I understand M365 Copilot Chat and Agents and can use them to work smarter and faster.",
  m2: "I can now identify AI opportunities in tax workflows and know when to use prompts or agents.",
  m3: "I can confidently design prompts and Agents to solve business and tax challenges.",
  m4: "I can use AI responsibly while ensuring compliance and governance.",
};

const STARTER_QUOTE = "Everyone is talking about AI, but I don't know where to start.";
const SUMMIT_DEFAULT =
  "I am an AI-enabled tax professional. I can confidently and responsibly use AI across the tax lifecycle to deliver greater value.";

/** Furthest open callout index (0 = base camp … 5 = summit). */
const OPEN_THROUGH: Record<AscentModuleKey, 1 | 2 | 3 | 4 | 5> = {
  m1_1: 1,
  m1_2: 2,
  m1_3: 3,
  m2: 4,
  m3: 4,
  m4: 5,
};

const CALLOUT_LAYOUT = [
  { left: 140, top: 250, width: 149 },
  { left: 290, top: 195, width: 187 },
  { left: 502, top: 123, width: 167 },
  { left: 722, top: 106, width: 150 },
  { left: 953, top: 114, width: 170 },
  { left: 1247, top: 8, width: 180, rounded: 4 as const },
] as const;

const CURRICULUM_STAGE_NODES: readonly AscentStageNodeEntry[] = [
  { left: 359, top: 295, icon: "/ascent/icon-book-open.svg", alt: "Foundational Concepts" },
  { left: 554, top: 260, icon: "/ascent/icon-search.svg", alt: "AI Tax Prompting" },
  { left: 769, top: 240, icon: "/ascent/icon-cpu.svg", alt: "M365 Copilot Hub" },
  { left: 1018, top: 227, icon: "/ascent/icon-trending-up.svg", alt: "Phase 2 / Governance" },
  { left: 1221, top: 94, icon: "/ascent/icon-shield.svg", alt: "Summit" },
];

const CURRICULUM_STAGE_TITLES: readonly AscentStageTitleEntry[] = [
  { title: "Base Camp", markerTop: 366, markerSize: 46, calloutIndex: 0 },
  { title: "Foundational Concepts", markerTop: 295, markerSize: 40, calloutIndex: 1 },
  { title: "AI Tax Prompting", markerTop: 260, markerSize: 40, calloutIndex: 2 },
  { title: "M365 Copilot Hub", markerTop: 240, markerSize: 40, calloutIndex: 3 },
  { title: "Phase 2 / Governance", markerTop: 227, markerSize: 40, calloutIndex: 4 },
  { title: "Summit", markerTop: 94, markerSize: 40, calloutIndex: 5 },
];

function quoteForIndex(index: number, moduleKey: AscentModuleKey): string {
  if (index === 0) return STARTER_QUOTE;
  if (index === 1) return MODULE_COMPLETION_QUOTES.m1_1;
  if (index === 2) return MODULE_COMPLETION_QUOTES.m1_2;
  if (index === 3) return MODULE_COMPLETION_QUOTES.m1_3;
  if (index === 4) {
    if (moduleKey === "m2") return MODULE_COMPLETION_QUOTES.m2;
    if (moduleKey === "m3" || moduleKey === "m4") return MODULE_COMPLETION_QUOTES.m3;
    return MODULE_COMPLETION_QUOTES.m2;
  }
  if (moduleKey === "m4") return MODULE_COMPLETION_QUOTES.m4;
  return SUMMIT_DEFAULT;
}

function buildCallouts(moduleKey: AscentModuleKey): readonly AscentCalloutEntry[] {
  return CALLOUT_LAYOUT.map((layout, index) => ({
    ...layout,
    quote: quoteForIndex(index, moduleKey),
  }));
}

export type ModuleProgressOptions = {
  /** @deprecated Prefer nextStepCta — Base Camp should not navigate. */
  onBaseCampCta?: () => void;
  lastNodeCtaLabel?: string;
  onLastNodeCta?: () => void;
  /** Yellow continue button on the next trek step */
  nextStepCtaLabel?: string;
  onNextStepCta?: () => void;
};

const DEFAULT_NEXT_STEP: Record<AscentModuleKey, string> = {
  m1_1: "AI Tax Prompting",
  m1_2: "M365 Copilot Hub",
  m1_3: "Phase 2",
  m2: "Phase 3",
  m3: "Phase 4",
  m4: "Control Room",
};

/** Hub landing (/phased) — base camp open, continue into Phase 1. */
export function buildHubLandingProps(onNavigateToPhase1: () => void): AscentOverrides {
  return {
    callouts: buildCallouts("m1_1"),
    stageNodes: CURRICULUM_STAGE_NODES,
    stageTitleLabels: CURRICULUM_STAGE_TITLES,
    defaultOpenCallouts: [0],
    nextStepCtaLabel: "Foundational Concepts",
    onNextStepCta: onNavigateToPhase1,
  };
}

/** Props for AscentJourneyInfographic for a completed module. */
export function buildModuleProgressProps(
  moduleKey: AscentModuleKey,
  options: ModuleProgressOptions = {},
): AscentOverrides {
  const through = OPEN_THROUGH[moduleKey];
  const defaultOpenCallouts = Array.from({ length: through + 1 }, (_, i) => i) as AscentOverrides["defaultOpenCallouts"];

  const nextStepCtaLabel = options.nextStepCtaLabel ?? DEFAULT_NEXT_STEP[moduleKey];
  // Accept legacy onBaseCampCta / onLastNodeCta as the continue handler
  const onNextStepCta =
    options.onNextStepCta ?? options.onLastNodeCta ?? options.onBaseCampCta;

  return {
    callouts: buildCallouts(moduleKey),
    stageNodes: CURRICULUM_STAGE_NODES,
    stageTitleLabels: CURRICULUM_STAGE_TITLES,
    defaultOpenCallouts,
    // Base Camp stays a marker only — continue lives on the next trek step
    onBaseCampCta: undefined,
    nextStepCtaLabel: onNextStepCta ? nextStepCtaLabel : undefined,
    onNextStepCta,
    lastNodeCtaLabel: undefined,
    onLastNodeCta: undefined,
  };
}

/** Dark section wrapping the shared Ascent trek (no progress heading). */
export function AscentModuleProgressSection({
  moduleKey,
  id = "journey-progress",
  onBaseCampCta: _onBaseCampCta,
  lastNodeCtaLabel,
  onLastNodeCta,
  nextStepCtaLabel,
  onNextStepCta,
}: {
  moduleKey: AscentModuleKey;
  id?: string;
  /** Ignored — continue CTA is on the next trek step. Kept for call-site compat. */
  onBaseCampCta?: () => void;
  lastNodeCtaLabel?: string;
  onLastNodeCta?: () => void;
  nextStepCtaLabel?: string;
  onNextStepCta?: () => void;
}) {
  const infographicProps = buildModuleProgressProps(moduleKey, {
    onBaseCampCta: _onBaseCampCta,
    lastNodeCtaLabel,
    onLastNodeCta,
    nextStepCtaLabel,
    onNextStepCta,
  });

  return (
    <section
      id={id}
      aria-label="Ascent journey"
      style={{
        background: colors.confidentBlack,
        width: "100%",
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
      }}
    >
      <AscentJourneyInfographic {...infographicProps} />
    </section>
  );
}
