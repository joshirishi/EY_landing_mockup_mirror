import { useState, useEffect, useRef } from "react";

// ── Brand assets ─────────────────────────────────────────────────────────────

const LOGO_BASE =
  "https://res.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets/brand-icons/product/svg/";

const M365_LOGO = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='6' y1='6' x2='30' y2='42' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2336C5F0'/%3E%3Cstop offset='1' stop-color='%232457C5'/%3E%3C/linearGradient%3E%3ClinearGradient id='g2' x1='42' y1='6' x2='14' y2='30' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB900'/%3E%3Cstop offset='1' stop-color='%23F0654A'/%3E%3C/linearGradient%3E%3ClinearGradient id='g3' x1='24' y1='4' x2='24' y2='44' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23A24FE0'/%3E%3Cstop offset='0.5' stop-color='%23E0417E'/%3E%3Cstop offset='1' stop-color='%2336C5F0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M25 4C25 15 33 22 44 22C33 22 25 29 25 40C25 29 17 22 6 22C17 22 25 15 25 4Z' fill='url(%23g3)'/%3E%3Cpath d='M14 8C14 15 19 20 26 20C19 20 14 25 14 32C14 25 9 20 2 20C9 20 14 15 14 8Z' fill='url(%23g1)'/%3E%3Cpath d='M35 12C35 18 39 22 45 22C39 22 35 26 35 32C35 26 31 22 25 22C31 22 35 18 35 12Z' fill='url(%23g2)'/%3E%3C/svg%3E`;

const APP_LOGOS: Record<string, string> = {
  Word: LOGO_BASE + "word_48x1.svg",
  Excel: LOGO_BASE + "excel_48x1.svg",
  PowerPoint: LOGO_BASE + "powerpoint_48x1.svg",
  Outlook: LOGO_BASE + "outlook_48x1.svg",
  "M365 Chat": M365_LOGO,
};

