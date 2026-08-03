import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle, ArrowRight, BarChart3, Calculator, Check, CheckCircle, ChevronDown, ChevronRight, ChevronUp,
  ClipboardList, Compass, Copy, ExternalLink, FileText,
  FolderOpen, Globe, LineChart, Link2, Mail, Megaphone, MessagesSquare,
  PenLine, Pin, Rocket, Search, Sparkles, Target, Timer, XCircle,
} from "lucide-react";
import { ModuleHeader, SUBNAV_SCROLL_MARGIN, useModuleSectionHashScroll } from "../design-kit/LearningNav";
import { SiteHeader } from "../design-kit/SiteHeader";
import { EYWhatsNext, EYWhatsNextHighlight } from "../design-kit/EYWhatsNext";
import { SectionAnchorTitle } from "../design-kit/EYTypography";
import { colors, contentInlinePad, contentRailStyle, fonts as F, spacing, typeScale } from "../design-kit/tokens";

// Canonical token alias — keeps existing C.dark / C.dark2 references working
const C = {
  ...colors,
  dark:       colors.confidentBlack,
  dark2:      colors.offBlack,
  // Microsoft app colours (used for realistic app-window chrome only)
  wordBlue:   colors.frameBlue,
  excelGreen: colors.frameGreen,
  pptOrange:  "#FF3C00",
  outlookBlue: colors.frameBlue,
  teamsViolet: colors.framePurple,
};

// ── Copilot icon (simplified sparkle — replaces expired Figma asset) ──────────
function CopilotIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="url(#cg)" />
      <defs><radialGradient id="cg" cx="30%" cy="30%"><stop offset="0%" stopColor="#4696FF"/><stop offset="100%" stopColor="#B400FF"/></radialGradient></defs>
      <path d="M16 8l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z" fill="#FFFFFF" opacity=".9"/>
    </svg>
  );
}

// ── Tab config (exact labels from Figma 3317:15589) ──────────────────────────
// `logo` paths match the laptop-stage / CoreProcessingPipeline MS app SVGs in
// public/pipeline/ — real product marks, not letter-on-square placeholders.
const TABS = [
  { id: "word",    label: "Word Prompts",     color: C.wordBlue,   appColor: C.wordBlue,   logo: "/pipeline/word.svg" },
  { id: "excel",   label: "Excel Formulas",   color: C.excelGreen, appColor: C.excelGreen, logo: "/pipeline/excel.svg" },
  { id: "ppt",     label: "PowerPoint Decks", color: C.pptOrange,  appColor: C.pptOrange,  logo: "/pipeline/powerpoint.svg" },
  { id: "outlook", label: "Outlook Threads",  color: C.outlookBlue,appColor: C.outlookBlue,logo: "/pipeline/outlook.svg" },
  { id: "m365",    label: "M365 Chat",        color: C.teamsViolet,appColor: C.teamsViolet,logo: "/pipeline/copilot-icon.svg" },
  { id: "agent",   label: "M365 Agent",       color: C.teamsViolet,appColor: C.teamsViolet,logo: "/pipeline/m365-agent-icon.png" },
] as const;
type TabId = (typeof TABS)[number]["id"];

// ── Real app display names — used in use-case tags, mock window titles, and
// the "Ask Copilot in {App}" prompt-panel headers ────────────────────────────
const APP_NAME: Record<TabId, string> = {
  word: "Word",
  excel: "Excel",
  ppt: "PowerPoint",
  outlook: "Outlook",
  m365: "M365 Chat",
  agent: "M365 Agent",
};

// ── Laptop stage — "What you can do" popping app widget (ported from Module1) ─
// The 5 apps with live prompt content below "pop" with a floating animation and
// jump straight to their tab section. M365 Agent sits on the stage itself;
// remaining apps without prompt content show as a muted "coming soon" dock.
const LAPTOP_CORE_APPS: { id: TabId; label: string; logo: string; pos: React.CSSProperties }[] = [
  { id: "word",    label: "Word",        logo: "/pipeline/word.svg",         pos: { top: 47, left: 42 } },
  { id: "excel",   label: "Excel",       logo: "/pipeline/excel.svg",        pos: { top: 34, right: 68, animationDelay: "0.4s" } },
  { id: "ppt",     label: "PowerPoint",  logo: "/pipeline/powerpoint.svg",   pos: { bottom: 121, right: 25, animationDelay: "0.8s" } },
  { id: "outlook", label: "Outlook",     logo: "/pipeline/outlook.svg",      pos: { bottom: 121, left: 35, animationDelay: "1.2s" } },
  { id: "m365",    label: "M365 Chat",   logo: "/pipeline/copilot-icon.svg", pos: { top: 0, left: "44%", animationDelay: "1.6s" } },
];

// M365 Agent — stage tile opens the agent prompt tab (same white tile as other apps).
const LAPTOP_STAGE_AGENT = {
  id: "agent" as TabId,
  label: "M365 Agent",
  logo: "/pipeline/m365-agent-icon.png",
  pos: { bottom: 34, left: 0, right: 0, marginLeft: "auto", marginRight: "auto", animationDelay: "2s" } as React.CSSProperties,
};

const LAPTOP_COMING_SOON_APPS: { label: string; logo: string }[] = [
  { label: "MS Teams",   logo: "/pipeline/teams.svg" },
  { label: "SharePoint", logo: "/pipeline/sharepoint.svg" },
  { label: "OneDrive",   logo: "/pipeline/onedrive.svg" },
  { label: "OneNote",    logo: "/pipeline/onenote.svg" },
  { label: "MS Forms",   logo: "/pipeline/forms.svg" },
];

