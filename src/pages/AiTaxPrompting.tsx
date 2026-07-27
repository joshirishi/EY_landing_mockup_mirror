import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle, ChevronRight, Copy, Cpu, EyeOff, FileText, ListChecks, ListTree, Palette, RotateCcw, Scale, Shield, Table2, Target, User, Zap } from "lucide-react";
import { colors as C, contentInlinePad, contentRailStyle, fonts as F, spacing, spectrumCss } from "../design-kit/tokens";
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
    what: "Defines who the AI should act like — setting its expertise, seniority, and perspective. A tax partner writes differently from a junior analyst.",
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
  { id: 3, name: "Instruction", color: C.yellow, border: C.yellow, q: "WHAT should AI do?",
    what: "A clear task or command — the specific action you want AI to perform. No ambiguity.",
    why: 'Define what "significant" or "recent" means — don\'t leave it to AI to guess.',
    without: '"Summarise significant recent tax exposures of the Indian target company"',
    with: '"Summarise tax exposures above INR 25 crore, under dispute in the last 3 assessment years."',
  },
  { id: 4, name: "Constraints & Boundaries", color: C.frameBlue, border: C.frameBlue, q: "WHAT are the limits?",
    what: "Setting limits on scope, detail, or length — guardrails that keep AI focused.",
    why: "Without limits, AI may produce 2000 words when you needed 200.",
    without: '"Summarise GST refund changes."',
    with: '"In under 200 words, summarise July 2025 GST refund changes for exporters."',
  },
  { id: 5, name: "Grounding / Source Anchoring", color: C.framePurple, border: C.framePurple, q: "WHERE should AI look?",
    what: "Instructing AI to use specific statutes, circulars, or case law as its reference base.",
    why: "Prevents hallucination and ensures legal accuracy. Ungrounded output is dangerous output.",
    without: '"Explain safe harbour rules."',
    with: '"According to the Income-tax Act, 1961 and latest CBDT circulars, explain safe harbour applicability to cross-border service fees."',
  },
  { id: 6, name: "Tone / Style", color: C.yellow, border: C.yellow, q: "HOW should it sound?",
    what: "Directing AI to adopt a formal, client-ready, or simplified style matching your audience.",
    why: "A CFO needs different language than an internal audit team or ITAT bench.",
    without: '"Draft an email to the client regarding new GST slab rates"',
    with: '"Explain new GST slab changes in formal and concise manner, suitable for Tax Head of a Logistics company"',
  },
  { id: 7, name: "Output Format", color: C.frameGreen, border: C.frameGreen, q: "WHAT shape should the answer take?",
    what: "Specifies desired format — table, bullets, email, memo, comparison chart, etc.",
    why: "Output is immediately usable without reformatting — saves editing time.",
    without: '"Compare old vs new tax rates."',
    with: '"Provide a table comparing old vs new tax rates, followed by 3 bullet-point risks and recommendations."',
  },
];

/** Golden Rules — exact copy from ai-tax-prompting1.html (Do's & Don'ts). */
const DOS = [
  {
    title: "Be Specific & Give Context",
    desc: "Mention your industry, jurisdiction (e.g. India — GST / IT Act), entity type and financial year. The more context you give, the more relevant and accurate the output.",
    example: '"I am the Tax Head of an Indian pharma company (₹2,000 Cr turnover). Explain Section 43B(h) implications for MSME vendor payments in FY 2025-26."',
  },
  {
    title: "Structure Your Ask",
    desc: 'Use a clear format: "I am a [CFO / MD]. My situation is [X]. Please explain [Y] in simple terms." A structured prompt consistently yields a structured, usable response.',
    example: '"I am a CFO. My company received a transfer pricing adjustment of ₹45 Cr. Explain my appeal options at CIT(A) and ITAT in 5 bullet points."',
  },
  {
    title: "Define the Output Format",
    desc: "Specify what you need — a comparison table, a bullet checklist, or an executive summary. AI will match the format you request, saving you editing time.",
    example: '"Provide a table comparing old vs new GST rates for logistics services, with columns: Service, Old Rate, New Rate, Effective Date, Impact."',
  },
  {
    title: "Iterate and Refine",
    desc: 'Treat it as a dialogue. Follow up with "Simplify this", "Focus only on MSME applicability" or "Add a practical example." Each refinement improves precision.',
    example: '"That\'s good, but simplify the language for a board presentation. Remove all section references and focus on business impact only."',
  },
  {
    title: "Anonymise Sensitive Data",
    desc: "Replace actual PAN, GSTIN, client names and financials with dummy figures before prompting. You still get meaningful insights without compromising confidentiality.",
    example: '"Company A (manufacturing, turnover ₹X Cr) has paid ₹Y Cr to Company B (US parent) as management fees. Analyze withholding obligations."',
  },
  {
    title: "Validate With Your Advisor",
    desc: "Use AI for first-level research and drafting only. All final decisions on filings, compliance positions and strategy must be confirmed with your qualified tax advisor.",
    example: '"Use this AI output as a starting point for discussion with your EY tax team — never as standalone advice for filings or board decisions."',
  },
];

const DONTS = [
  {
    title: "Don't Be Vague",
    desc: '"Tell me about taxes" produces generic output. Instead: "Explain the impact of Section 43B(h) on MSME vendor payments for FY 2024-25 for a private limited company."',
    example: '❌ "What are the latest tax changes?" → AI doesn\'t know which country, which tax, which year, or which entity type you mean.',
  },
  {
    title: "Don't Stack Multiple Questions",
    desc: "Asking ten questions in one prompt produces ten diluted answers. Break it down — one focused question at a time delivers sharper, actionable output.",
    example: '❌ "Explain GST, income tax changes, TDS rates, advance tax dates and MAT provisions for 2025-26" — this will get shallow answers on everything.',
  },
  {
    title: "Don't Enter Confidential Data",
    desc: "Real PAN, GSTIN, client names, account numbers and actual financial data must never be entered into a public AI tool. Data confidentiality is non-negotiable.",
    example: '❌ Never type: "PAN: AABCX1234Z, GSTIN: 27AABCX1234Z1ZP, actual assessment order details" into ChatGPT or Gemini.',
  },
  {
    title: "Don't Treat AI as Final Authority",
    desc: "AI can generate plausible but incorrect information, including outdated tax provisions. Never use AI output directly for returns, filings, or board-level decisions.",
    example: "❌ AI may confidently cite a section number that was amended or a circular that was superseded. Always cross-verify with current law.",
  },
  {
    title: "Don't Omit Jurisdiction",
    desc: "Tax rules vary significantly by country, state and entity type. Without a clear jurisdiction, AI defaults to generic — and often inapplicable — answers.",
    example: '❌ "What\'s the capital gains tax rate?" — For whom? India resident? NRI? Company? On what asset? Which holding period? Specify everything.',
  },
  {
    title: "Don't Accept the First Response as Final",
    desc: 'Always probe the output. Ask "Which section covers this?" or "Is this current for AY 2025-26?" Critical review of AI responses is part of responsible usage.',
    example: "❌ Copy-pasting AI's first draft into a client email without reviewing for accuracy, tone, and completeness is a professional risk.",
  },
];

