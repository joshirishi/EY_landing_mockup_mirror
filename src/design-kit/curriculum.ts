/**
 * EY.ai Tax Labs — Curriculum Map
 *
 * Single source of truth for the Phase 1 module journey: titles (matching the
 * Phase 1 course-card titles exactly), routes, ordering, and in-page
 * sub-module sections. LearningNav and the module pages read from this file
 * so labels never drift from the cards users unlock on /phase1.
 */

export type ModuleId = "foundational" | "ai-tax-prompting" | "copilot-hub";

export interface SubModule {
  /** Anchor id of the <section> inside the module page (same-document scroll). */
  id: string;
  label: string;
  /** "learn" = concept-building sections, "apply" = practice/reference sections. */
  group: "learn" | "apply";
}

export interface CurriculumModule {
  id: ModuleId;
  /** Exact title shown on the Phase 1 course card — never abbreviate to "Module N". */
  title: string;
  path: string;
  order: number;
  estimatedTime: string;
  /** Whether ModuleHeader should render the Learn/Apply section tabs for this module.
   * All three modules currently support it — "foundational" routes clicks through
   * ModuleHeader's `onSectionClick` (its content lives in an iframe, so section ids
   * aren't reachable via a plain same-document anchor scroll). */
  supportsInPageNav: boolean;
  subModules: SubModule[];
}

export const PHASE_LABEL = "Phase 1: Foundational Training Workshops";
export const PHASE_PATH = "/phase1";
/**
 * Current top-level unit in the Tax Labs journey (user-facing label: "Module").
 * Internal code still says PHASE_* for routes; chip copy uses Module / Sub-module.
 */
export const PHASE_NUMBER = 1;
export const TOTAL_PHASES = 4;
export const BRAND_LABEL = "EY.ai Tax Labs";

export const MODULES: CurriculumModule[] = [
  {
    id: "foundational",
    title: "Foundational Concepts of AI",
    path: "/foundational",
    order: 1,
    estimatedTime: "~45 min",
    supportsInPageNav: true,
    subModules: [
      { id: "act-now", label: "Act Now", group: "learn" },
      { id: "rise-of-ai", label: "Understanding AI", group: "learn" },
      { id: "evolution", label: "Evolution", group: "learn" },
      { id: "terminology", label: "Key Terms", group: "learn" },
      { id: "cheatsheet", label: "Cheat Sheet", group: "apply" },
      { id: "genai-vs-agents", label: "GenAI vs Agents", group: "learn" },
      { id: "quiz", label: "Quiz", group: "apply" },
    ],
  },
  {
    id: "ai-tax-prompting",
    title: "AI Tax Prompting",
    path: "/ai-tax-prompting",
    order: 2,
    estimatedTime: "~30 min",
    supportsInPageNav: true,
    subModules: [
      { id: "pipeline", label: "Prompt Basics", group: "learn" },
      { id: "team-briefing", label: "Team Briefing", group: "learn" },
      { id: "elements", label: "7 Elements", group: "learn" },
      { id: "lazy-vs-pro", label: "Weak vs Strong", group: "learn" },
      { id: "stack-builder", label: "Stack Builder", group: "learn" },
      { id: "advanced", label: "Techniques", group: "learn" },
      { id: "match-activity", label: "Activity", group: "apply" },
      { id: "dos-donts", label: "Do's & Don'ts", group: "apply" },
      { id: "recap", label: "Cheat Sheet", group: "apply" },
    ],
  },
  {
    id: "copilot-hub",
    title: "M365 Copilot Dashboard",
    path: "/copilot-hub",
    order: 3,
    estimatedTime: "~60 min",
    supportsInPageNav: true,
    subModules: [
      { id: "prompt-repository", label: "M365 Apps", group: "learn" },
      { id: "useful-links", label: "Useful Links", group: "apply" },
      { id: "security", label: "Security & Governance", group: "apply" },
    ],
  },
];

export function getModule(id: ModuleId): CurriculumModule {
  const found = MODULES.find((m) => m.id === id);
  if (!found) throw new Error(`Unknown module id: ${id}`);
  return found;
}

export function getAdjacentModules(id: ModuleId): {
  prev: CurriculumModule | null;
  next: CurriculumModule | null;
} {
  const current = getModule(id);
  const prev = MODULES.find((m) => m.order === current.order - 1) ?? null;
  const next = MODULES.find((m) => m.order === current.order + 1) ?? null;
  return { prev, next };
}

export const TOTAL_MODULES = MODULES.length;

/** Splits a module's sub-modules into the "Learn" and "Apply" tab clusters. */
export function getSubModuleGroups(id: ModuleId): { learn: SubModule[]; apply: SubModule[] } {
  const { subModules } = getModule(id);
  return {
    learn: subModules.filter((s) => s.group === "learn"),
    apply: subModules.filter((s) => s.group === "apply"),
  };
}