// ── Exact content from Figma (3317:15589), upgraded with the "use-grid" +
// "copilot scene" tax use-case & prompt content ported from copilot_dashboard.html ──
const SECTION_DATA: Record<TabId, {
  eyebrow: string; eyebrowColor: string;
  h2: string; subtitle: string;
  useCases: { icon: LucideIcon; title: string; body: string }[];
  panelSubtitle: string;
  prompts: { label: string; text: string }[];
  screenshotSide: "left" | "right";
  altBg: boolean;
}> = {
  word: {
    eyebrow: "DOCUMENT INTELLIGENCE",
    eyebrowColor: C.wordBlue,
    h2: "Copilot in Word",
    subtitle: "Draft documents, summarize content, and rewrite text with AI-powered assistance. Build professional issue memos and restructure client communication instantly.",
    useCases: [
      { icon: FileText, title: "Draft Position Notes",  body: "Create first-cut tax research memos, issue notes, legal summaries and client-ready position papers." },
      { icon: Search,   title: "Summarise Case Laws",   body: "Condense lengthy rulings, circulars, notifications or tribunal orders into crisp facts and implications." },
      { icon: PenLine,  title: "Refine Legal Language", body: "Rewrite tax submissions and opinion drafts into a sharper, review-ready tone." },
      { icon: Pin,      title: "Track Review Points",   body: "Convert comments and inputs into action points, open items and next-step trackers." },
    ],
    panelSubtitle: "Draft, review and refine tax documents with speed and consistency.",
    prompts: [
      { label: "Draft a Position Note",         text: "Draft a 1-page position note on the withholding tax treatment of software royalty payments to our US parent, citing the EACoE Supreme Court ruling." },
      { label: "Summarise a Tribunal Ruling",   text: "Summarise this ITAT order in plain English — facts, issue, ruling, and what it means for our client." },
      { label: "Tighten the Legal Language",    text: "Rewrite this tax opinion draft in a sharper, more formal tone suitable for client delivery." },
      { label: "Build a Review Tracker",        text: "Convert the reviewer's comments in this document into a numbered action tracker with owners and due dates." },
      { label: "Create an Executive Summary",   text: "Summarise this 12-page tax memo into a 5-bullet executive summary for the CFO." },
    ],
    screenshotSide: "left",
    altBg: true,
  },
  excel: {
    eyebrow: "ANALYTICAL ROUTINES",
    eyebrowColor: C.excelGreen,
    h2: "Copilot in Excel",
    subtitle: "Analyze data, create formulas, generate charts, and uncover insights from your spreadsheets. Build clean logical checks and eliminate calculation bugs.",
    useCases: [
      { icon: BarChart3,     title: "Analyse Tax Data",      body: "Summarise large datasets and identify key trends, gaps, mismatches and exceptions." },
      { icon: Calculator,    title: "Build Reconciliations", body: "Create formulas and logic checks to compare books, returns and working papers." },
      { icon: AlertTriangle, title: "Spot Exceptions",       body: "Detect anomalies such as missing details, rate mismatches or duplicates." },
      { icon: LineChart,     title: "Visualise Compliance",  body: "Create dashboards to show status, exposures, ageing and risk movement." },
    ],
    panelSubtitle: "Analyse tax data, reconciliations and compliance trackers with precision.",
    prompts: [
      { label: "Reconcile Two Ledgers",           text: "Compare the GST returns and books data in these two sheets and flag every mismatch above ₹10,000." },
      { label: "Explain This Formula",            text: "Explain what this VLOOKUP + IFERROR formula in column F is actually doing, in plain language." },
      { label: "Spot Withholding Gaps",           text: "Scan this vendor payment sheet and flag any transaction where TDS appears under-deducted." },
      { label: "Build a Compliance Dashboard",    text: "Turn this data into a one-page dashboard showing filing status, ageing, and open exposures by entity." },
      { label: "Forecast the Effective Tax Rate", text: "Using this P&L, calculate the projected effective tax rate for FY26 factoring in surcharge and cess." },
    ],
    screenshotSide: "right",
    altBg: false,
  },
  ppt: {
    eyebrow: "COLLABORATIVE & CREATIVE DELIVERY",
    eyebrowColor: C.pptOrange,
    h2: "Copilot in PowerPoint & Chat",
    subtitle: "Translate raw data matrices into compelling slides, executive summaries, and cross-application project definitions. Use Interactive Chat to coordinate answers.",
    useCases: [
      { icon: Target,     title: "Create Client Decks",        body: "Convert tax analysis into structured, visually clean, client-ready presentations." },
      { icon: Compass,    title: "Tell the Tax Story",         body: "Organise complex positions into context, issue, risk, recommendation and next steps." },
      { icon: Megaphone,  title: "Prepare Leadership Updates", body: "Generate concise leadership slides on exposures, updates and decisions required." },
      { icon: FolderOpen, title: "Summarise Case Strategy",    body: "Build crisp hearing briefs, timelines and argument maps." },
    ],
    panelSubtitle: "Convert tax positions and updates into leadership-ready narratives.",
    prompts: [
      { label: "Build a Client-Ready Deck",  text: "Turn this tax position note into a 6-slide client deck with an executive summary slide." },
      { label: "Tell the Tax Story",         text: "Structure this analysis as Context → Issue → Risk → Recommendation → Next Steps across slides." },
      { label: "Simplify for the Board",     text: "Rewrite these slides in plain business language a non-tax board member would understand." },
      { label: "Create a Litigation Timeline", text: "Build a visual timeline slide of this case's key hearing dates and outcomes." },
      { label: "Design a Comparison Slide",  text: "Create a side-by-side slide comparing the old vs new GST rate structure." },
    ],
    screenshotSide: "right",
    altBg: true,
  },
  outlook: {
    eyebrow: "COMMUNICATIONS & AGENDAS",
    eyebrowColor: C.outlookBlue,
    h2: "Copilot in Outlook",
    subtitle: "Summarize email threads, draft replies, and manage your inbox efficiently. Convert messy, sprawling client communications into actionable priorities in seconds.",
    useCases: [
      { icon: Mail,           title: "Draft Client Emails",   body: "Prepare clear professional emails for data requests, updates and follow-ups." },
      { icon: MessagesSquare, title: "Summarise Threads",     body: "Extract decisions, pending inputs, responsibilities and deadlines from long chains." },
      { icon: Timer,          title: "Manage Follow-ups",     body: "Convert email conversations into action-oriented follow-ups." },
      { icon: Sparkles,       title: "Polish Tone Instantly", body: "Rewrite responses to sound concise, client-sensitive and executive-ready." },
    ],
    panelSubtitle: "Manage tax communications, follow-ups and client responses faster.",
    prompts: [
      { label: "Draft a Client Update",        text: "Draft a concise email to the client summarising the outcome of today's assessment hearing." },
      { label: "Summarise a Long Thread",      text: "Summarise this 20-email thread into decisions made, pending items, and who owns what." },
      { label: "Chase Outstanding Documents",  text: "Draft a polite but firm follow-up requesting the pending Form 15CA/CB documents." },
      { label: "Soften a Firm Response",       text: "Rewrite this reply to sound more diplomatic — we're pushing back on the client's proposed position." },
      { label: "Prepare a Cover Note",         text: "Draft a short covering email to accompany our reply to the GST show cause notice." },
    ],
    screenshotSide: "left",
    altBg: false,
  },
  m365: {
    eyebrow: "COLATE INFORMATION ACROSS M365",
    eyebrowColor: C.teamsViolet,
    h2: "Copilot in M365 Chat",
    subtitle: "Use Copilot in M365 Chat to ask questions, get summaries, and generate content across your Microsoft 365 data. Chat brings together information from documents, emails, meetings, and contacts to give you AI-powered answers grounded in your work data.",
    useCases: [
      { icon: Globe,         title: "Search Across Work",      body: "Find tax-related discussions, documents, emails and files across Microsoft 365." },
      { icon: ClipboardList, title: "Prepare Matter Briefs",   body: "Generate briefing notes before client calls or internal reviews." },
      { icon: Link2,         title: "Connect Tax Context",     body: "Connect compliance data, research notes, email trails and presentation inputs." },
      { icon: Rocket,        title: "Accelerate First Drafts", body: "Create starting drafts for emails, memos, decks, trackers and meeting prep." },
    ],
    panelSubtitle: "Ask cross-app questions and retrieve tax context across Microsoft 365.",
    prompts: [
      { label: "Find Every Mention",         text: "Find every email, doc or chat this quarter that mentions the 'safe harbour' rate change." },
      { label: "Prep for a Client Call",     text: "Pull together everything we discussed with ABC Corp on their TP matter in the last 30 days." },
      { label: "Draft a Matter Brief",       text: "Summarise all files related to the XYZ litigation into a one-page matter brief." },
      { label: "Check What's Still Pending", text: "What action items are still open for me across all my tax engagements this week?" },
      { label: "Compare Team Positions",     text: "Compare how our Mumbai and Bangalore teams have each interpreted the new TDS circular." },
    ],
    screenshotSide: "right",
    altBg: true,
  },
  agent: {
    eyebrow: "AUTONOMOUS TAX WORKFLOWS",
    eyebrowColor: C.teamsViolet,
    h2: "M365 Agent in Tax",
    subtitle: "Build reliable M365 agents with Microsoft's instruction principles, reusable templates, and tax-specific sample workflows.",
    useCases: [
      { icon: Search,        title: "Retrieve Tax Knowledge",    body: "Locate historical positions, precedents and supporting materials across approved repositories." },
      { icon: FolderOpen,    title: "Organise Evidence",         body: "Gather and package issue-wise evidence from SharePoint, Teams and Outlook for audits and disputes." },
      { icon: ClipboardList, title: "Track Compliance",          body: "Monitor filing deadlines, action items and overdue obligations across engagements." },
      { icon: Rocket,        title: "Automate Correspondence",   body: "Standardise recurring tax communications with approved templates and tone guidelines." },
    ],
    panelSubtitle: "Sample agent instructions for common tax workflow scenarios.",
    prompts: [
      { label: "Tax Knowledge Retrieval Agent",      text: "You are a tax knowledge assistant. Search approved repositories for opinions, notices, submissions and policies. Summarise findings with source references and flag gaps." },
      { label: "Transfer Pricing Documentation Agent", text: "Review related-party schedules, TP reports and GL records. Identify transactions, summarise supporting information and highlight exceptions for audit readiness." },
      { label: "Advance Tax Reviewer Agent",           text: "Compare current and prior quarter advance tax computations. Validate assumption changes, analyse variances and draft a management summary note." },
      { label: "Assessment Evidence Agent",            text: "Search SharePoint, Teams and Outlook for documentation related to this assessment issue. Create an evidence pack and list missing support." },
      { label: "Compliance Tracker Agent",             text: "Maintain the compliance calendar and filing records. Flag upcoming, due and overdue obligations with risk notes for each entity." },
    ],
    screenshotSide: "left",
    altBg: false,
  },
};

// ── M365 Agent — instruction principles, templates, and MS Learn reference ──
const MS_LEARN_AGENT_INSTRUCTIONS =
  "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/declarative-agent-instructions";