const FLOATING_POSITIONS: Record<string, React.CSSProperties> = {
  Word: { top: 72, left: 64, background: "linear-gradient(135deg, var(--ey-app-word), #0b3f91)" },
  Excel: { top: 52, right: 104, background: "linear-gradient(135deg, var(--ey-app-excel), #075f2e)", animationDelay: "0.4s" },
  PowerPoint: { bottom: 184, right: 38, background: "linear-gradient(135deg, var(--ey-app-ppt), #8f2a13)", animationDelay: "0.8s" },
  Outlook: { bottom: 184, left: 54, background: "linear-gradient(135deg, var(--ey-app-outlook), #004e8c)", animationDelay: "1.2s" },
  "M365 Chat": { top: 0, left: "44%", background: "linear-gradient(135deg, #82d9ff, var(--ey-app-copilot), #ff5c8a)", animationDelay: "1.6s" },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const CORE_APPS = ["Word", "Excel", "PowerPoint", "Outlook", "M365 Chat"];

const APP_SUBTITLES: Record<string, string> = {
  Word: "Draft, review and refine tax documents with speed and consistency.",
  Excel: "Analyse tax data, reconciliations and compliance trackers with precision.",
  PowerPoint: "Convert tax positions and updates into leadership-ready narratives.",
  Outlook: "Manage tax communications, follow-ups and client responses faster.",
  "M365 Chat": "Ask cross-app questions and retrieve tax context across Microsoft 365.",
};

const COPILOT_PROMPTS: Record<string, [string, string][]> = {
  Word: [
    ["Draft a Position Note", "Draft a 1-page position note on the withholding tax treatment of software royalty payments to our US parent, citing the EACoE Supreme Court ruling."],
    ["Summarise a Tribunal Ruling", "Summarise this ITAT order in plain English — facts, issue, ruling, and what it means for our client."],
    ["Tighten the Legal Language", "Rewrite this tax opinion draft in a sharper, more formal tone suitable for client delivery."],
    ["Build a Review Tracker", "Convert the reviewer's comments in this document into a numbered action tracker with owners and due dates."],
    ["Create an Executive Summary", "Summarise this 12-page tax memo into a 5-bullet executive summary for the CFO."],
  ],
  Excel: [
    ["Reconcile Two Ledgers", "Compare the GST returns and books data in these two sheets and flag every mismatch above ₹10,000."],
    ["Explain This Formula", "Explain what this VLOOKUP + IFERROR formula in column F is actually doing, in plain language."],
    ["Spot Withholding Gaps", "Scan this vendor payment sheet and flag any transaction where TDS appears under-deducted."],
    ["Build a Compliance Dashboard", "Turn this data into a one-page dashboard showing filing status, ageing, and open exposures by entity."],
    ["Forecast the Effective Tax Rate", "Using this P&L, calculate the projected effective tax rate for FY26 factoring in surcharge and cess."],
  ],
  PowerPoint: [
    ["Build a Client-Ready Deck", "Turn this tax position note into a 6-slide client deck with an executive summary slide."],
    ["Tell the Tax Story", "Structure this analysis as Context → Issue → Risk → Recommendation → Next Steps across slides."],
    ["Simplify for the Board", "Rewrite these slides in plain business language a non-tax board member would understand."],
    ["Create a Litigation Timeline", "Build a visual timeline slide of this case's key hearing dates and outcomes."],
    ["Design a Comparison Slide", "Create a side-by-side slide comparing the old vs new GST rate structure."],
  ],
  Outlook: [
    ["Draft a Client Update", "Draft a concise email to the client summarising the outcome of today's assessment hearing."],
    ["Summarise a Long Thread", "Summarise this 20-email thread into decisions made, pending items, and who owns what."],
    ["Chase Outstanding Documents", "Draft a polite but firm follow-up requesting the pending Form 15CA/CB documents."],
    ["Soften a Firm Response", "Rewrite this reply to sound more diplomatic — we're pushing back on the client's proposed position."],
    ["Prepare a Cover Note", "Draft a short covering email to accompany our reply to the GST show cause notice."],
  ],
  "M365 Chat": [
    ["Find Every Mention", "Find every email, doc or chat this quarter that mentions the 'safe harbour' rate change."],
    ["Prep for a Client Call", "Pull together everything we discussed with ABC Corp on their TP matter in the last 30 days."],
    ["Draft a Matter Brief", "Summarise all files related to the XYZ litigation into a one-page matter brief."],
    ["Check What's Still Pending", "What action items are still open for me across all my tax engagements this week?"],
    ["Compare Team Positions", "Compare how our Mumbai and Bangalore teams have each interpreted the new TDS circular."],
  ],
};

const TAX_USE_CASES: Record<string, [string, string, string][]> = {
  Word: [
    ["📄", "Draft Position Notes", "Create first-cut tax research memos, issue notes, legal summaries and client-ready position papers."],
    ["🔍", "Summarise Case Laws", "Condense lengthy rulings, circulars, notifications or tribunal orders into crisp facts and implications."],
    ["✍️", "Refine Legal Language", "Rewrite tax submissions and opinion drafts into a sharper, review-ready tone."],
    ["📌", "Track Review Points", "Convert comments and inputs into action points, open items and next-step trackers."],
  ],
  Excel: [
    ["📊", "Analyse Tax Data", "Summarise large datasets and identify key trends, gaps, mismatches and exceptions."],
    ["🧮", "Build Reconciliations", "Create formulas and logic checks to compare books, returns and working papers."],
    ["⚠️", "Spot Exceptions", "Detect anomalies such as missing details, rate mismatches or duplicates."],
    ["📈", "Visualise Compliance", "Create dashboards to show status, exposures, ageing and risk movement."],
  ],
  PowerPoint: [
    ["🎯", "Create Client Decks", "Convert tax analysis into structured, visually clean, client-ready presentations."],
    ["🧭", "Tell the Tax Story", "Organise complex positions into context, issue, risk, recommendation and next steps."],
    ["📣", "Prepare Leadership Updates", "Generate concise leadership slides on exposures, updates and decisions required."],
    ["🗂️", "Summarise Case Strategy", "Build crisp hearing briefs, timelines and argument maps."],
  ],
  Outlook: [
    ["✉️", "Draft Client Emails", "Prepare clear professional emails for data requests, updates and follow-ups."],
    ["🧵", "Summarise Threads", "Extract decisions, pending inputs, responsibilities and deadlines from long chains."],
    ["⏱️", "Manage Follow-ups", "Convert email conversations into action-oriented follow-ups."],
    ["🪄", "Polish Tone Instantly", "Rewrite responses to sound concise, client-sensitive and executive-ready."],
  ],
  "M365 Chat": [
    ["🌐", "Search Across Work", "Find tax-related discussions, documents, emails and files across Microsoft 365."],
    ["🧾", "Prepare Matter Briefs", "Generate briefing notes before client calls or internal reviews."],
    ["🧠", "Connect Tax Context", "Connect compliance data, research notes, email trails and presentation inputs."],
    ["🚀", "Accelerate First Drafts", "Create starting drafts for emails, memos, decks, trackers and meeting prep."],
  ],
};

const APP_ACCENT: Record<string, string> = {
  Word: "var(--ey-app-word)",
  Excel: "var(--ey-app-excel)",
  PowerPoint: "var(--ey-app-ppt)",
  Outlook: "var(--ey-app-outlook)",
  "M365 Chat": "var(--ey-app-copilot)",
};

const RIBBON_BG: Record<string, string> = {
  Word: "linear-gradient(135deg, var(--ey-app-word), #103f88 55%, #082a61)",
  Excel: "linear-gradient(135deg, var(--ey-app-excel), #0b5f30 55%, #064520)",
  PowerPoint: "linear-gradient(135deg, var(--ey-app-ppt), #9c2f15 55%, #6f1f0d)",
  Outlook: "linear-gradient(135deg, var(--ey-app-outlook), #065a9e 55%, #003d73)",
  "M365 Chat": "linear-gradient(135deg, var(--ey-app-copilot), var(--ey-app-outlook) 48%, #00a88f)",
};

const GUIDE_LINKS = [
  { num: "01", accent: "#4a90d9", href: "https://sites.ey.com/sites/Enterprise-Technology/SitePages/M365-Copilot-(licensed).aspx", icon: <path d="M9 12l2 2 4-4"/>, title: "Do I have M365 Copilot (Premium)?", desc: "Check whether your account is licensed for the premium Copilot experience.", cta: "Check now" },
  { num: "02", accent: "#2ecc71", href: "https://sites.ey.com/sites/Enterprise-Technology/SitePages/M365-Copilot-prompts.aspx", icon: <><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"/><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z"/></>, title: "M365 Copilot Prompts", desc: "A ready library of prompts you can copy and adapt for everyday work.", cta: "Browse prompts" },
  { num: "03", accent: "#f0642f", href: "https://sites.ey.com/sites/Enterprise-Technology/SitePages/M365-Copilot-Frequently-Asked-Questions.aspx", icon: <><circle cx="12" cy="12" r="9"/><path d="M9.2 9a2.8 2.8 0 015.5.8c0 1.9-2.8 2.4-2.8 4.2"/><path d="M12 17.5h.01"/></>, title: "M365 Copilot (Premium) FAQs", desc: "Answers to the most common questions about premium Copilot.", cta: "Read FAQs" },
  { num: "04", accent: "#0e9be6", href: "https://sites.ey.com/sites/Enterprise-Technology/SitePages/M365-Copilot-Agents-Frequently-Asked-Questions.aspx", icon: <><rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1.4"/><path d="M9.5 13h.01M14.5 13h.01"/><path d="M2.5 12v3M21.5 12v3"/></>, title: "M365 Copilot Agents FAQs", desc: "Learn what Copilot agents are and how they can work for you.", cta: "Explore agents" },
  { num: "05", accent: "#9b59b6", href: "https://sites.ey.com/sites/Enterprise-Technology/SitePages/Exclude-M365-Copilot-from-accessing-content.aspx", icon: <><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/><path d="M12 15v2"/></>, title: "Know What Copilot Can Access", desc: "Control and exclude the content Copilot is able to read.", cta: "Manage access" },
];

const SEC_IMAGES = [
  { src: "/security_Picture1.png", caption: "Quick Check Before You Prompt", icon: "🛡️", accent: "#4a90d9" },
  { src: "/security_Picture2.png", caption: "Share Smartly", icon: "🔗", accent: "#2ecc71" },
  { src: "/security_Picture3.png", caption: "Use Sensitivity Labels", icon: "🏷️", accent: "#f39c12" },
  { src: "/security_Picture4.png", caption: "Check Who Has Access", icon: "👥", accent: "#9b59b6" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function AppLogo({ app, size = 24 }: { app: string; size?: number }) {
  const [err, setErr] = useState(false);
  if (err || !APP_LOGOS[app]) {
    return <span style={{ fontFamily: "'EYInterstate:Bold', sans-serif", fontSize: size * 0.6, color: "var(--ey-on-dark)" }}>{app.slice(0, 3)}</span>;
  }
  return (
    <img
      src={APP_LOGOS[app]}
      alt={`${app} logo`}
      width={size}
      height={size}
      style={{ objectFit: "contain", filter: app === "M365 Chat" ? "drop-shadow(0 0 12px rgba(107,92,255,0.45))" : undefined }}
      onError={() => setErr(true)}
    />
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M7 17L17 7"/><path d="M9 7h8v8"/>
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Module1({ onBack }: { onBack: () => void }) {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [promptTexts, setPromptTexts] = useState<Record<string, string>>({});
  const [activePromptIdx, setActivePromptIdx] = useState<Record<string, number>>({});
  const [secOpen, setSecOpen] = useState(false);
  const [secIdx, setSecIdx] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const handle = () => {
      const scrollTop = el.scrollTop;
      const maxScroll = el.scrollHeight - el.clientHeight;
      setScrollPct(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0);
    };
    el.addEventListener("scroll", handle, { passive: true });
    return () => el.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (!secOpen) return;
      if (e.key === "Escape") setSecOpen(false);
      if (e.key === "ArrowLeft") setSecIdx(i => (i - 1 + 4) % 4);
      if (e.key === "ArrowRight") setSecIdx(i => (i + 1) % 4);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [secOpen]);

  const typePrompt = (app: string, index: number) => {
    if (typingRef.current) clearInterval(typingRef.current);
    const text = COPILOT_PROMPTS[app][index][1];
    setActivePromptIdx(prev => ({ ...prev, [app]: index }));
    setPromptTexts(prev => ({ ...prev, [app]: "" }));
    let i = 0;
    typingRef.current = setInterval(() => {
      i++;
      setPromptTexts(prev => ({ ...prev, [app]: text.slice(0, i) }));
      if (i >= text.length && typingRef.current) clearInterval(typingRef.current);
    }, 12);
  };

  const openApp = (app: string) => {
    setActiveApp(app);
    setTimeout(() => {
      mainRef.current?.querySelector("#promptRepo")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const s: Record<string, React.CSSProperties> = {
    body: {
      background: "var(--ey-body-gradient)",
      minHeight: "100vh",
      color: "var(--ey-on-dark)",
      fontFamily: "'EYInterstate:Regular', sans-serif",
      overflowX: "hidden",
      overflowY: "auto",
      position: "relative",
    },
    yellowBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      textDecoration: "none",
      background: "linear-gradient(135deg, var(--ey-brand-yellow-pale), var(--ey-brand-yellow), var(--ey-brand-yellow-warm))",
      color: "#111",
      border: "1px solid var(--ey-brand-yellow-alpha-28)",
      borderRadius: 999,
      padding: "11px 18px",
      fontFamily: "'EYInterstate:Bold', sans-serif",
      fontSize: 13,
      cursor: "pointer",
      whiteSpace: "nowrap" as const,
      boxShadow: "0 12px 28px var(--ey-brand-yellow-alpha-12)",
    },
  };

  return (
    <div ref={mainRef} style={{ ...s.body, height: "100vh" }}>
      {/* Scroll progress */}
      <div style={{ position: "sticky", top: 0, left: 0, width: "100%", height: 6, background: "var(--ey-on-dark-08)", zIndex: 9999 }}>
        <div style={{ height: "100%", width: `${scrollPct}%`, background: "linear-gradient(90deg, var(--ey-brand-yellow), var(--ey-brand-yellow-pale), var(--ey-brand-yellow))", transition: "width 0.08s linear", boxShadow: "0 0 22px var(--ey-brand-yellow-alpha-28)" }} />
      </div>

      {/* ── Nav ── */}
      <nav style={{ position: "sticky", top: 6, zIndex: 100, background: "var(--ey-bg-nav)", backdropFilter: "blur(18px)", borderBottom: "1px solid var(--ey-on-dark-12)", padding: "0 30px" }}>
        <div style={{ display: "flex", alignItems: "center", height: 48, gap: 16 }}>
          {/* Back */}
          <button onClick={onBack} style={{ background: "none", border: "none", color: "var(--ey-brand-yellow)", fontSize: 18, cursor: "pointer", padding: "0 8px 0 0", fontFamily: "'EYInterstate:Regular', sans-serif" }}>←</button>
          <a href="#homeSection" style={{ textDecoration: "none", fontFamily: "'EYInterstate:Bold', sans-serif", fontSize: 16, color: "var(--ey-brand-yellow)", marginRight: 20, whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: "'EYInterstate:Light', sans-serif", color: "var(--ey-on-dark)" }}>EY.ai</span> Tax Labs
          </a>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {["Home", "Useful Links", "Security"].map((label, i) => {
              const hrefs = ["#homeSection", "#usefulLinks", "#security"];
              return (
                <a key={label} href={hrefs[i]} style={{ color: "var(--ey-on-dark-55)", fontSize: 12, fontFamily: "'EYInterstate:Regular', sans-serif", textDecoration: "none" }}>{label}</a>
              );
            })}
          </div>
          {/* Module tabs */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginLeft: "auto" }}>
            <div style={{ padding: "5px 14px", borderRadius: 4, fontSize: 11, fontFamily: "'EYInterstate:Bold', sans-serif", textTransform: "uppercase", letterSpacing: "0.5px", background: "var(--ey-brand-yellow-alpha-12)", border: "1px solid var(--ey-brand-yellow)", color: "var(--ey-brand-yellow)" }}>Module 1</div>
            {["Module 2", "Module 3", "Module 4"].map((m, i) => (
              <div key={m} style={{ padding: "5px 14px", borderRadius: 4, fontSize: 11, fontFamily: "'EYInterstate:Bold', sans-serif", textTransform: "uppercase", letterSpacing: "0.5px", background: "rgba(100,100,100,0.05)", border: "1px solid #333", color: "#444", cursor: i === 0 ? "pointer" : "not-allowed", opacity: i === 0 ? 1 : 0.5 }}>{m}</div>
            ))}
          </div>
        </div>
      </nav>

      <main style={{ padding: "38px 38px 80px" }}>

        {/* ── Hero section ── */}
        <section id="homeSection" style={{ display: "grid", gridTemplateColumns: "1fr 1.18fr", alignItems: "center", minHeight: "calc(100vh - 142px)", gap: 42, position: "relative", overflow: "hidden", borderRadius: 36 }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 640 }}>
            <h1 style={{ fontSize: "clamp(38px, 5vw, 72px)", lineHeight: 0.98, marginBottom: 24, letterSpacing: -2, fontFamily: "'EYInterstate:Bold', sans-serif", color: "var(--ey-on-dark)" }}>
              Explore M365 Copilot prompts in a{" "}
              <span style={{ color: "var(--ey-brand-yellow)" }}>new-age workspace</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ey-on-dark-72)", maxWidth: 580, fontFamily: "'EYInterstate:Regular', sans-serif" }}>
              Step into an interactive M365 learning space where you can find what wonders the age-old MS apps can do just by adding a magical element called M365.
            </p>
          </div>

          {/* Laptop stage */}
          <div style={{ position: "relative", minHeight: 610, display: "flex", alignItems: "center", justifyContent: "center", perspective: 1000 }}>
            {/* Keyboard base */}
            <div style={{ position: "absolute", bottom: 58, width: 720, maxWidth: "96vw", height: 74, background: "linear-gradient(180deg, #3b3b46, #1a1a22)", borderRadius: "8px 8px 28px 28px", transform: "rotateX(55deg)", boxShadow: "0 35px 60px rgba(0,0,0,0.55)" }} />
            {/* Laptop screen */}
            <div style={{ width: "min(660px, 92vw)", height: 395, background: "linear-gradient(145deg, #0d0d12, #2e2e38)", border: "4px solid #3b3b46", borderRadius: "24px 24px 14px 14px", boxShadow: "0 45px 110px rgba(0,0,0,0.66), 0 0 42px rgba(107,92,255,0.25)", position: "relative", transform: "rotateX(4deg) rotateY(-5deg)", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 18, borderRadius: 16, background: "linear-gradient(135deg, #101018, #1e1e2a)" }} />
              <div style={{ position: "absolute", zIndex: 5, width: "66%", textAlign: "center", left: "50%", top: "50%", transform: "translate(-50%, -46%)", pointerEvents: "none" }}>
                <h3 style={{ color: "var(--ey-brand-yellow)", fontSize: "clamp(26px, 3vw, 40px)", marginBottom: 13, fontFamily: "'EYInterstate:Bold', sans-serif" }}>What you can do</h3>
                <p style={{ color: "var(--ey-on-dark-72)", fontSize: 15, lineHeight: 1.55, fontFamily: "'EYInterstate:Regular', sans-serif" }}>Click the popping Apps to explore the M365 copilot use cases in Tax</p>
              </div>
            </div>

            {/* Floating app icons */}
            {CORE_APPS.map(app => (
              <button
                key={app}
                onClick={() => openApp(app)}
                title={`Open ${app} tax use cases`}
                style={{
                  position: "absolute",
                  width: 96, height: 96,
                  borderRadius: 26,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--ey-on-dark-20)",
                  cursor: "pointer",
                  background: "none",
                  zIndex: 20,
                  animation: "floatAnim 5s ease-in-out infinite",
                  ...FLOATING_POSITIONS[app],
                }}
              >
                <AppLogo app={app} size={62} />
                <small style={{ position: "absolute", bottom: -30, fontSize: 13, color: "var(--ey-on-dark-72)", whiteSpace: "nowrap", fontFamily: "'EYInterstate:Bold', sans-serif" }}>{app}</small>
              </button>
            ))}
          </div>
        </section>

        {/* ── App tabs bar ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "16px 24px", border: "1px solid var(--ey-brand-yellow-alpha-28)", borderRadius: 28, background: "linear-gradient(135deg, rgba(10,10,10,0.92), rgba(34,34,44,0.88))", backdropFilter: "blur(18px)", boxShadow: "0 22px 62px rgba(0,0,0,0.34)", margin: "32px 0 8px", flexWrap: "nowrap" }}>
          <div style={{ color: "var(--ey-on-dark)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, whiteSpace: "nowrap", minWidth: 420, padding: "4px 10px" }}>
            <div style={{ fontSize: 17, fontFamily: "'EYInterstate:Bold', sans-serif" }}>
              Explore <span style={{ color: "var(--ey-brand-yellow)" }}>M365 Copilot possibilities in Tax</span>
            </div>
            <div style={{ fontSize: 14, color: "var(--ey-on-dark-72)", fontFamily: "'EYInterstate:Regular', sans-serif" }}>Click each app to find sample prompts in respective MS Apps</div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "nowrap", justifyContent: "flex-start", alignItems: "center" }}>
            {CORE_APPS.map(app => (
              <button
                key={app}
                onClick={() => openApp(app)}
                style={{
                  border: "1px solid " + (activeApp === app ? "var(--ey-brand-yellow)" : "var(--ey-on-dark-20)"),
                  background: activeApp === app ? "var(--ey-brand-yellow)" : "var(--ey-on-dark-08)",
                  color: activeApp === app ? "#111" : "var(--ey-on-dark)",
                  padding: "11px 20px", borderRadius: 999, fontSize: 15, cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 10,
                  fontFamily: "'EYInterstate:Bold', sans-serif",
                  transition: "all 0.25s",
                }}
              >
                <AppLogo app={app} size={24} />
                {app}
              </button>
            ))}
          </div>
        </div>

        {/* ── Prompt Repository ── */}
        <section id="promptRepo" style={{ minHeight: "100vh", padding: "80px 0 30px", scrollMarginTop: 155 }}>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.02, letterSpacing: -1.5, margin: "0 auto 34px", textAlign: "center", color: "var(--ey-brand-yellow)", fontFamily: "'EYInterstate:Bold', sans-serif" }}>
            Sample Prompt Repository
          </h2>
          {!activeApp ? (
            <div style={{ minHeight: 420, border: "1px dashed var(--ey-on-dark-20)", borderRadius: 34, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 40, background: "var(--ey-on-dark-08)" }}>
              <div>
                <h2 style={{ color: "var(--ey-brand-yellow)", fontSize: 34, marginBottom: 12, fontFamily: "'EYInterstate:Bold', sans-serif" }}>Select an app from the top tabs</h2>
                <p style={{ color: "var(--ey-on-dark-72)", fontSize: 16, lineHeight: 1.6, maxWidth: 620, fontFamily: "'EYInterstate:Regular', sans-serif" }}>The corresponding Microsoft app interface will launch here with embedded, ready-to-use Copilot sample prompts.</p>
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 22, alignItems: "stretch" }}>
              {/* App mock */}
              <div style={{ borderRadius: 30, overflow: "hidden", background: "linear-gradient(180deg, var(--ey-bg-card), var(--ey-bg-card-alt))", border: "1px solid var(--ey-on-dark-12)", boxShadow: "0 30px 80px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column" }}>
                {/* Window chrome */}
                <div style={{ height: 38, background: "#111322", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", borderBottom: "1px solid var(--ey-on-dark-08)" }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    {["#ff5f57", "#ffbd2e", "#28c840"].map(c => (
                      <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                  <span style={{ color: "var(--ey-on-dark)", fontSize: 13, fontFamily: "'EYInterstate:Bold', sans-serif" }}>{activeApp} — blank workspace</span>
                  <span style={{ color: "var(--ey-on-dark)", fontSize: 12, fontFamily: "'EYInterstate:Regular', sans-serif" }}>Copilot-enabled</span>
                </div>
                {/* Canvas */}
                <div style={{ flex: 1, padding: 26, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", minHeight: 340, background: RIBBON_BG[activeApp] }}>
                  <div style={{ width: "100%", maxWidth: 420, background: "linear-gradient(180deg, #ffffff, #f5f5fa)", borderRadius: 18, padding: 26, boxShadow: "0 22px 60px rgba(0,0,0,0.24)", position: "relative", zIndex: 1 }}>
                    {[92, 78, 92, 92, 78, 60].map((w, i) => (
                      <div key={i} style={{ height: 10, borderRadius: 999, background: "#e7e7e7", marginBottom: 14, width: `${w}%` }} />
                    ))}
                    <div style={{ marginTop: 16, background: "linear-gradient(160deg, #fffef2, #fff)", border: "1px solid var(--ey-brand-yellow)", borderRadius: 14, padding: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, fontFamily: "'EYInterstate:Bold', sans-serif", color: "#8a7300", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>
                        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "linear-gradient(135deg, #36C5F0, #A24FE0, #FFB900)", flexShrink: 0 }} />
                        Copilot
                      </div>
                      <textarea
                        readOnly
                        value={promptTexts[activeApp] ?? ""}
                        placeholder="Choose a prompt on the right to see Copilot respond →"
                        style={{ width: "100%", minHeight: 160, border: "1px solid rgba(107,92,255,0.24)", resize: "none", outline: "none", fontSize: 15, lineHeight: 1.72, color: "#161620", fontFamily: "'EYInterstate:Regular', sans-serif", background: "transparent", borderRadius: 12, padding: "12px 16px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Prompt panel */}
              <aside style={{ background: "linear-gradient(160deg, var(--ey-bg-surface), rgba(255,255,255,0.02))", border: "1px solid var(--ey-on-dark-12)", borderRadius: 26, padding: 24, display: "flex", flexDirection: "column", boxShadow: "0 20px 60px rgba(0,0,0,0.28)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 17, fontFamily: "'EYInterstate:Bold', sans-serif", color: "var(--ey-on-dark)", marginBottom: 4 }}>
                  ✨ Ask Copilot in {activeApp}
                </div>
                <p style={{ fontSize: 12, color: "var(--ey-on-dark-55)", marginBottom: 18, lineHeight: 1.5, fontFamily: "'EYInterstate:Regular', sans-serif" }}>{APP_SUBTITLES[activeApp]}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {COPILOT_PROMPTS[activeApp].map(([title, body], i) => {
                    const isActive = activePromptIdx[activeApp] === i;
                    return (
                      <button
                        key={i}
                        onClick={() => typePrompt(activeApp, i)}
                        style={{
                          display: "flex", alignItems: "center", gap: 12, padding: "13px 14px",
                          borderRadius: 14, background: isActive ? "rgba(255,230,0,0.16)" : "var(--ey-on-dark-08)",
                          border: isActive ? "1px solid var(--ey-brand-yellow)" : "1px solid var(--ey-on-dark-12)",
                          cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "inherit", color: "inherit",
                          boxShadow: isActive ? "0 0 0 1px var(--ey-brand-yellow-alpha-28)" : "none",
                          transition: "all 0.25s",
                        }}
                      >
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: isActive ? "var(--ey-brand-yellow)" : "var(--ey-on-dark-12)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'EYInterstate:Bold', sans-serif", fontSize: 12, color: isActive ? "#111" : "var(--ey-on-dark)", flexShrink: 0, transition: "all 0.25s" }}>
                          {i + 1}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <strong style={{ display: "block", fontSize: 13, color: "var(--ey-on-dark)", marginBottom: 2, fontFamily: "'EYInterstate:Bold', sans-serif" }}>{title}</strong>
                          <p style={{ fontSize: 11, color: "var(--ey-on-dark-55)", lineHeight: 1.4, margin: 0, fontFamily: "'EYInterstate:Regular', sans-serif" }}>{body.slice(0, 72)}…</p>
                        </div>
                        <span style={{ color: isActive ? "var(--ey-brand-yellow)" : "var(--ey-on-dark-55)", fontSize: 14, flexShrink: 0, transform: isActive ? "translateX(2px)" : "none", transition: "all 0.25s" }}>→</span>
                      </button>
                    );
                  })}
                </div>
              </aside>
            </div>
          )}
        </section>

        {/* ── Copilot in Tax (use cases) ── */}
        <section style={{ minHeight: "100vh", padding: "80px 0 30px" }}>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.02, letterSpacing: -1.5, margin: "0 auto 34px", textAlign: "center", color: "var(--ey-brand-yellow)", fontFamily: "'EYInterstate:Bold', sans-serif" }}>
            Copilot in Tax
          </h2>
          {CORE_APPS.map(app => (
            <div key={app} style={{ marginBottom: 64, paddingBottom: 14, borderBottom: "1px solid var(--ey-on-dark-12)" }}>
              {/* App header */}
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28, border: "1px solid var(--ey-brand-yellow-alpha-28)", borderRadius: 28, padding: "18px 22px", background: "radial-gradient(circle at 10% 20%, var(--ey-brand-yellow-alpha-12), transparent 28%), linear-gradient(135deg, var(--ey-on-dark-12), rgba(255,255,255,0.035))", boxShadow: "0 22px 60px rgba(0,0,0,0.28)", position: "relative", overflow: "hidden" }}>
                <AppLogo app={app} size={58} />
                <div>
                  <h2 style={{ fontSize: "clamp(30px, 3vw, 46px)", marginBottom: 5, color: "var(--ey-on-dark)", fontFamily: "'EYInterstate:Bold', sans-serif" }}>{app}</h2>
                  <p style={{ color: "var(--ey-on-dark-72)", fontSize: 15, fontFamily: "'EYInterstate:Regular', sans-serif" }}>{APP_SUBTITLES[app]}</p>
                </div>
              </div>
              {/* Use case grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(260px, 1fr))", gap: 20 }}>
                {TAX_USE_CASES[app].map(([icon, title, desc]) => (
                  <article key={title} style={{ position: "relative", borderRadius: 22, padding: "26px 26px 26px 28px", background: "linear-gradient(140deg, var(--ey-bg-surface), rgba(255,255,255,0.02))", border: "1px solid var(--ey-on-dark-12)", overflow: "hidden", display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: APP_ACCENT[app] }} />
                    <div style={{ width: 56, height: 56, minWidth: 56, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 27, background: "var(--ey-on-dark-08)", border: "1px solid var(--ey-on-dark-12)" }}>{icon}</div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: "var(--ey-on-dark)", fontSize: 19, fontFamily: "'EYInterstate:Bold', sans-serif", marginBottom: 7, lineHeight: 1.15 }}>{title}</h3>
                      <p style={{ color: "var(--ey-on-dark-55)", fontSize: 13.5, lineHeight: 1.55, fontFamily: "'EYInterstate:Regular', sans-serif" }}>{desc}</p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, fontSize: 11, fontFamily: "'EYInterstate:Bold', sans-serif", letterSpacing: "0.4px", textTransform: "uppercase", color: APP_ACCENT[app] }}>✦ {app} + Copilot</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Useful Links ── */}
        <section id="usefulLinks" style={{ minHeight: "70vh", padding: "92px 0 80px" }}>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.02, letterSpacing: -1.5, margin: "0 auto 12px", textAlign: "center", color: "var(--ey-brand-yellow)", fontFamily: "'EYInterstate:Bold', sans-serif" }}>
            Useful Links
          </h2>
          <p style={{ textAlign: "center", color: "var(--ey-on-dark-72)", fontSize: 16, maxWidth: 720, margin: "0 auto 30px", lineHeight: 1.6, fontFamily: "'EYInterstate:Regular', sans-serif" }}>
            Handy EY resources to check your access, find prompts, and use Copilot safely.
          </p>
          <div style={{ border: "1px dashed var(--ey-brand-yellow-alpha-28)", borderRadius: 34, background: "radial-gradient(circle at top left, var(--ey-brand-yellow-alpha-12), transparent 35%), linear-gradient(135deg, var(--ey-bg-surface), rgba(255,255,255,0.03))", padding: 46, boxShadow: "0 28px 80px rgba(0,0,0,0.32)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(180px, 1fr))", gap: 22 }}>
              {GUIDE_LINKS.map(link => (
                <a key={link.num} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{ position: "relative", display: "flex", flexDirection: "column", minHeight: 250, borderRadius: 26, padding: "26px 24px 22px", textDecoration: "none", color: "var(--ey-on-dark)", overflow: "hidden", border: "1px solid var(--ey-on-dark-12)", background: "linear-gradient(160deg, var(--ey-bg-surface), rgba(255,255,255,0.02))", boxShadow: "0 24px 68px rgba(0,0,0,0.36)" }}>
                  <span style={{ position: "absolute", top: 22, right: 22, fontSize: 13, fontFamily: "'EYInterstate:Bold', sans-serif", letterSpacing: 1, color: link.accent, opacity: 0.55 }}>{link.num}</span>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--ey-on-dark-08)", border: "1px solid var(--ey-on-dark-12)", color: link.accent, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>{link.icon}</svg>
                  </div>
                  <h3 style={{ fontSize: 16, lineHeight: 1.28, marginBottom: 8, fontFamily: "'EYInterstate:Bold', sans-serif" }}>{link.title}</h3>
                  <p style={{ fontSize: 12, lineHeight: 1.5, color: "var(--ey-on-dark-55)", fontFamily: "'EYInterstate:Regular', sans-serif", flex: 1 }}>{link.desc}</p>
                  <span style={{ marginTop: "auto", paddingTop: 16, display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, fontFamily: "'EYInterstate:Bold', sans-serif", letterSpacing: "0.3px", textTransform: "uppercase", color: link.accent }}>
                    {link.cta} <ArrowUpRightIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Security ── */}
        <section id="security" style={{ minHeight: "86vh", padding: "92px 0 90px" }}>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.02, letterSpacing: -1.5, margin: "0 auto 12px", textAlign: "center", color: "var(--ey-brand-yellow)", fontFamily: "'EYInterstate:Bold', sans-serif" }}>
            Security
          </h2>
          <p style={{ textAlign: "center", color: "var(--ey-on-dark-72)", fontSize: 16, maxWidth: 720, margin: "0 auto 40px", lineHeight: 1.6, fontFamily: "'EYInterstate:Regular', sans-serif" }}>
            Before you let Copilot loose on tax data, know the ground rules. Tap any card to view it full-size.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 26, maxWidth: 1150, margin: "0 auto" }}>
            {SEC_IMAGES.map((sec, i) => (
              <button key={i} onClick={() => { setSecIdx(i); setSecOpen(true); }}
                style={{ position: "relative", border: 0, padding: 0, cursor: "pointer", borderRadius: 26, overflow: "hidden", background: "linear-gradient(150deg, var(--ey-bg-surface), rgba(255,255,255,0.02))", boxShadow: "0 26px 68px rgba(0,0,0,0.36)", textAlign: "left", fontFamily: "inherit" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: sec.accent, zIndex: 3 }} />
                <div style={{ position: "absolute", top: 16, left: 18, zIndex: 4, width: 42, height: 42, borderRadius: 14, background: sec.accent, color: "#0d0d1a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'EYInterstate:Bold', sans-serif", fontSize: 16, boxShadow: "0 10px 24px rgba(0,0,0,0.35)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ width: "100%", background: "#0d0d16", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", maxHeight: 420 }}>
                  <img src={sec.src} alt={sec.caption} style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "18px 22px", fontSize: 17, fontFamily: "'EYInterstate:Bold', sans-serif", color: "var(--ey-on-dark)", background: "linear-gradient(180deg, var(--ey-bg-surface), transparent)" }}>
                  <span>{sec.icon}</span> {sec.caption}
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* ── Security lightbox ── */}
      {secOpen && (
        <div onClick={() => setSecOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out" }}>
          <button onClick={e => { e.stopPropagation(); setSecIdx(i => (i - 1 + 4) % 4); }} style={lightboxArrowStyle("left")}>‹</button>
          <img src={SEC_IMAGES[secIdx].src} alt="" style={{ maxWidth: "82vw", maxHeight: "82vh", borderRadius: 16, boxShadow: "0 30px 90px rgba(0,0,0,0.6)", objectFit: "contain" }} onClick={e => e.stopPropagation()} />
          <button onClick={e => { e.stopPropagation(); setSecIdx(i => (i + 1) % 4); }} style={lightboxArrowStyle("right")}>›</button>
          <button onClick={e => { e.stopPropagation(); setSecOpen(false); }} style={{ position: "absolute", top: 24, right: 32, width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid var(--ey-on-dark-20)", color: "var(--ey-on-dark)", fontSize: 22, cursor: "pointer" }}>✕</button>
        </div>
      )}

      {/* Float keyframe */}
      <style>{`
        @keyframes floatAnim {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -18px; }
        }
      `}</style>
    </div>
  );
}

function lightboxArrowStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    [side]: 28,
    top: "50%",
    transform: "translateY(-50%)",
    width: 52, height: 52,
    borderRadius: "50%",
    border: "1px solid var(--ey-brand-yellow-alpha-28)",
    background: "linear-gradient(135deg, var(--ey-brand-yellow-pale), var(--ey-brand-yellow), var(--ey-brand-yellow-warm))",
    color: "#111",
    fontSize: 30,
    fontFamily: "'EYInterstate:Bold', sans-serif",
    cursor: "pointer",
    boxShadow: "0 14px 32px rgba(0,0,0,0.34)",
    zIndex: 4,
  };
}