type AdvancedTechnique = {
  id: string;
  name: string;
  tagline: string;
  what: string;
  does: string; // "Why it matters" copy from reference
  without: string;
  with: string;
};

type AdvancedCategory = {
  id: string;
  name: string;
  color: string;
  summary: string;
  techniques: AdvancedTechnique[];
};

/** Prompt like a Pro — Techniques (exact copy from ai-tax-prompting1.html). */
const ADVANCED_CATEGORIES: AdvancedCategory[] = [
  {
    id: "techniques",
    name: "Pro Techniques",
    color: C.frameBlue,
    summary: "Now that you know the elements, here are 8 techniques to level up your prompting game.",
    techniques: [
      {
        id: "few-shot",
        name: "Few-Shot Prompting",
        tagline: "SHOW AI what good looks like",
        what: "Providing 1-3 examples of ideal input-output pairs before asking your actual question — so AI learns the pattern you want.",
        does: "Like showing a new associate a sample memo before asking them to draft one — the output matches your style and standard.",
        without: '"Draft a tax equalisation policy for employees relocating from India to the US."',
        with: '"Here is a sample tax equalisation policy [attached]. Using the same format and structure, draft a policy for India-to-US relocations."',
      },
      {
        id: "iteration",
        name: "Iteration",
        tagline: "BUILD on what AI gives you",
        what: "Using multi-turn conversations — asking AI to improve, expand, or restructure its own previous output step by step.",
        does: "First drafts are starting points. Each follow-up sharpens precision — like reviewing a junior's memo through rounds of feedback.",
        without: '"Summarize this SC ruling and draft a client memo."',
        with: 'Turn 1: "Summarize the facts and ruling." → Turn 2: "Now draft a 1-page client memo." → Turn 3: "Simplify for a non-tax CFO audience."',
      },
      {
        id: "cot",
        name: "Chain of Thought",
        tagline: "MAKE AI show its reasoning",
        what: 'Asking AI to "think step by step" — making it show its reasoning before giving the final answer so you can verify the logic.',
        does: "Like asking an associate to show their workings, not just the conclusion. You can spot errors in reasoning before they reach the client.",
        without: '"What is the effective tax rate for MNCs with royalty payments?"',
        with: '"Think step by step: First identify applicable provisions, then calculate base rate, add surcharge and cess, factor in DTAA, and arrive at the effective rate for MNCs with royalty payments."',
      },
      {
        id: "meta",
        name: "Meta Prompt",
        tagline: "ASK AI to write the prompt for you",
        what: "A prompt that instructs AI to generate an optimised prompt for you — describe your use case and let AI craft the perfect structured instruction.",
        does: "You don't need to remember every technique. Describe what you need and let AI build the optimal prompt structure for you.",
        without: '"Help me respond to a GST show cause notice on product classification."',
        with: '"You are an expert prompt crafter. My use case: I\'m a Tax Head responding to a GST SCN on misclassification. Craft me an optimal prompt that includes persona, context, task, constraints, and step-back reasoning."',
      },
      {
        id: "refinement",
        name: "Refinement",
        tagline: "SHARPEN the output after review",
        what: "Asking AI to critique and improve its own output — reviewing as a partner would, fixing gaps, strengthening arguments.",
        does: "AI catches its own weak spots. Like asking an associate to self-review before submitting — the second pass is always stronger.",
        without: '"Draft a TP memo for IT services." (accept whatever comes back)',
        with: '"Now review your own draft as if you are the reviewing partner. Identify gaps in legal reasoning, strengthen weak arguments, and produce an improved version."',
      },
      {
        id: "expansion",
        name: "Creative Expansion",
        tagline: "EXPLORE angles you haven't considered",
        what: "Asking AI to brainstorm alternative approaches, counterarguments, or edge cases you may not have considered.",
        does: "Uncovers blind spots in your analysis. Like having a second opinion from a specialist in a different tax domain.",
        without: '"Analyze the tax implications of this cross-border restructuring."',
        with: '"Analyze the restructuring, then list 5 risks I might be overlooking — including GAAR, PE exposure, and indirect transfer provisions that a revenue officer might raise."',
      },
      {
        id: "audience",
        name: "Audience Targeting",
        tagline: "TAILOR for who will read it",
        what: "Explicitly telling AI who the reader is — so it adjusts complexity, jargon level, and depth accordingly.",
        does: "A board presentation needs different language than an ITAT submission. Name your reader and AI writes for them.",
        without: '"Explain POEM rules under Section 6(3)."',
        with: '"Explain POEM rules under Section 6(3) in simple language for a CFO with no tax background. Avoid section references — focus on business impact and what action they need to take."',
      },
      {
        id: "flipped",
        name: "Flipped Prompting",
        tagline: "LET AI ask YOU the questions",
        what: "Instead of you writing the prompt, ask AI to interview you — it asks clarifying questions first, then produces a tailored output.",
        does: "When you don't know how to frame the problem, let AI guide you. It surfaces context you might have forgotten to include.",
        without: '"Help me with a tax restructuring advisory." (dumps everything at once, misses key details)',
        with: '"I need help with a restructuring advisory. Before you start, ask me 5 clarifying questions about the entities, jurisdictions, transaction type, timeline, and key concerns."',
      },
    ],
  },
];

type FacetKey = "what" | "does" | "without" | "with";

const FACETS: { key: FacetKey; label: string; color: string }[] = [
  { key: "what", label: "What it is", color: C.frameBlue },
  { key: "does", label: "Why it matters", color: C.frameOrange },
  { key: "without", label: "Without", color: C.destructive },
  { key: "with", label: "With", color: C.success },
];