const AGENT_INSTRUCTION_PRINCIPLES = [
  {
    n: "01",
    heading: "Use Clear, Actionable Language",
    sub: "Stop Telling Copilot Agent What NOT To Do. Just tell It What TO Do.",
    content: "Use clear verbs like Ask, Search, Check, Use, Send. The more precise your instructions, the more reliable your agent's output. Avoid vague instructions.",
    bad: "Review Section 194R applicability",
    good: "Analyze whether Section 194R applies to the attached sales promotion scheme and identify compliance requirements",
  },
  {
    n: "02",
    heading: "Build Step-by-Step Workflows with transitions",
    sub: "Confused Agents Follow Confused Instructions.",
    content: "Every workflow should have: Goal, Action, Transition",
    bad: "Review tax notices and prepare responses.",
    good: "Step 1: Identify pending notices. Step 2: Extract due dates. Step 3: Draft response summary.",
  },
  {
    n: "03",
    heading: "Use strict structure",
    sub: "Great Results Start with Great Structure",
    content: "Use: Sections for categories, Bullets for parallel tasks, Steps for sequential workflows",
    bad: "Mixed instructions in one paragraph",
    good: "Separate sections: Research, Analysis, Output",
  },
  {
    n: "04",
    heading: "Make tasks atomic",
    sub: "One Instruction. One Outcome.",
    content: "Complex work isn't solved in a single leap. Guide your agent through the same logical path you would follow: Review the facts, Identify the issues, Analyze the impact, Recommend the next steps",
    bad: "Extract case laws and draft litigation arguments",
    good: "Extract relevant case laws. Summarize legal principles. Draft litigation arguments.",
  },
  {
    n: "05",
    heading: "Always specify tone, verbosity, and output format",
    sub: "If You Don't Specify It, Copilot Will Guess.",
    content: "Always define: Tone, Detail level, Output format",
    bad: "Draft an email to the client summarising the provisions covered u/s 90",
    good: "Draft an email to the client summarising the provisions covered u/s 90. Tone: Professional and reassuring. Length: Under 150 words. Output Format: Email ready to send with subject line",
  },
  {
    n: "06",
    heading: "Structure instructions in Markdown",
    sub: "Help Your Agent See the Bigger Picture",
    content: "Use #, ##, and ### for section headers. Use bullets or numbered lists. Highlight tool or system names. Make critical instructions bold by using **",
    bad: "Prepare a transfer pricing risk assessment.",
    good: "Scope: Review FY 2025-26 transactions. Analysis: Identify related party transactions, Evaluate transfer pricing exposure. Risk Assessment: High-risk areas, Supporting documentation gaps. Deliverable: Risk matrix and recommendations",
  },
  {
    n: "07",
    heading: "Provide domain vocabulary",
    sub: "Teach Your Agent Your Language",
    content: "Never Assume Copilot Knows Your Acronyms. Define: Acronyms, Tax terms, Internal terms, Specialized formulas",
    bad: "TP = Transfer Pricing (undefined)",
    good: "TP = Transfer Pricing, FAI = Foreign Asset Information, PE = Permanent Establishment, AO = Assessing Officer",
  },
  {
    n: "08",
    heading: "Explicitly reference capabilities, knowledge, and actions",
    sub: "Tell Copilot Where To Look",
    content: "Tell the agent: Search Teams, Check emails, Use SharePoint knowledge, Use OneDrive documents",
    bad: "Summarize action items",
    good: "Search Teams conversations and summarize action items",
  },
  {
    n: "09",
    heading: "Provide examples",
    sub: "Examples Are Superpowers",
    content: "Don't Just Describe It. Show It. Provide examples for more than one example for edge cases. Remove ambiguity and help your agent replicate the outcome you expect.",
    bad: "Draft a client communication.",
    good: "Use the tone and structure below: Dear Client, We would like to inform you about the recent amendment impacting withholding tax obligations. Recommended next step: Review current vendor arrangements. Now draft a communication regarding Section 194T using the same style.",
  },
  {
    n: "10",
    heading: "Control reasoning through phrasing",
    sub: "Control How Much Reasoning You Need",
    content: "Not Every Task Needs Deep Thinking. Choose the right instruction style: Deep reasoning to analyze, derive, evaluate, justify, think step by step, reflect, verify logic and structure tasks into multiple dependent steps. Moderate reasoning (balanced) for concise but structured explanation. Fast and minimal reasoning for short answers, no reasoning on explanation and final result only.",
    bad: "Analyze litigation strategy considering recent High Court and Supreme Court rulings. (Deep, no signal)",
    good: "Deep Task: Analyze litigation strategy considering recent High Court and Supreme Court rulings. Moderate Task: Summarize implications of Section 148A. Quick Task: Extract due dates from this notice.",
  },
] as const;

const AGENT_INSTRUCTION_PATTERNS = [
  {
    n: "01",
    name: "Convert ambiguous multitask requests into deterministic workflows",
    use: "Remove ambiguity by defining atomic steps, explicit formulas, and required validation. Ensures stable, repeatable behavior across model versions.",
    template: "## Task: Metrics and ROI (Deterministic)\n\n### Definitions (Do not invent)\n- Metrics to compute: [Metric1], [Metric2], [Metric3]\n- ROI definition: ROI = (Benefit - Cost) / Cost\n- Source of truth: Use ONLY the provided document(s)\n\n### Steps (Sequential — do not reorder)\nStep 1: Locate inputs. Quote the section/table where each came from.\nStep 2: Compute metrics exactly as defined. If any input is missing, stop and ask ONE question.\nStep 3: Compute ROI using the definition above.\nStep 4: Output ONLY the table.\n\n### Final check\nBefore finalizing: confirm every metric has a value, a source, and no assumptions.",
  },
  {
    n: "02",
    name: "Correct parallel versus sequential structure",
    use: "Separate parallel and sequential logic so the model runs workflows without adding or reordering steps.",
    template: "Section A — Extract Data (parallel)\n- Extract pricing changes.\n- Extract margin changes.\n- Extract sentiment themes.\n\nSection B — Build the Summary (sequential)\nStep 1: Integrate all findings from Section A.\nStep 2: Produce the 2 page call prep summary.",
  },
  {
    n: "03",
    name: "Explicit decision rules",
    use: "Add explicit if/then rules that prevent unintended model interpretation and enforce deterministic outcomes.",
    template: "Read the product report.\nCheck category performance.\nIf performance is stable or improving, write the summary section.\nIf performance declines or anomalies are detected, write the risks/issues section.",
  },
  {
    n: "04",
    name: "Output contract",
    use: "Provide shape, structure, tone, and allowed content ensuring consistency across versions.",
    template: "## Output Contract (Mandatory)\nGoal: [one sentence]\nFormat: [bullet list | table | 2 pages | JSON]\nDetail level: [short | medium | detailed]\nTone: [Professional | Friendly | Efficient]\nInclude: [A, B, C]\nExclude: No extra recommendations, no extra context, no helpful tips",
  },
  {
    n: "05",
    name: "Self-evaluation gate",
    use: "Add an explicit self-check step so the model validates completeness and corrects omissions before responding.",
    template: "## Final Check: Self Evaluation\nBefore finalizing the output, review your response for completeness, ensure that all Section A elements are accurately represented, check for inconsistencies or uncertainty, and revise the answer if needed.",
  },
  {
    n: "06",
    name: "Steering automode reasoning",
    use: "Explicit reasoning cues give you control over how much thinking the model applies.",
    template: "Deep: Use deep reasoning. Break the problem into steps, analyze each step, evaluate alternatives, and justify the final decision. Reflect before answering.\n\nFast: Short answer only. No reasoning or explanation. Provide the final result only.",
  },
  {
    n: "07",
    name: "Literal-execution header for immediate stability",
    use: "Temporarily stabilize an existing agent, especially after a model change. Interim fix while you update the full instruction set.",
    template: "Always interpret instructions literally.\nNever infer intent or fill in missing steps.\nNever add context, recommendations, or assumptions.\nFollow step order exactly with no optimization.\nRespond concisely and only in the requested format.\nDo not call tools unless a step explicitly instructs to do so.",
  },
] as const;

const AGENT_HUB_TABS = [
  { id: "principles", label: "Instruction Principles" },
  { id: "templates",  label: "Templates & Patterns" },
  { id: "use-cases",  label: "Tax Agent Use Cases" },
] as const;
type AgentHubTabId = (typeof AGENT_HUB_TABS)[number]["id"];

