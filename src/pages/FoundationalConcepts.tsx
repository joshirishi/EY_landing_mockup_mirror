/**
 * Foundational Concepts — native page (no iframe).
 *
 * The lesson still lives as HTML in src/imports/Foundational_Concepts.html, but
 * is rendered into the main document so elements are selectable. Styles are
 * soft-scoped under #module-content and remapped onto EY design-kit tokens so
 * spacing/colours match the rest of the app (and aren't crushed by a
 * high-specificity universal reset).
 */

import { useEffect, useMemo, useRef } from "react";
import foundationalHtml from "../imports/Foundational_Concepts.html?raw";
import { ModuleHeader, SUBNAV_SCROLL_OFFSET } from "../design-kit/LearningNav";
import { SiteHeader } from "../design-kit/SiteHeader";
import { EYWhatsNext, EYWhatsNextHighlight } from "../design-kit/EYWhatsNext";
import { colors, fonts, spacing } from "../design-kit/tokens";

/**
 * Token bridge — maps the lesson HTML's CSS custom properties onto the
 * design-kit values so section padding / EY yellow / type stay consistent
 * with the rest of Tax Labs.
 */
const TOKEN_BRIDGE = `
#module-content {
  /* Colour tokens (design-kit) */
  --ey-yellow: ${colors.yellow};
  --eyebrow-gold: ${colors.eyebrowGold};
  --white: ${colors.white};
  --off-white: ${colors.offWhite};
  --gray-02: ${colors.gray02};
  --gray-01: ${colors.gray01};
  --ey-dark: ${colors.offBlack};
  --confident-black: ${colors.confidentBlack};
  --muted-foreground: ${colors.gray01};

  /* Surface aliases used by the lesson CSS */
  --ey-bg: ${colors.white};
  --ey-bg-alt: ${colors.offWhite};
  --ey-bg-deep: ${colors.offWhite};
  --card-bg: ${colors.white};
  --text-secondary: ${colors.gray01};
  --surface-neutral: ${colors.offWhite};

  /* Spacing — section rhythm from design-kit */
  --section-padding: ${spacing.sectionPadding};
  --card-padding: ${spacing.cardPadding};

  font-family: ${fonts.regular};
  background: ${colors.white};
  color: ${colors.offBlack};
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* Reality Check — EY Off White light-grey band */
#module-content .wrong-section,
#module-content #reality-check {
  background: ${colors.offWhite} !important;
}

/* Restore intended section breathing room (lesson used 90px 60px / 80px / 64px;
   unify major .section blocks on the kit's section padding). */
#module-content .section,
#module-content .rise-section,
#module-content .wrong-section,
#module-content .paths-section,
#module-content .gva-section {
  padding: var(--section-padding);
}

/* Ultrawide: stretch capped content rails to the full section width
   (backgrounds already full-bleed; only the inner grids were stuck at ~1300px). */
#module-content .rise-grid,
#module-content .wrong-grid,
#module-content .gva-spectrum,
#module-content .gva-banner,
#module-content .paths-row,
#module-content .hero-inner,
#module-content .velocity-header,
#module-content .velocity-card,
#module-content #evo-timeline-view,
#module-content .news-grid {
  width: 100%;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
}

/* Autonomy Spectrum — kept here so lesson cards always render even if
   the embedded HTML stylesheet drifts. Mirrors Figma 3187:3460. */
#module-content .gva-spectrum {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: none;
  margin: 0 0 24px;
}
#module-content .gva-spectrum-card {
  background: ${colors.white};
  border: 1px solid ${colors.gray02};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  cursor: pointer;
  padding: 0;
  font: inherit;
  color: inherit;
  width: 100%;
  transition: transform 0.15s, box-shadow 0.15s;
}
#module-content .gva-spectrum-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.22);
}
#module-content .gva-spectrum-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 20px;
}
#module-content .gva-spectrum-card[data-tone="blue"] .gva-spectrum-head { background: rgba(70,150,255,0.08); }
#module-content .gva-spectrum-card[data-tone="green"] .gva-spectrum-head { background: rgba(0,200,100,0.08); }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-spectrum-head { background: rgba(255,125,30,0.08); }
#module-content .gva-spectrum-title { font-size: 18px; font-weight: 700; margin: 0; }
#module-content .gva-spectrum-card[data-tone="blue"] .gva-spectrum-title { color: ${colors.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-spectrum-title { color: ${colors.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-spectrum-title { color: ${colors.frameOrange}; }
#module-content .gva-badge {
  display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 4px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: ${colors.white};
}
#module-content .gva-spectrum-card[data-tone="blue"] .gva-badge { background: ${colors.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-badge { background: ${colors.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-badge { background: ${colors.frameOrange}; }
#module-content .gva-spectrum-body { display: flex; flex-direction: column; gap: 16px; padding: 20px; flex: 1; }
#module-content .gva-spectrum-desc { margin: 0; font-size: 13px; line-height: 1.4; color: ${colors.gray01}; }
#module-content .gva-flow {
  border: 1px solid rgba(46,46,56,0.12); border-radius: 6px; min-height: 32px;
  display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;
  background: ${colors.white};
}
#module-content .gva-spectrum-card[data-tone="blue"] .gva-flow { color: ${colors.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-flow { color: ${colors.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-flow { color: ${colors.frameOrange}; }
#module-content .gva-best-label { margin: 0; font-size: 11px; text-transform: uppercase; color: ${colors.gray01}; }
#module-content .gva-best-value { margin: 2px 0 0; font-size: 13px; font-weight: 700; color: ${colors.offBlack}; }
#module-content .gva-card-cta { margin-top: auto; font-size: 13px; font-weight: 700; color: ${colors.offBlack}; text-decoration: underline; text-underline-offset: 3px; }
#module-content .gva-banner {
  width: 100%; max-width: none; display: flex; gap: 20px; align-items: center; padding: 24px;
  border-radius: 12px; background: ${colors.confidentBlack}; border: 1px solid rgba(255,255,255,0.08);
}
#module-content .gva-banner-icon {
  width: 40px; height: 40px; border-radius: 8px; background: ${colors.yellow};
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
#module-content .gva-banner-icon img { width: 20px; height: 20px; display: block; }
#module-content .gva-banner-title { margin: 0 0 4px; font-size: 16px; font-weight: 700; color: #FFFFFF; }
#module-content .gva-banner-body { margin: 0; font-size: 13px; color: ${colors.gray02}; line-height: 1.45; }
@media (max-width: 1000px) {
  #module-content .gva-spectrum { grid-template-columns: 1fr; }
}

/* Modal shell — also pinned here so open/close UI never loses styles */
#module-content .gva-modal[hidden] { display: none !important; }
#module-content .gva-modal {
  position: fixed; inset: 0; z-index: 10050;
  display: flex; align-items: center; justify-content: center; padding: 24px;
}
#module-content .gva-modal-backdrop {
  position: absolute; inset: 0; background: rgba(26,26,36,0.72);
}
#module-content .gva-modal-dialog {
  position: relative; z-index: 1; width: min(720px, 100%);
  max-height: min(88vh, 900px); overflow: auto;
  background: ${colors.white}; border: 1px solid ${colors.gray02};
  border-radius: 12px; box-shadow: 0 24px 64px rgba(0,0,0,0.35);
}
#module-content .gva-modal-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 16px; padding: 20px 24px; border-bottom: 1px solid ${colors.gray02};
}
#module-content .gva-modal-top h3 {
  margin: 0 0 6px; font-size: 22px; font-weight: 700; color: ${colors.offBlack};
}
#module-content .gva-modal-close {
  border: 1px solid ${colors.gray02}; background: ${colors.offWhite};
  width: 36px; height: 36px; border-radius: 8px; cursor: pointer;
  font-size: 18px; line-height: 1; color: ${colors.offBlack}; flex-shrink: 0;
}
#module-content .gva-modal-content {
  padding: 20px 24px 28px; display: flex; flex-direction: column; gap: 14px;
}
#module-content .gva-modal-thumb {
  width: 100%; height: auto; object-fit: contain; object-position: center top;
  border-radius: 8px; display: block; background: #F6F6FA;
  border: 1px solid rgba(46, 46, 56, 0.08);
}
body.gva-modal-open { overflow: hidden; }

#module-content .hero {
  padding: 72px 64px 80px;
}

#module-content [id] {
  scroll-margin-top: ${SUBNAV_SCROLL_OFFSET}px;
}
`;

