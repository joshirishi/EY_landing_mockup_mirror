/**
 * EY AI Tax Hub — Core Processing Pipeline illustration
 * Figma node 3440:2917 — Infographic - Core Processing Pipeline
 *
 * Renders at the designed 1200×820 size, then scales to the container width.
 */

import { useEffect, useRef, useState } from "react";

const ASSET = {
  circleGlowTop: "/pipeline/circle-glow-top.svg",
  circleGlowBot: "/pipeline/circle-glow-bot.svg",
  bot: "/pipeline/bot.svg",
  copilot: "/pipeline/copilot-icon.svg",
  message: "/pipeline/message-circle.svg",
  database: "/pipeline/database.svg",
  userCheck: "/pipeline/user-check.svg",
  cpu: "/pipeline/cpu.svg",
  arrow: "/pipeline/arrow-right.svg",
  info: "/pipeline/info.svg",
  word: "/pipeline/word.svg",
  excel: "/pipeline/excel.svg",
  teams: "/pipeline/teams.svg",
  powerpoint: "/pipeline/powerpoint.svg",
  sharepoint: "/pipeline/sharepoint.svg",
  outlook: "/pipeline/outlook.svg",
  line1: "/pipeline/line1.svg",
  line3: "/pipeline/line3.svg",
  line4: "/pipeline/line4.svg",
} as const;

const W = 1200;
const H = 820;

const CARDS = [
  {
    title: "Chat",
    desc: "Conversational interface layer for user interaction",
    icon: ASSET.message,
  },
  {
    title: "RAG",
    desc: "Retrieval-Augmented Generation for contextual data",
    icon: ASSET.database,
  },
  {
    title: "Human in the Loop",
    desc: "Expert oversight and decision validation layer",
    icon: ASSET.userCheck,
  },
  {
    title: "Model",
    desc: "AI/ML model inference and prediction engine",
    icon: ASSET.cpu,
  },
] as const;

function PipelineCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-[#C4C4CD] shadow-[0px_2px_5px_rgba(0,0,0,0.08)] flex items-center justify-between px-4 py-3.5 rounded-xl w-[420px]">
      <div className="flex flex-1 gap-3 items-center min-w-0">
        {/* Yellow icon tile — 40×40 outer, 28×28 glyph */}
        <div className="bg-[#ffe600] flex items-center justify-center rounded-[10px] shrink-0 size-10">
          <img alt="" className="size-7" height={28} src={icon} width={28} />
        </div>
        <div className="flex flex-1 flex-col gap-1 min-w-0">
          <p className="font-['EYInterstate:Bold',sans-serif] leading-6 text-base text-[#2e2e38] whitespace-nowrap">
            {title}
          </p>
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[22.4px] text-sm text-[#1a1a24] w-[285px]">
            {desc}
          </p>
        </div>
      </div>
      <img alt="" className="shrink-0 size-[18px]" height={18} src={ASSET.arrow} width={18} />
    </div>
  );
}