/** Level Up — Advanced Techniques catalog (exact copy from reference). */
const LEVEL_UP_GROUPS: {
  id: string;
  name: string;
  color: string;
  rows: { name: string; does: string; taxUse: string }[];
}[] = [
  {
    id: "cot",
    name: "Chain of Thought (CoT)",
    color: C.frameBlue,
    rows: [
      { name: "Step-back Prompting", does: "Asks AI to consider the broader principle first, then apply it to the specific question", taxUse: "Before analyzing a GAAR provision, ask AI to first outline general anti-avoidance principles globally, then apply to the Indian context" },
      { name: "Analogical Prompting", does: "Draws parallels from a familiar domain to solve a novel problem", taxUse: "Compare India's equalisation levy treatment to how the EU's digital services tax works to find strategic gaps" },
      { name: "Thread of Thought", does: "Maintains reasoning continuity across a multi-turn conversation without losing context", taxUse: "Multi-turn TP analysis — first define the transaction, then benchmark, then apply safe harbour, building on each prior response" },
      { name: "Tabular CoT", does: "Organizes step-by-step reasoning into a structured table for clarity", taxUse: "Break down withholding tax obligation by category (royalty, FTS, interest) with rate, treaty, and section in columns" },
      { name: "Active CoT", does: "Selects the most informative examples to demonstrate reasoning before answering", taxUse: "Provide 2–3 ITAT rulings as worked examples, then ask AI to analyze your case using the same reasoning pattern" },
      { name: "Auto CoT", does: "AI automatically generates its own chain-of-thought demonstrations before solving", taxUse: '"First show me how you would approach a PE determination, then apply that framework to our client\'s facts"' },
      { name: "Complexity-based CoT", does: "Uses the most complex reasoning chains as demonstrations for harder problems", taxUse: "For multi-layered cross-border restructuring, show AI a complex worked example before asking it to handle yours" },
      { name: "Contrastive CoT", does: "Shows both correct and incorrect reasoning paths to improve accuracy", taxUse: '"Here\'s a wrong application of Section 9(1)(vi). Here\'s the correct one. Now analyze this new scenario."' },
      { name: "Memory of Thought", does: "Retains and reuses reasoning patterns from previously solved problems", taxUse: "Refer back to AI's earlier analysis of Client A's DTAA position when analyzing Client B's similar structure" },
      { name: "Uncertainty Routed CoT", does: "Triggers more detailed step-by-step reasoning when AI is uncertain about an answer", taxUse: '"If you\'re less than 80% confident, show your full reasoning with alternative positions and cite sources"' },
    ],
  },
  {
    id: "decomposition",
    name: "Decomposition",
    color: C.frameOrange,
    rows: [
      { name: "Tree of Thoughts", does: "Explores multiple reasoning paths in a branching tree structure, evaluating each branch before choosing the best", taxUse: "For tax restructuring — explore 3 parallel structures (merger, demerger, slump sale), evaluate tax cost of each path, then recommend" },
      { name: "Graph of Thoughts", does: "Extends tree thinking into a graph where reasoning paths can merge, split, and reconnect", taxUse: "Analyze circular shareholding structures where entities have multiple cross-holdings — map tax implications as interconnected nodes" },
    ],
  },
  {
    id: "ensembling",
    name: "Ensembling",
    color: C.frameTeal,
    rows: [
      { name: "Multiple Runs", does: "Generates multiple outputs for the same prompt and selects the most consistent or highest-quality result", taxUse: "Run your TP benchmarking question 3 times with slight variations, then pick the analysis that's most aligned with OECD guidelines" },
      { name: "Synthesise", does: "Combines multiple AI outputs into a single refined, comprehensive answer", taxUse: "Generate separate analyses for direct tax, indirect tax, and TP angles of a transaction, then ask AI to synthesize into one unified advisory" },
    ],
  },
  {
    id: "self-criticism",
    name: "Self-Criticism",
    color: C.framePurple,
    rows: [
      { name: "Self-Calibration", does: "AI assesses its own confidence level and flags areas where it may be unreliable", taxUse: '"Rate your confidence (1-10) for each position in this tax opinion. For anything below 7, flag it for human review."' },
      { name: "Self-Refine", does: "AI iteratively critiques and improves its own output without human intervention", taxUse: '"Draft a client memo, then review it as if you are the reviewing partner. Improve the draft based on your own feedback."' },
      { name: "Chain of Verification", does: "AI generates verification questions to fact-check its own claims before presenting", taxUse: '"After your analysis, list 5 factual claims you made and verify each against the attached statute. Correct any errors."' },
      { name: "Reversed CoT", does: "Works backward from the conclusion to verify whether the reasoning actually supports it", taxUse: '"You concluded no PE exists. Now work backward — what facts would need to change for a PE to be established? Does our case pass?"' },
    ],
  },
];

type AdvancedView = "wizard" | "table";

const RECAP = [
  { element: "Persona", question: "Who is the AI?", example: "Senior Tax Partner, India" },
  { element: "Context", question: "What's the situation?", example: "Client has cross-border IT support arrangement" },
  { element: "Instruction", question: "What exactly should it do?", example: "Summarise exposures above INR 25 Cr" },
  { element: "Constraints", question: "What are the limits?", example: "Under 200 words, last 3 assessment years" },
  { element: "Grounding", question: "Which sources apply?", example: "Income-tax Act, 1961 + CBDT circulars" },
  { element: "Tone", question: "How should it sound?", example: "Formal, client-ready" },
  { element: "Output", question: "What format?", example: "Table + 3 bullet risks" },
];

