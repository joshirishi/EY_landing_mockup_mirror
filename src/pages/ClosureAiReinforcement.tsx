import { SiteHeader } from "../design-kit/SiteHeader";
import { ModuleHeader, SUBNAV_SCROLL_MARGIN, useModuleSectionHashScroll } from "../design-kit/LearningNav";
import { EYFooter } from "../design-kit/EYFooter";
import { colors, contentRailStyle, fonts, spacing, spectrumCss } from "../design-kit/tokens";

export const PHASE4_LABEL = "Phase 4: Closure & AI Reinforcement";
export const PHASE4_NUMBER = 4;

const PHASE4_SECTIONS = [
  { id: "p4-outcomes",     label: "Outcomes",        group: "learn" as const },
  { id: "p4-habits",       label: "AI Habits",       group: "learn" as const },
  { id: "p4-governance",   label: "Governance",      group: "learn" as const },
  { id: "p4-next-steps",   label: "Next Steps",      group: "apply" as const },
  { id: "p4-certificate",  label: "Certificate",     group: "apply" as const },
];

// ── Shared placeholder div ────────────────────────────────────────────────────
function PlaceholderBlock({
  id,
  eyebrow,
  heading,
  sub,
  dark = false,
  minHeight = 480,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  sub: string;
  dark?: boolean;
  minHeight?: number;
}) {
  const bg = dark ? colors.confidentBlack : colors.white;
  const headingColor = dark ? colors.white : colors.offBlack;
  const subColor = dark ? colors.onDarkMuted : colors.gray01;

  return (
    <section
      id={id}
      style={{
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
        background: bg,
        padding: `${spacing.sectionPaddingY} 0`,
        width: "100%",
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <p
          style={{
            fontFamily: fonts.bold,
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: colors.yellow,
            margin: "0 0 12px",
            textAlign: "center",
          }}
        >
          {eyebrow}
        </p>
        <h2
          style={{
            fontFamily: fonts.bold,
            fontSize: "clamp(22px, 3.5vw, 36px)",
            color: headingColor,
            margin: "0 0 8px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontFamily: fonts.regular,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: subColor,
            margin: "0 0 48px",
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          {sub}
        </p>

        {/* Content placeholder */}
        <div
          style={{
            minHeight,
            border: `2px dashed ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)"}`,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: fonts.regular,
              fontSize: 13,
              color: dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Content coming soon
          </span>
        </div>
      </div>
    </section>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      style={{
        background: colors.confidentBlack,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        padding: "80px 0 72px",
      }}
    >
      {/* EY spectrum rule */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: spectrumCss,
        }}
      />

      <div style={{ ...contentRailStyle, textAlign: "center" }}>
        <p
          style={{
            fontFamily: fonts.bold,
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.yellow,
            margin: "0 0 16px",
          }}
        >
          Phase 4 · Closure & AI Reinforcement
        </p>
        <h1
          style={{
            fontFamily: fonts.bold,
            fontSize: "clamp(28px, 4.5vw, 52px)",
            color: colors.white,
            margin: "0 0 20px",
            letterSpacing: "-0.025em",
            lineHeight: 1.08,
          }}
        >
          Closing the Loop.<br />Building Lasting Habits.
        </h1>
        <p
          style={{
            fontFamily: fonts.regular,
            fontSize: "clamp(15px, 1.6vw, 18px)",
            color: colors.onDarkMuted,
            maxWidth: 620,
            margin: "0 auto",
            lineHeight: 1.55,
          }}
        >
          Reflect on what you have built, embed AI behaviours into your daily
          practice, and leave with a personal commitment and a clear path forward.
        </p>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ClosureAiReinforcement({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (path: string) => void;
}) {
  useModuleSectionHashScroll();

  return (
    <div
      className="relative bg-white content-stretch flex flex-col items-stretch w-full max-w-full min-w-0 overflow-x-clip"
      data-name="EY.ai Tax Labs - Phase 4"
    >
      <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#phase4-content" />
      <ModuleHeader
        mode="phase-overview"
        phaseLabel={PHASE4_LABEL}
        phaseNumber={PHASE4_NUMBER}
        subPhaseLabel="4.1"
        sections={PHASE4_SECTIONS}
        onNavigate={onNavigate}
        onBack={onBack}
      />

      <main id="phase4-content">
        <HeroSection />

        <PlaceholderBlock
          id="p4-outcomes"
          eyebrow="Workshop Outcomes"
          heading="What You Have Achieved"
          sub="A structured look at the capabilities, outputs, and commitments produced across all four phases."
          dark={false}
        />

        <PlaceholderBlock
          id="p4-habits"
          eyebrow="AI Habits"
          heading="Making AI Part of Your Daily Practice"
          sub="Practical rituals and prompting habits that keep momentum going after the workshop ends."
          dark={true}
        />

        <PlaceholderBlock
          id="p4-governance"
          eyebrow="Governance"
          heading="Staying Inside the Lines"
          sub="EY's responsible AI principles, client-data guardrails, and escalation paths — revisited as a closing reminder."
          dark={false}
        />

        <PlaceholderBlock
          id="p4-next-steps"
          eyebrow="Next Steps"
          heading="Your 30-Day AI Commitment"
          sub="A personal action plan: one prompt to improve, one workflow to automate, and one colleague to bring along."
          dark={true}
          minHeight={360}
        />

        <PlaceholderBlock
          id="p4-certificate"
          eyebrow="Certificate"
          heading="Completion &amp; Recognition"
          sub="Celebrate the team's progress and capture the evidence of participation and achievement."
          dark={false}
          minHeight={320}
        />
      </main>

      <EYFooter onNavigate={onNavigate} />
    </div>
  );
}
