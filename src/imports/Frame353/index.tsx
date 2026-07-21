import { useState } from "react";
import svgPaths from "./svg-p7dq2iziwz";
import cardSvg from "../ContentArea/svg-1dplfat9j5";
import imgBackgroundMotif from "./f5e2e2f2ea31280810b6cbd46b1af92fee8b344c.png";
import { imgGroup, imgBackground, imgBackground1, imgBackground2, imgBackground3 } from "./svg-cx48y";
import TimelineCard from "../TimelineCard/index";

function Div() {
  return <div className="bg-[#ffe600] h-[3px] relative shrink-0 w-full" data-name="div" />;
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute left-0 size-[40px] top-0" data-name="Logo">
          <div className="absolute inset-[50.09%_59.92%_0.87%_0.85%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6919 19.6154">
              <path d={svgPaths.p27ea6ec0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[50.09%_17.76%_0.87%_33.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5808 19.6154">
              <path d={svgPaths.p35786b00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_3.06%_64.62%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.7776 14.153">
              <path d={svgPaths.p18fe2b40} fill="var(--fill-0, #FFE600)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="h-[42px] relative shrink-0 w-[57.984px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="div">
      <div aria-hidden className="absolute border-[#747480] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['EYInterstate:Regular',sans-serif] leading-[19.5px] left-[13px] not-italic text-[13px] text-white top-[2px] whitespace-nowrap">India AI Tax Hub</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[42px] relative shrink-0 w-[183.898px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Div2 />
        <Div3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ffe600] flex-[1_0_0] min-w-px relative" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[22px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#2e2e38] text-[13px] text-center whitespace-nowrap">AI as a Thinking Partner</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[35.5px] relative shrink-0 w-[171.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between pr-[0.008px] relative shrink-0 w-[1336px]" data-name="div">
      <Link />
      <Container1 />
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="nav">
      <Div />
      <Div1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">About EY India AI Tax Hub</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">{`Research & Litigation`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#ffe600] text-[13px] whitespace-nowrap">Compliance</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">EY.ai Tax Labs</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">EY Tax AI Performance</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">How it helps</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">Why EY</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">Responsible AI</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">Resources</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#c4c4cd] text-[13px] whitespace-nowrap">Coming soon</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0 w-[180px]" data-name="NavLink">
          <Frame16 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0 w-[152px]" data-name="NavLink">
          <Frame18 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0 w-[92px]" data-name="NavLink">
          <Frame15 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0" data-name="NavLink">
          <Frame19 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0" data-name="NavLink">
          <Frame20 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0" data-name="NavLink">
          <Frame21 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0" data-name="NavLink">
          <Frame22 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0" data-name="NavLink">
          <Frame23 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0" data-name="NavLink">
          <Frame24 />
        </div>
        <div className="content-stretch flex flex-col items-start px-px relative shrink-0" data-name="NavLink">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[892.711px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Frame17 />
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex items-center pr-[0.008px] relative shrink-0 w-[1192px]" data-name="div">
      <Container2 />
    </div>
  );
}

function Nav1() {
  return (
    <div className="bg-[#23232f] content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="nav">
      <Div4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic relative shrink-0 w-[800px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[56px] relative shrink-0 text-[#ffe600] text-[48px] whitespace-nowrap">EY.ai Tax Labs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[#d7d7dc] text-[18px] w-[min-content]">A structured phased engagement designed to empower your tax teams with AI capabilities, from foundational training to advanced workflow integration.</p>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="header-section">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[24px] pt-[40px] px-[64px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#ffe600] relative shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic px-[24px] py-[8px] relative size-full text-[#2e2e38] whitespace-nowrap">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['EYInterstate:Bold',sans-serif] leading-[32px] relative shrink-0 text-[20px] underline">{`AI PIPELINE & CONTEXT`}</p>
        <p className="font-['EYInterstate:Light',sans-serif] leading-[22px] relative shrink-0 text-[14px]">© 2026 EY.ai Tax Labs. Secure Workspace Architecture.</p>
      </div>
    </div>
  );
}

function LeftGroupBg() {
  return (
    <div className="bg-[#f6f6fa] content-stretch drop-shadow-[0px_0px_1px_rgba(35,35,47,0.06),0px_1px_1px_rgba(35,35,47,0.08)] flex flex-col items-start relative rounded-[16px] shrink-0 size-[440px]" data-name="left-group-bg">
      <div aria-hidden className="absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame36 />
    </div>
  );
}

function Cpu() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="cpu">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="cpu">
          <path d={svgPaths.p235dd700} id="Vector" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CircleContainer() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center justify-center relative rounded-[57px] shrink-0 size-[102px]" data-name="circle-container">
      <div aria-hidden className="absolute border-2 border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[57px]" />
      <Cpu />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-center w-full" data-name="label-container">
      <p className="font-['EYInterstate:Light',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-white w-full">Cognitive Engine</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6b7280] text-[10px] uppercase w-full">AI Brain</p>
    </div>
  );
}

function NodeCognitiveEngine() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[143px] items-center relative shrink-0 w-full" data-name="Node-Cognitive Engine">
      <CircleContainer />
      <LabelContainer />
    </div>
  );
}

function MicrosoftCopilotIcon() {
  return (
    <div className="relative shrink-0 size-[120px]" data-name="Microsoft_Copilot_Icon 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Microsoft_Copilot_Icon 1">
          <path d={svgPaths.p7c79500} fill="url(#paint0_radial_1_1205)" id="Vector" />
          <path d={svgPaths.p23722480} fill="url(#paint1_radial_1_1205)" id="Vector_2" />
          <path d={svgPaths.p21c4d770} fill="url(#paint2_linear_1_1205)" id="Vector_3" />
          <path d={svgPaths.p21c4d770} fill="url(#paint3_linear_1_1205)" id="Vector_4" />
          <path d={svgPaths.pf74a800} fill="url(#paint4_radial_1_1205)" id="Vector_5" />
          <path d={svgPaths.pf74a800} fill="url(#paint5_linear_1_1205)" id="Vector_6" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(95.0124 51.286) rotate(-129.304) scale(43.2582 40.6765)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1205" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(27.8038 82.0428) rotate(51.84) scale(39.978 38.7797)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1205" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1205" x1="31.25" x2="36.971" y1="18.75" y2="84.9377">
            <stop offset="0.156162" stopColor="#0D91E1" />
            <stop offset="0.487484" stopColor="#52B471" />
            <stop offset="0.652394" stopColor="#98BD42" />
            <stop offset="0.937361" stopColor="#FFC800" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1205" x1="36.25" x2="39.374" y1="10" y2="82.213">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(103.297 30.7033) rotate(109.274) scale(95.9683 114.967)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_1205" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1205" x1="106.465" x2="106.424" y1="33.365" y2="53.0368">
            <stop offset="0.0581535" stopColor="#F8ADFA" />
            <stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col h-[365px] items-center justify-between relative shrink-0 w-[258px]">
      <NodeCognitiveEngine />
      <div className="flex h-[66px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[66px]" data-name="Connection Line">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 11.547">
                <path d={svgPaths.p3a9773f0} fill="var(--stroke-0, white)" fillOpacity="0.7" id="Connection Line" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <MicrosoftCopilotIcon />
      <div className="absolute h-0 left-[196px] top-[318px] w-[66px]" data-name="Connection Line">
        <div className="absolute inset-[-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 11.547">
            <path d={svgPaths.p3a9773f0} fill="var(--stroke-0, white)" fillOpacity="0.7" id="Connection Line" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[-14px] top-[48px] w-[66px]" data-name="Connection Line">
        <div className="absolute inset-[-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 11.547">
            <path d={svgPaths.p3a9773f0} fill="var(--stroke-0, white)" fillOpacity="0.7" id="Connection Line" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#ffe600] relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col items-end not-italic px-[24px] py-[8px] relative size-full text-[#2e2e38] whitespace-nowrap">
          <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['EYInterstate:Bold',sans-serif] leading-[32px] relative shrink-0 text-[20px] underline">MICROSOFT 365 ECOSYSTEM</p>
          <p className="font-['EYInterstate:Light',sans-serif] leading-[22px] relative shrink-0 text-[14px] text-right">M365 Copilot Licensed Environment</p>
        </div>
      </div>
    </div>
  );
}

function RightGroupBg() {
  return (
    <div className="bg-[#f6f6fa] content-stretch drop-shadow-[0px_0px_1px_rgba(35,35,47,0.06),0px_1px_1px_rgba(35,35,47,0.08)] flex flex-col items-end opacity-86 relative rounded-[16px] shrink-0 size-[440px]" data-name="right-group-bg">
      <div aria-hidden className="absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame37 />
    </div>
  );
}

function MessageSquare() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="message-square">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="message-square">
          <path d={svgPaths.p81457f2} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CircleContainer1() {
  return (
    <div className="bg-[#ffe600] content-stretch flex flex-col items-center justify-center relative rounded-[36px] shrink-0 size-[72px]" data-name="circle-container">
      <div aria-hidden className="absolute border-[#2a2a35] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <MessageSquare />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center not-italic relative shrink-0 text-center w-full" data-name="label-container">
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['EYInterstate:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#9ca3af] text-[16px] underline w-full">Conversational AI</p>
      <p className="font-['EYInterstate:Light',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-full">Chat / Msg</p>
    </div>
  );
}

function NodeConversationalAi() {
  return (
    <div className="aspect-[140/109] content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative shrink-0" data-name="Node-Conversational AI">
      <CircleContainer1 />
      <LabelContainer1 />
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="file-text">
          <path d={svgPaths.p34527aa0} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CircleContainer2() {
  return (
    <div className="bg-[#ffe600] content-stretch flex flex-col items-center justify-center relative rounded-[36px] shrink-0 size-[72px]" data-name="circle-container">
      <div aria-hidden className="absolute border-[#2a2a35] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <FileText />
    </div>
  );
}

function LabelContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center not-italic relative shrink-0 text-center w-full" data-name="label-container">
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['EYInterstate:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#9ca3af] text-[16px] underline w-full">Document Ingestion</p>
      <p className="font-['EYInterstate:Light',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-full">Unstructured</p>
    </div>
  );
}

function NodeDocumentIngestion() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-self-end relative self-stretch shrink-0 w-[153px]" data-name="Node-Document Ingestion">
      <CircleContainer2 />
      <LabelContainer2 />
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="users">
          <path d={svgPaths.p19718000} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CircleContainer3() {
  return (
    <div className="bg-[#ffe600] content-stretch flex flex-col items-center justify-center relative rounded-[36px] shrink-0 size-[72px]" data-name="circle-container">
      <div aria-hidden className="absolute border-[#2a2a35] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <Users />
    </div>
  );
}

function LabelContainer3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center not-italic relative shrink-0 text-center w-full" data-name="label-container">
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['EYInterstate:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#9ca3af] text-[16px] underline w-full">{`People & Context`}</p>
      <p className="font-['EYInterstate:Light',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-full">User Graphs</p>
    </div>
  );
}

function NodePeopleContext() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative self-stretch shrink-0" data-name="Node-People & Context">
      <CircleContainer3 />
      <LabelContainer3 />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="shield-check">
          <path d={svgPaths.p6bd580} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CircleContainer4() {
  return (
    <div className="bg-[#ffe600] content-stretch flex flex-col items-center justify-center relative rounded-[36px] shrink-0 size-[72px]" data-name="circle-container">
      <div aria-hidden className="absolute border-[#2a2a35] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <ShieldCheck />
    </div>
  );
}

function LabelContainer4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center not-italic relative shrink-0 text-center w-full" data-name="label-container">
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['EYInterstate:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#9ca3af] text-[16px] underline w-full">{`Trust & Guardrails`}</p>
      <p className="font-['EYInterstate:Light',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-full">Validation</p>
    </div>
  );
}

function NodeTrustGuardrails() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative self-stretch shrink-0" data-name="Node-Trust & Guardrails">
      <CircleContainer4 />
      <LabelContainer4 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute gap-x-[55px] gap-y-[109px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[253px] left-[132px] top-[181px] w-[346px]">
      <NodeConversationalAi />
      <NodeDocumentIngestion />
      <NodePeopleContext />
      <NodeTrustGuardrails />
    </div>
  );
}

function MicrosoftOfficeWord2025Present() {
  return (
    <div className="h-[123.243px] relative shrink-0 w-[120px]" data-name="Microsoft_Office_Word_(2025–present) 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 123.243">
        <g clipPath="url(#clip0_1_1148)" id="Microsoft_Office_Word_(2025âpresent) 1">
          <path d={svgPaths.p321637f0} fill="url(#paint0_radial_1_1148)" id="Vector" />
          <path d={svgPaths.p358e5500} fill="url(#paint1_linear_1_1148)" id="Vector_2" />
          <path d={svgPaths.p358e5500} fill="url(#paint2_radial_1_1148)" fillOpacity="0.6" id="Vector_3" />
          <path d={svgPaths.p358e5500} fill="url(#paint3_radial_1_1148)" fillOpacity="0.1" id="Vector_4" />
          <path d={svgPaths.p2054d880} fill="url(#paint4_linear_1_1148)" id="Vector_5" />
          <path d={svgPaths.p2054d880} fill="url(#paint5_radial_1_1148)" fillOpacity="0.8" id="Vector_6" />
          <path d={svgPaths.p2d9d3000} fill="url(#paint6_radial_1_1148)" id="Vector_7" />
          <path d={svgPaths.p2d9d3000} fill="url(#paint7_radial_1_1148)" fillOpacity="0.65" id="Vector_8" />
          <path d={svgPaths.p2cc57600} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(123.822 122.435) scale(163.097 68.982)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1148" r="1">
            <stop offset="0.18" stopColor="#1657F4" />
            <stop offset="0.57" stopColor="#0036C4" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1148" x1="17.1429" x2="95.8972" y1="65.0451" y2="65.0451">
            <stop stopColor="#66C0FF" />
            <stop offset="0.26" stopColor="#0094F0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-69.3554 72.8482 179.711 170.581 111.444 48.1885)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_1148" r="1">
            <stop offset="0.14" stopColor="#D471FF" />
            <stop offset="0.83" stopColor="#509DF5" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(109.121 70.1761) rotate(90) scale(63.7441 348.514)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_1148" r="1">
            <stop offset="0.28" stopColor="#4F006F" stopOpacity="0" />
            <stop offset="1" stopColor="#4F006F" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1148" x1="17.1429" x2="120" y1="30.0577" y2="31.7745">
            <stop stopColor="#9DEAFF" />
            <stop offset="0.2" stopColor="#3BD5FF" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-98.4573 22.9678 55.0995 235.489 116.603 -10.4512)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_1148" r="1">
            <stop offset="0.06" stopColor="#E4A7FE" />
            <stop offset="0.54" stopColor="#E4A7FE" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(54.8634 54.781 54.8634 -54.781 -0.602232 50.9097)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_1148" r="1">
            <stop offset="0.08" stopColor="#367AF2" />
            <stop offset="0.87" stopColor="#001A8F" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(37.1479 90.8988) rotate(90) scale(38.3423 43.7829)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_1148" r="1">
            <stop offset="0.59" stopColor="#2763E5" stopOpacity="0" />
            <stop offset="0.97" stopColor="#58AAFE" />
          </radialGradient>
          <clipPath id="clip0_1_1148">
            <rect fill="white" height="123.243" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MicrosoftOfficePowerPoint2025Present() {
  return (
    <div className="h-[116.327px] relative shrink-0 w-[120px]" data-name="Microsoft_Office_PowerPoint_(2025–present) 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.997 116.327">
        <g id="surface1">
          <path d={svgPaths.p1f7cd080} fill="url(#paint0_linear_1_1103)" id="Vector" />
          <path d={svgPaths.p1f7cd080} fill="url(#paint1_radial_1_1103)" id="Vector_2" />
          <path d={svgPaths.p1f7cd080} fill="url(#paint2_radial_1_1103)" id="Vector_3" />
          <path d={svgPaths.p2219c430} fill="url(#paint3_linear_1_1103)" id="Vector_4" />
          <path d={svgPaths.p2219c430} fill="url(#paint4_radial_1_1103)" id="Vector_5" />
          <path d={svgPaths.p2219c430} fill="url(#paint5_radial_1_1103)" id="Vector_6" />
          <path d={svgPaths.p2219c430} fill="url(#paint6_radial_1_1103)" id="Vector_7" />
          <path d={svgPaths.p2219c430} fill="url(#paint7_radial_1_1103)" id="Vector_8" />
          <path d={svgPaths.p35f44800} fill="url(#paint8_radial_1_1103)" id="Vector_9" />
          <path d={svgPaths.p35f44800} fill="url(#paint9_radial_1_1103)" id="Vector_10" />
          <path d={svgPaths.p236d6e00} fill="var(--fill-0, white)" id="Vector_11" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1103" x1="56.0392" x2="-15.2166" y1="-3.70303" y2="64.3484">
            <stop offset="0.0582736" stopColor="#FF7F48" />
            <stop offset="1" stopColor="#E5495B" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-82.4338 82.574 -138.747 -138.983 84.8807 33.7524)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1103" r="1">
            <stop offset="0.151523" stopColor="#AA1D2D" />
            <stop offset="0.380855" stopColor="#D12B18" stopOpacity="0.439216" />
            <stop offset="0.601996" stopColor="#FF3C00" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(99.9251 -47.2788 85.507 181.337 -16.3945 105.442)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_1103" r="1">
            <stop offset="0.4067" stopColor="#FF66FB" stopOpacity="0.501961" />
            <stop offset="1" stopColor="#EA3D01" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1103" x1="72.9269" x2="135.494" y1="71.1059" y2="24.8116">
            <stop offset="0.310768" stopColor="#FF6E30" />
            <stop offset="0.634576" stopColor="#FFA05C" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(73.4674 15.421 -14.6766 70.1588 52.1819 65.1184)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_1103" r="1">
            <stop offset="0.78593" stopColor="#FFA05C" stopOpacity="0" />
            <stop offset="0.904889" stopColor="#FFCE84" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(63.4243 -41.5706 39.687 60.7565 63.9577 57.2907)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_1103" r="1">
            <stop offset="0.295239" stopColor="#FF99E9" stopOpacity="0.8" />
            <stop offset="0.727968" stopColor="#FF99E9" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(53.0876 -60.8817 55.5075 48.5662 55.4462 66.1703)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_1103" r="1">
            <stop stopColor="#FD6EF9" />
            <stop offset="0.637205" stopColor="#FF9944" />
            <stop offset="0.85186" stopColor="#FCC479" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.99656 40.7028 -91.8327 -13.5754 50.1646 7.68683)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_1103" r="1">
            <stop offset="0.144283" stopColor="#FF8D13" />
            <stop offset="0.537266" stopColor="#FF7F29" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(49.5483 49.6326 -49.5483 49.6326 -0.00603657 55.0612)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_1103" r="1">
            <stop stopColor="#F8193E" />
            <stop offset="0.939062" stopColor="#920616" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(24.768 84.8408) rotate(90) scale(34.7429 39.4839)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_1103" r="1">
            <stop offset="0.575893" stopColor="#FFB055" stopOpacity="0" />
            <stop offset="0.973806" stopColor="#FFF2BE" stopOpacity="0.301961" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function MicrosoftOfficeExcel2025Present() {
  return (
    <div className="h-[123.913px] overflow-clip relative shrink-0 w-[120px]" data-name="Microsoft_Office_Excel_(2025–present) 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.003 123.913">
        <g id="surface1">
          <path d={svgPaths.p1fc05780} fill="url(#paint0_radial_1_1182)" id="Vector" />
          <path d={svgPaths.p1fc05780} fill="url(#paint1_radial_1_1182)" id="Vector_2" />
          <path d={svgPaths.pe701e00} fill="url(#paint2_linear_1_1182)" id="Vector_3" />
          <path d={svgPaths.pe701e00} fill="url(#paint3_linear_1_1182)" id="Vector_4" />
          <path d={svgPaths.p172f3d00} fill="url(#paint4_linear_1_1182)" id="Vector_5" />
          <path d={svgPaths.p172f3d00} fill="url(#paint5_radial_1_1182)" id="Vector_6" />
          <path d={svgPaths.p172f3d00} fill="url(#paint6_linear_1_1182)" id="Vector_7" />
          <path d={svgPaths.p2f187100} fill="url(#paint7_radial_1_1182)" id="Vector_8" />
          <path d={svgPaths.p368c7000} fill="url(#paint8_radial_1_1182)" id="Vector_9" />
          <path d={svgPaths.p368c7000} fill="url(#paint9_radial_1_1182)" id="Vector_10" />
          <path d={svgPaths.p12537000} fill="var(--fill-0, white)" id="Vector_11" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-97.1475 -102.607 -79.2902 75.6614 120.302 131.793)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1182" r="1">
            <stop offset="0.06" stopColor="#379539" />
            <stop offset="0.42" stopColor="#297C2D" />
            <stop offset="0.7" stopColor="#15561C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-41.0737 -39.8666 -30.7244 31.9035 48.255 60.3979)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1182" r="1">
            <stop stopColor="#073B10" stopOpacity="0.698039" />
            <stop offset="0.99" stopColor="#084A13" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1182" x1="17.1432" x2="64.4049" y1="72.2834" y2="72.2834">
            <stop stopColor="#52D17C" />
            <stop offset="0.33" stopColor="#4AA647" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1182" x1="48" x2="48" y1="41.3052" y2="84.3402">
            <stop stopColor="#29852F" stopOpacity="0.301961" />
            <stop offset="0.5" stopColor="#4AA647" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1182" x1="19.8741" x2="77.0818" y1="50.7498" y2="1.31421">
            <stop stopColor="#66D052" />
            <stop offset="1" stopColor="#85E972" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(77.3018 25.553) rotate(-180) scale(30.9353 65.7136)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_1182" r="1">
            <stop offset="0.29" stopColor="#4EB43B" />
            <stop offset="1" stopColor="#72CC61" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1182" x1="44.9654" x2="17.1432" y1="30.9783" y2="30.9783">
            <stop offset="0.18" stopColor="#C0E075" stopOpacity="0" />
            <stop offset="1" stopColor="#D1EB95" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-57.9872 -47.097 46.784 -58.0491 127.241 47.6069)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_1182" r="1">
            <stop offset="0.44" stopColor="#79E96D" />
            <stop offset="1" stopColor="#D0EB76" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(54.8465 55.0684 156.191 -156.79 1.61174 58.8096)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_1182" r="1">
            <stop stopColor="#20A85E" />
            <stop offset="0.94" stopColor="#09442A" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(28.0546 91.5608) rotate(90) scale(38.5538 44.2422)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_1182" r="1">
            <stop offset="0.58" stopColor="#33A662" stopOpacity="0" />
            <stop offset="0.97" stopColor="#98F0B0" stopOpacity="0.301961" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function MicrosoftOfficeSharePoint2025Present() {
  return (
    <div className="h-[133.333px] overflow-clip relative shrink-0 w-[120px]" data-name="Microsoft_Office_SharePoint_(2025–present) 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 133.333">
        <g id="surface1">
          <path d={svgPaths.p11368480} fill="url(#paint0_linear_1_1131)" id="Vector" />
          <path d={svgPaths.p11368480} fill="url(#paint1_radial_1_1131)" id="Vector_2" />
          <path d={svgPaths.p11368480} fill="url(#paint2_radial_1_1131)" id="Vector_3" />
          <path d={svgPaths.p11368480} fill="url(#paint3_radial_1_1131)" id="Vector_4" />
          <path d={svgPaths.p279a7710} fill="url(#paint4_linear_1_1131)" id="Vector_5" />
          <path d={svgPaths.p279a7710} fill="url(#paint5_radial_1_1131)" id="Vector_6" />
          <path d={svgPaths.p279a7710} fill="url(#paint6_radial_1_1131)" id="Vector_7" />
          <path d={svgPaths.p26679380} fill="url(#paint7_linear_1_1131)" id="Vector_8" />
          <path d={svgPaths.p26679380} fill="url(#paint8_linear_1_1131)" id="Vector_9" />
          <path d={svgPaths.p16b7db00} fill="url(#paint9_radial_1_1131)" id="Vector_10" />
          <path d={svgPaths.p16b7db00} fill="url(#paint10_radial_1_1131)" id="Vector_11" />
          <path d={svgPaths.p1b734700} fill="var(--fill-0, white)" id="Vector_12" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1131" x1="24.5813" x2="77.944" y1="6.53866" y2="76.576">
            <stop stopColor="#00E3DF" />
            <stop offset="0.41" stopColor="#0097A8" />
            <stop offset="1" stopColor="#007791" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-23.5253 -56.8512 -102.373 42.2347 63.7114 92.2936)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_1131" r="1">
            <stop offset="0.29" stopColor="#003B5D" stopOpacity="0.2" />
            <stop offset="0.61" stopColor="#004A6C" stopOpacity="0.138039" />
            <stop offset="0.97" stopColor="#006F94" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-19.5285 -48.1169 -86.5399 35.015 58.0828 68.9987)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_1131" r="1">
            <stop offset="0.26" stopColor="#002A42" stopOpacity="0.309804" />
            <stop offset="0.61" stopColor="#004261" stopOpacity="0.213825" />
            <stop offset="0.97" stopColor="#006F94" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-24.608 35.8182 35.8723 24.5715 73.5596 7.45037)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_1131" r="1">
            <stop stopColor="#78EDFF" stopOpacity="0.698039" />
            <stop offset="1" stopColor="#2CCFCA" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1131" x1="65.3707" x2="109.84" y1="45.448" y2="103.813">
            <stop stopColor="#00E3DF" />
            <stop offset="0.48" stopColor="#00A2B8" />
            <stop offset="0.95" stopColor="#00637C" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(13.5858 -38.9473 -70.2816 -24.4397 65.6249 97.6215)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_1131" r="1">
            <stop stopColor="#003B5D" stopOpacity="0.501961" />
            <stop offset="0.49" stopColor="#004C6C" stopOpacity="0.362199" />
            <stop offset="0.97" stopColor="#007A86" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-20.5064 29.8482 29.8926 20.4756 104.836 45.558)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_1131" r="1">
            <stop stopColor="#78EDFF" stopOpacity="0.698039" />
            <stop offset="1" stopColor="#2CCFCA" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1131" x1="40.912" x2="69.256" y1="76.6587" y2="133.341">
            <stop offset="0.05" stopColor="#75FFF6" />
            <stop offset="0.51" stopColor="#00C7D1" />
            <stop offset="0.96" stopColor="#0096AD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_1131" x1="77.984" x2="62.8347" y1="137.139" y2="115.88">
            <stop offset="0.26" stopColor="#0E5A5D" stopOpacity="0.321569" />
            <stop offset="0.54" stopColor="#126C6B" stopOpacity="0.221945" />
            <stop offset="0.97" stopColor="#1C948A" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(53.4929 53.4182 53.5023 -53.409 8.09087 65.2647)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_1131" r="1">
            <stop offset="0.06" stopColor="#00B6BD" />
            <stop offset="0.89" stopColor="#00495C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(25.9612 95.6798) rotate(90) scale(37.3896 42.6288)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_1131" r="1">
            <stop offset="0.57" stopColor="#1E8581" stopOpacity="0" />
            <stop offset="0.97" stopColor="#1ECBE6" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-between flex flex-wrap h-[297px] items-start justify-between left-[922px] top-[178px] w-[320px]">
      <MicrosoftOfficeWord2025Present />
      <MicrosoftOfficePowerPoint2025Present />
      <MicrosoftOfficeExcel2025Present />
      <MicrosoftOfficeSharePoint2025Present />
    </div>
  );
}