const RECAP_CARDS: { icon: LucideIcon; name: string; color: string; bg: string; desc: string }[] = [
  { icon: User, name: "Persona", color: C.frameMagenta, bg: "rgba(255,50,255,0.06)", desc: 'Tell AI WHO to be. Like telling a new colleague: "Pretend you\'re a senior tax partner" — so it talks like one, not like a Wikipedia article.' },
  { icon: FileText, name: "Context", color: C.frameTeal, bg: "rgba(50,255,255,0.06)", desc: "Give the background story. Like telling a taxi driver WHERE you're going — without it, AI drives in circles giving generic answers." },
  { icon: ListChecks, name: "Instruction", color: C.yellow, bg: "rgba(255,230,0,0.08)", desc: 'Say exactly WHAT to do. Like ordering food: "Give me a paneer tikka" works. "Give me something nice" doesn\'t.' },
  { icon: Shield, name: "Constraints", color: C.frameBlue, bg: "rgba(70,150,255,0.08)", desc: 'Set boundaries. Like telling a kid "draw me a picture — but only use 3 colours and keep it on one page." Keeps AI focused.' },
  { icon: Scale, name: "Grounding", color: C.framePurple, bg: "rgba(180,0,255,0.06)", desc: 'Tell AI WHERE to look. Like saying "only use THIS textbook for answers" — prevents it from making things up.' },
  { icon: Palette, name: "Tone / Style", color: C.yellow, bg: "rgba(255,230,0,0.08)", desc: 'Tell AI HOW to sound. Like asking someone: "Explain it like I\'m presenting to a CFO" vs "Explain it to a 5-year-old." Same info, different packaging.' },
  { icon: Table2, name: "Output Format", color: C.frameGreen, bg: "rgba(0,200,100,0.08)", desc: 'Tell AI WHAT SHAPE the answer should take. Like saying "give me a table, not a paragraph" — saves you 20 minutes of reformatting.' },
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

/** Anatomy layer texts — exact copy from ai-tax-prompting1.html promptLayers. */
const PROMPT_STACK = ELEMENTS.map(e => ({
  id: e.id,
  name: e.name.replace(" / ", " · "),
  shortName: e.name.split(" / ")[0],
  question: RECAP[e.id - 1]?.question ?? e.q,
  example: RECAP[e.id - 1]?.example ?? "",
  color: e.color,
  border: e.border,
  fragment: [
    "You are an Indian Tax Professional specializing in the Indian Income-tax Act and allied laws, with expertise in cross-border withholding tax and software royalty transactions.",
    'ABC Software Solutions Pvt. Ltd. (Pune, India) pays software license fees to its US parent XYZ Inc. The company needs clarity on whether these payments constitute "royalty" under the Income-tax Act and the India-US DTAA.',
    "1. Analyze the SC ruling in Engineering Analysis Centre of Excellence and categorize the EULAs.\n2. Analyze the attached Software License EULA clause by clause.\n3. Draft a client memo covering background, EULA analysis, documentation checklist, and withholding tax position.",
    "Scope: Withholding tax implications only. Do not cover GST, corporate tax, or transfer pricing. Keep the memo under 3 pages.",
    "Base your analysis strictly on the Income Tax Act 1961, Income Tax Rules 1962, the SC ruling in EACoE (2022), and applicable DTAA provisions. Do not cite tribunal decisions unless directly relevant.",
    "Draft in a formal, client-ready advisory style suitable for the Tax Head of a software company. Use professional language, avoid jargon where possible.",
    "Present the EULA analysis as a table (Term | SC Interpretation). Provide clause analysis in a 3-column table (Clause | Description | SC Ruling). End with a numbered action checklist.",
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
          Click to add each layer:
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
                Click the ingredients on the left to build your prompt layer by layer. Each layer adds a colored block. Watch the prompt grow from vague to precise.
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
                    whiteSpace: "pre-line",
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
    <section id="team-briefing" style={{ background: SURFACE.light.bg, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
      <div style={{ ...contentRailStyle }}>
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
                  <strong style={{ color: C.destructive }}>Generic response</strong>
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
                  <strong style={{ color: C.success }}>Focused response</strong>
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
    <section id="lazy-vs-pro" style={{ background: SURFACE.neutral.bg, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
      <div style={{ ...contentRailStyle }}>
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

        {/* Prompting Equation — exact copy from reference */}
        <div style={{
          marginTop: 40, textAlign: "center", padding: "24px 32px",
          background: C.yellowAlpha10, border: `1px solid ${C.yellow}33`, borderRadius: 12,
        }}>
          <p style={{ color: C.eyebrowGold, fontSize: 16, fontWeight: 700, marginBottom: 12, fontFamily: F.bold }}>The Prompting Equation</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {["Role", "Context", "Task", "Format"].map((part, i) => (
              <span key={part} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                {i > 0 && <span style={{ color: C.eyebrowGold, fontSize: 18, fontWeight: 700 }}>+</span>}
                <span style={{
                  padding: "8px 16px", borderRadius: 6, fontSize: 13, fontWeight: 700, fontFamily: F.bold,
                  background: C.white, border: `1px solid rgba(46,46,56,0.12)`, color: C.offBlack,
                }}>{part}</span>
              </span>
            ))}
            <span style={{ color: C.success, fontSize: 18, fontWeight: 700 }}>=</span>
            <span style={{
              padding: "8px 16px", borderRadius: 6, fontSize: 13, fontWeight: 700, fontFamily: F.bold,
              background: C.success + "14", border: `1px solid ${C.success}4d`, color: C.success,
            }}>Client-Ready Output</span>
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
      padding: `100px 0`,
      scrollMarginTop: SUBNAV_SCROLL_OFFSET,
    }}>
      <div style={{ ...contentRailStyle, textAlign: "center" }}>
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
          Your 7-element checklist. Before you hit Send, make sure you&apos;ve covered these.
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
          Now see them in action with M365 Copilot. The next module takes you into Microsoft 365 Copilot — where you&apos;ll apply these skills across Word, Excel, Outlook, and Teams with real tax use cases.
        </>
      }
      ctaLabel="Continue to Part 3: M365 Copilot Deep Dive →"
      onContinue={onContinue}
      meta="Part 3 covers: Copilot in Word, Excel, Outlook, Teams, and real tax workflows"
    />
  );
}

/** Meta Prompt workshop — exact content from ai-tax-prompting1.html #meta-prompt. */
function MetaPromptSection() {
  const steps = [
    { n: "1", title: "TELL AI WHO YOU ARE", body: '"I\'m a Tax Head dealing with a GST show cause notice on misclassification"' },
    { n: "2", title: "ASK AI TO BUILD THE PROMPT", body: '"Craft me the best prompt to get a comprehensive reply with legal backing"' },
    { n: "3", title: "USE THE GENERATED PROMPT", body: "Paste AI's crafted prompt into any platform → get expert-level output instantly" },
  ];
  const template = [
    { n: "①", title: "WHO IS AI IN THIS SCENARIO?", body: '"You are an expert prompt crafter who understands advanced prompting frameworks like Chain of Thought, Step-back Prompting, and Analogical reasoning."' },
    { n: "②", title: "WHAT'S YOUR SITUATION? (Plain English)", body: '"I\'m the Tax Head of a manufacturing company (₹3,000 Cr turnover). We got a GST show cause notice saying our products are misclassified. I need to prepare a legally-backed reply, find weak spots in our position, and create an action plan."' },
    { n: "③", title: "WHAT DO YOU WANT AI TO DO?", body: '"Craft me the best possible prompt I can paste into ChatGPT/Gemini to get a comprehensive analysis and reply for this situation."' },
    { n: "④", title: "WHAT SHOULD THE PROMPT INCLUDE?", body: '"Make sure the generated prompt includes:" Persona · Context · Clear Task · Tone · Constraints · Step-back Reasoning · Output Format' },
  ];

  return (
    <section id="meta-prompt" style={{ background: SURFACE.neutral.bg, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
      <div style={{ ...contentRailStyle }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: C.eyebrowGold, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: F.bold, marginBottom: 12 }}>
            🪄 The Ultimate Shortcut
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: C.confidentBlack, fontFamily: F.bold, margin: "0 0 12px", lineHeight: 1.25 }}>
            Don&apos;t Write a Prompt.<br />Ask AI to Write It For You.
          </h2>
          <p style={{ fontSize: 16, color: C.gray01, fontFamily: F.light, lineHeight: 1.7, maxWidth: 680, margin: "0 auto" }}>
            Think of it like this: instead of cooking yourself, you hand a chef your ingredient list and dietary preferences — and they design the perfect recipe. That&apos;s a Meta Prompt.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 48px 1fr", gap: 0, alignItems: "stretch", marginBottom: 48 }}>
          <div style={{ border: `1px solid ${C.destructive}33`, borderRadius: 12, padding: 22, background: C.white }}>
            <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 700, color: C.destructive, fontFamily: F.bold }}>😰 WITHOUT META PROMPT</p>
            <p style={{ margin: "0 0 12px", fontSize: 14, color: C.offBlack, fontFamily: F.regular, lineHeight: 1.6 }}>
              You spend 10 minutes trying to remember all the elements, get the structure right, include the right techniques...
            </p>
            <p style={{ margin: 0, fontSize: 13, fontStyle: "italic", color: C.gray01, fontFamily: F.light }}>
              &ldquo;Ugh, did I include persona? What about grounding? Should I add chain of thought here?&rdquo;
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: C.gray01, fontWeight: 700 }}>→</div>
          <div style={{ border: `1px solid ${C.success}33`, borderRadius: 12, padding: 22, background: C.white }}>
            <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 700, color: C.success, fontFamily: F.bold }}>😎 WITH META PROMPT</p>
            <p style={{ margin: "0 0 12px", fontSize: 14, color: C.offBlack, fontFamily: F.regular, lineHeight: 1.6 }}>
              You describe your problem in plain English. AI builds the perfect structured prompt for you. Done in 30 seconds.
            </p>
            <p style={{ margin: 0, fontSize: 13, fontStyle: "italic", color: C.gray01, fontFamily: F.light }}>
              &ldquo;Hey AI, write me the best prompt to solve this GST notice issue.&rdquo;
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: 22, fontWeight: 700, color: C.confidentBlack, fontFamily: F.bold, textAlign: "center", margin: "0 0 8px" }}>
          How It Works — 3 Simple Steps
        </h3>
        <p style={{ textAlign: "center", fontSize: 14, color: C.gray01, margin: "0 0 28px", fontFamily: F.light }}>
          Like briefing a senior partner who then briefs the associate perfectly.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
          {steps.map(s => (
            <div key={s.n} style={{ background: C.white, border: `1px solid rgba(46,46,56,0.10)`, borderRadius: 12, padding: 20 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.yellow, color: C.confidentBlack, fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.bold, marginBottom: 12 }}>{s.n}</div>
              <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", color: C.offBlack, fontFamily: F.bold }}>{s.title}</p>
              <p style={{ margin: 0, fontSize: 13, color: C.gray01, fontFamily: F.light, lineHeight: 1.55, fontStyle: "italic" }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ background: C.white, border: `1px solid rgba(46,46,56,0.10)`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
          <p style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700, fontFamily: F.bold, color: C.confidentBlack }}>📋 Copy-Paste This Template</p>
          <p style={{ margin: "0 0 20px", fontSize: 12, color: C.gray01, fontFamily: F.regular }}>Works on ChatGPT / Gemini / Copilot</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {template.map(t => (
              <div key={t.n}>
                <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 700, color: C.eyebrowGold, fontFamily: F.bold }}>{t.n} {t.title}</p>
                <p style={{ margin: 0, fontSize: 13, color: C.offBlack, fontFamily: F.regular, lineHeight: 1.6 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: C.offWhite, border: `1px solid rgba(46,46,56,0.08)`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
          <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, fontFamily: F.bold, color: C.confidentBlack }}>✨ What Happens Next</p>
          <p style={{ margin: 0, fontSize: 14, color: C.gray01, fontFamily: F.regular, lineHeight: 1.65 }}>
            AI gives you back a perfectly structured, multi-paragraph prompt — complete with persona, context, step-by-step task breakdown, grounding references, tone settings, and guardrails. You then paste that prompt into any AI platform and get an analysis that would&apos;ve taken hours to write manually.
          </p>
        </div>

        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, fontFamily: F.bold, color: C.confidentBlack }}>💡 Why Does This Work So Well?</p>
          <p style={{ margin: 0, fontSize: 14, color: C.gray01, fontFamily: F.regular, lineHeight: 1.65, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            You tell a senior partner your problem in 2 sentences = They brief the associate with perfect detail and structure. The meta prompt is your senior partner. It takes your rough problem → turns it into a structured brief → that produces client-ready output.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          {["🎯 Complex multi-area tasks", "⚡ Don't remember all techniques? Let AI handle it", "🔁 Save as template — reuse for every new matter"].map(t => (
            <span key={t} style={{
              padding: "8px 14px", borderRadius: 100, fontSize: 12, fontFamily: F.bold, fontWeight: 700,
              background: C.white, border: `1px solid rgba(46,46,56,0.10)`, color: C.offBlack,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
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
      padding: `100px 0`,
      textAlign: "center",
      scrollMarginTop: SUBNAV_SCROLL_OFFSET,
    }}>
      <div style={{ ...contentRailStyle }}>
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

// ── 7 Elements — tabbed cards (Figma Section Elements) ───────────────────────

type ElemPanelKey = "what" | "why" | "without" | "with";

const ELEM_TABS: {
  key: ElemPanelKey;
  label: string;
  color: string;
  panelBg: string;
  panelBorder: string;
  italic?: boolean;
}[] = [
  { key: "what", label: "WHAT IT IS", color: C.frameBlue, panelBg: C.offWhite, panelBorder: C.gray02 },
  { key: "why", label: "WHY IT MATTERS", color: C.frameOrange, panelBg: C.offWhite, panelBorder: C.gray02 },
  { key: "without", label: "❌ WITHOUT", color: C.destructive, panelBg: C.offWhite, panelBorder: C.gray02, italic: true },
  { key: "with", label: "✅ WITH", color: C.success, panelBg: C.offWhite, panelBorder: C.gray02, italic: true },
];

function ElementCard({ elem }: { elem: (typeof ELEMENTS)[number] }) {
  // Panels stay open once clicked (toggle independently)
  const [open, setOpen] = useState<Record<ElemPanelKey, boolean>>({
    what: false, why: false, without: false, with: false,
  });

  const content: Record<ElemPanelKey, string> = {
    what: elem.what,
    why: elem.why,
    without: elem.without,
    with: elem.with,
  };

  return (
    <div style={{
      background: C.white,
      border: `1px solid ${C.gray02}`,
      borderRadius: 8,
      overflow: "hidden",
      borderTop: `3px solid ${elem.border}`,
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    }}>
      <div style={{ padding: "22px 24px 16px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%", background: C.yellow,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 17, fontWeight: 700, color: C.confidentBlack, fontFamily: F.bold, flexShrink: 0,
        }}>
          {elem.id}
        </div>
        <div>
          <div style={{ color: C.offBlack, fontSize: 19, fontWeight: 700, fontFamily: F.bold }}>{elem.name}</div>
          <div style={{ color: elem.color, fontSize: 11, fontWeight: 700, fontFamily: F.bold, letterSpacing: "0.02em" }}>{elem.q}</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", borderTop: `1px solid ${C.gray02}` }}>
        {ELEM_TABS.map((tab, i) => {
          const isOpen = open[tab.key];
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setOpen(prev => ({ ...prev, [tab.key]: !prev[tab.key] }))}
              style={{
                padding: "10px 8px",
                background: isOpen ? C.yellowAlpha10 : C.offWhite,
                border: "none",
                borderRight: i < ELEM_TABS.length - 1 ? `1px solid ${C.gray02}` : "none",
                borderBottom: isOpen ? `2px solid ${tab.color}` : "2px solid transparent",
                cursor: "pointer",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.5px",
                color: tab.color,
                fontFamily: F.bold,
                transition: "background 0.2s",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div>
        {ELEM_TABS.map(tab => (
          open[tab.key] ? (
            <div
              key={tab.key}
              style={{
                padding: "14px 24px",
                background: tab.panelBg,
                borderTop: `1px solid ${tab.panelBorder}`,
                minHeight: 70,
              }}
            >
              <p style={{
                margin: 0,
                color: C.gray01,
                fontSize: 13,
                lineHeight: 1.6,
                fontFamily: F.regular,
                fontStyle: tab.italic ? "italic" : "normal",
              }}>
                {content[tab.key]}
              </p>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}

function EightElementsWizard() {
  const s = SURFACE.neutral;
  return (
    <section id="elements" style={{ background: s.bg, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
      <div style={{ ...contentRailStyle, textAlign: "center" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: s.heading, fontFamily: F.bold, letterSpacing: "-0.02em", margin: "0 0 12px", textAlign: "center" }}>
          Prompt like a Pro - Elements
        </h2>
        <p style={{ fontSize: 16, color: s.body, fontFamily: F.light, lineHeight: "24px", margin: "0 auto 12px", maxWidth: 720, textAlign: "center" }}>
          Each element is a lever — pull the right ones for the right task.
        </p>
        <p style={{ textAlign: "center", color: s.body, fontSize: 12, margin: "0 0 40px", fontFamily: F.regular }}>
          Click any tab below each element to reveal details — they stay open once clicked.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: 22,
          alignItems: "stretch",
          textAlign: "left",
        }}>
          {ELEMENTS.map(elem => (
            <ElementCard key={elem.id} elem={elem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvancedViewToggle({ view, onChange, onDark = false }: { view: AdvancedView; onChange: (v: AdvancedView) => void; onDark?: boolean }) {
  const focusRing = `2px solid ${C.yellow}`;
  const options: { id: AdvancedView; label: string; Icon: typeof Table2; hint: string }[] = [
    { id: "wizard", label: "Techniques", Icon: ListTree, hint: "8 pro techniques — one at a time" },
    { id: "table", label: "Level Up", Icon: Table2, hint: "Advanced catalog with tax use cases" },
  ];

  return (
    <div
      role="tablist"
      aria-label="Techniques view"
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
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div>
        <p style={{ fontSize: 18, fontWeight: 700, color: C.confidentBlack, fontFamily: F.bold, margin: "0 0 8px" }}>
          🚀 Level Up — Advanced Techniques
        </p>
        <p style={{ fontSize: 14, color: C.gray01, fontFamily: F.light, lineHeight: 1.7, margin: 0, maxWidth: 820 }}>
          The fundamentals will handle 80% of your prompting needs. But for complex tax analysis, multi-step reasoning, and mission-critical accuracy — these advanced techniques take you from competent to exceptional.
        </p>
      </div>

      {LEVEL_UP_GROUPS.map(group => (
        <div key={group.id} style={{ border: `1px solid rgba(46,46,56,0.10)`, borderRadius: 10, overflow: "hidden" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, padding: "14px 20px",
            background: C.confidentBlack,
          }}>
            <span style={{
              fontSize: 12, fontWeight: 700, fontFamily: F.bold, color: group.color,
              background: group.color + "22", border: `1px solid ${group.color}55`,
              borderRadius: 4, padding: "3px 8px",
            }}>{group.rows.length} techniques</span>
            <span style={{ color: C.white, fontSize: 15, fontWeight: 700, fontFamily: F.bold }}>{group.name}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.6fr 2fr", background: C.offWhite, padding: "12px 20px", gap: 16 }}>
            {["Technique", "What it does", "Tax Use Case"].map(h => (
              <span key={h} style={{
                color: C.gray01, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
                textTransform: "uppercase", fontFamily: F.bold,
              }}>{h}</span>
            ))}
          </div>
          {group.rows.map((row, i) => (
            <div key={row.name} style={{
              display: "grid", gridTemplateColumns: "1.2fr 1.6fr 2fr",
              padding: "16px 20px", gap: 16, alignItems: "start",
              background: i % 2 === 0 ? C.white : C.offWhite,
              borderTop: `1px solid rgba(46,46,56,0.07)`,
            }}>
              <span style={{ color: C.confidentBlack, fontSize: 13, fontWeight: 700, fontFamily: F.bold, lineHeight: 1.4 }}>{row.name}</span>
              <span style={{ color: C.gray01, fontSize: 13, fontFamily: F.regular, lineHeight: 1.6 }}>{row.does}</span>
              <span style={{ color: C.offBlack, fontSize: 13, fontFamily: F.regular, lineHeight: 1.6 }}>{row.taxUse}</span>
            </div>
          ))}
        </div>
      ))}
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
            ? "Click any technique to reveal details."
            : "Level Up catalog — Technique, What it does, and Tax Use Case."}
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

  const category = ADVANCED_CATEGORIES.find(c => c.id === selected.categoryId)!;
  const technique = category.techniques.find(t => t.id === selected.techniqueId)!;

  const selectTechnique = (categoryId: string, techniqueId: string) => {
    setSelected({ categoryId, techniqueId });
    setOpenCategoryId(categoryId);
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
            Prompt like a Pro — Techniques
          </div>
          <div style={{ fontSize: 13, color: C.offBlack, fontFamily: F.regular, lineHeight: 1.5 }}>
            Pick a technique to explore.
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

      {/* Detail pane — all facets stacked (no secondary tab/stepper) */}
      <div style={{ display: "flex", flexDirection: "column", background: C.white, minHeight: 0 }}>
        <div style={{
          padding: "16px 24px",
          borderBottom: `1px solid rgba(46,46,56,0.08)`,
          display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.confidentBlack, fontFamily: F.bold }}>{technique.name}</span>
          <span style={{ fontSize: 11, color: category.color, fontWeight: 600, fontFamily: F.bold }}>{technique.tagline}</span>
        </div>

        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 28px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}>
          {FACETS.map(f => {
            const isExample = f.key === "without" || f.key === "with";
            return (
              <section key={f.key} aria-labelledby={`facet-${technique.id}-${f.key}`}>
                <span
                  id={`facet-${technique.id}-${f.key}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginBottom: 10,
                    padding: "4px 10px",
                    borderRadius: 100,
                    border: `1px solid ${f.color}55`,
                    background: f.color + "14",
                    fontSize: 12,
                    fontWeight: 700,
                    color: f.color,
                    fontFamily: F.bold,
                    lineHeight: 1.3,
                  }}
                >
                  {f.label}
                </span>
                <p style={{
                  fontSize: isExample ? 14 : 16,
                  lineHeight: 1.7,
                  color: f.key === "without" ? C.destructive : f.key === "with" ? C.success : C.offBlack,
                  fontFamily: isExample ? F.light : F.regular,
                  fontStyle: isExample ? "italic" : "normal",
                  margin: 0,
                  maxWidth: 560,
                  padding: isExample ? "14px 18px" : 0,
                  background: isExample
                    ? f.key === "without" ? C.destructive + "0a" : C.success + "0a"
                    : "transparent",
                  borderRadius: isExample ? 8 : 0,
                  borderLeft: isExample ? `3px solid ${f.color}` : "none",
                }}>
                  {technique[f.key]}
                </p>
              </section>
            );
          })}
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

      {/* ── 1. HERO — dark + spectrum (Frame 8) ── */}
      <section
        id="module-content"
        style={{
          padding: `${spacing.sectionPaddingY} ${contentInlinePad} 72px`,
          position: "relative",
          overflow: "hidden",
          backgroundColor: C.confidentBlack,
          backgroundImage: "url('/spectrum/hero-frame-8.png')",
          backgroundSize: "cover",
          backgroundPosition: "78% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Soft left scrim so white type stays readable over the bloom */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(26,26,36,0.94) 0%, rgba(26,26,36,0.78) 45%, rgba(26,26,36,0.35) 72%, rgba(26,26,36,0.18) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Spectrum accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: spectrumCss(5), zIndex: 2 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 860 }}>
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
            The Difference Is the{" "}
            <span style={{ color: C.yellow }}>Prompt</span>
          </h1>
          <p style={{ fontSize: 19, color: C.gray02, fontWeight: 300, lineHeight: 1.7, maxWidth: 660, fontFamily: F.light }}>
            A prompt isn&apos;t just a question — it&apos;s a structured instruction that determines the quality of everything AI gives you back.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
            <span style={{ padding: "6px 16px", background: "rgba(255,230,0,0.10)", border: "1px solid rgba(255,230,0,0.25)", borderRadius: 20, color: C.yellow, fontSize: 12, fontFamily: F.bold }}>~30 min</span>
            <span style={{ padding: "6px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, color: C.gray02, fontSize: 12, fontFamily: F.regular }}>7 Elements</span>
            <span style={{ padding: "6px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, color: C.gray02, fontSize: 12, fontFamily: F.regular }}>Interactive</span>
          </div>
        </div>
      </section>

      {/* ── 2. THE PIPELINE — neutral ── */}
      <section id="pipeline" style={{ background: SURFACE.neutral.bg, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle, display: "flex", flexDirection: "column", gap: 48, alignItems: "center" }}>
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
              AI responds to the instructions you provide. Better instructions produce better results
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

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
                <span style={{ fontSize: 10, color: C.gray01, fontFamily: F.regular }}>sends prompt</span>
                <ArrowRight size={16} color={C.white} strokeWidth={2} />
              </div>

              {/* AI */}
              <div style={{
                background: C.yellow, border: `1.5px solid ${C.gray02}`, borderRadius: 16,
                width: 220, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              }}>
                <div style={{ background: C.yellow, borderRadius: 100, padding: 12, display: "flex" }}>
                  <Cpu size={24} color={C.offBlack} strokeWidth={2} />
                </div>
                <span style={{ fontSize: 15, color: C.offBlack, fontFamily: F.regular, lineHeight: "25.5px" }}>AI</span>
                <span style={{
                  border: `1px solid ${C.gray02}`, borderRadius: 16, padding: "2px 8px",
                  fontSize: 14, color: C.offBlack, fontFamily: F.regular, lineHeight: "22.4px",
                  background: C.yellow,
                }}>Processes</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
                <span style={{ fontSize: 10, color: C.gray01, fontFamily: F.regular }}>returns output</span>
                <ArrowRight size={16} color={C.white} strokeWidth={2} />
              </div>

              {/* RESULT — light success surface so dark type stays WCAG-readable */}
              <div style={{
                background: C.white, border: `1.5px solid ${C.gray02}`, borderRadius: 16,
                width: 220, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              }}>
                <div style={{ background: "rgba(0,200,100,0.12)", borderRadius: 100, padding: 12, display: "flex" }}>
                  <CheckCircle size={24} color={C.success} strokeWidth={2} />
                </div>
                <span style={{ fontSize: 15, color: C.offBlack, fontFamily: F.regular, lineHeight: "25.5px" }}>RESULT</span>
                <span style={{
                  border: `1px solid rgba(0,200,100,0.35)`, borderRadius: 16, padding: "2px 8px",
                  fontSize: 14, color: C.offBlack, fontFamily: F.regular, lineHeight: "22.4px",
                  background: "rgba(0,200,100,0.10)",
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

      {/* ── 4. 7 ELEMENTS — Figma Section Elements ── */}
      <EightElementsWizard />

      {/* ── 5. AI PARALLEL — Same AI, Lazy Ask vs Pro Ask ── */}
      <AiLazyProSection />

      {/* ── 6. PROMPT STACK BUILDER — light ── */}
      <section id="stack-builder" style={{ background: SURFACE.light.bg, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: C.confidentBlack, textAlign: "center", marginBottom: 8, fontFamily: F.bold }}>
            Build a Perfect Prompt — Piece by Piece
          </h2>
          <p style={{ fontSize: 16, color: C.gray01, textAlign: "center", lineHeight: 1.7, marginBottom: 8, fontFamily: F.light, maxWidth: 650, marginLeft: "auto", marginRight: "auto" }}>
            Click each ingredient below to add it to the prompt. Watch it come together like assembling a client brief.
          </p>
          <p style={{ fontSize: 13, color: C.gray01, textAlign: "center", marginBottom: 32, fontFamily: F.regular }}>
            Use case: Analyzing withholding tax on software royalty payments to a US parent company
          </p>
          <PromptStackBuilder />
        </div>
      </section>

      {/* ── 7. TECHNIQUES + LEVEL UP — dark ── */}
      <section id="advanced" style={{ background: SURFACE.dark.bg, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: SURFACE.dark.heading, marginBottom: 8, fontFamily: F.bold }}>
            Prompt like a Pro — Techniques
          </h2>
          <p style={{ fontSize: 16, color: SURFACE.dark.body, lineHeight: 1.7, marginBottom: 12, fontFamily: F.light, maxWidth: 680 }}>
            Now that you know the elements, here are 8 techniques to level up your prompting game.
          </p>
          <AdvancedTechniquesSection onDark />
        </div>
      </section>

      {/* ── 8. META PROMPT — temporarily hidden ── */}
      {/* <MetaPromptSection /> */}

      {/* ── 9. MATCH THE PROMPT — interactive activity (Figma 3215:5657) ── */}
      <MatchPromptActivity />

      {/* ── 10. GOLDEN RULES — Do's & Don'ts ── */}
      <section id="dos-donts" style={{ background: SURFACE.light.bg, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
          <p style={{ color: SURFACE.light.eyebrow, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: F.bold, marginBottom: 10 }}>
            The Golden Rules
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: SURFACE.light.heading, marginBottom: 8, fontFamily: F.bold }}>
            Prompt Engineering — Do&apos;s &amp; Don&apos;ts
          </h2>
          <p style={{ fontSize: 15, color: C.gray01, marginBottom: 40, fontFamily: F.light, lineHeight: 1.6 }}>
            A practical guide for tax professionals. Each card includes a real example.
          </p>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", background: C.success + "1a", border: `1px solid ${C.success}40`, borderRadius: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.success} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ color: C.success, fontSize: 14, fontWeight: 700, fontFamily: F.bold }}>✅ Do&apos;s</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", background: C.destructive + "1a", border: `1px solid ${C.destructive}40`, borderRadius: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.destructive} strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                <span style={{ color: C.destructive, fontSize: 14, fontWeight: 700, fontFamily: F.bold }}>❌ Don&apos;ts</span>
              </div>
            </div>

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
                      display: "flex", flexDirection: "column", gap: 8,
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: C.success, fontFamily: F.bold }}>{doItem.title}</div>
                      <div style={{ fontSize: 13, color: SURFACE.light.body, lineHeight: 1.6, fontFamily: F.regular }}>{doItem.desc}</div>
                      <div style={{ fontSize: 12, color: C.gray01, lineHeight: 1.55, fontFamily: F.light, fontStyle: "italic", marginTop: "auto", paddingTop: 8 }}>{doItem.example}</div>
                    </div>
                    <div style={{
                      height: "100%",
                      padding: "16px 18px", background: SURFACE.neutral.bg, borderRadius: 8,
                      border: `1px solid ${SURFACE.light.border}`,
                      borderLeft: `3px solid ${C.destructive}`,
                      display: "flex", flexDirection: "column", gap: 8,
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: C.destructive, fontFamily: F.bold }}>{dontItem.title}</div>
                      <div style={{ fontSize: 13, color: SURFACE.light.body, lineHeight: 1.6, fontFamily: F.regular }}>{dontItem.desc}</div>
                      <div style={{ fontSize: 12, color: C.gray01, lineHeight: 1.55, fontFamily: F.light, fontStyle: "italic", marginTop: "auto", paddingTop: 8 }}>{dontItem.example}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: 40, padding: "14px 22px", background: C.yellowAlpha10, border: `1px solid ${C.yellow}33`, borderRadius: 8, textAlign: "center" }}>
            <p style={{ fontSize: 12, color: C.eyebrowGold, lineHeight: 1.6, fontFamily: F.regular, margin: 0 }}>
              ⚠️ FOR INFORMATIONAL PURPOSES ONLY. ALWAYS CONSULT YOUR QUALIFIED TAX ADVISOR BEFORE ACTING ON ANY AI-GENERATED OUTPUT.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. RECAP IN A NUTSHELL — static checklist (Figma 3215:5881) ── */}
      <RecapInNutshellSection />

      {/* ── 11. WHAT'S NEXT — continue to M365 Copilot ── */}
      <WhatsNextSection onContinue={() => onNavigate("/copilot-hub")} />

      {/* ── Footer — light ── */}
      <div style={{ background: SURFACE.light.bg, borderTop: `1px solid ${SURFACE.light.border}`, padding: `24px ${contentInlinePad}`, textAlign: "center" }}>
        <p style={{ color: C.gray01, fontSize: 12, fontFamily: F.regular }}>© 2026 EY India AI Tax Hub — Part 2: Basics of Prompting | Building a better working world</p>
      </div>

    </div>
  );
}
