import { useEffect, useRef, useState } from "react";
import { ModuleHeader, SUBNAV_SCROLL_OFFSET } from "../design-kit/LearningNav";
import { SiteHeader } from "../design-kit/SiteHeader";
import { EYWhatsNext, EYWhatsNextHighlight } from "../design-kit/EYWhatsNext";
import { contentInlinePad, contentRailStyle, fonts as F, spacing } from "../design-kit/tokens";

// ── EY Design System tokens ───────────────────────────────────────────────────
const C = {
  yellow:         "#FFE600",
  dark:           "#1A1A24", // confident-black
  dark2:          "#2E2E38", // off-black
  gray01:         "#747480",
  gray02:         "#C4C4CD",
  offWhite:       "#F6F6FA",
  white:          "#FFFFFF",
  // EY spectrum (frame) accent colours — used as section accents
  frameBlue:      "#4696FF",
  frameGreen:     "#00C864",
  frameOrange:    "#FF7D1E",
  framePurple:    "#B400FF",
  // Microsoft app colours (kept for realistic app-window chrome only)
  wordBlue:       "#4696FF",
  excelGreen:     "#00C864",
  pptOrange:      "#FF3C00",
  outlookBlue:    "#4696FF",
  teamsViolet:    "#B400FF",
};

// ── EY Logo mark — paths from /public/ey-logo.svg ────────────────────────────
function EYLogoMark({ height = 32, letterColor = "#FFFFFF" }: { height?: number; letterColor?: string }) {
  return (
    <svg viewBox="0 -18 217.599 217.599" width={height * (217.599 / 181.599)} height={height} aria-label="EY logo">
      <path fill={C.yellow} d="M0 79.4L217.599 0v41z" />
      <path fill={letterColor} d="M24.9 150.6h28.5v-16.5H24.9v-13h31.5L46 103H1.4v78.6h62.8v-18.1H24.9zM106.1 103l-13.3 25.7L79.4 103h-26l27.4 47.6v31h23.5v-31l27.5-47.6z" />
    </svg>
  );
}

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

// ── Agent glyph — muted line icon for "M365 Agent" coming-soon slot ──────────
// No distinct public M365 Agent logo exists yet; Copilot's icon is already used
// for "M365 Chat" above, so this stays a neutral gray line glyph (EY gray02).
function AgentGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.gray02} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="9" width="16" height="11" rx="3" />
      <path d="M12 9V5" />
      <circle cx="12" cy="3.5" r="1.4" fill={C.gray02} stroke="none" />
      <circle cx="9" cy="14.5" r="1.2" fill={C.gray02} stroke="none" />
      <circle cx="15" cy="14.5" r="1.2" fill={C.gray02} stroke="none" />
      <path d="M4 13H2M22 13h-2" />
    </svg>
  );
}

// ── Tab config (exact labels from Figma 3317:15589) ──────────────────────────
const TABS = [
  { id: "word",    label: "Word Prompts",     color: C.wordBlue,   appColor: C.wordBlue,   letter: "W" },
  { id: "excel",   label: "Excel Formulas",   color: C.excelGreen, appColor: C.excelGreen, letter: "X" },
  { id: "ppt",     label: "PowerPoint Decks", color: C.pptOrange,  appColor: C.pptOrange,  letter: "P" },
  { id: "outlook", label: "Outlook Threads",  color: C.outlookBlue,appColor: C.outlookBlue,letter: "O" },
  { id: "m365",    label: "M365 Chat",        color: C.teamsViolet,appColor: C.teamsViolet,letter: "T" },
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
};

// ── Laptop stage — "What you can do" popping app widget (ported from Module1) ─
// The 5 apps with live prompt content below "pop" with a floating animation and
// jump straight to their tab section. The 6 apps without prompt content yet are
// shown as a muted, inert "coming soon" dock underneath.
const LAPTOP_CORE_APPS: { id: TabId; label: string; logo: string; pos: React.CSSProperties }[] = [
  { id: "word",    label: "Word",        logo: "/pipeline/word.svg",         pos: { top: 47, left: 42 } },
  { id: "excel",   label: "Excel",       logo: "/pipeline/excel.svg",        pos: { top: 34, right: 68, animationDelay: "0.4s" } },
  { id: "ppt",     label: "PowerPoint",  logo: "/pipeline/powerpoint.svg",   pos: { bottom: 121, right: 25, animationDelay: "0.8s" } },
  { id: "outlook", label: "Outlook",     logo: "/pipeline/outlook.svg",      pos: { bottom: 121, left: 35, animationDelay: "1.2s" } },
  { id: "m365",    label: "M365 Chat",   logo: "/pipeline/copilot-icon.svg", pos: { top: 0, left: "44%", animationDelay: "1.6s" } },
];