function DiagramViewport() {
  return (
    <div className="bg-[#747480] relative shrink-0 w-full" data-name="diagram-viewport">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[31px] items-center px-[100px] py-[69px] relative size-full">
          <LeftGroupBg />
          <Frame35 />
          <RightGroupBg />
          <Frame34 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function AiMs365Schematic() {
  return (
    <div className="bg-[#0c0c0f] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="ai-ms365-schematic">
      <HeaderSection />
      <DiagramViewport />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2e2e38] w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[32px] whitespace-nowrap">Phased Approach</p>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">{`A progressive journey from understanding to application to adoption, tailored for your organization's specific tax needs.`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f9f9fa] content-stretch flex items-start px-[20px] py-[12px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2e2e38] text-[14px] whitespace-nowrap">5-6 Weeks | ~10 Participants | M365 Copilot Licensed</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#c4c4cd] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[64px] py-[24px] relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap">Week 1-2</p>
    </div>
  );
}

function Node() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Node">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[20px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Node />
    </div>
  );
}

function TimelineRail() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[48px]" data-name="Timeline-Rail">
      <Frame40 />
      <div className="bg-[#ffe600] flex-[1_0_0] min-h-px relative w-[4px]" data-name="Rail-Line" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative self-stretch shrink-0 w-[160px]">
      <Frame42 />
      <TimelineRail />
    </div>
  );
}