// ── Pattern 2c: Use-case cards — left column (Figma 3640:4312). Bare stacked
// cards on the section background; no titled panel wrapper.
function CopilotUseCasePanel({ useCases }: {
  useCases: { icon: LucideIcon; title: string; body: string }[];
}) {
  return (
    <div style={{ flex: "0 0 292px", minWidth: 0, maxHeight: 800, minHeight: 0, padding: 22, display: "flex", flexDirection: "column", gap: 10, overflowY: "auto" }}>
      {useCases.map(uc => {
        const Icon = uc.icon;
        return (
          <div key={uc.title} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12.75px", borderRadius: 14, background: C.white, border: `0.75px solid ${C.gray02}` }}>
            <div style={{ width: 36, height: 36, minWidth: 36, borderRadius: 10, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", color: C.dark2, flexShrink: 0 }}>
              <Icon size={18} strokeWidth={1.75} aria-hidden />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 13, color: C.dark2, marginBottom: 4, lineHeight: 1.3 }}>{uc.title}</p>
              <p style={{ fontFamily: F.regular, fontSize: 11.5, color: C.gray01, lineHeight: 1.45 }}>{uc.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Typing-reveal hook — ports the reference file's injectPrompt/typePrompt
// character-by-character animation into a lightweight React hook ─────────────
function useTypingPrompt() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  const select = (idx: number, text: string) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveIndex(idx);
    setTypedText("");
    let i = 0;
    timerRef.current = setInterval(() => {
      i += 1;
      setTypedText(text.slice(0, i));
      if (i >= text.length && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 14);
  };

  return { activeIndex, typedText, select };
}

// ── Pattern 2a: App window mock — dark chrome, gradient canvas, tall white
// document with Copilot panel anchored at top (Figma 3640:4190) ─────────────
function CopilotAppMock({ appLabel, accent, typedText }: { appLabel: string; accent: string; typedText: string }) {
  return (
    <div style={{ flex: "1 1 392px", minWidth: 0, maxHeight: 800, minHeight: 598, background: `linear-gradient(180deg, ${C.dark2}, ${C.dark})`, borderRadius: 22, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.28)", border: "0.75px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column" }}>
      {/* Window chrome */}
      <div style={{ height: 42, background: C.dark, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", borderBottom: "0.75px solid rgba(255,255,255,0.08)", gap: 12, flexShrink: 0 }}>
        <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
          {[1, 0.6, 0.32].map((o, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: 5, background: accent, opacity: o }} />)}
        </div>
        <span style={{ fontFamily: F.regular, fontSize: 12, fontWeight: 700, color: C.white, flex: 1, textAlign: "center" }}>{appLabel} — blank workspace</span>
        <span style={{ fontFamily: F.regular, fontSize: 10, fontWeight: 700, letterSpacing: "0.4px", textTransform: "uppercase", color: C.gray02, border: "0.75px solid rgba(255,255,255,0.16)", borderRadius: 999, padding: "4.75px 10.75px", flexShrink: 0, whiteSpace: "nowrap" }}>Copilot-enabled</span>
      </div>
      {/* App-colored canvas — tall white document, Copilot overlay at top */}
      <div style={{ flex: 1, padding: 24, display: "flex", alignItems: "stretch", justifyContent: "center", background: `linear-gradient(125deg, ${accent}, ${C.dark})`, minHeight: 0, overflow: "auto" }}>
        <div style={{ width: "100%", maxWidth: 342, minHeight: 506, background: C.white, borderRadius: 16, padding: 24, boxShadow: "0 18px 22px rgba(0,0,0,0.24)", display: "flex", flexDirection: "column" }}>
          <div style={{ marginTop: 12, background: C.offWhite, border: `0.75px solid ${C.yellow}`, borderRadius: 12, padding: "14.75px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <CopilotIcon size={16} />
              <span style={{ fontFamily: F.regular, fontSize: 10, fontWeight: 700, letterSpacing: "0.6px", textTransform: "uppercase", color: C.dark2 }}>Copilot</span>
            </div>
            <textarea
              readOnly
              value={typedText}
              placeholder="Choose a prompt on the right to see Copilot respond →"
              style={{ width: "100%", minHeight: 100, border: "none", outline: "none", resize: "none", background: "transparent", fontFamily: F.regular, fontSize: 13, color: typedText ? C.dark2 : "rgba(46,46,56,0.5)", lineHeight: 1.55 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Pattern 2b: "Ask Copilot in {App}" prompt panel — 5 clickable prompts ──
function CopilotPromptPanel({ appLabel, subtitle, prompts, activeIndex, onSelect }: {
  appLabel: string; subtitle: string; prompts: { label: string; text: string }[];
  activeIndex: number | null; onSelect: (idx: number) => void;
}) {
  return (
    <div style={{ flex: "1 1 392px", minWidth: 0, maxHeight: 800, minHeight: 598, background: `linear-gradient(151deg, ${C.dark2} 8.5%, ${C.dark} 91.5%)`, border: "0.75px solid rgba(255,255,255,0.08)", borderRadius: 22, padding: "22.75px", boxShadow: "0 20px 25px rgba(0,0,0,0.24)", display: "flex", flexDirection: "column" }}>
      <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 16, color: C.white, marginBottom: 4, display: "flex", alignItems: "center", gap: 8, lineHeight: 1.5 }}>
        <Sparkles size={16} strokeWidth={1.75} color={C.yellow} aria-hidden /> Ask Copilot in {appLabel}
      </p>
      <p style={{ fontFamily: F.regular, fontSize: 12, color: C.gray02, lineHeight: 1.5, marginBottom: 16 }}>{subtitle}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, overflowY: "auto", minHeight: 0, flex: 1, paddingRight: 4 }}>
        {prompts.map((p, i) => {
          const active = i === activeIndex;
          return (
            <button
              key={p.label}
              onClick={() => onSelect(i)}
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "11.75px 12.75px", borderRadius: 14,
                background: active ? "rgba(255,230,0,0.14)" : "rgba(255,255,255,0.04)",
                border: active ? `0.75px solid ${C.yellow}` : "0.75px solid rgba(255,255,255,0.08)",
                cursor: "pointer", textAlign: "left", width: "100%", fontFamily: F.regular,
                transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.transform = "translateX(3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
            >
              <span style={{ width: 24, height: 24, minWidth: 24, borderRadius: 12, background: active ? C.yellow : "rgba(255,255,255,0.12)", color: active ? C.dark : C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{i + 1}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 2, lineHeight: 1.5 }}>{p.label}</span>
                <span style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{p.text}</span>
              </span>
              <ArrowRight size={14} strokeWidth={1.75} color={active ? C.yellow : "rgba(255,255,255,0.35)"} aria-hidden style={{ flexShrink: 0 }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Pattern 2: Use cases | app mock | prompt panel — Figma 3640:4189 layout.
// Fixed left-to-right order; capped at 800px; inner lists scroll if needed.
function CopilotScene({ tabId }: { tabId: TabId }) {
  const d = SECTION_DATA[tabId];
  const tabMeta = TABS.find(t => t.id === tabId)!;
  const appLabel = APP_NAME[tabId];
  const { activeIndex, typedText, select } = useTypingPrompt();

  return (
    <>
      <div
        className="copilot-scene"
        style={{ display: "flex", alignItems: "stretch", gap: 20, maxHeight: 800 }}
      >
        <CopilotUseCasePanel useCases={d.useCases} />
        <CopilotAppMock appLabel={appLabel} accent={tabMeta.appColor} typedText={typedText} />
        <CopilotPromptPanel
          appLabel={appLabel}
          subtitle={d.panelSubtitle}
          prompts={d.prompts}
          activeIndex={activeIndex}
          onSelect={idx => select(idx, d.prompts[idx].text)}
        />
      </div>
      <style>{`
        @media (max-width: 900px) {
          .copilot-scene { flex-direction: column !important; max-height: none !important; }
          .copilot-scene > * { flex: 1 1 auto !important; max-height: none !important; min-height: 0 !important; }
        }
      `}</style>
    </>
  );
}

// ── M365 Agent hub — progressive disclosure (Arjun spec) ─────────────────────
function AgentPrincipleAccordionItem({
  principle,
  expanded,
  onToggle,
  panelId,
  triggerId,
}: {
  principle: (typeof AGENT_INSTRUCTION_PRINCIPLES)[number];
  expanded: boolean;
  onToggle: () => void;
  panelId: string;
  triggerId: string;
}) {
  const focusRing = `2px solid ${C.yellow}`;

  return (
    <div
      style={{
        background: C.white,
        borderRadius: 12,
        overflow: "hidden",
        border: `1px solid ${C.gray02}`,
      }}
    >
      <button
        type="button"
        id={triggerId}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
        onFocus={e => { e.currentTarget.style.outline = focusRing; }}
        onBlur={e => { e.currentTarget.style.outline = "none"; }}
        style={{
          width: "100%",
          padding: "16px 24px",
          background: C.confidentBlack,
          borderBottom: expanded ? `1px solid ${C.borderOnDark}` : "none",
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: F.regular,
        }}
      >
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            flexShrink: 0,
            background: C.yellow,
            color: C.confidentBlack,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 800,
            fontFamily: F.bold,
          }}
        >
          {principle.n}
        </span>
        <span
          style={{
            fontSize: typeScale.label.size,
            fontWeight: 700,
            color: C.onDark,
            fontFamily: F.bold,
            lineHeight: 1.3,
          }}
        >
          {principle.heading}
        </span>
        <span
          style={{
            flex: 1,
            minWidth: 160,
            fontSize: 11,
            color: C.yellow,
            fontWeight: 700,
            fontFamily: F.bold,
            fontStyle: "italic",
            lineHeight: 1.4,
          }}
        >
          {principle.sub}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.75}
          color={C.onDarkSubtle}
          aria-hidden
          style={{
            flexShrink: 0,
            marginLeft: "auto",
            transform: expanded ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        />
      </button>

      {expanded && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          style={{ padding: "24px 28px 28px", background: C.white }}
        >
          <p
            style={{
              fontFamily: F.regular,
              fontSize: typeScale.label.size,
              color: C.dark2,
              lineHeight: 1.6,
              margin: "0 0 14px",
            }}
          >
            {principle.content}
          </p>
          <div className="agent-principle-compare">
            <div
              style={{
                background: "rgba(255,65,54,0.06)",
                borderRadius: 10,
                padding: "12px 14px",
                borderLeft: `2px solid ${colors.error}`,
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: F.bold,
                  fontSize: 10,
                  fontWeight: 700,
                  color: colors.error,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                <XCircle size={14} strokeWidth={1.75} aria-hidden />
                Avoid
              </p>
              <p
                style={{
                  fontFamily: F.regular,
                  fontSize: 13,
                  color: C.gray01,
                  lineHeight: 1.5,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {principle.bad}
              </p>
            </div>
            <div
              style={{
                background: "rgba(0,200,100,0.06)",
                borderRadius: 10,
                padding: "12px 14px",
                borderLeft: `2px solid ${colors.success}`,
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: F.bold,
                  fontSize: 10,
                  fontWeight: 700,
                  color: colors.success,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                <CheckCircle size={14} strokeWidth={1.75} aria-hidden />
                Use
              </p>
              <p
                style={{
                  fontFamily: F.regular,
                  fontSize: 13,
                  color: C.dark2,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {principle.good}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AgentPrinciplesAccordion() {
  const baseId = useRef(`principles-${Math.random().toString(36).slice(2, 9)}`).current;
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set(["01"]));

  const toggle = (n: string) => {
    setExpandedIds(prev => {
      if (prev.has(n) && prev.size === 1) return new Set();
      return new Set([n]);
    });
  };

  const expandAll = () => setExpandedIds(new Set(AGENT_INSTRUCTION_PRINCIPLES.map(p => p.n)));
  const collapseAll = () => setExpandedIds(new Set());

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 16, marginBottom: 12 }}>
        <button
          type="button"
          onClick={expandAll}
          style={{
            background: "none",
            border: "none",
            padding: "8px 0",
            minHeight: 44,
            cursor: "pointer",
            fontFamily: F.regular,
            fontSize: 13,
            fontWeight: 700,
            color: C.teamsViolet,
          }}
        >
          Expand all
        </button>
        <button
          type="button"
          onClick={collapseAll}
          style={{
            background: "none",
            border: "none",
            padding: "8px 0",
            minHeight: 44,
            cursor: "pointer",
            fontFamily: F.regular,
            fontSize: 13,
            fontWeight: 700,
            color: C.gray01,
          }}
        >
          Collapse all
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {AGENT_INSTRUCTION_PRINCIPLES.map(p => (
          <AgentPrincipleAccordionItem
            key={p.n}
            principle={p}
            expanded={expandedIds.has(p.n)}
            onToggle={() => toggle(p.n)}
            triggerId={`${baseId}-trigger-${p.n}`}
            panelId={`${baseId}-panel-${p.n}`}
          />
        ))}
      </div>

      <style>{`
        .agent-principle-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 640px) {
          .agent-principle-compare { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

function AgentTemplateCard({ pattern }: { pattern: (typeof AGENT_INSTRUCTION_PATTERNS)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pattern.template);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — silent fail */
    }
  };

  const panelId = `template-panel-${pattern.n}`;
  const triggerId = `template-trigger-${pattern.n}`;

  return (
    <div style={{ background: C.white, borderRadius: 14, overflow: "hidden", border: `0.75px solid ${C.gray02}` }}>
      <div style={{ height: 3, background: C.teamsViolet }} />
      <button
        type="button"
        id={triggerId}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(v => !v)}
        style={{
          width: "100%",
          minHeight: 72,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: F.regular,
        }}
      >
        <span
          style={{
            fontFamily: F.bold,
            fontSize: 11,
            fontWeight: 700,
            color: C.teamsViolet,
            letterSpacing: "0.04em",
            flexShrink: 0,
          }}
        >
          {pattern.n}
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: "block",
              fontFamily: F.bold,
              fontSize: 14,
              fontWeight: 700,
              color: C.dark2,
              lineHeight: 1.3,
              marginBottom: 4,
            }}
          >
            {pattern.name}
          </span>
          <span
            style={{
              display: "block",
              fontFamily: F.regular,
              fontSize: 13,
              color: C.gray01,
              lineHeight: 1.45,
            }}
          >
            {pattern.use}
          </span>
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontFamily: F.regular,
            fontSize: 12,
            fontWeight: 700,
            color: C.teamsViolet,
            flexShrink: 0,
          }}
        >
          {expanded ? "Collapse" : "Expand template"}
          {expanded ? (
            <ChevronUp size={16} strokeWidth={1.75} aria-hidden />
          ) : (
            <ChevronDown size={16} strokeWidth={1.75} aria-hidden />
          )}
        </span>
      </button>

      {expanded && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          style={{ padding: "0 20px 20px", borderTop: `0.75px solid ${C.gray02}` }}
        >
          <div
            style={{
              background: C.dark2,
              borderRadius: 10,
              padding: "16px 18px",
              border: "0.75px solid rgba(255,255,255,0.08)",
              overflowX: "auto",
              marginTop: 16,
              marginBottom: 12,
            }}
          >
            <pre
              style={{
                fontFamily: F.regular,
                fontSize: 12,
                color: C.white,
                lineHeight: 1.7,
                whiteSpace: "pre-wrap",
                margin: 0,
              }}
            >
              {pattern.template}
            </pre>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                minHeight: 44,
                borderRadius: 8,
                border: `0.75px solid ${C.gray02}`,
                background: C.offWhite,
                cursor: "pointer",
                fontFamily: F.regular,
                fontSize: 13,
                fontWeight: 700,
                color: C.dark2,
              }}
            >
              {copied ? (
                <>
                  <Check size={16} strokeWidth={1.75} color={colors.success} aria-hidden />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} strokeWidth={1.75} aria-hidden />
                  Copy template
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "10px 0",
                minHeight: 44,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: F.regular,
                fontSize: 13,
                fontWeight: 700,
                color: C.gray01,
              }}
            >
              Collapse
              <ChevronUp size={16} strokeWidth={1.75} aria-hidden />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AgentHubTabs() {
  const [activeSubTab, setActiveSubTab] = useState<AgentHubTabId>("principles");
  const [activeKey, setActiveKey] = useState("p-1");
  const focusRing = `2px solid ${C.yellow}`;

  // Build the item list based on the active sub-tab
  const items = activeSubTab === "principles"
    ? AGENT_INSTRUCTION_PRINCIPLES.map((p, i) => ({
        key: `p-${i + 1}`,
        n: p.n,
        name: p.heading,
        type: "bp" as const,
        data: p,
      }))
    : AGENT_INSTRUCTION_PATTERNS.map((p, i) => ({
        key: `t-${i + 1}`,
        n: p.n,
        name: p.name,
        type: "ip" as const,
        data: p,
      }));

  const active = items.find(it => it.key === activeKey) ?? items[0];

  return (
    <div>
      {/* Center-aligned sub-tab header — ModulePage pattern */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ display: "inline-flex", gap: 8, background: C.dark2, borderRadius: 12, padding: 8 }}>
          {AGENT_HUB_TABS.map(t => (
            <button
              key={t.id}
              onClick={() => {
                setActiveSubTab(t.id);
                setActiveKey(t.id === "principles" ? "p-1" : t.id === "templates" ? "t-1" : "p-1");
              }}
              style={{
                padding: "9px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13,
                fontFamily: F.regular, fontWeight: 700, whiteSpace: "nowrap",
                background: activeSubTab === t.id ? C.yellow : "transparent",
                color: activeSubTab === t.id ? C.dark2 : C.gray02,
                boxShadow: activeSubTab === t.id ? "0 1px 6px rgba(0,0,0,0.25)" : "none",
                transition: "background 0.15s, color 0.15s, box-shadow 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1 & 2 — wizard split panel (same pattern as #elements / EightElementsWizard) */}
      {(activeSubTab === "principles" || activeSubTab === "templates") && (
        <>
          <div style={{
            border: `1px solid ${C.gray02}`,
            borderRadius: 12,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "minmax(260px, 300px) 1fr",
            height: 620,
            textAlign: "left",
            background: C.white,
          }}>
            {/* LEFT — sidebar */}
            <nav aria-label="Agent instruction guidance" style={{
              background: C.offWhite,
              borderRight: `1px solid ${C.gray02}`,
              padding: "20px 0",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}>
              <div style={{ padding: "0 20px 16px", borderBottom: `1px solid ${C.gray02}` }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.gray01, fontFamily: F.bold, marginBottom: 4 }}>
                  {activeSubTab === "principles" ? "Instruction Principles" : "Templates & Patterns"}
                </div>
                <div style={{ fontSize: 13, color: C.dark2, fontFamily: F.regular, lineHeight: 1.5 }}>
                  Pick one to explore.
                </div>
              </div>

              <div style={{ flex: 1, overflowY: "auto", padding: "12px 10px" }}>
                {items.map(item => {
                  const isActive = activeKey === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setActiveKey(item.key)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 12px",
                        marginBottom: 2,
                        background: isActive ? C.dark : "transparent",
                        border: isActive ? "none" : "1px solid transparent",
                        borderRadius: 8,
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onFocus={e => { e.currentTarget.style.outline = focusRing; }}
                      onBlur={e => { e.currentTarget.style.outline = "none"; }}
                    >
                      <span style={{
                        width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                        background: isActive ? C.yellow : "transparent",
                        border: `1.5px solid ${isActive ? C.yellow : C.gray02}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 10, fontWeight: 700,
                        color: C.dark2,
                        fontFamily: F.bold,
                      }}>
                        {item.n}
                      </span>
                      <span style={{
                        flex: 1, minWidth: 0,
                        fontSize: 13, fontWeight: 700,
                        color: isActive ? C.white : C.dark2,
                        fontFamily: F.bold,
                      }}>
                        {item.name}
                      </span>
                      <ChevronRight size={14} color={isActive ? C.yellow : C.gray01} strokeWidth={1.75} style={{ flexShrink: 0 }} />
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* RIGHT — detail panel */}
            <div style={{ display: "flex", flexDirection: "column", background: C.white, minHeight: 0 }}>
              {/* Header strip */}
              <div style={{
                padding: "16px 24px",
                background: C.dark,
                borderBottom: `1px solid rgba(255,255,255,0.12)`,
                display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
                flexShrink: 0,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                  background: C.yellow, color: C.dark2,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, fontFamily: F.bold,
                }}>
                  {active.n}
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: C.white, fontFamily: F.bold }}>{active.name}</span>
              </div>

              {/* Body */}
              <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Best Practice item */}
                {active.type === "bp" && (() => {
                  const bp = active.data as typeof AGENT_INSTRUCTION_PRINCIPLES[number];
                  return (
                    <>
                      <div>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          marginBottom: 10, padding: "4px 10px", borderRadius: 100,
                          border: `1px solid ${C.yellow}55`, background: C.yellow + "14",
                          fontSize: 12, fontWeight: 700, color: C.dark2, fontFamily: F.bold,
                        }}>What it is</span>
                        <p style={{ fontSize: 16, lineHeight: 1.7, color: C.dark2, fontFamily: F.regular, margin: 0, maxWidth: 560 }}>
                          {bp.content}
                        </p>
                      </div>
                      <div>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          marginBottom: 10, padding: "4px 10px", borderRadius: 100,
                          border: `1px solid ${C.frameOrange}55`, background: C.frameOrange + "14",
                          fontSize: 12, fontWeight: 700, color: C.frameOrange, fontFamily: F.bold,
                        }}>Why it matters</span>
                        <p style={{ fontSize: 16, lineHeight: 1.7, color: C.dark2, fontFamily: F.regular, margin: 0, maxWidth: 560, fontStyle: "italic" }}>
                          {bp.sub}
                        </p>
                      </div>
                      <div>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          marginBottom: 10, padding: "4px 10px", borderRadius: 100,
                          border: `1px solid ${C.destructive}55`, background: C.destructive + "14",
                          fontSize: 12, fontWeight: 700, color: C.destructive, fontFamily: F.bold,
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                          Avoid
                        </span>
                        <p style={{
                          fontSize: 14, lineHeight: 1.7, color: C.destructive,
                          fontFamily: F.regular, fontStyle: "italic", margin: 0, maxWidth: 560,
                          padding: "14px 18px", background: C.destructive + "0a",
                          borderRadius: 8, borderLeft: `3px solid ${C.destructive}`,
                        }}>
                          {bp.bad}
                        </p>
                      </div>
                      <div>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          marginBottom: 10, padding: "4px 10px", borderRadius: 100,
                          border: `1px solid ${C.success}55`, background: C.success + "14",
                          fontSize: 12, fontWeight: 700, color: C.success, fontFamily: F.bold,
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                          Use
                        </span>
                        <p style={{
                          fontSize: 14, lineHeight: 1.7, color: C.success,
                          fontFamily: F.regular, fontStyle: "italic", margin: 0, maxWidth: 560,
                          padding: "14px 18px", background: C.success + "0a",
                          borderRadius: 8, borderLeft: `3px solid ${C.success}`,
                        }}>
                          {bp.good}
                        </p>
                      </div>
                    </>
                  );
                })()}

                {/* Instruction Pattern item */}
                {active.type === "ip" && (() => {
                  const p = active.data as typeof AGENT_INSTRUCTION_PATTERNS[number];
                  return (
                    <>
                      <div>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          marginBottom: 10, padding: "4px 10px", borderRadius: 100,
                          border: `1px solid ${C.yellow}55`, background: C.yellow + "14",
                          fontSize: 12, fontWeight: 700, color: C.dark2, fontFamily: F.bold,
                        }}>When to use</span>
                        <p style={{ fontSize: 16, lineHeight: 1.7, color: C.dark2, fontFamily: F.regular, margin: 0, maxWidth: 560 }}>
                          {p.use}
                        </p>
                      </div>
                      <div>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          marginBottom: 10, padding: "4px 10px", borderRadius: 100,
                          border: `1px solid ${C.frameBlue}55`, background: C.frameBlue + "14",
                          fontSize: 12, fontWeight: 700, color: C.frameBlue, fontFamily: F.bold,
                        }}>Template</span>
                        <div style={{
                          background: C.dark, borderRadius: 8,
                          padding: "16px 18px", border: `1px solid rgba(255,255,255,0.12)`,
                          overflowX: "auto",
                        }}>
                          <p style={{ fontFamily: F.regular, fontSize: 13, color: C.white, lineHeight: 1.7, whiteSpace: "pre-wrap", margin: 0 }}>
                            {p.template}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Source attribution */}
          <div style={{ background: C.white, borderRadius: 14, padding: "16px 20px", border: `0.75px solid ${C.gray02}`, marginTop: 16, textAlign: "center" }}>
            <p style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 700, color: C.dark2, marginBottom: 8 }}>
              {activeSubTab === "principles" ? "Microsoft Learn reference" : "Instruction templates and design patterns"}
            </p>
            <a
              href={MS_LEARN_AGENT_INSTRUCTIONS}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: F.regular, fontSize: 13, color: C.teamsViolet, textDecoration: "none", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              {activeSubTab === "principles" ? "Write effective instructions for declarative agents" : "View full guidance on Microsoft Learn"}
              <ExternalLink size={14} strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </>
      )}

      {/* Tab 3 — existing tax use-case scene (use cases + mock + prompts) */}
      {activeSubTab === "use-cases" && <CopilotScene tabId="agent" />}
    </div>
  );
}

// ── App icon — real MS 365 / Office product logos from public/pipeline/ ───────
function AppIcon({ logo, label, size = 20 }: { logo: string; label: string; size?: number }) {
  return (
    <img
      src={logo}
      alt=""
      aria-hidden
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", flexShrink: 0, display: "block" }}
      title={label}
    />
  );
}

// ── Laptop stage widget — "What you can do" (Figma/legacy pattern from Module1) ─
function LaptopStage({ onOpenApp }: { onOpenApp: (id: TabId) => void }) {
  return (
    <div style={{ position: "relative", zIndex: 1, width: 560, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      {/* Laptop mockup + popping apps */}
      <div style={{ position: "relative", width: "100%", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Keyboard base */}
        <div style={{ position: "absolute", bottom: 38, width: "94%", maxWidth: 472, height: 50, background: `linear-gradient(180deg, ${C.dark2}, ${C.dark})`, borderRadius: "6px 6px 20px 20px", transform: "rotateX(55deg)", boxShadow: "0 24px 44px rgba(0,0,0,0.5)" }} />
        {/* Laptop screen */}
        <div style={{ width: "min(430px, 94%)", height: 260, background: `linear-gradient(145deg, ${C.dark}, ${C.dark2})`, border: `3px solid ${C.dark2}`, borderRadius: "18px 18px 10px 10px", boxShadow: "0 30px 70px rgba(0,0,0,0.55), 0 0 28px rgba(180,0,255,0.18)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 12, borderRadius: 12, background: C.dark }} />
          <div style={{ position: "absolute", zIndex: 5, width: "78%", textAlign: "center", left: "50%", top: "50%", transform: "translate(-50%, -46%)", pointerEvents: "none" }}>
            <p style={{ color: C.yellow, fontSize: "clamp(19px, 2.2vw, 26px)", fontWeight: 700, marginBottom: 8, lineHeight: 1.15, fontFamily: F.regular }}>What you can do</p>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 12, lineHeight: 1.5, fontFamily: F.regular }}>Click the popping Apps to explore the M365 copilot use cases in Tax</p>
          </div>
        </div>

        {/* Floating (popping) apps — jump to matching prompt tab. Real MS app
            logos sit on a white tile (they're full-color, transparent-bg SVGs
            that would disappear or clash on a colored/dark fill — same reason
            CoreProcessingPipeline.tsx keeps them on a neutral backdrop). */}
        {LAPTOP_CORE_APPS.map(app => (
          <button
            key={app.id}
            onClick={() => onOpenApp(app.id)}
            title={`Open ${app.label} tax use cases`}
            style={{
              position: "absolute",
              width: 64, height: 64,
              borderRadius: 18,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.5)",
              cursor: "pointer",
              background: C.white,
              boxShadow: "0 14px 30px rgba(0,0,0,0.4)",
              zIndex: 20,
              animation: "laptopStageFloat 5s ease-in-out infinite",
              transition: "transform 0.2s, box-shadow 0.2s",
              ...app.pos,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.12) translateY(-3px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
          >
            <img src={app.logo} alt={app.label} style={{ width: 40, height: 40, objectFit: "contain" }} />
            <span style={{ position: "absolute", bottom: -22, fontSize: 11, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap", fontFamily: F.regular, fontWeight: 700 }}>{app.label}</span>
          </button>
        ))}

        {/* M365 Agent — stage tile; same white backdrop as other popping apps */}
        <button
          onClick={() => onOpenApp(LAPTOP_STAGE_AGENT.id)}
          title={`Open ${LAPTOP_STAGE_AGENT.label} tax use cases`}
          style={{
            position: "absolute",
            width: 64, height: 64,
            borderRadius: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.5)",
            cursor: "pointer",
            background: C.white,
            boxShadow: "0 14px 30px rgba(0,0,0,0.4)",
            zIndex: 20,
            animation: "laptopStageFloat 5s ease-in-out infinite",
            transition: "transform 0.2s, box-shadow 0.2s",
            ...LAPTOP_STAGE_AGENT.pos,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.12) translateY(-3px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
        >
          <img src={LAPTOP_STAGE_AGENT.logo} alt={LAPTOP_STAGE_AGENT.label} style={{ width: 40, height: 40, objectFit: "contain" }} />
          <span style={{ position: "absolute", bottom: -22, fontSize: 11, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap", fontFamily: F.regular, fontWeight: 700 }}>{LAPTOP_STAGE_AGENT.label}</span>
        </button>
      </div>

      {/* Coming-soon dock — apps without prompt content yet. Real logos are
          shown at reduced opacity so they stay muted/inert rather than
          competing with the 5 live, popping apps. */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", maxWidth: 500 }}>
        {LAPTOP_COMING_SOON_APPS.map(app => (
          <div
            key={app.label}
            title={`${app.label} — coming soon`}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 66, cursor: "default" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={app.logo} alt={app.label} style={{ width: 24, height: 24, objectFit: "contain", opacity: 0.6 }} />
            </div>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", textAlign: "center", lineHeight: 1.2, fontFamily: F.regular, fontWeight: 700 }}>{app.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes laptopStageFloat {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -12px; }
        }
      `}</style>
    </div>
  );
}

// ── Full tab section ──────────────────────────────────────────────────────────
function TabSection({ tabId }: { tabId: TabId }) {
  const d = SECTION_DATA[tabId];
  const tabMeta = TABS.find(t => t.id === tabId)!;
  // Always offWhite so this surface matches #prompt-repository above (no color break).
  return (
    <div style={{ background: C.offWhite, padding: `48px 0 64px` }}>
      <div style={{ ...contentRailStyle }}>
      {/* Eyebrow with app icon */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <AppIcon logo={tabMeta.logo} label={APP_NAME[tabId]} />
        <span style={{ fontFamily: F.bold, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: d.eyebrowColor }}>{d.eyebrow}</span>
      </div>
      <p style={{ fontFamily: F.bold, fontSize: typeScale.h2.size, fontWeight: 700, color: C.dark2, marginBottom: 12, lineHeight: 1.2, letterSpacing: typeScale.h2.tracking }}>{d.h2}</p>
      <p style={{ fontFamily: F.regular, fontSize: 15, color: C.gray01, marginBottom: 36, lineHeight: 1.6 }}>{d.subtitle}</p>

      {tabId === "agent" ? (
        <AgentHubTabs />
      ) : (
        <CopilotScene tabId={tabId} />
      )}
      </div>
    </div>
  );
}

// ── Useful Links (from Figma: 5 cards — mail, book-open, help-circle, compass, settings) ──
// Line icons for Useful Links — 24×24 stroke, EY gray02 (#C4C4CD) on dark surface
const LINK_ICONS = {
  mail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  ),
  book: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    </svg>
  ),
  helpCircle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
      <circle cx="12" cy="17" r=".5" fill="#C4C4CD"/>
    </svg>
  ),
  compass: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  lock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  ),
};

const USEFUL_LINKS = [
  { icon: LINK_ICONS.mail,       title: "Outlook Copilot Resources",  body: "Access quick reference sheets and guides for secure email automation.",                   cta: "View Guides" },
  { icon: LINK_ICONS.book,       title: "EY Prompt Library",           body: "Explore verified prompts created and vetted specifically by professional services.",       cta: "Browse Library" },
  { icon: LINK_ICONS.helpCircle, title: "Copilot FAQs",                body: "Find quick answers regarding workspace licenses, token limits, and prompt accuracy.",      cta: "Read FAQs" },
  { icon: LINK_ICONS.compass,    title: "Explore Agents",              body: "Discover AI agents built for specific EY workflows, from tax research to audit support.",  cta: "Explore Agents" },
  { icon: LINK_ICONS.lock,       title: "Manage Access",               body: "Review your Copilot license status, request access, or manage permissions for your team.", cta: "Manage Access" },
];

// ── Security cards (Figma: security-case-studies, 4 horizontal cards, 302px each) ──
const SECURITY_CARDS = [
  { num: "01", title: "Quick Check Before You Prompt", src: "/security_Picture1.png" },
  { num: "02", title: "Share Smartly",                 src: "/security_Picture2.png" },
  { num: "03", title: "Use Sensitivity Labels",        src: "/security_Picture3.png" },
  { num: "04", title: "Check Who Has Access",          src: "/security_Picture4.png" },
];

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function M365CopilotHub({
  onBack,
  onNavigate,
}: {
  onBack?: () => void;
  onNavigate?: (path: string) => void;
}) {
  useModuleSectionHashScroll();
  const [activeTab, setActiveTab] = useState<TabId>("word");

  const openApp = (id: TabId) => {
    setActiveTab(id);
    setTimeout(() => {
      document.getElementById("prompt-repository")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <div style={{ fontFamily: F.regular, color: C.dark2, background: C.white, minHeight: "100vh" }}>

      {onBack && onNavigate && (
        <>
          <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#module-content" />
          <ModuleHeader currentModuleId="copilot-hub" onNavigate={onNavigate} onBack={onBack} />
        </>
      )}

      {/* ── Hero (Figma: HeroSection) ───────────────────────────────────────── */}
      {/* Spectrum: Frame 9 — EY-yellow beam, darkest left for copy readability */}
      <section
        id="module-content"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: "620px",
          padding: `64px ${contentInlinePad}`,
          gap: 64,
          overflow: "hidden",
          backgroundColor: C.dark,
          backgroundImage: "url('/spectrum/hero-frame-9.png')",
          backgroundSize: "cover",
          backgroundPosition: "72% center",
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
              "linear-gradient(90deg, rgba(26,26,36,0.92) 0%, rgba(26,26,36,0.72) 42%, rgba(26,26,36,0.28) 70%, rgba(26,26,36,0.15) 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, flex: 1, maxWidth: 676 }}>
          <h1 style={{ fontFamily: F.bold, fontSize: typeScale.h1.size, fontWeight: 700, color: C.white, lineHeight: 1.2, letterSpacing: typeScale.h1.tracking, marginBottom: 20 }}>
            Explore M365 Copilot prompts in a new-age workspace
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
            Step into an interactive M365 learning space where you can find what wonders the age-old MS apps can do just by adding a magical element called M365.
          </p>
        </div>
        {/* Laptop stage — "What you can do" popping app widget (ported from Module1) */}
        <LaptopStage onOpenApp={openApp} />
      </section>

      {/* ── Repository Tabs — CENTERED header (Figma: RepositoryTabs) ────────── */}
      <section id="prompt-repository" style={{ background: C.offWhite, padding: `64px 0 0`, textAlign: "center", scrollMarginTop: SUBNAV_SCROLL_MARGIN }}>
        <div style={{ ...contentRailStyle }}>
        <SectionAnchorTitle align="center">M365 Apps</SectionAnchorTitle>
        <p style={{ fontSize: 11, color: C.gray01, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>EXPLORE PROMPT CATEGORIES</p>
        <h2 style={{ fontFamily: F.bold, fontSize: typeScale.h2.size, fontWeight: 700, lineHeight: 1.2, letterSpacing: typeScale.h2.tracking, marginBottom: 12, color: C.dark2 }}>Sample Prompt Repository for using Copilot in Tax</h2>
        <p style={{ fontSize: 15, color: C.gray01, marginBottom: 32 }}>Select your preferred M365 application tool below to view optimized, compliant corporate-ready prompts.</p>
        {/* Tab row — centered. Dark container from tokens: offBlack (#2E2E38) */}
        <div style={{ display: "inline-flex", gap: 8, background: C.dark2, borderRadius: 12, padding: 8 }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 8,
                background: activeTab === t.id ? C.yellow : "transparent",
                border: "none", cursor: "pointer", fontSize: 13,
                color: activeTab === t.id ? C.dark2 : C.gray02,
                fontWeight: 700,
                boxShadow: activeTab === t.id ? "0 1px 6px rgba(0,0,0,0.25)" : "none",
                transition: "background 0.15s, color 0.15s, box-shadow 0.15s", fontFamily: F.regular,
              }}
            >
              <AppIcon logo={t.logo} label={t.label} />
              {t.label}
            </button>
          ))}
        </div>
        </div>
      </section>

      {/* ── Active tab section ──────────────────────────────────────────────── */}
      {/* key={activeTab} forces a clean remount per tab so the prompt-panel's
          typing animation state doesn't leak between apps on switch. */}
      <TabSection key={activeTab} tabId={activeTab} />

      {/* ── Useful Links (Figma: useful-links-section-redesign) ─────────────── */}
      <section id="useful-links" style={{ background: C.dark2, padding: `${spacing.sectionPaddingY} 0 64px`, scrollMarginTop: SUBNAV_SCROLL_MARGIN }}>
        <div style={{ ...contentRailStyle }}>
        <SectionAnchorTitle theme="dark" align="center">Useful Links</SectionAnchorTitle>
        <h2 style={{ fontFamily: F.bold, fontSize: typeScale.h2.size, fontWeight: 700, color: C.white, lineHeight: 1.2, letterSpacing: typeScale.h2.tracking, marginBottom: 12, textAlign: "center" }}>Useful Links</h2>
        <p style={{ fontSize: 15, color: C.gray02, marginBottom: 48, textAlign: "center" }}>Handy EY resources to check your system access, explore deeper templates, and use generative AI safely.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {USEFUL_LINKS.map(l => (
            <div key={l.title} style={{ flex: "1 1 0", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 12, transition: "transform 0.15s", cursor: "default" }}>
              <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{l.icon}</div>
              <p style={{ fontFamily: F.bold, fontWeight: 700, fontSize: 15, color: C.white, lineHeight: 1.3 }}>{l.title}</p>
              <p style={{ fontSize: 13, color: "#C4C4CD", flex: 1, lineHeight: 1.55 }}>{l.body}</p>
              <a href="#" style={{ fontFamily: F.bold, fontSize: 14, color: C.yellow, textDecoration: "none", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                {l.cta} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ── Security (Figma: security-case-studies — 4 horizontal cards) ─────── */}
      <section id="security" style={{ background: C.dark, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_MARGIN }}>
        <div style={{ ...contentRailStyle }}>
        <SectionAnchorTitle theme="dark" align="left">Security &amp; Governance</SectionAnchorTitle>
        {/* GOVERNANCE & TRUST kicker badge */}
        <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.25)", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
          <span style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.yellow }}>GOVERNANCE &amp; TRUST</span>
        </div>
        <h2 style={{ fontFamily: F.bold, fontSize: typeScale.h2.size, fontWeight: 700, color: C.white, lineHeight: 1.2, letterSpacing: typeScale.h2.tracking, marginBottom: 14 }}>Enterprise-Grade Security</h2>
        <p style={{ fontSize: 16, color: C.gray02, marginBottom: 52, maxWidth: 800 }}>Before you let Copilot loose on tax data, know the ground rules. Tap any card to view it full-size.</p>
        {/* 4 horizontal cards (Figma: CaseStudiesGrid — each 302px wide) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 }}>
          {SECURITY_CARDS.map(card => (
            <div key={card.num} style={{ borderRadius: 12, overflow: "hidden", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s", background: "#2e2e38", border: "1px solid #747480", display: "flex", flexDirection: "column" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px #ffe600"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
              {/* Card accent image area */}
              <div style={{ height: 140, background: "linear-gradient(155deg, rgb(69,69,83) 0%, rgb(37,37,46) 100%)", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={card.src}
                  alt={card.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Card body */}
              <div style={{ background: "#2e2e38", padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontFamily: F.bold, fontWeight: 700, fontSize: 32, color: C.yellow, marginBottom: 10, lineHeight: 1 }}>{card.num}</p>
                {/* Title grows to fill — pushes separator + CTA to bottom */}
                <p style={{ fontFamily: F.bold, fontWeight: 700, fontSize: 16, color: C.white, lineHeight: 1.35, flex: 1, marginBottom: 14 }}>{card.title}</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 14 }} />
                {/* CTA — always at the bottom */}
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: C.yellow, fontWeight: 700, textDecoration: "none", fontFamily: F.bold }}>
                  View Protocol
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Shared dark CTA — Phase 1 complete */}
      <EYWhatsNext
        title={
          <>
            You&apos;ve completed Phase 1.
            <br />
            Keep practising with <EYWhatsNextHighlight>real tax workflows.</EYWhatsNextHighlight>
          </>
        }
        description="You now have the foundations, prompting craft, and Copilot patterns to use AI safely in tax work. Revisit any module anytime — or return to Tax Labs to explore what's next."
        ctaLabel="Back to Tax Labs"
        onContinue={() => onNavigate?.("/phase1")}
        meta="Phase 1 covered: AI foundations, tax prompting, and M365 Copilot"
      />

    </div>
  );
}