// `logo` is a real MS app SVG path; when absent (M365 Agent — no public logo
// exists yet), the dock falls back to the muted AgentGlyph line icon.
const LAPTOP_COMING_SOON_APPS: { label: string; logo?: string }[] = [
  { label: "M365 Agent" },
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
  useCases: { icon: string; title: string; body: string }[];
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
      { icon: "📄", title: "Draft Position Notes",  body: "Create first-cut tax research memos, issue notes, legal summaries and client-ready position papers." },
      { icon: "🔍", title: "Summarise Case Laws",   body: "Condense lengthy rulings, circulars, notifications or tribunal orders into crisp facts and implications." },
      { icon: "✍️", title: "Refine Legal Language", body: "Rewrite tax submissions and opinion drafts into a sharper, review-ready tone." },
      { icon: "📌", title: "Track Review Points",   body: "Convert comments and inputs into action points, open items and next-step trackers." },
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
      { icon: "📊", title: "Analyse Tax Data",      body: "Summarise large datasets and identify key trends, gaps, mismatches and exceptions." },
      { icon: "🧮", title: "Build Reconciliations", body: "Create formulas and logic checks to compare books, returns and working papers." },
      { icon: "⚠️", title: "Spot Exceptions",       body: "Detect anomalies such as missing details, rate mismatches or duplicates." },
      { icon: "📈", title: "Visualise Compliance",  body: "Create dashboards to show status, exposures, ageing and risk movement." },
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
      { icon: "🎯", title: "Create Client Decks",      body: "Convert tax analysis into structured, visually clean, client-ready presentations." },
      { icon: "🧭", title: "Tell the Tax Story",       body: "Organise complex positions into context, issue, risk, recommendation and next steps." },
      { icon: "📣", title: "Prepare Leadership Updates", body: "Generate concise leadership slides on exposures, updates and decisions required." },
      { icon: "🗂️", title: "Summarise Case Strategy",  body: "Build crisp hearing briefs, timelines and argument maps." },
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
      { icon: "✉️", title: "Draft Client Emails",   body: "Prepare clear professional emails for data requests, updates and follow-ups." },
      { icon: "🧵", title: "Summarise Threads",     body: "Extract decisions, pending inputs, responsibilities and deadlines from long chains." },
      { icon: "⏱️", title: "Manage Follow-ups",     body: "Convert email conversations into action-oriented follow-ups." },
      { icon: "🪄", title: "Polish Tone Instantly", body: "Rewrite responses to sound concise, client-sensitive and executive-ready." },
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
      { icon: "🌐", title: "Search Across Work",      body: "Find tax-related discussions, documents, emails and files across Microsoft 365." },
      { icon: "🧾", title: "Prepare Matter Briefs",   body: "Generate briefing notes before client calls or internal reviews." },
      { icon: "🧠", title: "Connect Tax Context",     body: "Connect compliance data, research notes, email trails and presentation inputs." },
      { icon: "🚀", title: "Accelerate First Drafts", body: "Create starting drafts for emails, memos, decks, trackers and meeting prep." },
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
};