function ExpandIcon() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[13px]" data-name="Expand-Icon">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">▼</p>
    </div>
  );
}

function TimelinePhase() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Timeline-Phase-1">
      <Frame41 />
      <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Timeline-Card">
        <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] items-center p-[32px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] h-full leading-[30px] min-w-px not-italic relative text-[#2e2e38] text-[24px]">Foundational Training Workshops</p>
            <div className="bg-[#fffee5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Status-Indicator">
              <div aria-hidden className="absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2e2e38] text-[14px] whitespace-nowrap">ACTIVE PHASE</p>
            </div>
            <ExpandIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap">Week 3-4</p>
    </div>
  );
}

function Node1() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Node">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[20px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Node1 />
    </div>
  );
}

function TimelineRail1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[48px]" data-name="Timeline-Rail">
      <Frame46 />
      <div className="bg-[#ffe600] flex-[1_0_0] min-h-px relative w-[4px]" data-name="Rail-Line" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative self-stretch shrink-0 w-[160px]">
      <Frame45 />
      <TimelineRail1 />
    </div>
  );
}

function ExpandIcon1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[13px]" data-name="Expand-Icon">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">▼</p>
    </div>
  );
}

function TimelinePhase1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Timeline-Phase-2">
      <Frame44 />
      <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Timeline-Card">
        <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] items-center p-[32px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] h-full leading-[30px] min-w-px not-italic relative text-[#2e2e38] text-[24px]">Brainstorming Tax Use Cases</p>
            <div className="bg-[#c4c4cd] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Status-Indicator">
              <div aria-hidden className="absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] whitespace-nowrap">Locked</p>
            </div>
            <ExpandIcon1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap">Week 5-6</p>
    </div>
  );
}