/** Pull <style>, <script>, and body markup out of the standalone HTML file. */
function parseLessonHtml(html: string): { css: string; body: string; scripts: string[] } {
  const styles: string[] = [];
  const scripts: string[] = [];

  let rest = html.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_m, css: string) => {
    styles.push(css);
    return "";
  });

  rest = rest.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (_m, js: string) => {
    if (js.trim()) scripts.push(js);
    return "";
  });

  const bodyMatch = rest.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : rest;

  let css = styles.join("\n");

  // CRITICAL: do NOT rewrite the universal reset as `#module-content * { padding:0 }` —
  // that has higher specificity than `.hero` / `.section` and wipes all spacing.
  // Only set box-sizing on descendants; zero margin/padding on the container alone.
  css = css.replace(
    /\*,\s*\*::before,\s*\*::after\s*\{[^}]*\}/,
    `#module-content { margin: 0; padding: 0; }
#module-content, #module-content *, #module-content *::before, #module-content *::after { box-sizing: border-box; }`
  );

  // Former <body> / :root rules → scoped to the lesson region.
  css = css.replace(/(^|})\s*body\s*\{/g, "$1\n#module-content {");
  css = css.replace(/(^|})\s*:root\s*\{/g, "$1\n#module-content {");

  // Token bridge last so kit values win over the HTML's hardcoded hex.
  css += `\n${TOKEN_BRIDGE}\n`;

  return { css, body, scripts };
}