// ── Pattern 1: "use-grid" — 2-column tax use-case cards ───────────────────────
function UseCaseCard({ icon, title, body, accent, appLabel }: { icon: string; title: string; body: string; accent: string; appLabel: string }) {
  return (
    <div style={{ position: "relative", display: "flex", gap: 16, alignItems: "flex-start", background: C.white, borderRadius: 16, padding: "22px 22px 22px 26px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", border: "1px solid #C4C4CD", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: accent }} />
      <div style={{ width: 48, height: 48, minWidth: 48, borderRadius: 12, background: C.offWhite, border: "1px solid #C4C4CD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 16, color: C.dark2, marginBottom: 6, lineHeight: 1.3 }}>{title}</p>
        <p style={{ fontFamily: F.regular, fontSize: 13.5, color: C.gray01, lineHeight: 1.55, marginBottom: 12 }}>{body}</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: F.regular, fontSize: 11, fontWeight: 700, letterSpacing: "0.4px", textTransform: "uppercase", color: accent }}>✦ {appLabel} + Copilot</span>
      </div>
    </div>
  );
}

function UseCaseGrid({ items, accent, appLabel }: { items: { icon: string; title: string; body: string }[]; accent: string; appLabel: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
      {items.map(item => <UseCaseCard key={item.title} icon={item.icon} title={item.title} body={item.body} accent={accent} appLabel={appLabel} />)}
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

// ── Pattern 2a: mock app window — window chrome + ribbon canvas + response card ──
function CopilotAppMock({ appLabel, accent, typedText }: { appLabel: string; accent: string; typedText: string }) {
  return (
    <div style={{ flex: "1.05 1 0", minWidth: 0, background: `linear-gradient(180deg, ${C.dark2}, ${C.dark})`, borderRadius: 22, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column" }}>
      {/* Window chrome */}
      <div style={{ height: 42, background: C.dark, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", gap: 12 }}>
        <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
          {[1, 0.6, 0.32].map((o, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: accent, opacity: o }} />)}
        </div>
        <span style={{ fontFamily: F.regular, fontSize: 12, fontWeight: 600, color: C.white, flex: 1, textAlign: "center" }}>{appLabel} — blank workspace</span>
        <span style={{ fontFamily: F.regular, fontSize: 10, fontWeight: 700, letterSpacing: "0.4px", textTransform: "uppercase", color: C.gray02, border: "1px solid rgba(255,255,255,0.16)", borderRadius: 999, padding: "4px 10px", flexShrink: 0, whiteSpace: "nowrap" }}>Copilot-enabled</span>
      </div>
      {/* Ribbon-colored canvas with mock document + Copilot response */}
      <div style={{ flex: 1, padding: 24, display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${accent}, ${C.dark})`, minHeight: 320 }}>
        <div style={{ width: "100%", maxWidth: 400, background: C.white, borderRadius: 16, padding: 24, boxShadow: "0 18px 44px rgba(0,0,0,0.24)" }}>
          {["94%", "80%", "92%", "62%"].map((w, i) => (
            <div key={i} style={{ height: 8, borderRadius: 999, background: C.offWhite, width: w, marginBottom: 12 }} />
          ))}
          <div style={{ marginTop: 8, background: C.offWhite, border: `1px solid ${C.yellow}`, borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <CopilotIcon size={16} />
              <span style={{ fontFamily: F.regular, fontSize: 10, fontWeight: 700, letterSpacing: "0.6px", textTransform: "uppercase", color: C.dark2 }}>Copilot</span>
            </div>
            <textarea
              readOnly
              value={typedText}
              placeholder="Choose a prompt on the right to see Copilot respond →"
              style={{ width: "100%", minHeight: 100, border: "none", outline: "none", resize: "none", background: "transparent", fontFamily: F.regular, fontSize: 13, color: C.dark2, lineHeight: 1.55 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Pattern 2b: "Ask Copilot in {App}" prompt panel — 5 real, clickable prompts ──
function CopilotPromptPanel({ appLabel, subtitle, prompts, activeIndex, onSelect }: {
  appLabel: string; subtitle: string; prompts: { label: string; text: string }[];
  activeIndex: number | null; onSelect: (idx: number) => void;
}) {
  return (
    <div style={{ flex: "0.95 1 0", minWidth: 0, background: `linear-gradient(160deg, ${C.dark2}, ${C.dark})`, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 22, padding: 22, boxShadow: "0 20px 50px rgba(0,0,0,0.24)", display: "flex", flexDirection: "column" }}>
      <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 16, color: C.white, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
        <span aria-hidden>✨</span> Ask Copilot in {appLabel}
      </p>
      <p style={{ fontFamily: F.regular, fontSize: 12, color: C.gray02, lineHeight: 1.5, marginBottom: 16 }}>{subtitle}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {prompts.map((p, i) => {
          const active = i === activeIndex;
          return (
            <button
              key={p.label}
              onClick={() => onSelect(i)}
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "11px 12px", borderRadius: 14,
                background: active ? "rgba(255,230,0,0.14)" : "rgba(255,255,255,0.04)",
                border: active ? `1px solid ${C.yellow}` : "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer", textAlign: "left", width: "100%", fontFamily: F.regular,
                transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.transform = "translateX(3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
            >
              <span style={{ width: 24, height: 24, minWidth: 24, borderRadius: "50%", background: active ? C.yellow : "rgba(255,255,255,0.12)", color: active ? C.dark : C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{i + 1}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 2 }}>{p.label}</span>
                <span style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{p.text}</span>
              </span>
              <span style={{ color: active ? C.yellow : "rgba(255,255,255,0.35)", fontSize: 14, flexShrink: 0 }}>→</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Pattern 2: combines the mock app window + prompt panel into one scene ────
function CopilotScene({ tabId }: { tabId: TabId }) {
  const d = SECTION_DATA[tabId];
  const tabMeta = TABS.find(t => t.id === tabId)!;
  const appLabel = APP_NAME[tabId];
  const { activeIndex, typedText, select } = useTypingPrompt();

  const mock = <CopilotAppMock appLabel={appLabel} accent={tabMeta.appColor} typedText={typedText} />;
  const panel = (
    <CopilotPromptPanel
      appLabel={appLabel}
      subtitle={d.panelSubtitle}
      prompts={d.prompts}
      activeIndex={activeIndex}
      onSelect={idx => select(idx, d.prompts[idx].text)}
    />
  );

  return (
    <div style={{ display: "flex", gap: 20, alignItems: "stretch", flexWrap: "wrap" }}>
      {d.screenshotSide === "left" ? <>{mock}{panel}</> : <>{panel}{mock}</>}
    </div>
  );
}

// ── App icon ──────────────────────────────────────────────────────────────────
function AppIcon({ color, letter }: { color: string; letter: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
      <rect width="20" height="20" rx="3" fill={color} />
      <text x="4" y="14" fill="white" fontSize="11" fontWeight="bold" fontFamily={F.regular}>{letter}</text>
    </svg>
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
              {app.logo ? (
                <img src={app.logo} alt={app.label} style={{ width: 24, height: 24, objectFit: "contain", opacity: 0.6 }} />
              ) : (
                <AgentGlyph size={20} />
              )}
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
  const appLabel = APP_NAME[tabId];
  const bg = d.altBg ? C.offWhite : C.white;

  return (
    <div style={{ background: bg, padding: `48px 0 64px` }}>
      <div style={{ ...contentRailStyle }}>
      {/* Eyebrow with app icon */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <AppIcon color={tabMeta.appColor} letter={tabMeta.letter} />
        <span style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: d.eyebrowColor }}>{d.eyebrow}</span>
      </div>
      <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 28, color: C.dark2, marginBottom: 12, lineHeight: 1.2 }}>{d.h2}</p>
      <p style={{ fontFamily: F.regular, fontSize: 15, color: C.gray01, marginBottom: 36, lineHeight: 1.6 }}>{d.subtitle}</p>

      {/* Pattern 1 — 2-column tax use-case grid */}
      <div style={{ marginBottom: 48 }}>
        <UseCaseGrid items={d.useCases} accent={tabMeta.appColor} appLabel={appLabel} />
      </div>

      {/* Pattern 2 — interactive mock app window + "Ask Copilot" prompt panel */}
      <CopilotScene tabId={tabId} />
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

      {/* ── Hero — "M365 COPILOT HUB IS LIVE" (Figma: HeroSection) ─────────── */}
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
          {/* Badge row — green active dot + label */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.frameGreen }} />
            <span style={{ fontSize: 11, color: C.gray02, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700, fontFamily: F.regular }}>M365 COPILOT HUB IS LIVE</span>
          </div>
          <h1 style={{ fontSize: 36, color: C.white, fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>
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
      <section id="prompt-repository" style={{ padding: `64px 0 0`, textAlign: "center", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
        <p style={{ fontSize: 11, color: C.gray01, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>EXPLORE PROMPT CATEGORIES</p>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: C.dark2 }}>Sample Prompt Repository for using Copilot in Tax</h2>
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
              <AppIcon color={t.appColor} letter={t.letter} />
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
      <section id="useful-links" style={{ background: C.dark2, padding: `${spacing.sectionPaddingY} 0 64px`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: C.white, marginBottom: 12, textAlign: "center" }}>Useful Links</h2>
        <p style={{ fontSize: 15, color: C.gray02, marginBottom: 48, textAlign: "center" }}>Handy EY resources to check your system access, explore deeper templates, and use generative AI safely.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {USEFUL_LINKS.map(l => (
            <div key={l.title} style={{ flex: "1 1 0", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 12, transition: "transform 0.15s", cursor: "default" }}>
              <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{l.icon}</div>
              <p style={{ fontWeight: 700, fontSize: 15, color: C.white, lineHeight: 1.3 }}>{l.title}</p>
              <p style={{ fontSize: 13, color: "#C4C4CD", flex: 1, lineHeight: 1.55 }}>{l.body}</p>
              <a href="#" style={{ fontSize: 14, color: C.yellow, textDecoration: "none", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                {l.cta} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ── Security (Figma: security-case-studies — 4 horizontal cards) ─────── */}
      <section id="security" style={{ background: C.dark, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
        {/* GOVERNANCE & TRUST kicker badge */}
        <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.25)", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.yellow, fontFamily: F.regular }}>GOVERNANCE &amp; TRUST</span>
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.white, marginBottom: 14 }}>Enterprise-Grade Security</h2>
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
                <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 32, color: C.yellow, marginBottom: 10, lineHeight: 1 }}>{card.num}</p>
                {/* Title grows to fill — pushes separator + CTA to bottom */}
                <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 16, color: C.white, lineHeight: 1.35, flex: 1, marginBottom: 14 }}>{card.title}</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 14 }} />
                {/* CTA — always at the bottom */}
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: C.yellow, fontWeight: 700, textDecoration: "none", fontFamily: F.regular }}>
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

      {/* ── Footer (Figma: Footer — EY logo + EY.ai Tax Labs + link cols) ────── */}
      <footer style={{ background: C.dark2, padding: `56px 0 32px` }}>
        <div style={{ ...contentRailStyle }}>
          <div style={{ display: "flex", gap: 80, marginBottom: 48 }}>
            <div style={{ flex: 1, maxWidth: 280 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <EYLogoMark height={28} letterColor="#FFFFFF" />
                <span style={{ color: C.white, fontWeight: 700, fontSize: 16, fontFamily: F.regular }}>EY.ai Tax Labs</span>
              </div>
              <p style={{ fontSize: 13, color: "#C4C4CD", lineHeight: 1.6 }}>Accelerating tax performance safely through custom generative AI structures and premium prompt frameworks.</p>
            </div>
            <div>
              <p style={{ fontSize: 14, color: C.white, fontWeight: 700, marginBottom: 14, fontFamily: F.regular }}>M365 Apps</p>
              {["Word Prompts","Excel Sheets","PowerPoint Decks","Outlook Emails"].map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 13, color: "#C4C4CD", textDecoration: "none", marginBottom: 8, fontFamily: F.regular }}>{l}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 14, color: C.white, fontWeight: 700, marginBottom: 14, fontFamily: F.regular }}>Trust &amp; Security</p>
              {["Privacy Policy","Data Governance","Safe Harbor Rules"].map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 13, color: "#C4C4CD", textDecoration: "none", marginBottom: 8, fontFamily: F.regular }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: 12, color: "#C4C4CD", fontFamily: F.regular }}>© 2026 EY.ai Tax Labs. All rights reserved. Proprietary and confidential.</p>
            <div style={{ display: "flex", gap: 14 }}>
              {["in","𝕏"].map(s => (
                <a key={s} href="#" style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4C4CD", fontSize: 11, fontWeight: 700, textDecoration: "none", fontFamily: F.regular }}>{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