function Node2() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Node">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[20px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Node2 />
    </div>
  );
}

function TimelineRail2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[48px]" data-name="Timeline-Rail">
      <Frame49 />
      <div className="bg-[#ffe600] flex-[1_0_0] min-h-px relative w-[4px]" data-name="Rail-Line" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative self-stretch shrink-0 w-[160px]">
      <Frame48 />
      <TimelineRail2 />
    </div>
  );
}

function ExpandIcon2() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[13px]" data-name="Expand-Icon">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">▼</p>
    </div>
  );
}

function TimelinePhase2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Timeline-Phase-3">
      <Frame47 />
      <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Timeline-Card">
        <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] items-center p-[32px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] h-full leading-[30px] min-w-px not-italic relative text-[#2e2e38] text-[24px]">{`Guidance in Prompts & AI Agents`}</p>
            <div className="bg-[#c4c4cd] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Status-Indicator">
              <div aria-hidden className="absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] whitespace-nowrap">Locked</p>
            </div>
            <ExpandIcon2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-[60px]">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap">{`Week 8 `}</p>
    </div>
  );
}

function Node3() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Node">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[20px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Node3 />
    </div>
  );
}

function TimelineRail3() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[48px]" data-name="Timeline-Rail">
      <Frame52 />
      <div className="bg-[#ffe600] flex-[1_0_0] min-h-px relative w-[4px]" data-name="Rail-Line" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative self-stretch shrink-0 w-[160px]">
      <Frame51 />
      <TimelineRail3 />
    </div>
  );
}

