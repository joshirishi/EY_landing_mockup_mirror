/**
 * EY AI Tax Hub — Core Processing Pipeline illustration
 * Figma node 3543:4136 — Infographic - Core Processing Pipeline (v2)
 *
 * Renders at the designed 1200×820 size, then scales to the container width.
 */

import { useEffect, useRef, useState } from "react";

const ASSET = {
  ringGrayHalf: "/pipeline/v2/ring-gray-half.svg",
  ringWhiteHalf: "/pipeline/v2/ring-white-half.svg",
  copilot: "/pipeline/copilot-icon.svg",
  iconChat: "/pipeline/v2/icon-chat.svg",
  iconRag: "/pipeline/v2/icon-rag.svg",
  iconHuman: "/pipeline/v2/icon-human.svg",
  iconModel: "/pipeline/v2/icon-model.svg",
  info: "/pipeline/info.svg",
  word: "/pipeline/word.svg",
  excel: "/pipeline/excel.svg",
  teams: "/pipeline/teams.svg",
  powerpoint: "/pipeline/powerpoint.svg",
  sharepoint: "/pipeline/sharepoint.svg",
  outlook: "/pipeline/outlook.svg",
} as const;

const W = 1200;
const H = 820;

/** Icon-label mini-cards scattered around the ring — exact Figma positions. */
const CARDS = [
  { title: "Chat", left: 414, top: 86, composedIcon: ASSET.iconChat, bakedIcon: null },
  { title: "RAG", left: 258, top: 235, composedIcon: null, bakedIcon: ASSET.iconRag },
  { title: "Human in the Loop", left: 251, top: 406, composedIcon: ASSET.iconHuman, bakedIcon: null },
  { title: "Model", left: 364, top: 589, composedIcon: null, bakedIcon: ASSET.iconModel },
] as const;

function PipelineCard({
  title,
  left,
  top,
  composedIcon,
  bakedIcon,
}: {
  title: string;
  left: number;
  top: number;
  composedIcon: string | null;
  bakedIcon: string | null;
}) {
  return (
    <div
      className="absolute flex w-[100px] flex-col items-center gap-3"
      style={{ left, top }}
    >
      {bakedIcon ? (
        <img alt="" className="size-[67px] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.24)]" src={bakedIcon} />
      ) : (
        <div className="flex size-[67px] items-center justify-center rounded-[10px] bg-[#ffe600] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.24)]">
          <img alt="" className="size-[42px]" src={composedIcon ?? undefined} />
        </div>
      )}
      <p className="whitespace-nowrap text-center font-['EYInterstate:Bold',sans-serif] text-base leading-6 text-white">
        {title}
      </p>
    </div>
  );
}

/** Curved ring labels — "Core Processing Pipeline" (left, gray half) / "MS 365 Copilot" (right, white half). */
function RingLabels() {
  return (
    <svg
      className="pointer-events-none absolute inset-0"
      width={384}
      height={384}
      viewBox="0 0 384 384"
    >
      <defs>
        <path id="ring-label-left" d="M 138 43.5 A 158 158 0 0 0 138 340.5" fill="none" />
        <path id="ring-label-right" d="M 246 43.5 A 158 158 0 0 1 246 340.5" fill="none" />
      </defs>
      <text
        fontFamily="EYInterstate:Bold, sans-serif"
        fontWeight={700}
        fontSize={13.5}
        letterSpacing="0.5"
        fill="#1a1a24"
      >
        <textPath href="#ring-label-left" startOffset="50%" textAnchor="middle">
          Core Processing Pipeline
        </textPath>
      </text>
      <text
        fontFamily="EYInterstate:Bold, sans-serif"
        fontWeight={700}
        fontSize={13.5}
        letterSpacing="0.5"
        fill="#1a1a24"
      >
        <textPath href="#ring-label-right" startOffset="50%" textAnchor="middle">
          MS 365 Copilot
        </textPath>
      </text>
    </svg>
  );
}

/** Center ring: two-tone (gray / white) halves, curved labels, Copilot mark. */
function CopilotRing() {
  return (
    <div className="absolute left-[409px] top-[224px] size-[384px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="-rotate-90 size-[384px]">
          <div className="relative size-[384px]">
            <div className="absolute bottom-1/2 left-0 right-0 top-0">
              <img alt="" className="block size-full max-w-none" src={ASSET.ringGrayHalf} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-1/2">
              <img alt="" className="block size-full max-w-none" src={ASSET.ringWhiteHalf} />
            </div>
          </div>
        </div>
      </div>

      <RingLabels />

      {/* Inner cutout — 248px — punches the ring hole through to the page background. */}
      <div className="absolute left-[68px] top-[68px] size-[248px] rounded-full bg-[#1a1a24]" />

      <div className="absolute left-1/2 top-1/2 flex size-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <img alt="Microsoft Copilot" className="block size-full max-w-none" src={ASSET.copilot} />
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
      data-node-id="3543:4136"
    >
      <div
        className="absolute left-0 top-0 origin-top-left bg-[#1a1a24]"
        style={{ width: W, height: H, transform: `scale(${scale})` }}
      >
        <CopilotRing />

        {CARDS.map((card) => (
          <PipelineCard key={card.title} {...card} />
        ))}

        <div className="absolute" style={{ inset: "12.44% 38.9% 75.54% 53.08%" }}>
          <img alt="Microsoft Word" className="absolute inset-0 size-full max-w-none" src={ASSET.word} />
        </div>
        <div className="absolute" style={{ inset: "20.34% 27.97% 67.65% 64.02%" }}>
          <img alt="Microsoft Excel" className="absolute inset-0 size-full max-w-none" src={ASSET.excel} />
        </div>
        <div className="absolute left-[839px] top-[281.06px] h-[99px] w-[94px] overflow-clip">
          <img alt="Microsoft Teams" className="absolute inset-0 size-full max-w-none" src={ASSET.teams} />
        </div>
        <div className="absolute" style={{ inset: "52.16% 20.91% 36.4% 71.08%" }}>
          <img alt="Microsoft PowerPoint" className="absolute inset-0 size-full max-w-none" src={ASSET.powerpoint} />
        </div>
        <div className="absolute left-[768.25px] top-[536.18px] h-[108.176px] w-[96.156px] overflow-clip">
          <img alt="Microsoft SharePoint" className="absolute inset-0 size-full max-w-none" src={ASSET.sharepoint} />
        </div>
        <div className="absolute left-[643.29px] top-[609.71px] h-[91.349px] w-[96.156px] overflow-clip">
          <img alt="Microsoft Outlook" className="absolute inset-0 size-full max-w-none" src={ASSET.outlook} />
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
