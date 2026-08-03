/**
 * EY Tax Labs — The Ascent journey infographic (full artboard)
 * Figma node 3743:16946 — header copy, journey path, callouts, stages, banner.
 *
 * Fixed 1536×450 artboard, scales to container width via ResizeObserver.
 */

import { useEffect, useRef, useState } from "react";
import { CirclePlay } from "lucide-react";
import { colors, fonts } from "@/design-kit";

const W = 1536;
const H = 450;

const ASSET = {
  cleanBackground: "/ascent/clean-background.png",
  flag: "/ascent/flag.svg",
  personStanding: "/ascent/person-standing.svg",
  iconBookOpen: "/ascent/icon-book-open.svg",
  iconSearch: "/ascent/icon-search.svg",
  iconCpu: "/ascent/icon-cpu.svg",
  iconTrendingUp: "/ascent/icon-trending-up.svg",
  iconShield: "/ascent/icon-shield.svg",
  bannerDot: "/ascent/banner-dot.svg",
  bannerLine: "/ascent/banner-line.svg",
  accentLine: "/ascent/accent-line.svg",
  journeyPath: "/ascent/journey-path.svg",
} as const;

const CALLOUTS = [
  { left: 44, top: 277, width: 149, quote: "Everyone is talking about AI, but I don't know where to start." },
  { left: 290, top: 195, width: 187, quote: "AI feels a lot less intimidating now. I finally understand how prompts and Microsoft 365 Copilot work." },
  { left: 502, top: 123, width: 167, quote: "I can clearly see where AI fits across our tax processes. Some use cases need prompts. Others need Agents." },
  { left: 722, top: 106, width: 150, quote: "I never thought I could build an Agent without coding. I'm starting to solve tax problems differently." },
  { left: 953, top: 114, width: 170, quote: "AI has become part of how I work. I rely on it to research, analyze and get work done faster." },
  { left: 1267, top: 10, width: 155, quote: "I am an AI-enabled tax professional. I can confidently and responsibly use AI across the tax lifecycle to deliver greater value.", rounded: 4 },
] as const;

const STAGE_NODES = [
  { left: 359, top: 295, icon: ASSET.iconBookOpen, alt: "Laying the Foundation" },
  { left: 554, top: 260, icon: ASSET.iconSearch, alt: "Discovering Opportunities" },
  { left: 769, top: 240, icon: ASSET.iconCpu, alt: "Building Solutions" },
  { left: 1018, top: 227, icon: ASSET.iconTrendingUp, alt: "Embedding Confidence" },
  { left: 1221, top: 94, icon: ASSET.iconShield, alt: "Peak Performance" },
] as const;

const STAGE_LABELS = [
  { left: 290, top: 346, width: 187, title: "1. Laying the Foundation", body: "I now have the basics of AI, prompting and M365 Copilot." },
  { left: 509, top: 316, width: 160, title: "2. Discovering Opportunities", body: "I can identify high-value tax use cases and decide when to use prompts or Agents." },
  { left: 726, top: 296, width: 150, title: "3. Building Solutions", body: "I can design effective prompts and build no-code Agents with confidence." },
  { left: 956, top: 278, width: 164, title: "4. Embedding Confidence", body: "I am using AI in my day-to-day tax activities with greater confidence." },
  { left: 1267, top: 148, width: 155, title: "5. Peak Performance", body: "I use AI responsibly, apply the right safeguards and continuously drive better outcomes for my business." },
] as const;

function CalloutBox({
  quote,
  width,
  rounded = 12,
}: {
  quote: string;
  width: number;
  rounded?: number;
}) {
  return (
    <div
      className="flex flex-col gap-1 p-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]"
      style={{
        width,
        background: "rgba(26, 26, 36, 0.8)",
        border: `1px solid ${colors.yellowAlpha12}`,
        borderRadius: rounded,
      }}
    >
      <p
        className="shrink-0 whitespace-nowrap text-[18px] leading-[14px]"
        style={{ fontFamily: fonts.bold, color: colors.yellow }}
      >
        "
      </p>
      <p
        className="min-w-full text-[11px] leading-[15px]"
        style={{ fontFamily: fonts.regular, color: colors.white }}
      >
        {quote}
      </p>
    </div>
  );
}