function ExpandIcon3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[13px]" data-name="Expand-Icon">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">▼</p>
    </div>
  );
}

function TimelinePhase3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Timeline-Phase-4">
      <Frame50 />
      <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Timeline-Card">
        <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] items-center p-[32px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] h-full leading-[30px] min-w-px not-italic relative text-[#2e2e38] text-[24px]">{`Governance & AI Reinforcement`}</p>
            <div className="bg-[#c4c4cd] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Status-Indicator">
              <div aria-hidden className="absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] whitespace-nowrap">Locked</p>
            </div>
            <ExpandIcon3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineStack() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline-Stack">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] relative size-full">
          <TimelinePhase />
          <TimelinePhase1 />
          <TimelinePhase2 />
          <TimelinePhase3 />
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p3bfa7a00} id="Vector" stroke="var(--stroke-0, #1A1A2E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[12px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[16px] whitespace-nowrap">Download Engagement Overview</p>
      <ArrowRight />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
    </div>
  );
}

const PHASE_CARDS = [
  {
    week: "Week 1-2",
    number: 1,
    title: "Foundational Training Workshops",
    description: "2 workshops×1.5 hrs each. Covers AI concepts in Tax, Prompt engineering basics, and M365 Copilot across tax use cases.",
    locked: false,
    coverage: ["AI concepts in Tax", "Prompt engineering (basics)", "M365 Copilot across tax use cases"],
    deliverables: ["Copilot Prompt Templates", "Adoption & Enablement Toolkit"],
  },
  {
    week: "Week 3-4",
    number: 2,
    title: "Brainstorming Tax Use Cases",
    description: "Identifying high-impact tax workflows where AI can automate repetitive tasks, improve accuracy, and reduce manual effort.",
    locked: true,
    coverage: ["Document fetching automation", "Notice/Order validation", "Drafting replies"],
    deliverables: ["Prioritized Use Case List", "ROI Estimation Framework"],
  },
  {
    week: "Week 5-6",
    number: 3,
    title: "Guidance in Prompts & AI Agents",
    description: "Deep dive into advanced prompt engineering and the integration of AI agents into your existing tax workflows and systems.",
    locked: true,
    coverage: ["Advanced Prompt Engineering", "AI Agent Integration", "Data Quality & Validation"],
    deliverables: ["Agent Configuration Guide", "Validation Framework"],
  },
  {
    week: "Week 6",
    number: 4,
    title: "Governance & AI Reinforcement",
    description: "Establishing the right governance structures and reinforcing AI adoption across the organization to ensure long-term success.",
    locked: true,
    coverage: ["Change Management", "Governance Framework", "Adoption Metrics"],
    deliverables: ["Governance Policy", "Adoption Roadmap"],
  },
];

