import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Copy, Cpu, EyeOff, FileText, Lightbulb, ListChecks, ListTree, Palette, RefreshCw, RotateCcw, Scale, Shield, Table2, Target, User, Zap } from "lucide-react";
import { colors as C, fonts as F, spectrumCss } from "../design-kit/tokens";
import { ModuleHeader, SUBNAV_SCROLL_OFFSET } from "../design-kit/LearningNav";
import { SiteHeader } from "../design-kit/SiteHeader";
import { EYWhatsNext } from "../design-kit/EYWhatsNext";

/** Section surface rhythm: dark → neutral → light (repeats down the page). */
type SurfaceTone = "dark" | "neutral" | "light";
const SURFACE: Record<SurfaceTone, { bg: string; heading: string; body: string; eyebrow: string; border: string }> = {
  dark: {
    bg: C.confidentBlack,
    heading: C.onDark,
    body: C.gray02,
    eyebrow: C.yellow,
    border: C.borderOnDark,
  },
  neutral: {
    bg: C.offWhite,
    heading: C.confidentBlack,
    body: C.gray01,
    eyebrow: C.eyebrowGold,
    border: "rgba(46,46,56,0.10)",
  },
  light: {
    bg: C.white,
    heading: C.confidentBlack,
    body: C.gray01,
    eyebrow: C.eyebrowGold,
    border: "rgba(46,46,56,0.10)",
  },
};

// ── Data ────────────────────────────────────────────────────────────────────

const ELEMENTS = [
  { id: 1, name: "Persona", color: C.frameMagenta, border: C.frameMagenta, q: "WHO should AI be?",
    what: "Defines who the AI should act like — setting expertise, seniority, and perspective. A tax partner writes differently from a junior analyst.",
    why: "Aligns output to the expertise level you need. Without it, AI defaults to a generic voice that doesn't match your audience.",
    without: '"Explain impact of New Tax Act on MNCs."',
    with: '"You are a senior tax partner in India. Explain impact of withholding tax changes in the New Income Tax Act, 2025 on MNCs."',
  },
  { id: 2, name: "Context", color: C.frameTeal, border: C.frameTeal, q: "WHAT's the background?",
    what: "Background information for the task — the who, what, where, and when surrounding your query.",
    why: "Without context, AI gives generic answers that miss your specific situation entirely.",
    without: '"Explain recent changes to transfer pricing regulations."',
    with: '"Our client in India provides IT support to its parent in Singapore. Explain recent TP Regulation changes in 2025."',
  },
  { id: 3, name: "Instruction", color: C.frameOrange, border: C.yellow, q: "WHAT should AI do?",
    what: "A clear task or command — the specific action you want AI to perform. No ambiguity.",
    why: 'Define what "significant" or "recent" means — don\'t leave it to AI to guess.',
    without: '"Summarise significant recent tax exposures of the Indian target company."',
    with: '"Summarise tax exposures above INR 25 crore, under dispute in the last 3 assessment years."',
  },
  { id: 4, name: "Constraints", color: C.frameBlue, border: C.frameBlue, q: "WHAT are the limits?",
    what: "Setting limits on scope, detail, or length — guardrails that keep AI focused.",
    why: "Without limits, AI may produce 2,000 words when you needed 200.",
    without: '"Summarise GST refund changes."',
    with: '"In under 200 words, summarise July 2025 GST refund changes for exporters."',
  },
  { id: 5, name: "Grounding", color: C.framePurple, border: C.framePurple, q: "WHERE should AI look?",
    what: "Instructing AI to use specific statutes, circulars, or case law as its reference base.",
    why: "Prevents hallucination and ensures legal accuracy. Ungrounded output is dangerous output.",
    without: '"Explain safe harbour rules."',
    with: '"According to the Income-tax Act, 1961 and latest CBDT circulars, explain safe harbour applicability to cross-border service fees."',
  },
  { id: 6, name: "Tone / Style", color: C.eyebrowGold, border: C.yellow, q: "HOW should it sound?",
    what: "Directing AI to adopt a formal, client-ready, or simplified style matching your audience.",
    why: "A CFO needs different language than an internal audit team or ITAT bench.",
    without: '"Draft an email to the client regarding new GST slab rates."',
    with: '"Explain new GST slab changes in a formal and concise manner, suitable for the Tax Head of a Logistics company."',
  },
  { id: 7, name: "Output Format", color: C.frameGreen, border: C.frameGreen, q: "WHAT shape should the answer take?",
    what: "Specifies desired format — table, bullets, email, memo, comparison chart, etc.",
    why: "Output is immediately usable without reformatting — saves editing time.",
    without: '"Compare old vs new tax rates."',
    with: '"Provide a table comparing old vs new tax rates, followed by 3 bullet-point risks and recommendations."',
  },
  { id: 8, name: "Iterative Refinement", color: C.frameOrange, border: C.frameOrange, q: "REFINE — don't restart",
    what: "Improving output through follow-ups — treating AI conversations as iterative, not one-shot.",
    why: "First drafts are starting points. Each refinement sharpens precision and usability.",
    without: '"Summarize attached case law."',
    with: 'Step 1: "Summarize facts, issues and ruling." → Step 2: "Now create 5-bullet summary for Indian MNCs."',
  },
];

const DOS = [
  { title: "Be specific about your role", desc: 'Say "You are a senior tax manager in India" not just "You are a tax professional."' },
  { title: "State the output format", desc: "Ask for bullet points, table, 1-page memo, or email — whatever you'll actually use." },
  { title: "Set word or length limits", desc: '"Under 200 words" prevents unnecessary padding and forces concision.' },
  { title: "Reference specific statutes", desc: "Cite Acts, circulars, or sections to keep the AI legally grounded." },
  { title: "Iterate — don't restart", desc: "Ask follow-ups like 'Make it more concise' or 'Add a risk table.' Build on the conversation." },
];

const DONTS = [
  { title: "Don't share confidential data", desc: "Never input client names, PAN numbers, or deal-specific financials into a public AI tool." },
  { title: "Don't accept output without review", desc: "AI can hallucinate statutes or dates. Always verify legal citations before use." },
  { title: "Don't use one-word prompts", desc: '"Explain GST" will produce a textbook. Ask for what you actually need, for whom.' },
  { title: "Don't ignore the tool's knowledge cutoff", desc: "AI may not know about the latest Finance Act amendments. Ground it or verify freshness." },
  { title: "Don't forget tone and audience", desc: "An internal memo for a partner reads very differently from a client advisory note." },
];

type AdvancedTechnique = {
  id: string;
  name: string;
  what: string;
  does: string;
  without: string;
  with: string;
  taxUse: string;
};

type AdvancedCategory = {
  id: string;
  name: string;
  color: string;
  summary: string;
  techniques: AdvancedTechnique[];
};

const ADVANCED_CATEGORIES: AdvancedCategory[] = [
  {
    id: "context",
    name: "Context & Audience",
    color: C.frameTeal,
    summary: "Shape who the answer is for and how examples guide format.",
    techniques: [
      {
        id: "audience",
        name: "Audience Prompting",
        what: "Telling AI who the output is intended for.",
        does: "Adjusts language, depth and terminology for the reader.",
        without: '"Explain POEM provisions."',
        with: '"Explain POEM provisions for a CEO with no tax background using simple business language and examples."',
        taxUse: "Turn a dense POEM memo into a board-ready summary without losing the tax position.",
      },
      {
        id: "few-shot",
        name: "Zero-Shot / Few-Shot",
        what: "Providing no examples (Zero-Shot) or sample examples (Few-Shot) to guide the AI.",
        does: "Guides the format and quality of the response.",
        without: '"Summarize this tax judgment."',
        with: '"Example Format: Issue → Taxpayer Argument → Revenue Argument → Decision → Key Takeaway. Now summarize this judgment using the same format."',
        taxUse: "Standardize ITAT ruling summaries across the team using one worked example as the template.",
      },
    ],
  },
  {
    id: "iterate",
    name: "Iterative Flow",
    color: C.frameOrange,
    summary: "Build, question, and refine — don't restart from scratch.",
    techniques: [
      {
        id: "iterative",
        name: "Iterative Prompting",
        what: "Improving the output through a series of follow-up prompts.",
        does: "Refines the response step by step until it meets your needs.",
        without: '"Draft a note on GST implications."',
        with: '"Draft a note on GST implications." → "Make it user-friendly." → "Reduce it to one page." → "Add a summary table."',
        taxUse: "Draft a GST advisory in passes — scope first, then tone, then a partner-ready one-pager.",
      },
      {
        id: "flipped",
        name: "Flipped Prompting",
        what: "Asking AI to ask questions before answering.",
        does: "Helps gather missing context and improve accuracy.",
        without: '"Prepare a tax advisory note on this transaction."',
        with: '"Before preparing the advisory note, ask me all relevant questions regarding the transaction, jurisdictions, parties, objectives and timeline."',
        taxUse: "Surface missing facts on a cross-border deal before AI drafts the opinion.",
      },
      {
        id: "refinement",
        name: "Refinement Prompting",
        what: "Asking AI to improve your question before attempting the task.",
        does: "Helps identify gaps and creates a stronger, more effective prompt.",
        without: '"Summarize the GST implications of this transaction."',
        with: '"Review my prompt and suggest a better version before answering. Highlight any missing context, assumptions or instructions that would improve the quality of the response."',
        taxUse: "Catch vague scope or missing grounding before the model produces a wrong GST analysis.",
      },
    ],
  },
  {
    id: "reasoning",
    name: "Structured Reasoning",
    color: C.frameBlue,
    summary: "Step through complex tax analysis with deliberate structure.",
    techniques: [
      {
        id: "cot",
        name: "Chain-of-Thought",
        what: "Asking AI to reason through a problem step by step.",
        does: "Improves structured thinking and analysis.",
        without: '"Does this arrangement create a Permanent Establishment risk?"',
        with: '"Assess this arrangement step-by-step: identify key facts, evaluate PE indicators, analyze supporting and opposing arguments, then conclude."',
        taxUse: "PE determinations where facts, indicators, and counter-arguments must be shown in sequence.",
      },
      {
        id: "expansion",
        name: "Creative Expansion",
        what: "Asking AI to challenge assumptions and identify gaps.",
        does: "Generates additional perspectives and uncovers blind spots.",
        without: '"Review this restructuring proposal."',
        with: '"Review this restructuring proposal and identify 10 risks, unanswered questions or issues the team may have overlooked."',
        taxUse: "Stress-test a restructuring memo before partner sign-off — find what the first draft missed.",
      },
    ],
  },
  {
    id: "meta",
    name: "Meta & Craft",
    color: C.framePurple,
    summary: "Let AI help you design the prompt itself.",
    techniques: [
      {
        id: "meta",
        name: "Meta Prompting",
        what: "Asking AI to create or improve the prompt itself.",
        does: "Combines multiple prompting techniques and helps build stronger prompts.",
        without: '"Summarize this judgment."',
        with: '"Create the most effective prompt for summarizing a Supreme Court tax judgment for a Tax Partner. Incorporate persona, audience, format and key takeaway requirements."',
        taxUse: "Generate a reusable prompt template for Supreme Court tax ruling summaries.",
      },
    ],
  },
];