function BaseCampStartMarker() {
  return (
    <div
      className="absolute flex size-[46px] items-center justify-center rounded-full border-2 border-solid shadow-[0px_0px_8px_0px_rgba(255,230,0,0.4)]"
      style={{ left: 156, top: 366, background: colors.confidentBlack, borderColor: colors.yellow }}
      aria-label="Base Camp — start of journey"
    >
      <CirclePlay size={22} strokeWidth={1.75} color={colors.yellow} aria-hidden />
    </div>
  );
}

function StageNode({ left, top, icon, alt }: { left: number; top: number; icon: string; alt: string }) {
  return (
    <div
      className="absolute flex size-10 items-center justify-center rounded-[20px] border-2 border-solid"
      style={{ left, top, background: colors.confidentBlack, borderColor: colors.yellow }}
      aria-hidden
    >
      <div className="relative size-[18px] shrink-0 overflow-clip">
        <img alt={alt} className="absolute inset-0 block size-full max-w-none" src={icon} />
      </div>
    </div>
  );
}

function StageLabel({
  left,
  top,
  width,
  title,
  body,
}: {
  left: number;
  top: number;
  width: number;
  title: string;
  body: string;
}) {
  return (
    <div
      className="absolute flex flex-col gap-1 px-1 py-3 mix-blend-hard-light"
      style={{
        left,
        top,
        width,
        background: colors.confidentBlack,
        border: `1px solid ${colors.yellow}`,
        borderRadius: 4,
      }}
    >
      <p
        className="w-full text-[11px] uppercase leading-normal"
        style={{ fontFamily: fonts.bold, color: colors.yellow }}
      >
        {title}
      </p>
      <p
        className="w-full text-[10px] leading-[14px]"
        style={{ fontFamily: fonts.regular, color: colors.gray02 }}
      >
        {body}
      </p>
    </div>
  );
}

function HeaderTitleBlock() {
  return (
    <div
      className="absolute flex flex-col gap-4"
      style={{ left: 24, top: 32, width: 360 }}
      data-name="Header Title Block"
      data-node-id="3743:16959"
    >
      <div className="flex w-full flex-col gap-2" data-name="Title Text">
        <p
          className="min-w-full text-[28px] leading-[34px]"
          style={{ fontFamily: fonts.bold, color: colors.white }}
        >
          Your journey from <span style={{ color: colors.yellow }}>curiosity</span> to{" "}
          <span style={{ color: colors.yellow }}>confidence</span>.
        </p>
        <div className="relative h-[3px] w-10 shrink-0 overflow-clip">
          <img alt="" className="block size-full max-w-none" src={ASSET.accentLine} />
        </div>
      </div>

      <p
        className="min-w-full text-[14px] leading-[20px]"
        style={{ fontFamily: fonts.regular, color: colors.gray02 }}
      >
        Evolving into an AI-enabled tax professional.
      </p>
    </div>
  );
}

function JourneyPath() {
  return (
    <div
      className="pointer-events-none absolute"
      style={{ left: 187, top: 116, width: 1049.519, height: 286.501 }}
      data-node-id="3754:4251"
      aria-hidden
    >
      <div
        className="absolute"
        style={{
          top: "-52.56%",
          right: "-14.42%",
          bottom: "-52.85%",
          left: "-14.34%",
        }}
      >
        <img alt="" className="block size-full max-w-none" src={ASSET.journeyPath} />
      </div>
    </div>
  );
}