function BulletCircle() {
  return (
    <div className="relative shrink-0 size-[8px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_card_bullet)">
          <path d={cardSvg.p3c2c1c00} stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_card_bullet">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardLockIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={cardSvg.p18f7f580} stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={cardSvg.p4317f80} stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function PhaseCard({ phase, onProceed }: { phase: typeof PHASE_CARDS[0]; onProceed?: () => void }) {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]">
      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        {/* Phase number + week */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]">
            <p className="[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[20px] whitespace-nowrap">{phase.number}</p>
          </div>
          <p className="[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap">{phase.week}</p>
        </div>
        {/* Title + description */}
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full">
          <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[24px]">{phase.title}</p>
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#7f7f91] text-[14px] w-[min-content]">{phase.description}</p>
        </div>
        {/* Coverage + Deliverables */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap">Coverage</p>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              {phase.coverage.map((item) => (
                <div key={item} className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <BulletCircle />
                  <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[14px] whitespace-nowrap">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap">Deliverables</p>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              {phase.deliverables.map((item) => (
                <div key={item} className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <BulletCircle />
                  <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[14px] whitespace-nowrap">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA */}
        {phase.locked ? (
          <div className="bg-[#d9d9d9] content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0">
            <CardLockIcon />
            <p className="[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">This journey is locked</p>
          </div>
        ) : (
          <div
            className="bg-[#ffe600] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer"
            onClick={onProceed}
          >
            <p className="[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap">Click here to Proceed</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CardGrid({ onProceed }: { onProceed?: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[64px] relative size-full">
        {/* Row 1: Phase 1 + Phase 2 */}
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <PhaseCard phase={PHASE_CARDS[0]} onProceed={onProceed} />
          <PhaseCard phase={PHASE_CARDS[1]} />
        </div>
        {/* Row 2: Phase 3 + Phase 4 */}
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <PhaseCard phase={PHASE_CARDS[2]} />
          <PhaseCard phase={PHASE_CARDS[3]} />
        </div>
      </div>
    </div>
  );
}

function ViewSwitcher({ view, onSwitch }: { view: "timeline" | "cards"; onSwitch: (v: "timeline" | "cards") => void }) {
  return (
    <div className="flex items-center gap-[6px] px-[64px]">
      <p className="font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] text-[#747480]">View:</p>
      <button
        onClick={() => onSwitch("timeline")}
        className={`font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] underline underline-offset-2 cursor-pointer border-none bg-transparent p-0 ${view === "timeline" ? "text-[#2e2e38] font-['EYInterstate:Bold',sans-serif]" : "text-[#747480] hover:text-[#2e2e38]"}`}
        style={{ textDecorationColor: view === "timeline" ? "#ffe600" : "transparent", textDecorationThickness: "2px" }}
      >
        Option 1 — Timeline
      </button>
      <span className="font-['EYInterstate:Regular',sans-serif] text-[13px] text-[#c4c4cd]">·</span>
      <button
        onClick={() => onSwitch("cards")}
        className={`font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] underline underline-offset-2 cursor-pointer border-none bg-transparent p-0 ${view === "cards" ? "text-[#2e2e38] font-['EYInterstate:Bold',sans-serif]" : "text-[#747480] hover:text-[#2e2e38]"}`}
        style={{ textDecorationColor: view === "cards" ? "#ffe600" : "transparent", textDecorationThickness: "2px" }}
      >
        Option 2 — Cards
      </button>
    </div>
  );
}

function ContentArea() {
  const [view, setView] = useState<"timeline" | "cards">("timeline");
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-start pb-[80px] relative shrink-0 w-full" data-name="Content Area">
      <Frame39 />
      <ViewSwitcher view={view} onSwitch={setView} />
      {view === "timeline" ? <TimelineStack /> : <CardGrid />}
      <Frame4 />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-[1415.98px]" data-name="Separator">
      <div aria-hidden className="absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[60px] relative shrink-0 w-[1355.98px]" data-name="Container">
      <Separator />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.8509 100">
        <g id="Group">
          <path d={svgPaths.p3955b500} fill="var(--fill-0, #FFE600)" id="Vector" />
          <path d={svgPaths.pf788bc0} fill="var(--fill-0, #2E2E38)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.16%_0_0]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function EyLogo() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full" data-name="EY logo">
      <div className="h-[100px] overflow-clip relative shrink-0 w-[92px]" data-name="Component 6">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]" data-name="Container">
      <EyLogo />
    </div>
  );
}

function ItemMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[122.25px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]">
          <p className="leading-[24px]">Connect with us</p>
        </div>
      </div>
    </div>
  );
}

function ItemMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[101.56px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]">
          <p className="leading-[24px]">Our locations</p>
        </div>
      </div>
    </div>
  );
}

function ItemMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[48.92px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]">
          <p className="leading-[24px]">My EY</p>
        </div>
      </div>
    </div>
  );
}

function ItemMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[67.06px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]">
          <p className="leading-[24px]">Site map</p>
        </div>
      </div>
    </div>
  );
}

function ItemMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[133.05px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]">
          <p className="leading-[24px]">Legal and privacy</p>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0 w-full" data-name="List">
      <ItemMargin />
      <ItemMargin1 />
      <ItemMargin2 />
      <ItemMargin3 />
      <ItemMargin4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[56.41px] pt-[30px] px-[8px] relative shrink-0 w-[608.84px]" data-name="Container">
      <List />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EYInterstate:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#747480] text-[14px] w-full">
        <p className="leading-[20px] mb-0">{`EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global`}</p>
        <p className="leading-[20px] mb-0">{`Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee,`}</p>
        <p className="leading-[20px]">does not provide services to clients.</p>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="h-full relative shrink-0 w-[44px]" data-name="Mask Group">
      <div className="absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgBackground}")` }} data-name="Background" />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]" data-name="Item">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[22px] w-full" data-name="Component 7">
        <div className="absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <MaskGroup />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="h-full relative shrink-0 w-[44px]" data-name="Mask Group">
      <div className="absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgBackground1}")` }} data-name="Background" />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]" data-name="Item">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[22px] w-full" data-name="Component 7">
        <div className="absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <MaskGroup1 />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="h-full relative shrink-0 w-[44px]" data-name="Mask Group">
      <div className="absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgBackground2}")` }} data-name="Background" />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]" data-name="Item">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[22px] w-full" data-name="Component 7">
        <div className="absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <MaskGroup2 />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="h-full relative shrink-0 w-[44px]" data-name="Mask Group">
      <div className="absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgBackground3}")` }} data-name="Background" />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]" data-name="Item">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[22px] w-full" data-name="Component 7">
        <div className="absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <MaskGroup3 />
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_10px] items-center justify-end relative shrink-0 w-[541.33px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Container7 />
      <List1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-[8px] relative size-full">
        <Frame29 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full">
      <Frame28 />
      <Container6 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function EyAiTaxLabsPhasedEngagement() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-[234px] overflow-clip top-[299px] w-[1416px]" data-name="EY.ai Tax Labs - Phased Engagement">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1416px]" data-name="Top Navigation">
        <Nav />
        <Nav1 />
      </div>
      <AiMs365Schematic />
      <ContentArea />
      <div className="bg-white content-stretch flex flex-col h-[326px] items-center justify-center px-[64px] relative shrink-0 w-[1416px]" data-name="Footer Final">
        <Container3 />
        <Frame27 />
      </div>
    </div>
  );
}