type FacetKey = "what" | "does" | "without" | "with" | "taxUse";

const FACETS: { key: FacetKey; label: string; color: string }[] = [
  { key: "what", label: "What it is", color: C.frameBlue },
  { key: "does", label: "What it does", color: C.frameOrange },
  { key: "without", label: "Without", color: C.destructive },
  { key: "with", label: "With", color: C.success },
  { key: "taxUse", label: "Tax use case", color: C.eyebrowGold },
];

const ALL_ADVANCED_TECHNIQUES = ADVANCED_CATEGORIES.flatMap(cat =>
  cat.techniques.map(t => ({ ...t, category: cat.name, categoryColor: cat.color })),
);

type AdvancedView = "wizard" | "table";

const RECAP = [
  { element: "Persona", question: "Who is the AI?", example: "Senior Tax Partner, India" },
  { element: "Context", question: "What's the situation?", example: "Client has cross-border IT support arrangement" },
  { element: "Instruction", question: "What exactly should it do?", example: "Summarise exposures above INR 25 Cr" },
  { element: "Constraints", question: "What are the limits?", example: "Under 200 words, last 3 assessment years" },
  { element: "Grounding", question: "Which sources apply?", example: "Income-tax Act, 1961 + CBDT circulars" },
  { element: "Tone", question: "How should it sound?", example: "Formal, client-ready" },
  { element: "Output", question: "What format?", example: "Table + 3 bullet risks" },
  { element: "Iterate", question: "How do you refine?", example: 'Follow up: "Now make it 5 bullets for MNCs"' },
];

const RECAP_CARDS: { icon: LucideIcon; name: string; color: string; bg: string; desc: string }[] = [
  { icon: User, name: "Persona", color: C.frameMagenta, bg: "rgba(255,50,255,0.06)", desc: 'Tell AI WHO to be. Like telling a new colleague: "Pretend you\'re a senior tax partner" — so it talks like one, not like a Wikipedia article.' },
  { icon: FileText, name: "Context", color: C.frameTeal, bg: "rgba(50,255,255,0.06)", desc: "Give the background story. Like telling a taxi driver WHERE you're going — without it, AI drives in circles giving generic answers." },
  { icon: ListChecks, name: "Instruction", color: C.yellow, bg: "rgba(255,230,0,0.08)", desc: 'Say exactly WHAT to do. Like ordering food: "Give me a paneer tikka" works. "Give me something nice" doesn\'t.' },
  { icon: Shield, name: "Constraints", color: C.frameBlue, bg: "rgba(70,150,255,0.08)", desc: 'Set boundaries. Like telling a kid "draw me a picture — but only use 3 colours and keep it on one page." Keeps AI focused.' },
  { icon: Scale, name: "Grounding", color: C.framePurple, bg: "rgba(180,0,255,0.06)", desc: 'Tell AI WHERE to look. Like saying "only use THIS textbook for answers" — prevents it from making things up.' },
  { icon: Palette, name: "Tone / Style", color: C.yellow, bg: "rgba(255,230,0,0.08)", desc: 'Tell AI HOW to sound. Like asking someone: "Explain it like I\'m presenting to a CFO" vs "Explain it to a 5-year-old." Same info, different packaging.' },
  { icon: Table2, name: "Output Format", color: C.frameGreen, bg: "rgba(0,200,100,0.08)", desc: 'Tell AI WHAT SHAPE the answer should take. Like saying "give me a table, not a paragraph" — saves you 20 minutes of reformatting.' },
  { icon: RefreshCw, name: "Iterative Refinement", color: C.frameOrange, bg: "rgba(255,125,30,0.08)", desc: 'Don\'t restart — refine. Like editing a draft: "Make it shorter", "Add a table", "Simplify for the board." Each follow-up makes it better.' },
];

const STRONG_BRIEF_FIELDS = [
  { label: "User", value: "ABC Corp" },
  { label: "Issue", value: "Royalty payments" },
  { label: "Jurisdiction", value: "India" },
  { label: "Output", value: "1-page memo" },
  { label: "Deadline", value: "Thursday" },
  { label: "Audience", value: "User-ready" },
];

type MatchTab = "basic" | "advanced";

type MatchPromptItem = { id: string; answer: string; text: string };
type MatchElementItem = { id: string; label: string };

const BASIC_MATCH: { prompts: MatchPromptItem[]; elements: MatchElementItem[]; scoreMsg: string } = {
  prompts: [
    { id: "b1", answer: "persona", text: '"You are a senior international tax partner with 20 years of experience in India-US DTAA matters. Analyze whether this payment qualifies as royalty under Article 12."' },
    { id: "b2", answer: "context", text: '"Our client is an Indian subsidiary of a US pharma company. They pay ₹50 Cr annually as management fees to the parent. The AO has disallowed this under Section 37. The matter is pending before CIT(A)."' },
    { id: "b3", answer: "output", text: '"Present your analysis as a 3-column table with columns: Issue, Taxpayer\'s Position, Revenue\'s Likely Argument. Follow with 5 bullet-point recommendations."' },
    { id: "b4", answer: "constraints", text: '"Keep your response under 300 words. Focus only on the indirect transfer provisions under Section 9(1)(i). Do not cover capital gains computation or exemptions."' },
    { id: "b5", answer: "grounding", text: '"Base your analysis strictly on the Supreme Court ruling in Engineering Analysis Centre of Excellence (2022) and the CBDT Circular No. 17/2023. Do not rely on tribunal decisions."' },
  ],
  elements: [
    { id: "grounding", label: "Grounding / Source Anchoring" },
    { id: "persona", label: "Persona" },
    { id: "constraints", label: "Constraints & Boundaries" },
    { id: "output", label: "Output Indicator" },
    { id: "context", label: "Context" },
  ],
  scoreMsg: "You've got the basics down! These elements form the foundation of every effective prompt.",
};

const ADVANCED_MATCH: { prompts: MatchPromptItem[]; elements: MatchElementItem[]; scoreMsg: string } = {
  prompts: [
    { id: "a1", answer: "step-back", text: '"Before analyzing whether our client\'s arrangement triggers GAAR, first explain the general principles of anti-avoidance across OECD jurisdictions. Then apply those principles to the Indian GAAR provisions under Chapter X-A."' },
    { id: "a2", answer: "tree-of-thoughts", text: '"Consider 3 possible restructuring paths for this demerger: (A) tax-neutral under Section 2(19AA), (B) slump sale under Section 50B, (C) itemised sale of assets. Evaluate tax cost of each path separately, then recommend the optimal one."' },
    { id: "a3", answer: "self-refine", text: '"Draft a transfer pricing documentation memo for this IT services transaction. Then review your own draft as if you were the reviewing tax partner. Identify gaps, strengthen weak arguments, and produce an improved final version."' },
    { id: "a4", answer: "chain-verification", text: '"After completing your analysis of the PE exposure, list every factual claim and legal citation you made. Verify each one against the attached India-Singapore DTAA text. Correct any errors before presenting the final output."' },
    { id: "a5", answer: "analogical", text: '"The EU\'s digital services tax applies a 3% levy on revenues from targeted digital services. Using this as a parallel, analyze how India\'s Equalisation Levy (2%) compares in scope, applicability, and treaty override implications."' },
  ],
  elements: [
    { id: "analogical", label: "Analogical Prompting" },
    { id: "chain-verification", label: "Chain of Verification" },
    { id: "step-back", label: "Step-back Prompting" },
    { id: "self-refine", label: "Self-Refine" },
    { id: "tree-of-thoughts", label: "Tree of Thoughts" },
  ],
  scoreMsg: "Impressive! You can identify advanced techniques — now use them to supercharge your prompts.",
};

type TabGameState = {
  selectedPromptId: string | null;
  correctCount: number;
  answeredCount: number;
  solvedPrompts: Record<string, boolean>;
  matchedElements: Record<string, boolean>;
  incorrectPromptId: string | null;
  highlightElementId: string | null;
  showScore: boolean;
  scoreMessage: string;
};

function emptyGameState(): TabGameState {
  return {
    selectedPromptId: null,
    correctCount: 0,
    answeredCount: 0,
    solvedPrompts: {},
    matchedElements: {},
    incorrectPromptId: null,
    highlightElementId: null,
    showScore: false,
    scoreMessage: "",
  };
}

function scoreMessageFor(tab: MatchTab, correct: number): string {
  if (correct === 5) {
    return tab === "basic"
      ? "🎉 Perfect score! You've mastered the basic prompt elements. Time to level up!"
      : "🎉 Flawless! You can identify advanced techniques like a pro — now deploy them in your tax work.";
  }
  if (correct >= 3) {
    return tab === "basic"
      ? "Solid foundation! Review the ones you missed and try again."
      : "Good grasp of advanced techniques! A quick review of the missed ones will make you unstoppable.";
  }
  return tab === "basic"
    ? "Worth another try — scroll up to the Prompt Elements section for a refresher."
    : "These are tricky! Revisit the Advanced Techniques section and give it another go.";
}

const PROMPT_STACK = ELEMENTS.map(e => ({
  id: e.id,
  name: e.name.replace(" / ", " · "),
  shortName: e.name.split(" / ")[0],
  question: RECAP[e.id - 1]?.question ?? e.q,
  example: RECAP[e.id - 1]?.example ?? "",
  color: e.color,
  border: e.border,
  fragment: [
    "You are a senior tax partner in India.",
    "Our client in India provides IT support to its parent in Singapore.",
    "Summarise tax exposures above INR 25 crore, under dispute in the last 3 assessment years.",
    "Keep the response under 200 words.",
    "According to the Income-tax Act, 1961 and latest CBDT circulars.",
    "Use a formal, client-ready tone suitable for the Tax Head.",
    "Provide a table followed by 3 bullet-point risks and recommendations.",
    'Then refine: "Now create a 5-bullet summary for Indian MNCs."',
  ][e.id - 1],
}));

function buildStackedPrompt(stackedIds: number[]): string {
  return [...stackedIds]
    .sort((a, b) => a - b)
    .map(id => PROMPT_STACK.find(e => e.id === id)?.fragment)
    .filter(Boolean)
    .join(" ");
}