function BottomBanner() {
  return (
    <div
      className="absolute left-0 top-[424px] flex h-[26px] w-full items-center justify-center border-t border-solid"
      style={{ background: colors.confidentBlack, borderColor: colors.borderOnDark }}
    >
      <div className="flex items-center gap-4">
        <p
          className="shrink-0 whitespace-nowrap text-[9px] uppercase tracking-[1px]"
          style={{ fontFamily: fonts.bold, color: colors.gray02 }}
        >
          From uncertainty to impact
        </p>
        <div className="relative size-1 shrink-0 overflow-clip">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={ASSET.bannerDot} />
        </div>
        <p
          className="shrink-0 whitespace-nowrap text-[9px] uppercase tracking-[1px]"
          style={{ fontFamily: fonts.bold, color: colors.gray02 }}
        >
          From learning to leading
        </p>
        <div className="relative size-1 shrink-0 overflow-clip">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={ASSET.bannerDot} />
        </div>
        <p
          className="shrink-0 whitespace-nowrap text-[9px] uppercase tracking-[1px]"
          style={{ fontFamily: fonts.bold, color: colors.yellow }}
        >
          From user to AI-enabled tax professional
        </p>
        <div className="relative h-0 w-[60px] shrink-0">
          <img alt="" className="block size-full max-w-none" src={ASSET.bannerLine} />
        </div>
      </div>
    </div>
  );
}

function AscentCanvas() {
  return (
    <div
      className="relative size-full overflow-clip"
      style={{ background: colors.confidentBlack }}
      data-name="the-ascent-journey-infographic"
      data-node-id="3743:16946"
    >
      {/* Mountain photograph + tint overlay */}
      <div className="absolute left-0 top-0 h-[444px] w-full">
        <img
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          src={ASSET.cleanBackground}
        />
      </div>
      <div
        className="absolute left-0 top-0 h-[450px] w-full"
        style={{ background: "rgba(26, 26, 36, 0.45)" }}
        aria-hidden
      />

      <HeaderTitleBlock />
      <JourneyPath />

      {/* Summit flag */}
      <div className="absolute left-[1300px] top-[45px] flex flex-col items-center gap-1">
        <div className="relative size-6 shrink-0 overflow-clip">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={ASSET.flag} />
        </div>
        <div
          className="absolute left-[6px] top-[15px] h-8 w-3 opacity-15"
          style={{ background: colors.yellow }}
          aria-hidden
        />
      </div>

      {/* Base camp hiker silhouette */}
      <div className="absolute left-[158px] top-[178px] flex flex-col items-center">
        <div className="relative h-16 w-8 shrink-0 overflow-clip">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={ASSET.personStanding} />
        </div>
      </div>

      {/* Thought-bubble callouts */}
      {CALLOUTS.map((c) => (
        <div key={c.quote.slice(0, 24)} className="absolute" style={{ left: c.left, top: c.top }}>
          <CalloutBox quote={c.quote} width={c.width} rounded={"rounded" in c ? c.rounded : 12} />
        </div>
      ))}

      <BaseCampStartMarker />

      {/* Stage icon nodes */}
      {STAGE_NODES.map((node) => (
        <StageNode key={node.alt} {...node} />
      ))}

      {/* Base camp label */}
      <div className="absolute left-[41px] top-[374px] flex w-[115px] flex-col items-end gap-0.5">
        <p
          className="shrink-0 whitespace-nowrap text-[11px] uppercase"
          style={{ fontFamily: fonts.bold, color: colors.yellow }}
        >
          Base Camp
        </p>
        <p
          className="min-w-full text-right text-[10px] leading-[14px]"
          style={{ fontFamily: fonts.regular, color: colors.gray02 }}
        >
          Uncertain and unsure
        </p>
      </div>

      {/* Stage labels */}
      {STAGE_LABELS.map((label) => (
        <StageLabel key={label.title} {...label} />
      ))}

      <BottomBanner />
    </div>
  );
}

export default function AscentJourneyInfographic() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={shellRef}
      className="relative w-full overflow-hidden"
      style={{ height: H * scale, background: colors.confidentBlack }}
      data-name="ascent-journey-infographic-viewport"
    >
      <div
        className="absolute left-1/2 top-0"
        style={{
          width: W,
          height: H,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <AscentCanvas />
      </div>
    </div>
  );
}