function BackgroundMotif() {
  return (
    <div className="absolute h-[1200px] left-0 opacity-8 top-0 w-[1720px]" data-name="Background Motif">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundMotif} />
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Brand">
      <div className="relative shrink-0 size-[40px]" data-name="Logo">
        <div className="absolute inset-[50.09%_59.92%_0.87%_0.85%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6919 19.6154">
            <path d={svgPaths.p27ea6ec0} fill="var(--fill-0, #2E2E38)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[50.09%_17.76%_0.87%_33.29%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5808 19.6154">
            <path d={svgPaths.p35786b00} fill="var(--fill-0, #2E2E38)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_3.06%_64.62%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.7776 14.153">
            <path d={svgPaths.p18fe2b40} fill="var(--fill-0, #FFE600)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">EY.ai Tax Labs</p>
    </div>
  );
}

function TabActive() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Tab Active">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[13px] whitespace-nowrap">Phase 1</p>
    </div>
  );
}

function TabInactive() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Tab Inactive">
      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#7f7f91] text-[13px] whitespace-nowrap">Phase 2</p>
    </div>
  );
}

function TabInactive1() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Tab Inactive">
      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#7f7f91] text-[13px] whitespace-nowrap">Phase 3</p>
    </div>
  );
}

function TabInactive2() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Tab Inactive">
      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#7f7f91] text-[13px] whitespace-nowrap">Phase 4</p>
    </div>
  );
}

function PhaseTabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Phase Tabs">
      <TabActive />
      <TabInactive />
      <TabInactive1 />
      <TabInactive2 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-[#2e2e38] h-[72px] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] relative size-full">
          <Brand />
          <PhaseTabs />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Hero">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[56px] relative shrink-0 text-[#2e2e38] text-[48px] whitespace-nowrap">Phase 1 - Foundational Training</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#7f7f91] text-[18px] w-[800px]">Select to begin your foundational journey into AI concepts, prompting, and M365 Copilot capabilities.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[20px] whitespace-nowrap">🧠</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[12px] whitespace-nowrap">Begin</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2e2e38] text-[24px] whitespace-nowrap">Foundational Concepts of AI</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#7f7f91] text-[14px] w-[min-content]">Understanding AI/ML fundamentals and their application in tax workflows.</p>
    </div>
  );
}

function CourseCard() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Course Card">
      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Header />
        <Frame8 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[20px] whitespace-nowrap">💬</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">Locked</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2e2e38] text-[24px] whitespace-nowrap">AI Tax Prompting</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#7f7f91] text-[14px] w-[min-content]">Core principles of effective prompt engineering for tax professionals.</p>
    </div>
  );
}

function CourseCardLocked() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px opacity-60 relative rounded-[8px]" data-name="Course Card Locked">
      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Header1 />
        <Frame11 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[20px] whitespace-nowrap">📊</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">Locked</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2e2e38] text-[24px] whitespace-nowrap">M365 Copilot Dashboard</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#7f7f91] text-[14px] w-[min-content]">Hands-on exploration of Microsoft 365 Copilot capabilities across tax use cases.</p>
    </div>
  );
}

function CourseCardLocked1() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px opacity-60 relative rounded-[8px]" data-name="Course Card Locked">
      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Header2 />
        <Frame14 />
      </div>
    </div>
  );
}

function CourseGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Course Grid">
      <CourseCard />
      <CourseCardLocked />
      <CourseCardLocked1 />
    </div>
  );
}

function ContentArea1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Area">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[80px] relative size-full">
        <Hero />
        <CourseGrid />
      </div>
    </div>
  );
}

function Separator1() {
  return (
    <div className="h-px relative shrink-0 w-[1415.98px]" data-name="Separator">
      <div aria-hidden className="absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[60px] relative shrink-0 w-[1355.98px]" data-name="Container">
      <Separator1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.8509 100">
        <g id="Group">
          <path d={svgPaths.p3955b500} fill="var(--fill-0, #FFE600)" id="Vector" />
          <path d={svgPaths.pf788bc0} fill="var(--fill-0, #2E2E38)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0_0.16%_0_0]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function EyLogo1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full" data-name="EY logo">
      <div className="h-[100px] overflow-clip relative shrink-0 w-[92px]" data-name="Component 6">
        <ClipPathGroup1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]" data-name="Container">
      <EyLogo1 />
    </div>
  );
}

function ItemMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[122.25px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]">
          <p className="leading-[24px]">Connect with us</p>
        </div>
      </div>
    </div>
  );
}

function ItemMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[101.56px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]">
          <p className="leading-[24px]">Our locations</p>
        </div>
      </div>
    </div>
  );
}

function ItemMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[48.92px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]">
          <p className="leading-[24px]">My EY</p>
        </div>
      </div>
    </div>
  );
}

function ItemMargin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[67.06px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]">
          <p className="leading-[24px]">Site map</p>
        </div>
      </div>
    </div>
  );
}