function PromptStackBuilder() {
  const [stackOrder, setStackOrder] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const focusRing = `2px solid ${C.yellow}`;

  const stackedSet = new Set(stackOrder);
  const sortedStacked = [...stackOrder]
    .sort((a, b) => a - b)
    .map(id => PROMPT_STACK.find(e => e.id === id))
    .filter(Boolean) as typeof PROMPT_STACK;
  const generatedPrompt = buildStackedPrompt(stackOrder);

  const toggleElement = (id: number) => {
    setStackOrder(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
    );
    setCopied(false);
  };

  const resetStack = () => {
    setStackOrder([]);
    setCopied(false);
  };

  const copyPrompt = async () => {
    if (!generatedPrompt) return;
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(240px, 280px) 1fr",
      gap: 24,
      height: 560,
      minHeight: 560,
      background: C.offWhite,
      border: `1px solid rgba(46,46,56,0.10)`,
      borderRadius: 12,
      padding: 20,
    }}>
      {/* Element picker — single column */}
      <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
        <p style={{ fontSize: 13, color: C.gray01, fontFamily: F.regular, lineHeight: 1.5, marginBottom: 12, flexShrink: 0 }}>
          Tap to add. Tap again to remove.
        </p>
        <div
          role="group"
          aria-label="Prompt elements"
          style={{ display: "flex", flexDirection: "column", gap: 6, overflowY: "auto", flex: 1, paddingRight: 4 }}
        >
          {PROMPT_STACK.map(el => {
            const active = stackedSet.has(el.id);
            return (
              <button
                key={el.id}
                type="button"
                aria-pressed={active}
                onClick={() => toggleElement(el.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                  textAlign: "left",
                  background: active ? "rgba(255,230,0,0.18)" : C.white,
                  border: active ? `1.5px solid ${C.yellow}` : `1px solid rgba(46,46,56,0.12)`,
                  flexShrink: 0,
                }}
                onFocus={e => { e.currentTarget.style.outline = focusRing; }}
                onBlur={e => { e.currentTarget.style.outline = "none"; }}
              >
                <span style={{
                  width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                  background: active ? C.yellow : el.color + "22",
                  border: active ? "none" : `1.5px solid ${el.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 800,
                  color: active ? C.confidentBlack : el.color,
                  fontFamily: F.bold,
                }}>
                  {el.id}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: active ? C.offBlack : C.confidentBlack, fontFamily: F.bold }}>
                    {el.shortName}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <p style={{ fontSize: 11, color: C.gray01, fontFamily: F.regular, marginTop: 10, flexShrink: 0 }}>
          {stackOrder.length} of {PROMPT_STACK.length} added
        </p>
      </div>

      {/* Preview + pinned generated prompt */}
      <div style={{ display: "flex", flexDirection: "column", minHeight: 0, height: "100%" }}>
        {/* Scrollable tagged stack */}
        <div
          aria-label="Prompt element stack"
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            background: "transparent",
            border: `1px solid rgba(46,46,56,0.08)`,
            borderRadius: "12px 12px 0 0",
            padding: "20px 24px",
          }}
        >
          {sortedStacked.length === 0 ? (
            <div style={{ height: "100%", minHeight: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontSize: 14, color: C.gray01, fontFamily: F.regular, margin: 0, textAlign: "center", maxWidth: 320, lineHeight: 1.6 }}>
                Pick elements on the left — each one appears here as a tagged line.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {sortedStacked.map(item => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "12px 14px",
                    background: C.white,
                    borderRadius: 8,
                    border: `1px solid rgba(46,46,56,0.08)`,
                    borderLeft: `3px solid ${item.border}`,
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    color: item.color,
                    background: item.color + "18",
                    border: `1px solid ${item.color}44`,
                    borderRadius: 4,
                    padding: "3px 8px",
                    fontFamily: F.bold,
                    lineHeight: 1.4,
                  }}>
                    {item.shortName.toUpperCase()}
                  </span>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: C.offBlack,
                    fontFamily: F.regular,
                    flex: 1,
                  }}>
                    {item.fragment}
                  </p>
                  <button
                    type="button"
                    aria-label={`Remove ${item.shortName}`}
                    onClick={() => toggleElement(item.id)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: C.gray01, fontSize: 18, lineHeight: 1, padding: "0 2px", flexShrink: 0,
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pinned generated prompt — always visible */}
        <div style={{
          flexShrink: 0,
          background: C.white,
          border: `1px solid rgba(46,46,56,0.10)`,
          borderTop: `2px solid ${C.yellow}`,
          borderRadius: "0 0 12px 12px",
          padding: "18px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.eyebrowGold, fontFamily: F.bold }}>
            Generated prompt
          </span>
          <p
            aria-live="polite"
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: 1.7,
              color: generatedPrompt ? C.offBlack : C.gray01,
              fontFamily: F.light,
              fontStyle: generatedPrompt ? "italic" : "normal",
              maxHeight: 72,
              overflowY: "auto",
              flex: 1,
            }}
          >
            {generatedPrompt
              ? `"${generatedPrompt}"`
              : "Your assembled prompt appears here as you add elements."}
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, flexShrink: 0 }}>
            <button
              type="button"
              onClick={resetStack}
              disabled={stackOrder.length === 0}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 14px", borderRadius: 6, fontSize: 12, fontFamily: F.regular,
                border: `1px solid rgba(46,46,56,0.15)`,
                background: C.white,
                color: stackOrder.length === 0 ? C.gray02 : C.offBlack,
                cursor: stackOrder.length === 0 ? "not-allowed" : "pointer",
              }}
            >
              <RotateCcw size={13} /> Reset
            </button>
            <button
              type="button"
              onClick={copyPrompt}
              disabled={!generatedPrompt}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 16px", borderRadius: 6, fontSize: 12, fontFamily: F.bold,
                border: "none",
                background: generatedPrompt ? C.yellow : C.offWhite,
                color: generatedPrompt ? C.confidentBlack : C.gray02,
                cursor: generatedPrompt ? "pointer" : "not-allowed",
              }}
            >
              <Copy size={13} /> {copied ? "Copied!" : "Copy prompt"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamBriefingSection() {
  const missingItems = ["What issue?", "Which jurisdiction?", "What output?", "By when?"];
  return (
    <section id="team-briefing" style={{ background: SURFACE.light.bg, padding: "72px 64px", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: C.confidentBlack, textAlign: "center", marginBottom: 8, fontFamily: F.bold }}>
          Brief AI Like You Brief Your Team
        </h2>
        <p style={{ fontSize: 16, color: C.gray01, textAlign: "center", lineHeight: 1.7, marginBottom: 52, fontFamily: F.light }}>
          The more context you provide, the better the outcome.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 0, alignItems: "stretch" }}>
          <div style={{ border: `1px solid ${C.destructive}33`, borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", background: C.white }}>
            <div style={{ background: C.destructive + "0d", padding: "14px 22px", borderBottom: `1px solid ${C.destructive}1f`, display: "flex", alignItems: "center", gap: 10, minHeight: 48 }}>
              <span style={{ color: C.destructive, fontSize: 11, fontWeight: 700, letterSpacing: "1px", fontFamily: F.bold }}>WEAK BRIEF</span>
            </div>
            <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ background: C.offWhite, borderRadius: 8, padding: "16px 18px", borderLeft: `3px solid ${C.destructive}` }}>
                <p style={{ color: C.offBlack, fontSize: 15, fontStyle: "italic", lineHeight: 1.65, fontFamily: F.light, margin: 0 }}>
                  &ldquo;Research this matter and get back to me.&rdquo;
                </p>
              </div>
              <div>
                <div style={{ color: C.destructive, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 9, fontFamily: F.bold }}>Missing:</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {missingItems.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 12px", background: C.destructive + "0d", borderRadius: 6 }}>
                      <span style={{ color: C.destructive, fontSize: 11, fontWeight: 600, fontFamily: F.bold }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: C.destructive + "0a", border: `1px dashed ${C.destructive}33`, borderRadius: 8, padding: 14, marginTop: "auto" }}>
                <div style={{ color: C.destructive, fontSize: 10, fontWeight: 700, letterSpacing: "1px", marginBottom: 6, fontFamily: F.bold }}>↓ OUTCOME</div>
                <p style={{ color: C.gray01, fontSize: 12, lineHeight: 1.6, fontFamily: F.regular, margin: 0 }}>
                  <strong style={{ color: C.destructive }}>Generic response</strong> — vague, incomplete, and needs a full rewrite.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 2, flex: 1, background: `linear-gradient(180deg, ${C.destructive}4d, ${C.yellow}99, ${C.success}4d)` }} />
            <div style={{ background: C.white, border: `2px solid ${C.yellow}`, color: C.offBlack, fontSize: 10, fontWeight: 800, padding: "6px 8px", borderRadius: "50%", width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.bold }}>VS</div>
            <div style={{ width: 2, flex: 1, background: `linear-gradient(180deg, ${C.success}4d, ${C.yellow}99, ${C.destructive}4d)` }} />
          </div>

          <div style={{ border: `1px solid ${C.success}33`, borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", background: C.white }}>
            <div style={{ background: C.success + "0d", padding: "14px 22px", borderBottom: `1px solid ${C.success}1f`, display: "flex", alignItems: "center", gap: 10, minHeight: 48 }}>
              <span style={{ color: C.success, fontSize: 11, fontWeight: 700, letterSpacing: "1px", fontFamily: F.bold }}>STRONG BRIEF</span>
            </div>
            <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {STRONG_BRIEF_FIELDS.map(field => (
                  <div key={field.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 12px", background: C.success + "0d", borderRadius: 6 }}>
                    <span style={{ color: C.gray01, fontSize: 11, fontWeight: 600, minWidth: 82, flexShrink: 0, fontFamily: F.bold }}>{field.label}</span>
                    <span style={{ color: C.offBlack, fontSize: 12, fontWeight: 500, flex: 1, fontFamily: F.regular }}>{field.value}</span>
                    <span style={{ color: C.success, fontSize: 12, fontWeight: 700 }}>✓</span>
                  </div>
                ))}
              </div>
              <div style={{ background: C.success + "0a", border: `1px dashed ${C.success}33`, borderRadius: 8, padding: 14, marginTop: "auto" }}>
                <div style={{ color: C.success, fontSize: 10, fontWeight: 700, letterSpacing: "1px", marginBottom: 6, fontFamily: F.bold }}>↓ OUTCOME</div>
                <p style={{ color: C.gray01, fontSize: 12, lineHeight: 1.6, fontFamily: F.regular, margin: 0 }}>
                  <strong style={{ color: C.success }}>Focused response</strong> — ready to use, right scope, right audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap", padding: "16px 28px", background: C.white, border: "1px solid rgba(46,46,56,0.10)", borderRadius: 12 }}>
            <div style={{ background: C.yellowAlpha10, border: `1px solid ${C.yellow}44`, padding: "10px 20px", borderRadius: 8, color: C.eyebrowGold, fontSize: 14, fontWeight: 600, fontFamily: F.bold }}>A Good Brief</div>
            <span style={{ color: C.confidentBlack, fontSize: 24, fontWeight: 700, fontFamily: F.bold }}>=</span>
            <div style={{ background: C.info + "14", border: `1px solid ${C.info}33`, padding: "10px 20px", borderRadius: 8, color: C.info, fontSize: 14, fontWeight: 600, fontFamily: F.bold }}>A Good Prompt</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiLazyProSection() {
  return (
    <section id="lazy-vs-pro" style={{ background: SURFACE.neutral.bg, padding: "72px 64px", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: C.confidentBlack, textAlign: "center", marginBottom: 8, fontFamily: F.bold }}>
          Same AI. Two Very Different Results.
        </h2>
        <p style={{ fontSize: 16, color: C.gray01, textAlign: "center", lineHeight: 1.7, marginBottom: 52, fontFamily: F.light }}>
          The only thing that changed? The way you asked.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 0, alignItems: "stretch" }}>
          <div style={{ border: `1px solid ${C.destructive}33`, borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ background: C.destructive + "0d", padding: "14px 22px", borderBottom: `1px solid ${C.destructive}1f`, display: "flex", alignItems: "center", gap: 10, minHeight: 48 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.destructive} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
              <span style={{ color: C.destructive, fontSize: 11, fontWeight: 700, letterSpacing: "1px", fontFamily: F.bold }}>THE LAZY ASK</span>
            </div>
            <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ background: C.offWhite, borderRadius: 8, padding: "16px 18px", borderLeft: `3px solid ${C.destructive}`, minHeight: 128, display: "flex", alignItems: "flex-start" }}>
                <p style={{ color: C.offBlack, fontSize: 15, fontStyle: "italic", lineHeight: 1.65, fontFamily: F.light, margin: 0 }}>&ldquo;Summarise this document&rdquo;</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, minHeight: 76 }}>
                {["No role", "No context", "No format", "No limits"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 12px", background: C.destructive + "0d", borderRadius: 6 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.destructive} strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    <span style={{ color: C.destructive, fontSize: 11, fontWeight: 600, fontFamily: F.bold }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: C.destructive + "0a", border: `1px dashed ${C.destructive}33`, borderRadius: 8, padding: 14, marginTop: "auto" }}>
                <div style={{ color: C.destructive, fontSize: 10, fontWeight: 700, letterSpacing: "1px", marginBottom: 6, fontFamily: F.bold }}>↓ WHAT YOU GET BACK</div>
                <p style={{ color: C.gray01, fontSize: 12, lineHeight: 1.6, fontFamily: F.regular, margin: 0 }}>A generic 300-word wall of text. Wrong tone. Wrong audience. Needs complete rewriting. <strong style={{ color: C.destructive }}>30 minutes wasted.</strong></p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 2, flex: 1, background: `linear-gradient(180deg, ${C.destructive}4d, ${C.yellow}99, ${C.success}4d)` }} />
            <div style={{ background: C.white, border: `2px solid ${C.yellow}`, color: C.offBlack, fontSize: 10, fontWeight: 800, padding: "6px 8px", borderRadius: "50%", width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.bold }}>VS</div>
            <div style={{ width: 2, flex: 1, background: `linear-gradient(180deg, ${C.success}4d, ${C.yellow}99, ${C.destructive}4d)` }} />
          </div>

          <div style={{ border: `1px solid ${C.success}33`, borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ background: C.success + "0d", padding: "14px 22px", borderBottom: `1px solid ${C.success}1f`, display: "flex", alignItems: "center", gap: 10, minHeight: 48 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.success} strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span style={{ color: C.success, fontSize: 11, fontWeight: 700, letterSpacing: "1px", fontFamily: F.bold }}>THE PRO ASK</span>
            </div>
            <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ background: C.offWhite, borderRadius: 8, padding: "16px 18px", borderLeft: `3px solid ${C.success}`, minHeight: 128, display: "flex", alignItems: "flex-start" }}>
                <p style={{ color: C.offBlack, fontSize: 14, fontStyle: "italic", lineHeight: 1.65, fontFamily: F.light, margin: 0 }}>
                  &ldquo;You are a <strong style={{ color: C.eyebrowGold, fontStyle: "normal" }}>tax advisor</strong>. Summarise the key <strong style={{ color: C.frameBlue, fontStyle: "normal" }}>transfer pricing changes</strong> in this circular for a <strong style={{ color: C.frameOrange, fontStyle: "normal" }}>client memo</strong>. Use <strong style={{ color: C.framePurple, fontStyle: "normal" }}>bullet points</strong>. Keep it under <strong style={{ color: C.success, fontStyle: "normal" }}>200 words</strong>.&rdquo;
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, minHeight: 76 }}>
                {["Role defined", "Task clear", "Format set", "Length capped"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 12px", background: C.success + "0d", borderRadius: 6 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.success} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ color: C.success, fontSize: 11, fontWeight: 600, fontFamily: F.bold }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: C.success + "0a", border: `1px dashed ${C.success}33`, borderRadius: 8, padding: 14, marginTop: "auto" }}>
                <div style={{ color: C.success, fontSize: 10, fontWeight: 700, letterSpacing: "1px", marginBottom: 6, fontFamily: F.bold }}>↓ WHAT YOU GET BACK</div>
                <p style={{ color: C.gray01, fontSize: 12, lineHeight: 1.6, fontFamily: F.regular, margin: 0 }}>A client-ready bullet list. Right tone. Right scope. Drop it straight into the email. <strong style={{ color: C.success }}>Done in 30 seconds.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecapInNutshellSection() {
  const s = SURFACE.dark;
  return (
    <section id="recap" style={{
      background: s.bg,
      padding: "100px 64px",
      scrollMarginTop: SUBNAV_SCROLL_OFFSET,
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: C.yellow, border: `1px solid ${C.gray02}`,
          borderRadius: 100, padding: "6px 16px", marginBottom: 16,
        }}>
          <span style={{ color: C.offBlack, fontSize: 14, fontFamily: F.regular }}>
            Recap in a Nutshell
          </span>
        </div>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: s.heading, marginBottom: 10, fontFamily: F.bold }}>
          Putting your <span style={{ color: C.yellow, fontStyle: "italic" }}>#BestPrompt Forward</span>
        </h2>
        <p style={{ fontSize: 16, color: s.body, lineHeight: 1.6, marginBottom: 50, fontFamily: F.light }}>
          Your 8-element checklist. Before you hit Send, make sure you&apos;ve covered these.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, textAlign: "left" }}>
          {RECAP_CARDS.map(({ icon: Icon, name, color, desc }) => (
            <div key={name} style={{
              background: C.white, border: `1px solid ${s.border}`,
              borderLeft: `4px solid ${color}`, borderRadius: 12, padding: "21px 28px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", background: C.yellow,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon size={18} color={C.confidentBlack} strokeWidth={2} />
                </div>
                <span style={{ color, fontSize: 15, fontWeight: 700, fontFamily: F.bold }}>{name}</span>
              </div>
              <p style={{ color: C.gray01, fontSize: 13, lineHeight: 1.6, margin: 0, fontFamily: F.regular }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 40, maxWidth: 900, marginLeft: "auto", marginRight: "auto",
          background: C.surfaceOnDark, border: `1px solid ${s.border}`,
          borderTop: `3px solid ${C.yellow}`,
          borderRadius: 12, padding: 29, textAlign: "center",
        }}>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, fontFamily: F.bold, color: s.heading }}>
            We have shared the essentials. Now it&apos;s your turn to unlock the extraordinary.
          </p>
          <p style={{ margin: "8px 0 0", fontSize: 16, lineHeight: 1.6, color: s.body, fontFamily: F.regular }}>
            The more you practice, the sharper your prompts become. Start with one element — and layer more as you gain confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsNextSection({ onContinue }: { onContinue: () => void }) {
  return (
    <EYWhatsNext
      style={{ background: SURFACE.neutral.bg, borderTop: `1px solid ${SURFACE.neutral.border}` }}
      title="Prompting skills — unlocked."
      description={
        <>
          The next module takes you into Microsoft 365 Copilot — where you&apos;ll apply these skills across Word, Excel, Outlook, and Teams with real tax use cases.
        </>
      }
      ctaLabel="Continue to Part 3: M365 Copilot Deep Dive"
      onContinue={onContinue}
      meta="Part 3 covers: Copilot in Word, Excel, Outlook, Teams, and real tax workflows"
    />
  );
}

function MatchPromptActivity() {
  const [activeTab, setActiveTab] = useState<MatchTab>("basic");
  const [games, setGames] = useState<Record<MatchTab, TabGameState>>({
    basic: emptyGameState(),
    advanced: emptyGameState(),
  });

  const config = activeTab === "basic" ? BASIC_MATCH : ADVANCED_MATCH;
  const game = games[activeTab];

  const selectPrompt = (promptId: string) => {
    if (game.solvedPrompts[promptId]) return;
    setGames(prev => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], selectedPromptId: promptId },
    }));
  };

  const selectElement = (elementId: string) => {
    const state = games[activeTab];
    if (state.matchedElements[elementId]) return;

    if (!state.selectedPromptId) return;

    const prompt = config.prompts.find(p => p.id === state.selectedPromptId);
    if (!prompt) return;

    const isCorrect = prompt.answer === elementId;
    const answeredCount = state.answeredCount + 1;
    const correctCount = state.correctCount + (isCorrect ? 1 : 0);

    if (isCorrect) {
      setGames(prev => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          selectedPromptId: null,
          answeredCount,
          correctCount,
          solvedPrompts: { ...prev[activeTab].solvedPrompts, [prompt.id]: true },
          matchedElements: { ...prev[activeTab].matchedElements, [elementId]: true },
          showScore: answeredCount === 5,
          scoreMessage: answeredCount === 5 ? scoreMessageFor(activeTab, correctCount) : prev[activeTab].scoreMessage,
        },
      }));
      return;
    }

    setGames(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        selectedPromptId: null,
        answeredCount,
        correctCount,
        incorrectPromptId: prompt.id,
        highlightElementId: prompt.answer,
        showScore: answeredCount === 5,
        scoreMessage: answeredCount === 5 ? scoreMessageFor(activeTab, correctCount) : prev[activeTab].scoreMessage,
      },
    }));

    window.setTimeout(() => {
      setGames(prev => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          incorrectPromptId: null,
          highlightElementId: null,
        },
      }));
    }, 1500);
  };

  const resetGame = (tab: MatchTab) => {
    setGames(prev => ({ ...prev, [tab]: emptyGameState() }));
  };

  return (
    <section id="match-activity" style={{
      background: SURFACE.neutral.bg,
      padding: "100px 64px",
      textAlign: "center",
      scrollMarginTop: SUBNAV_SCROLL_OFFSET,
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", background: C.accentOrange + "14", border: `1px solid ${C.accentOrange}40`,
          borderRadius: 20, padding: "6px 18px", marginBottom: 16,
        }}>
          <span style={{ color: C.accentOrange, fontSize: 11, fontWeight: 700, letterSpacing: "1.26px", textTransform: "uppercase", fontFamily: F.bold }}>
            Interactive Activity
          </span>
        </div>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: C.confidentBlack, marginBottom: 12, fontFamily: F.bold }}>
          Match the Prompt to the Element
        </h2>
        <p style={{ fontSize: 16, color: C.gray01, lineHeight: 1.6, marginBottom: 24, fontFamily: F.regular, maxWidth: 650, marginLeft: "auto", marginRight: "auto" }}>
          Read each prompt example. Identify which prompting element or technique it demonstrates. Click the prompt, then click the matching element.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
          {([
            { id: "basic" as const, label: "🎯 Basic Elements" },
            { id: "advanced" as const, label: "🚀 Advanced Techniques" },
          ]).map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
                border: activeTab === tab.id ? `1px solid ${C.yellow}` : "1px solid rgba(46,46,56,0.12)",
                background: activeTab === tab.id ? C.yellowAlpha10 : C.white,
                color: activeTab === tab.id ? C.eyebrowGold : C.gray01,
                fontFamily: F.bold,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap",
          marginBottom: 30, padding: "14px 24px", background: C.white,
          border: "1px solid rgba(46,46,56,0.08)", borderRadius: 10, maxWidth: 700, marginLeft: "auto", marginRight: "auto",
        }}>
          {[
            "Click a prompt on the left",
            "Click the matching element on the right",
            "Get instant feedback",
          ].map((text, i) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: C.gray01, fontFamily: F.regular }}>
              <span style={{
                width: 20, height: 20, borderRadius: "50%", background: C.yellowAlpha10,
                color: C.eyebrowGold, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {i + 1}
              </span>
              {text}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {config.prompts.map((prompt, index) => {
            const element = config.elements[index];
            const isSelected = game.selectedPromptId === prompt.id;
            const isCorrect = game.solvedPrompts[prompt.id];
            const isIncorrect = game.incorrectPromptId === prompt.id;
            const isMatched = game.matchedElements[element.id];
            const isHighlighted = game.highlightElementId === element.id;

            return (
              <div key={prompt.id} style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 0, alignItems: "stretch" }}>
                <button
                  type="button"
                  onClick={() => selectPrompt(prompt.id)}
                  disabled={isCorrect}
                  style={{
                    position: "relative", padding: "18px 20px", borderRadius: 10, textAlign: "left", cursor: isCorrect ? "default" : "pointer",
                    background: isCorrect ? C.success + "0d" : isIncorrect ? C.destructive + "0d" : isSelected ? C.yellowAlpha10 : C.white,
                    border: isCorrect ? `2px solid ${C.success}` : isIncorrect ? `2px solid ${C.destructive}` : isSelected ? `2px solid ${C.yellow}` : "2px solid rgba(46,46,56,0.10)",
                    boxShadow: isSelected ? `0 0 15px ${C.yellowAlpha12}` : "none",
                    fontFamily: F.regular,
                  }}
                >
                  <span style={{
                    position: "absolute", top: -8, left: -8, width: 22, height: 22, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800, background: C.confidentBlack, color: C.yellow,
                    border: "1px solid rgba(255,230,0,0.3)",
                  }}>
                    {index + 1}
                  </span>
                  {isCorrect && (
                    <span style={{ position: "absolute", top: 10, right: 12, color: C.success, fontSize: 16, fontWeight: 700 }}>✓</span>
                  )}
                  <p style={{ margin: 0, fontSize: 13, color: C.offBlack, lineHeight: 1.6, fontStyle: "italic" }}>{prompt.text}</p>
                </button>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: C.gray01, fontSize: 24 }}>
                  ⟷
                </div>

                <button
                  type="button"
                  onClick={() => selectElement(element.id)}
                  disabled={isMatched}
                  style={{
                    padding: "14px 20px", borderRadius: 10, textAlign: "center", cursor: isMatched ? "default" : "pointer",
                    background: C.white,
                    border: isHighlighted ? `2px solid ${C.success}` : isMatched ? `2px solid ${C.success}4d` : "2px solid rgba(46,46,56,0.10)",
                    boxShadow: isHighlighted ? `0 0 12px ${C.success}80` : "none",
                    fontSize: 13, fontWeight: 700, color: isMatched ? C.success : C.offBlack,
                    opacity: isMatched ? 0.5 : 1,
                    letterSpacing: "0.3px", fontFamily: F.bold,
                  }}
                >
                  {element.label}{isMatched ? " ✓" : ""}
                </button>
              </div>
            );
          })}
        </div>

        {game.showScore && (
          <div style={{
            marginTop: 30, padding: 24, background: C.yellowAlpha10, border: `1px solid ${C.yellow}44`, borderRadius: 12,
          }}>
            <div style={{ fontSize: 42, fontWeight: 800, color: C.eyebrowGold, fontFamily: F.bold }}>
              {game.correctCount}/5
            </div>
            <p style={{ fontSize: 14, color: C.gray01, marginTop: 8, fontFamily: F.regular }}>
              {game.scoreMessage || config.scoreMsg}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => resetGame(activeTab)}
          style={{
            marginTop: 20, padding: "10px 24px", border: "1px solid rgba(46,46,56,0.15)",
            borderRadius: 6, background: C.white, color: C.gray01,
            fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: F.bold,
          }}
        >
          ↻ Reset &amp; Try Again
        </button>
      </div>
    </section>
  );
}

// ── 8 Elements wizard (Figma Section Elements) ───────────────────────────────

const STEP_SUBTITLES: Record<number, string> = {
  1: "WHO should AI be?",
  2: "What is the background?",
  3: "What should AI do?",
  4: "What are the limits?",
  5: "Where should AI look?",
  6: "How should it sound?",
  7: "What shape should it take?",
  8: "How do you refine?",
};

const PERSONA_WIZARD = {
  description: "Assigning a specific persona primes the AI's perspective, knowledge base, and tone. It shifts the response from a generic search engine summary to a contextual expert analysis.",
  whyMatters: 'Without a specified persona, the LLM treats your inquiry through a generalist average lens. Specifying "Tax Partner" ensures it highlights liabilities and focuses precisely on structural risk mitigation.',
  without: '"Explain the GST applicability on supply of services under Section 7 of CGST Act."',
  with: '"Act as a Senior Indian Tax Partner specializing in indirect taxation. Analyze Section 7 of the CGST Act..."',
  withoutNote: "⚠️ Result: Produces a generic textbook definition without practical corporate tax planning implications.",
  withNote: "🌟 Result: Generates corporate advisory-level insights, highlighting risks, recent rulings, and planning loopholes.",
  fieldLabel: "Define the AI Persona below:",
  fieldPlaceholder: "AI Persona Definition",
  fieldTip: "Tip: Mention years of experience, field of mastery, and context-specific credentials.",
  proTips: [
    '• Authority: Reference specific professional bodies or titles (e.g., "Chartered Accountant", "Audit Partner").',
    '• Tone Setting: Give it constraints (e.g., "Be analytical, skeptical, and prioritize regulatory safety").',
  ],
};

function EightElementsWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [fieldValues, setFieldValues] = useState<Record<number, string>>({});

  const elem = ELEMENTS[activeStep];
  const fieldValue = fieldValues[elem.id] ?? "";
  const isPersona = elem.id === 1;
  const description = isPersona ? PERSONA_WIZARD.description : elem.what;
  const whyMatters = isPersona ? PERSONA_WIZARD.whyMatters : elem.why;
  const withoutPrompt = isPersona ? PERSONA_WIZARD.without : elem.without;
  const withPrompt = isPersona ? PERSONA_WIZARD.with : elem.with;
  const withoutNote = isPersona ? PERSONA_WIZARD.withoutNote : "⚠️ Result: Output stays generic and misses the specifics of your tax situation.";
  const withNote = isPersona ? PERSONA_WIZARD.withNote : "🌟 Result: Output becomes precise, professional, and ready to use in your workflow.";
  const fieldLabel = isPersona ? PERSONA_WIZARD.fieldLabel : `Define the ${elem.name} below:`;
  const fieldPlaceholder = isPersona ? PERSONA_WIZARD.fieldPlaceholder : `${elem.name} definition`;
  const fieldTip = isPersona ? PERSONA_WIZARD.fieldTip : `Tip: Be explicit about ${elem.name.toLowerCase()} so the AI knows exactly what you need.`;
  const proTips = isPersona ? PERSONA_WIZARD.proTips : [`• Apply ${elem.name.toLowerCase()} clearly in your opening sentence before the main task.`];
  const elementTag = elem.name.replace(" / ", " ").toUpperCase();

  return (
    <section id="elements" style={{ background: SURFACE.dark.bg, padding: "80px 80px 48px", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <div style={{ background: C.yellow, border: `1px solid ${C.gray02}`, borderRadius: 100, padding: "6px 16px" }}>
            <span style={{ fontSize: 14, color: C.offBlack, fontFamily: F.regular }}>METHODOLOGY</span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: SURFACE.dark.heading, fontFamily: F.bold, letterSpacing: "-0.32px", textAlign: "center", margin: 0 }}>
            Prompt like a Pro — The 8 Elements
          </h2>
          <p style={{ fontSize: 16, color: SURFACE.dark.body, fontFamily: F.light, lineHeight: "24px", textAlign: "center", maxWidth: 760, margin: 0 }}>
            The more context and structural anchors you provide, the better the final output.
          </p>
        </div>

        {/* Stepper */}
        <div style={{ padding: "40px 0 20px", overflowX: "auto" }}>
          <div style={{
            background: C.offWhite, border: `1px solid ${C.gray02}`, borderRadius: 16,
            padding: 24, display: "inline-flex", minWidth: "min(100%, 1232px)",
          }}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              {ELEMENTS.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <div key={step.id} style={{ display: "flex", alignItems: "flex-start" }}>
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      style={{
                        background: isActive ? C.offWhite : "transparent",
                        border: "none", borderRadius: 8, padding: 8, cursor: "pointer",
                        display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start",
                        textAlign: "left", fontFamily: F.regular,
                      }}
                    >
                      <div style={{
                        width: 28, height: 28, borderRadius: 14,
                        background: isActive ? C.yellow : C.offBlack,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 14, fontWeight: 800, color: isActive ? C.confidentBlack : C.white,
                        fontFamily: F.bold,
                      }}>
                        {step.id}
                      </div>
                      <div>
                        <div style={{ fontSize: 14, color: C.offBlack, lineHeight: "22px", whiteSpace: "nowrap" }}>{step.name}</div>
                        <div style={{ fontSize: 12, color: C.gray01, lineHeight: "19.2px", whiteSpace: "nowrap" }}>{STEP_SUBTITLES[step.id]}</div>
                      </div>
                    </button>
                    {index < ELEMENTS.length - 1 && (
                      <div style={{ padding: "14px 16px 0 8px", display: "flex", alignItems: "center" }}>
                        <ChevronRight size={14} color={C.gray01} strokeWidth={2} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Workspace */}
        <div style={{
          display: "flex", gap: 40, alignItems: "stretch", justifyContent: "center",
          flexWrap: "wrap", paddingTop: 12,
        }}>
          {/* Active step card */}
          <div style={{
            flex: "1 1 560px", maxWidth: 760, background: C.confidentBlack,
            border: `1px solid ${C.gray02}`, borderRadius: 20, padding: 40,
            display: "flex", flexDirection: "column", gap: 32,
            boxShadow: "0 16px 16px rgba(0,0,0,0.25)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 22, background: C.yellow,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, fontWeight: 800, color: C.confidentBlack, fontFamily: F.bold, flexShrink: 0,
              }}>
                {elem.id}
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.white, fontFamily: F.bold, lineHeight: 1.1 }}>{elem.name}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.white, fontFamily: F.bold, lineHeight: "28px" }}>{STEP_SUBTITLES[elem.id]}</div>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: 15, lineHeight: "25.5px", color: C.white, fontFamily: F.regular }}>{description}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <label style={{ fontSize: 16, fontWeight: 700, color: C.white, fontFamily: F.bold }}>{fieldLabel}</label>
              <textarea
                value={fieldValue}
                onChange={e => setFieldValues(prev => ({ ...prev, [elem.id]: e.target.value }))}
                placeholder={fieldPlaceholder}
                maxLength={2000}
                style={{
                  width: "100%", minHeight: 118, resize: "vertical",
                  background: C.confidentBlack, border: `1px solid ${C.yellow}`, borderRadius: 4,
                  padding: "8px 12px", fontSize: 14, lineHeight: "20px", color: C.white,
                  fontFamily: F.light, outline: "none",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-start" }}>
                <p style={{ margin: 0, flex: 1, fontSize: 12, lineHeight: "18px", color: C.gray01, fontFamily: F.light }}>{fieldTip}</p>
                <span style={{ fontSize: 12, color: C.white, fontFamily: F.light, whiteSpace: "nowrap" }}>{fieldValue.length}/2000</span>
              </div>
            </div>

            <div style={{
              background: C.offWhite, border: `1px solid ${C.gray02}`, borderRadius: 12, padding: 20,
              display: "flex", flexDirection: "column", gap: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Lightbulb size={20} color={C.gray01} strokeWidth={2} />
                <span style={{ fontSize: 16, fontWeight: 700, color: C.gray01, fontFamily: F.bold }}>Pro {elem.name} Tips:</span>
              </div>
              {proTips.map(tip => (
                <p key={tip} style={{ margin: 0, fontSize: 14, lineHeight: "22.4px", color: C.gray01, fontFamily: F.regular }}>{tip}</p>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setFieldValues(prev => ({ ...prev, [elem.id]: "" }))}
                style={{ background: "none", border: "none", color: C.white, fontSize: 16, cursor: "pointer", fontFamily: F.regular, padding: "10px 16px" }}
              >
                Reset Field
              </button>
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(s => Math.max(0, s - 1))}
                  style={{
                    height: 44, padding: "10px 16px", borderRadius: 4, cursor: activeStep === 0 ? "not-allowed" : "pointer",
                    border: `1px solid ${C.gray02}`, background: "transparent",
                    color: activeStep === 0 ? C.onDarkSubtle : C.white, fontSize: 16, fontFamily: F.regular,
                  }}
                >
                  Back
                </button>
                {activeStep < ELEMENTS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep(s => Math.min(ELEMENTS.length - 1, s + 1))}
                    style={{
                      height: 44, padding: "10px 16px", borderRadius: 4, border: "none",
                      background: C.yellow, color: C.confidentBlack, fontSize: 16, fontWeight: 700,
                      cursor: "pointer", fontFamily: F.bold,
                    }}
                  >
                    Next Step: {ELEMENTS[activeStep + 1].name}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveStep(0)}
                    style={{
                      height: 44, padding: "10px 16px", borderRadius: 4, border: "none",
                      background: C.yellow, color: C.confidentBlack, fontSize: 16, fontWeight: 700,
                      cursor: "pointer", fontFamily: F.bold,
                    }}
                  >
                    Start Over
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Help panel */}
          <div style={{ flex: "0 1 480px", display: "flex", flexDirection: "column", gap: 16, minWidth: 280 }}>
            <div style={{
              background: C.yellow, border: `1px solid ${C.gray02}`, borderRadius: 16, padding: 24,
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Lightbulb size={20} color={C.offBlack} strokeWidth={2} />
                <span style={{ fontSize: 20, fontWeight: 700, color: C.offBlack, fontFamily: F.bold }}>Why it matters</span>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: "25.5px", color: C.offBlack, fontFamily: F.regular }}>{whyMatters}</p>
            </div>

            <div style={{
              background: C.offWhite, border: `1px solid ${C.gray02}`, borderRadius: 16, padding: 24,
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ background: "rgba(255,107,107,0.1)", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 700, color: C.gray02, fontFamily: F.bold }}>
                  ❌ WITHOUT {elementTag}
                </span>
                <span style={{ fontSize: 14, color: C.gray01, fontFamily: F.regular }}>The Generic Way</span>
              </div>
              <div style={{ background: C.confidentBlack, borderRadius: 8, padding: 16 }}>
                <p style={{ margin: 0, fontSize: 14, lineHeight: "22.4px", color: C.white, fontFamily: F.regular, fontStyle: "italic" }}>{withoutPrompt}</p>
              </div>
              <p style={{ margin: 0, fontSize: 12, lineHeight: "19.2px", color: C.gray01, fontFamily: F.regular }}>{withoutNote}</p>
            </div>

            <div style={{
              background: C.offWhite, border: `1px solid ${C.gray02}`, borderRadius: 16, padding: 24,
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ background: "rgba(46,204,113,0.1)", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 700, color: C.gray02, fontFamily: F.bold }}>
                  ✅ WITH {elementTag}
                </span>
                <span style={{ fontSize: 14, color: C.gray01, fontFamily: F.regular }}>The Expert Way</span>
              </div>
              <div style={{ background: C.confidentBlack, borderRadius: 8, padding: 16 }}>
                <p style={{ margin: 0, fontSize: 14, lineHeight: "22.4px", color: C.white, fontFamily: F.regular, fontStyle: "italic" }}>{withPrompt}</p>
              </div>
              <p style={{ margin: 0, fontSize: 12, lineHeight: "19.2px", color: C.gray01, fontFamily: F.regular }}>{withNote}</p>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 24 }}>
          <div style={{ height: 1, background: SURFACE.dark.border, width: "100%" }} />
        </div>
      </div>
    </section>
  );
}

function AdvancedViewToggle({ view, onChange, onDark = false }: { view: AdvancedView; onChange: (v: AdvancedView) => void; onDark?: boolean }) {
  const focusRing = `2px solid ${C.yellow}`;
  const options: { id: AdvancedView; label: string; Icon: typeof Table2; hint: string }[] = [
    { id: "wizard", label: "Wizard", Icon: ListTree, hint: "One technique at a time" },
    { id: "table", label: "Table", Icon: Table2, hint: "Scan all techniques" },
  ];

  return (
    <div
      role="tablist"
      aria-label="Advanced techniques view"
      style={{
        display: "inline-flex",
        background: onDark ? C.white : C.offWhite,
        border: `1px solid rgba(46,46,56,0.10)`,
        borderRadius: 10,
        padding: 4,
        gap: 4,
      }}
    >
      {options.map(({ id, label, Icon, hint }) => {
        const active = view === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            title={hint}
            onClick={() => onChange(id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 16px",
              borderRadius: 7,
              border: "none",
              cursor: "pointer",
              background: active ? C.confidentBlack : "transparent",
              color: active ? C.white : C.gray01,
              fontSize: 13,
              fontWeight: active ? 700 : 500,
              fontFamily: active ? F.bold : F.regular,
              transition: "background 0.15s, color 0.15s",
            }}
            onFocus={e => { e.currentTarget.style.outline = focusRing; }}
            onBlur={e => { e.currentTarget.style.outline = "none"; }}
          >
            <Icon size={15} strokeWidth={2} />
            {label}
          </button>
        );
      })}
    </div>
  );
}

function AdvancedTechniquesTable() {
  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ border: `1px solid rgba(46,46,56,0.10)`, borderRadius: 10, overflow: "hidden", minWidth: 860 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1.4fr 1.4fr 2fr 2fr", background: C.confidentBlack, padding: "14px 20px", gap: 16 }}>
          {["Technique", "Category", "What it is", "What it does", "Without", "With"].map((h, i) => (
            <span key={h} style={{
              color: i === 0 ? C.yellow : i >= 4 ? (i === 4 ? C.destructive : C.success) : C.gray02,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: F.bold,
            }}>{h}</span>
          ))}
        </div>

        {ALL_ADVANCED_TECHNIQUES.map((row, i) => (
          <div key={row.id} style={{
            display: "grid", gridTemplateColumns: "1.2fr 1fr 1.4fr 1.4fr 2fr 2fr",
            padding: "18px 20px", gap: 16, alignItems: "start",
            background: i % 2 === 0 ? C.white : C.offWhite,
            borderTop: `1px solid rgba(46,46,56,0.07)`,
          }}>
            <span style={{ color: C.confidentBlack, fontSize: 13, fontWeight: 700, fontFamily: F.bold, lineHeight: 1.4 }}>{row.name}</span>
            <span style={{
              display: "inline-block", width: "fit-content",
              fontSize: 10, fontWeight: 700, fontFamily: F.bold,
              color: row.categoryColor, background: row.categoryColor + "14",
              border: `1px solid ${row.categoryColor}33`, borderRadius: 4, padding: "3px 8px",
            }}>{row.category}</span>
            <span style={{ color: C.gray01, fontSize: 13, fontFamily: F.regular, lineHeight: 1.6 }}>{row.what}</span>
            <span style={{ color: C.gray01, fontSize: 13, fontFamily: F.regular, lineHeight: 1.6 }}>{row.does}</span>
            <span style={{ color: C.destructive, fontSize: 12, fontStyle: "italic", fontFamily: F.light, lineHeight: 1.65, background: C.destructive + "0a", borderRadius: 6, padding: "8px 12px", display: "block" }}>{row.without}</span>
            <span style={{ color: C.success, fontSize: 12, fontStyle: "italic", fontFamily: F.light, lineHeight: 1.65, background: C.success + "0a", borderRadius: 6, padding: "8px 12px", display: "block" }}>{row.with}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvancedTechniquesSection({ onDark = false }: { onDark?: boolean }) {
  const [view, setView] = useState<AdvancedView>("wizard");
  const muted = onDark ? SURFACE.dark.body : C.gray01;

  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
        marginBottom: 24,
      }}>
        <p style={{ fontSize: 11, color: muted, margin: 0, fontFamily: F.regular, flex: 1, minWidth: 220 }}>
          {view === "wizard"
            ? "Wizard — decompose left, walk through one facet at a time."
            : "Table — compare all techniques side by side for quick reference."}
        </p>
        <AdvancedViewToggle view={view} onChange={setView} onDark={onDark} />
      </div>

      {view === "wizard" ? <AdvancedDecomposition /> : <AdvancedTechniquesTable />}
    </>
  );
}

function AdvancedDecomposition() {
  const [openCategoryId, setOpenCategoryId] = useState(ADVANCED_CATEGORIES[0].id);
  const [selected, setSelected] = useState<{ categoryId: string; techniqueId: string }>({
    categoryId: ADVANCED_CATEGORIES[0].id,
    techniqueId: ADVANCED_CATEGORIES[0].techniques[0].id,
  });
  const [facetIdx, setFacetIdx] = useState(0);

  const category = ADVANCED_CATEGORIES.find(c => c.id === selected.categoryId)!;
  const technique = category.techniques.find(t => t.id === selected.techniqueId)!;
  const facet = FACETS[facetIdx];
  const facetValue = technique[facet.key];
  const isExample = facet.key === "without" || facet.key === "with";

  const selectTechnique = (categoryId: string, techniqueId: string) => {
    setSelected({ categoryId, techniqueId });
    setOpenCategoryId(categoryId);
    setFacetIdx(0);
  };

  const focusRing = `2px solid ${C.yellow}`;

  return (
    <div style={{
      border: `1px solid rgba(46,46,56,0.10)`,
      borderRadius: 12,
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "minmax(260px, 300px) 1fr",
      minHeight: 520,
    }}>
      <nav aria-label="Advanced technique categories" style={{
        background: C.offWhite,
        borderRight: `1px solid rgba(46,46,56,0.08)`,
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{ padding: "0 20px 16px", borderBottom: `1px solid rgba(46,46,56,0.08)` }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.gray01, fontFamily: F.bold, marginBottom: 4 }}>
            Decompose by topic
          </div>
          <div style={{ fontSize: 13, color: C.offBlack, fontFamily: F.regular, lineHeight: 1.5 }}>
            Pick a branch, then one technique.
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "12px 10px" }}>
          {ADVANCED_CATEGORIES.map(cat => {
            const isOpen = openCategoryId === cat.id;
            return (
              <div key={cat.id} style={{ marginBottom: 6 }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenCategoryId(isOpen ? "" : cat.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 12px",
                    background: isOpen ? C.white : "transparent",
                    border: isOpen ? `1px solid rgba(46,46,56,0.10)` : "1px solid transparent",
                    borderRadius: 8,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  onFocus={e => { e.currentTarget.style.outline = focusRing; }}
                  onBlur={e => { e.currentTarget.style.outline = "none"; }}
                >
                  <span style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                    background: cat.color + "18", border: `1.5px solid ${cat.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800, color: cat.color, fontFamily: F.bold,
                  }}>
                    {ADVANCED_CATEGORIES.indexOf(cat) + 1}
                  </span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.confidentBlack, fontFamily: F.bold }}>{cat.name}</span>
                    <span style={{ display: "block", fontSize: 11, color: C.gray01, fontFamily: F.regular, marginTop: 2 }}>
                      {cat.techniques.length} technique{cat.techniques.length > 1 ? "s" : ""}
                    </span>
                  </span>
                  <ChevronRight size={14} color={C.gray01} style={{
                    flexShrink: 0,
                    transform: isOpen ? "rotate(90deg)" : "none",
                    transition: "transform 0.15s",
                  }} />
                </button>

                {isOpen && (
                  <div style={{ marginTop: 4, marginLeft: 14, paddingLeft: 14, borderLeft: `2px solid ${cat.color}44` }}>
                    {cat.techniques.map(t => {
                      const active = selected.categoryId === cat.id && selected.techniqueId === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          aria-current={active ? "true" : undefined}
                          onClick={() => selectTechnique(cat.id, t.id)}
                          style={{
                            width: "100%",
                            display: "block",
                            padding: "8px 12px",
                            marginBottom: 2,
                            background: active ? C.confidentBlack : "transparent",
                            border: active ? "none" : "1px solid transparent",
                            borderRadius: 6,
                            cursor: "pointer",
                            textAlign: "left",
                            fontSize: 12,
                            fontWeight: active ? 700 : 500,
                            color: active ? C.white : C.offBlack,
                            fontFamily: active ? F.bold : F.regular,
                            lineHeight: 1.4,
                          }}
                          onFocus={e => { e.currentTarget.style.outline = focusRing; }}
                          onBlur={e => { e.currentTarget.style.outline = "none"; }}
                        >
                          {t.name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div style={{ display: "flex", flexDirection: "column", background: C.white }}>
        <div style={{
          padding: "16px 24px",
          borderBottom: `1px solid rgba(46,46,56,0.08)`,
          display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 11, color: category.color, fontWeight: 700, fontFamily: F.bold }}>{category.name}</span>
          <ChevronRight size={12} color={C.gray02} />
          <span style={{ fontSize: 13, fontWeight: 700, color: C.confidentBlack, fontFamily: F.bold }}>{technique.name}</span>
          <span style={{ marginLeft: "auto", fontSize: 11, color: C.gray01, fontFamily: F.regular }}>
            Step {facetIdx + 1} of {FACETS.length}
          </span>
        </div>

        <div style={{ display: "flex", gap: 6, padding: "12px 24px", borderBottom: `1px solid rgba(46,46,56,0.06)` }}>
          {FACETS.map((f, i) => (
            <button
              key={f.key}
              type="button"
              aria-label={`View ${f.label}`}
              aria-current={i === facetIdx ? "step" : undefined}
              onClick={() => setFacetIdx(i)}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                border: "none",
                cursor: "pointer",
                background: i === facetIdx ? f.color : i < facetIdx ? f.color + "66" : "rgba(46,46,56,0.10)",
                transition: "background 0.15s",
              }}
              onFocus={e => { e.currentTarget.style.outline = focusRing; e.currentTarget.style.outlineOffset = "2px"; }}
              onBlur={e => { e.currentTarget.style.outline = "none"; }}
            />
          ))}
        </div>

        <div style={{ flex: 1, padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
            color: facet.color, fontFamily: F.bold, marginBottom: 12,
          }}>
            {facet.label}
          </div>
          <p style={{
            fontSize: facet.key === "taxUse" ? 15 : isExample ? 14 : 16,
            lineHeight: 1.7,
            color: facet.key === "without" ? C.destructive : facet.key === "with" ? C.success : C.offBlack,
            fontFamily: isExample ? F.light : F.regular,
            fontStyle: isExample ? "italic" : "normal",
            margin: 0,
            maxWidth: 560,
            padding: isExample ? "16px 20px" : 0,
            background: isExample
              ? facet.key === "without" ? C.destructive + "0a" : C.success + "0a"
              : "transparent",
            borderRadius: isExample ? 8 : 0,
            borderLeft: isExample ? `3px solid ${facet.color}` : "none",
          }}>
            {facetValue}
          </p>
        </div>

        <div style={{
          padding: "14px 24px",
          borderTop: `1px solid rgba(46,46,56,0.08)`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <button
            type="button"
            disabled={facetIdx === 0}
            onClick={() => setFacetIdx(i => i - 1)}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "8px 14px", borderRadius: 6,
              border: `1px solid rgba(46,46,56,0.15)`,
              background: facetIdx === 0 ? C.offWhite : C.white,
              color: facetIdx === 0 ? C.gray02 : C.offBlack,
              cursor: facetIdx === 0 ? "not-allowed" : "pointer",
              fontSize: 13, fontFamily: F.regular,
            }}
            onFocus={e => { if (facetIdx > 0) e.currentTarget.style.outline = focusRing; }}
            onBlur={e => { e.currentTarget.style.outline = "none"; }}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span style={{ fontSize: 12, color: C.gray01, fontFamily: F.regular }}>{facet.label}</span>
          <button
            type="button"
            disabled={facetIdx === FACETS.length - 1}
            onClick={() => setFacetIdx(i => i + 1)}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "8px 14px", borderRadius: 6,
              border: `1px solid rgba(46,46,56,0.15)`,
              background: facetIdx === FACETS.length - 1 ? C.offWhite : C.confidentBlack,
              color: facetIdx === FACETS.length - 1 ? C.gray02 : C.white,
              cursor: facetIdx === FACETS.length - 1 ? "not-allowed" : "pointer",
              fontSize: 13, fontFamily: F.bold,
            }}
            onFocus={e => { if (facetIdx < FACETS.length - 1) e.currentTarget.style.outline = focusRing; }}
            onBlur={e => { e.currentTarget.style.outline = "none"; }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function AiTaxPrompting({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (path: string) => void;
}) {
  return (
    <div style={{ position: "fixed", inset: 0, overflowY: "auto", background: C.white }}>

      <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#module-content" />
      <ModuleHeader currentModuleId="ai-tax-prompting" onNavigate={onNavigate} onBack={onBack} />

      {/* ── 1. HERO — dark ── */}
      <section id="module-content" style={{
        background: C.confidentBlack, padding: "80px 64px 72px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Spectrum accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: spectrumCss(5) }} />
        <div style={{ maxWidth: 860 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,230,0,0.08)", border: "1px solid rgba(255,230,0,0.25)",
            borderRadius: 24, padding: "6px 18px", marginBottom: 28,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.yellow }} />
            <span style={{ color: C.yellow, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", fontFamily: F.bold }}>
              PART 2 · AI TAX LABS
            </span>
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.white, lineHeight: 1.15, marginBottom: 20, fontFamily: F.bold }}>
            Basics of{" "}
            <span style={{ color: C.yellow }}>Prompting</span>
          </h1>
          <p style={{ fontSize: 19, color: C.gray02, fontWeight: 300, lineHeight: 1.7, maxWidth: 660, fontFamily: F.light }}>
            The quality of your AI output is a direct function of your input. Learn the 8 elements of a great prompt — and how to use them in your daily tax work.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
            <span style={{ padding: "6px 16px", background: "rgba(255,230,0,0.10)", border: "1px solid rgba(255,230,0,0.25)", borderRadius: 20, color: C.yellow, fontSize: 12, fontFamily: F.bold }}>~30 min</span>
            <span style={{ padding: "6px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, color: C.gray02, fontSize: 12, fontFamily: F.regular }}>8 Elements</span>
            <span style={{ padding: "6px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, color: C.gray02, fontSize: 12, fontFamily: F.regular }}>Interactive</span>
          </div>
        </div>
      </section>

      {/* ── 2. THE PIPELINE — neutral ── */}
      <section id="pipeline" style={{ background: SURFACE.neutral.bg, padding: "80px", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48, alignItems: "center" }}>
          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: "100%" }}>
            <div style={{
              background: C.yellow, border: `1px solid ${C.gray02}`, borderRadius: 100,
              padding: "6px 16px",
            }}>
              <span style={{ fontSize: 14, color: C.offBlack, fontFamily: F.regular, lineHeight: "21px" }}>THE PIPELINE</span>
            </div>
            <h2 style={{
              fontSize: 32, fontWeight: 700, color: C.offBlack, fontFamily: F.bold,
              lineHeight: 1.2, letterSpacing: "-0.32px", textAlign: "center", margin: 0,
            }}>
              A Prompt Is Simply an Instruction
            </h2>
            <p style={{
              fontSize: 16, color: C.offBlack, fontFamily: F.light, lineHeight: "24px",
              textAlign: "center", maxWidth: 760, margin: 0,
            }}>
              AI responds to the instructions you provide. Better instructions produce better results.
            </p>
          </div>

          {/* Flow diagram + core rules */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%", alignItems: "center" }}>
            <div style={{
              background: C.confidentBlack, border: `1px solid ${C.gray02}`, borderRadius: 16,
              padding: 32, width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
              gap: 24, flexWrap: "wrap",
            }}>
              {/* YOU */}
              <div style={{
                background: C.white, border: `1.5px solid ${C.gray02}`, borderRadius: 16,
                width: 220, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              }}>
                <div style={{ background: C.info + "33", borderRadius: 100, padding: 12, display: "flex" }}>
                  <User size={24} color={C.info} strokeWidth={2} />
                </div>
                <span style={{ fontSize: 15, color: C.offBlack, fontFamily: F.regular, lineHeight: "25.5px" }}>YOU</span>
                <span style={{
                  border: `1px solid ${C.gray02}`, borderRadius: 16, padding: "2px 8px",
                  fontSize: 14, color: C.offBlack, fontFamily: F.regular, lineHeight: "22.4px",
                }}>Instruction</span>
              </div>

              <ArrowRight size={16} color={C.white} strokeWidth={2} style={{ flexShrink: 0 }} />

              {/* AI ENGINE */}
              <div style={{
                background: C.yellow, border: `1.5px solid ${C.gray02}`, borderRadius: 16,
                width: 220, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              }}>
                <div style={{ background: C.yellow, borderRadius: 100, padding: 12, display: "flex" }}>
                  <Cpu size={24} color={C.offBlack} strokeWidth={2} />
                </div>
                <span style={{ fontSize: 15, color: C.offBlack, fontFamily: F.regular, lineHeight: "25.5px" }}>AI ENGINE</span>
                <span style={{
                  border: `1px solid ${C.gray02}`, borderRadius: 16, padding: "2px 8px",
                  fontSize: 14, color: C.offBlack, fontFamily: F.regular, lineHeight: "22.4px",
                  background: C.yellow,
                }}>Processes</span>
              </div>

              <ArrowRight size={16} color={C.white} strokeWidth={2} style={{ flexShrink: 0 }} />

              {/* RESULT */}
              <div style={{
                background: C.gray01, border: `1.5px solid ${C.gray02}`, borderRadius: 16,
                width: 220, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              }}>
                <div style={{ background: C.success + "33", borderRadius: 100, padding: 12, display: "flex" }}>
                  <CheckCircle size={24} color={C.success} strokeWidth={2} />
                </div>
                <span style={{ fontSize: 15, color: C.offBlack, fontFamily: F.regular, lineHeight: "25.5px" }}>RESULT</span>
                <span style={{
                  border: `1px solid ${C.gray02}`, borderRadius: 16, padding: "2px 8px",
                  fontSize: 14, color: C.offBlack, fontFamily: F.regular, lineHeight: "22.4px",
                  background: C.gray01,
                }}>Output</span>
              </div>
            </div>

            {/* Core rules row */}
            <div style={{ display: "flex", gap: 24, width: "100%", flexWrap: "wrap" }}>
              {[
                { Icon: Target, text: "Specific input = Specific output." },
                { Icon: EyeOff, text: "AI doesn't read your mind." },
                { Icon: Zap, text: "Prompting is a skill, not a gift." },
              ].map(({ Icon, text }) => (
                <div key={text} style={{
                  flex: "1 1 240px", background: C.confidentBlack, border: `1px solid ${C.gray02}`,
                  borderRadius: 12, padding: 20, display: "flex", alignItems: "center", gap: 16,
                }}>
                  <Icon size={24} color={C.white} strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ margin: 0, fontSize: 14, color: C.white, fontFamily: F.regular, lineHeight: "21px" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TEAM BRIEFING — brief a colleague, not an AI agent ── */}
      <TeamBriefingSection />

      {/* ── 4. 8 ELEMENTS — Figma Section Elements ── */}
      <EightElementsWizard />

      {/* ── 5. AI PARALLEL — Same AI, Lazy Ask vs Pro Ask ── */}
      <AiLazyProSection />

      {/* ── 6. PROMPT STACK BUILDER — light ── */}
      <section id="stack-builder" style={{ background: SURFACE.light.bg, padding: "80px 64px", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: C.confidentBlack, textAlign: "center", marginBottom: 8, fontFamily: F.bold }}>
            Build a Perfect Prompt — Piece by Piece
          </h2>
          <p style={{ fontSize: 16, color: C.gray01, textAlign: "center", lineHeight: 1.7, marginBottom: 8, fontFamily: F.light, maxWidth: 650, marginLeft: "auto", marginRight: "auto" }}>
            Click each ingredient below to add it to the prompt stack. Watch your prompt assemble in real time.
          </p>
          <p style={{ fontSize: 13, color: C.gray01, textAlign: "center", marginBottom: 32, fontFamily: F.regular }}>
            Use case: Analyzing withholding tax on software royalty payments from India to the US
          </p>
          <PromptStackBuilder />
        </div>
      </section>

      {/* ── 7. ADVANCED TECHNIQUES — dark ── */}
      <section id="advanced" style={{ background: SURFACE.dark.bg, padding: "72px 64px", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ color: SURFACE.dark.eyebrow, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: F.bold, marginBottom: 10 }}>
            NEXT LEVEL
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: SURFACE.dark.heading, marginBottom: 8, fontFamily: F.bold }}>
            Advanced Prompting Techniques
          </h2>
          <p style={{ fontSize: 16, color: SURFACE.dark.body, lineHeight: 1.7, marginBottom: 12, fontFamily: F.light, maxWidth: 680 }}>
            Once you've mastered the 8 elements, these techniques help you get more precise, structured, and creative output.
          </p>
          <AdvancedTechniquesSection onDark />
        </div>
      </section>

      {/* ── 8. MATCH THE PROMPT — interactive activity (Figma 3215:5657) ── */}
      <MatchPromptActivity />

      {/* ── 9. DOS AND DON'TS — light ── */}
      <section id="dos-donts" style={{ background: SURFACE.light.bg, padding: "72px 64px", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: SURFACE.light.eyebrow, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: F.bold, marginBottom: 10 }}>
            GUARDRAILS
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: SURFACE.light.heading, marginBottom: 48, fontFamily: F.bold }}>
            Do's & Don'ts
          </h2>

          <div>
            {/* Column headers */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", background: C.success + "1a", border: `1px solid ${C.success}40`, borderRadius: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.success} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ color: C.success, fontSize: 14, fontWeight: 700, fontFamily: F.bold }}>DO THIS</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", background: C.destructive + "1a", border: `1px solid ${C.destructive}40`, borderRadius: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.destructive} strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                <span style={{ color: C.destructive, fontSize: 14, fontWeight: 700, fontFamily: F.bold }}>DON'T DO THIS</span>
              </div>
            </div>

            {/* Paired rows — each Do/Don't card stretches to the same height */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {DOS.map((doItem, i) => {
                const dontItem = DONTS[i];
                if (!dontItem) return null;
                return (
                  <div key={doItem.title} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "stretch" }}>
                    <div style={{
                      height: "100%",
                      padding: "16px 18px", background: SURFACE.neutral.bg, borderRadius: 8,
                      border: `1px solid ${SURFACE.light.border}`,
                      borderLeft: `3px solid ${C.success}`,
                      display: "flex", flexDirection: "column",
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: C.success, marginBottom: 5, fontFamily: F.bold }}>{doItem.title}</div>
                      <div style={{ fontSize: 13, color: SURFACE.light.body, lineHeight: 1.6, fontFamily: F.regular, flex: 1 }}>{doItem.desc}</div>
                    </div>
                    <div style={{
                      height: "100%",
                      padding: "16px 18px", background: SURFACE.neutral.bg, borderRadius: 8,
                      border: `1px solid ${SURFACE.light.border}`,
                      borderLeft: `3px solid ${C.destructive}`,
                      display: "flex", flexDirection: "column",
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: C.destructive, marginBottom: 5, fontFamily: F.bold }}>{dontItem.title}</div>
                      <div style={{ fontSize: 13, color: SURFACE.light.body, lineHeight: 1.6, fontFamily: F.regular, flex: 1 }}>{dontItem.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: 40, padding: "14px 22px", background: C.yellowAlpha10, border: `1px solid ${C.yellow}33`, borderRadius: 8, textAlign: "center" }}>
            <p style={{ fontSize: 12, color: C.eyebrowGold, lineHeight: 1.6, fontFamily: F.regular }}>
              ⚠️ AI tools are assistants, not advisors. All output must be reviewed by a qualified tax professional before client delivery. Never input confidential or personally identifiable information into public AI platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. RECAP IN A NUTSHELL — static checklist (Figma 3215:5881) ── */}
      <RecapInNutshellSection />

      {/* ── 11. WHAT'S NEXT — continue to M365 Copilot ── */}
      <WhatsNextSection onContinue={() => onNavigate("/copilot-hub")} />

      {/* ── Footer — light ── */}
      <div style={{ background: SURFACE.light.bg, borderTop: `1px solid ${SURFACE.light.border}`, padding: "24px 64px", textAlign: "center" }}>
        <p style={{ color: C.gray01, fontSize: 12, fontFamily: F.regular }}>EY.ai Tax Labs · AI Tax Prompting Module · For internal training use only. Not for external distribution.</p>
      </div>

    </div>
  );
}
