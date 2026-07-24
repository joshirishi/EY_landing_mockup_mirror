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
import { ModuleHeader, ModulePrevNext, SUBNAV_SCROLL_OFFSET } from "../design-kit/LearningNav";
import { SiteHeader } from "../design-kit/SiteHeader";
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

  /* Spacing — section rhythm from design-kit */
  --section-padding: ${spacing.sectionPadding};
  --card-padding: ${spacing.cardPadding};

  font-family: ${fonts.regular};
  background: ${colors.white};
  color: ${colors.offBlack};
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* Restore intended section breathing room (lesson used 90px 60px / 80px / 64px;
   unify major .section blocks on the kit's section padding). */
#module-content .section,
#module-content .rise-section,
#module-content .wrong-section,
#module-content .paths-section {
  padding: var(--section-padding);
}

#module-content .hero {
  padding: 48px 64px 56px;
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
  const { css, body, scripts } = useMemo(() => parseLessonHtml(foundationalHtml), []);
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

      <ModulePrevNext currentModuleId="foundational" onNavigate={onNavigate} onBack={onBack} />
    </div>
  );
}