/** Center ring: exported glow halves + curved labels + Copilot Engine core. */
function CopilotRing() {
  return (
    <div className="absolute left-[521px] top-[219px] size-[384px]">
      {/* Figma circle-glow halves — 384×192 each, rotated -90° */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="-rotate-90 size-[384px]">
          <div className="relative size-[384px]">
            <div className="absolute bottom-1/2 left-0 right-0 top-0">
              <img alt="" className="block size-full max-w-none" height={192} src={ASSET.circleGlowTop} width={384} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-1/2">
              <img alt="" className="block size-full max-w-none" height={192} src={ASSET.circleGlowBot} width={384} />
            </div>
          </div>
        </div>
      </div>

      {/* Curved labels (not in exported assets — match Figma screenshot) */}
      <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 384 384" fill="none" aria-hidden>
        <defs>
          {/* Bottom→top on left so letters stay upright */}
          <path id="pipelineLeftLabel" d="M192 320 A128 128 0 0 1 192 64" />
          <path id="pipelineRightLabel" d="M192 64 A128 128 0 0 1 192 320" />
        </defs>
        <text fill="#1A1A24" fontFamily="EYInterstate, sans-serif" fontSize="12" fontWeight="700" letterSpacing="1">
          <textPath href="#pipelineLeftLabel" startOffset="50%" textAnchor="middle">
            Core Processing Pipeline
          </textPath>
        </text>
        <text fill="#1A1A24" fontFamily="EYInterstate, sans-serif" fontSize="12" fontWeight="700" letterSpacing="1">
          <textPath href="#pipelineRightLabel" startOffset="50%" textAnchor="middle">
            MS 365 Copilot
          </textPath>
        </text>
      </svg>

      {/* Inner cutout — 248px */}
      <div className="absolute left-[68px] top-[68px] size-[248px] rounded-full bg-[#1a1a24]" />

      <div className="absolute left-1/2 top-1/2 flex w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,230,0,0.2)] bg-[#2E2E38] p-3">
          <img alt="" className="size-9" height={36} src={ASSET.bot} width={36} />
        </div>
        <p className="w-[120px] shrink-0 text-center font-['EYInterstate:Bold',sans-serif] text-[15px] leading-normal text-white">
          Copilot Engine
        </p>
        <img alt="Microsoft Copilot" className="size-[116px] shrink-0" height={116} src={ASSET.copilot} width={116} />
      </div>
    </div>
  );
}

export default function CoreProcessingPipeline() {
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
      className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-2xl"
      style={{ height: H * scale }}
      data-name="Infographic - Core Processing Pipeline"
      data-node-id="3440:2917"
    >
      <div
        className="absolute left-0 top-0 origin-top-left bg-[#1a1a24]"
        style={{ width: W, height: H, transform: `scale(${scale})` }}
      >
        <CopilotRing />

        <div className="absolute left-12 top-[136px] flex h-[588px] flex-col items-start justify-between">
          {CARDS.map((card) => (
            <PipelineCard key={card.title} {...card} />
          ))}
        </div>

        <div className="absolute" style={{ inset: "11.83% 29.57% 76.15% 62.42%" }}>
          <img alt="Microsoft Word" className="absolute inset-0 size-full max-w-none" src={ASSET.word} />
        </div>
        <div className="absolute" style={{ inset: "19.73% 18.63% 68.26% 73.35%" }}>
          <img alt="Microsoft Excel" className="absolute inset-0 size-full max-w-none" src={ASSET.excel} />
        </div>
        <div className="absolute left-[951px] top-[276px] h-[99px] w-[94px] overflow-clip">
          <img alt="Microsoft Teams" className="absolute inset-0 size-full max-w-none" src={ASSET.teams} />
        </div>
        <div className="absolute" style={{ inset: "51.55% 11.58% 37.01% 80.41%" }}>
          <img alt="Microsoft PowerPoint" className="absolute inset-0 size-full max-w-none" src={ASSET.powerpoint} />
        </div>
        <div className="absolute left-[880px] top-[531px] h-[108px] w-[96px] overflow-clip">
          <img alt="Microsoft SharePoint" className="absolute inset-0 size-full max-w-none" src={ASSET.sharepoint} />
        </div>
        <div className="absolute left-[755px] top-[605px] h-[91px] w-[96px] overflow-clip">
          <img alt="Microsoft Outlook" className="absolute inset-0 size-full max-w-none" src={ASSET.outlook} />
        </div>

        <div className="absolute left-[492px] top-[603px] flex h-[108px] w-[173px] items-center justify-center">
          <div className="flex-none rotate-[-27.55deg]">
            <div className="relative h-[28px] w-[181px]">
              <img alt="" className="absolute inset-0 size-full max-w-none" src={ASSET.line1} />
            </div>
          </div>
        </div>
        <div className="absolute left-[474px] top-[364px] h-0 w-[43px]">
          <img alt="" className="absolute inset-[-4px_0] size-full max-w-none" src={ASSET.line3} />
        </div>
        <div className="absolute left-[474px] top-[511px] h-0 w-[43px]">
          <img alt="" className="absolute inset-[-4px_0] size-full max-w-none" src={ASSET.line3} />
        </div>
        <div className="absolute left-[472px] top-[153px] flex h-[95px] w-[148px] items-center justify-center">
          <div className="flex-none rotate-[26.57deg]">
            <div className="relative h-[31px] w-[149px]">
              <img alt="" className="absolute inset-0 size-full max-w-none" src={ASSET.line4} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex h-12 w-full items-center justify-center gap-2 bg-[#2E2E38] px-8">
          <img alt="" className="size-4" height={16} src={ASSET.info} width={16} />
          <p className="font-['EYInterstate:Regular',sans-serif] text-sm leading-[22.4px] text-[#c4c4cd] whitespace-nowrap">
            EY AI Tax Hub · Core Processing Pipeline · Confidential
          </p>
        </div>
      </div>
    </div>
  );
}