function ItemMargin9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0" data-name="Item:margin">
      <div className="h-[20px] relative shrink-0 w-[133.05px]" data-name="Component 1">
        <div aria-hidden className="absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]">
          <p className="leading-[24px]">Legal and privacy</p>
        </div>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0 w-full" data-name="List">
      <ItemMargin5 />
      <ItemMargin6 />
      <ItemMargin7 />
      <ItemMargin8 />
      <ItemMargin9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[56.41px] pt-[30px] px-[8px] relative shrink-0 w-[608.84px]" data-name="Container">
      <List2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EYInterstate:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#747480] text-[14px] w-full">
        <p className="leading-[20px] mb-0">{`EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global`}</p>
        <p className="leading-[20px] mb-0">{`Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee,`}</p>
        <p className="leading-[20px]">does not provide services to clients.</p>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="h-full relative shrink-0 w-[44px]" data-name="Mask Group">
      <div className="absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgBackground}")` }} data-name="Background" />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]" data-name="Item">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[22px] w-full" data-name="Component 7">
        <div className="absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <MaskGroup4 />
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="h-full relative shrink-0 w-[44px]" data-name="Mask Group">
      <div className="absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgBackground1}")` }} data-name="Background" />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]" data-name="Item">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[22px] w-full" data-name="Component 7">
        <div className="absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <MaskGroup5 />
      </div>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="h-full relative shrink-0 w-[44px]" data-name="Mask Group">
      <div className="absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgBackground2}")` }} data-name="Background" />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]" data-name="Item">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[22px] w-full" data-name="Component 7">
        <div className="absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <MaskGroup6 />
      </div>
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="h-full relative shrink-0 w-[44px]" data-name="Mask Group">
      <div className="absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgBackground3}")` }} data-name="Background" />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]" data-name="Item">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[22px] w-full" data-name="Component 7">
        <div className="absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <MaskGroup7 />
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_10px] items-center justify-end relative shrink-0 w-[541.33px]" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Container12 />
      <List3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-[8px] relative size-full">
        <Frame33 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full">
      <Frame32 />
      <Container11 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function EyAiTaxLabsPhase() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[1758px] overflow-clip top-[261px] w-[1720px]" data-name="EY.ai Tax Labs - Phase 1">
      <BackgroundMotif />
      <Navigation />
      <ContentArea1 />
      <div className="bg-white h-[326px] relative shrink-0 w-full" data-name="Footer Final">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[64px] relative size-full">
            <Container8 />
            <Frame30 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame43() {
  return (
    <div className="bg-white relative size-full">
      <EyAiTaxLabsPhasedEngagement />
      <EyAiTaxLabsPhase />
    </div>
  );
}

// ── Interactive timeline replacing the static TimelineStack ──────────────────

const PHASES = [
  { week: "Week 1-2", number: 1, title: "Foundational Training Workshops", locked: false },
  { week: "Week 3-4", number: 2, title: "Brainstorming Tax Use Cases", locked: true },
  { week: "Week 5-6", number: 3, title: "Guidance in Prompts & AI Agents", locked: true },
  { week: "Week 8",   number: 4, title: "Governance & AI Reinforcement",   locked: true },
];

function InteractiveContentArea({ onProceed }: { onProceed?: () => void }) {
  const [expandedPhase, setExpandedPhase] = useState<number>(1);
  const [view, setView] = useState<"timeline" | "cards">("timeline");

  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-start pb-[80px] relative shrink-0 w-full">
      <Frame39 />

      {/* ── View switcher ── */}
      <div className="flex items-center gap-[8px] px-[64px]">
        <p className="font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] text-[#747480]">View:</p>
        <button
          onClick={() => setView("timeline")}
          style={{
            textDecorationColor: view === "timeline" ? "#ffe600" : "transparent",
            textDecorationThickness: "2px",
          }}
          className={`font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] underline underline-offset-2 cursor-pointer border-none bg-transparent p-0 transition-colors ${
            view === "timeline" ? "text-[#2e2e38] font-['EYInterstate:Bold',sans-serif]" : "text-[#747480]"
          }`}
        >
          Option 1 — Timeline
        </button>
        <span className="font-['EYInterstate:Regular',sans-serif] text-[13px] text-[#c4c4cd] select-none">·</span>
        <button
          onClick={() => setView("cards")}
          style={{
            textDecorationColor: view === "cards" ? "#ffe600" : "transparent",
            textDecorationThickness: "2px",
          }}
          className={`font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] underline underline-offset-2 cursor-pointer border-none bg-transparent p-0 transition-colors ${
            view === "cards" ? "text-[#2e2e38] font-['EYInterstate:Bold',sans-serif]" : "text-[#747480]"
          }`}
        >
          Option 2 — Cards
        </button>
      </div>

      {/* ── Option 1: Timeline accordion ── */}
      {view === "timeline" && (
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col px-[64px] relative w-full">
            {PHASES.map((phase, i) => {
              const isExp = expandedPhase === phase.number;
              return (
                <div key={phase.number} className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[24px] items-start relative self-stretch shrink-0 w-[160px]">
                    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
                      <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap">
                        {phase.week}
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[48px]">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]">
                          <p className="[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a2e] text-[20px] whitespace-nowrap">
                            {phase.number}
                          </p>
                        </div>
                      </div>
                      {i < PHASES.length - 1 && (
                        <div className="bg-[#ffe600] flex-[1_0_0] min-h-px relative w-[4px]" style={{ minHeight: 24 }} />
                      )}
                    </div>
                  </div>
                  {phase.locked ? (
                    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px] mb-[16px]">
                      <div aria-hidden className="absolute border border-[#d7d7dc] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="content-stretch flex gap-[16px] items-center p-[32px] relative w-full">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[30px] min-w-px not-italic relative text-[#2e2e38] text-[24px]">
                          {phase.title}
                        </p>
                        <div className="bg-[#c4c4cd] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0">
                          <div aria-hidden className="absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          <p className="[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] whitespace-nowrap">
                            Locked
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex-[1_0_0] min-w-px mb-[16px]"
                      style={{ cursor: "pointer" }}
                      onClick={() => setExpandedPhase(isExp ? 0 : phase.number)}
                    >
                      <TimelineCard
                        expanded={isExp}
                        onProceed={onProceed}
                        className={`bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex p-[32px] relative rounded-[12px] w-full ${isExp ? "flex-col gap-[24px] items-start" : "gap-[16px] items-center"}`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Option 2: Card grid ── */}
      {view === "cards" && <CardGrid onProceed={onProceed} />}

      <Frame4 />
    </div>
  );
}

// ── Standalone page exports (no absolute canvas positioning) ─────────────────

export function PhasedEngagementView({ onNavigateToPhase1 }: { onNavigateToPhase1?: () => void } = {}) {
  return (
    <div className="relative bg-white content-stretch flex flex-col items-center overflow-clip w-[1416px]" data-name="EY.ai Tax Labs - Phased Engagement">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1416px]" data-name="Top Navigation">
        <Nav />
        <Nav1 />
      </div>
      <AiMs365Schematic />
      <InteractiveContentArea onProceed={onNavigateToPhase1} />
      <div className="bg-white content-stretch flex flex-col h-[326px] items-center justify-center px-[64px] relative shrink-0 w-[1416px]" data-name="Footer Final">
        <Container3 />
        <Frame27 />
      </div>
    </div>
  );
}

export function Phase1View() {
  return (
    <div className="relative bg-white content-stretch flex flex-col items-start overflow-clip w-[1720px]" data-name="EY.ai Tax Labs - Phase 1">
      <BackgroundMotif />
      <Navigation />
      <ContentArea1 />
      <div className="bg-white h-[326px] relative shrink-0 w-full" data-name="Footer Final">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[64px] relative size-full">
            <Container8 />
            <Frame30 />
          </div>
        </div>
      </div>
    </div>
  );
}