export default function FoundationalConcepts({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (path: string) => void;
}) {
  const { css, body, scripts } = useMemo(
    () => parseLessonHtml(foundationalHtml),
    [foundationalHtml]
  );
  const contentRef = useRef<HTMLDivElement>(null);
  const scriptsRan = useRef(false);

  // Inline onclick="" handlers work via innerHTML; <script> blocks do not —
  // re-run them once after the markup is in the DOM.
  useEffect(() => {
    if (scriptsRan.current) return;
    scriptsRan.current = true;

    const nodes: HTMLScriptElement[] = [];
    for (const source of scripts) {
      const el = document.createElement("script");
      el.text = source;
      document.body.appendChild(el);
      nodes.push(el);
    }

    // Lesson scripts may listen for DOMContentLoaded — that already fired in SPA
    // mode, so boot explorers that expose a window init (e.g. era tabs).
    const boot = window as Window & { initEvoExplorer?: () => void };
    if (typeof boot.initEvoExplorer === "function") boot.initEvoExplorer();

    return () => {
      nodes.forEach((n) => n.remove());
      scriptsRan.current = false;
    };
  }, [scripts]);

  return (
    <div style={{ position: "fixed", inset: 0, overflowY: "auto", background: colors.white }}>
      <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#module-content" />
      <ModuleHeader currentModuleId="foundational" onNavigate={onNavigate} onBack={onBack} />

      <div id="module-content" ref={contentRef}>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>

      {/* Shared dark CTA — Figma 3455:18320 palette */}
      <EYWhatsNext
        title={
          <>
            Fundamentals are clear.
            <br />
            Now it&apos;s time to <EYWhatsNextHighlight>use AI effectively.</EYWhatsNextHighlight>
          </>
        }
        description="You now understand what AI is, how it works, where it fails, and why fundamentals matter. The next step is learning how to interact with it — how to craft prompts that deliver real, usable results in tax work."
        ctaLabel="Continue to Part 2: Basics of Prompting in Tax"
        onContinue={() => onNavigate("/ai-tax-prompting")}
        meta="Part 2 covers: prompt structure, role-setting, context framing, output formatting, and real tax prompt templates"
      />
    </div>
  );
}
