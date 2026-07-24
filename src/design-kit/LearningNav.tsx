/**
 * ModuleHeader — Figma Level 2 breadcrumb row (node 3508:4135), shown beneath
 * <SiteHeader variant="learning"/> on Phase 1 overview and every module page.
 *
 * Structure:
 *   Row A — Circular yellow back + "Tax Labs" › [Foundational Training Workshops ▾]
 *           › current page title, plus a progress pill (+ optional section status).
 *   Row B — "Learn" / "Apply" tab clusters (module pages only) that jump to
 *           in-page sections, with scroll-spy highlighting.
 *
 * Usage (Phase 1 overview):
 *   <SiteHeader variant="learning" onNavigate={navigate} />
 *   <ModuleHeader mode="phase-overview" onNavigate={navigate} onBack={() => navigate("/phased")} />
 *
 * Usage (module page):
 *   <ModuleHeader currentModuleId="ai-tax-prompting" onNavigate={navigate} onBack={onBack} />
 *
 * Sections reachable from Row B must set `style={{ scrollMarginTop: SUBNAV_SCROLL_OFFSET }}`.
 */

import { useEffect, useRef, useState } from "react";
import { colors, fonts } from "./tokens";
import {
  MODULES,
  PHASE_LABEL,
  PHASE_PATH,
  TOTAL_MODULES,
  getAdjacentModules,
  getModule,
  getSubModuleGroups,
  type ModuleId,
} from "./curriculum";

/** Scroll offset (px) to reserve for the stacked sticky bars — set on each in-page section. */
export const SUBNAV_SCROLL_OFFSET = 156;

const FOCUS_RING = `2px solid ${colors.yellow}`;
const WORKSHOP_LABEL = PHASE_LABEL.replace(/^Phase 1: /, "");

function applyFocusRing(e: React.FocusEvent<HTMLElement>) {
  e.currentTarget.style.outline = FOCUS_RING;
  e.currentTarget.style.outlineOffset = "2px";
}

function clearFocusRing(e: React.FocusEvent<HTMLElement>) {
  e.currentTarget.style.outline = "none";
}

type ModuleHeaderProps =
  | {
      mode?: "module";
      currentModuleId: ModuleId;
      onNavigate: (path: string) => void;
      onBack: () => void;
      /** Override for iframe-based modules — scroll inside the embedded document. */
      onSectionClick?: (sectionId: string) => void;
      sectionStatus?: string;
    }
  | {
      mode: "phase-overview";
      currentModuleId?: never;
      onNavigate: (path: string) => void;
      onBack: () => void;
      onSectionClick?: never;
      sectionStatus?: string;
    };

export function ModuleHeader(props: ModuleHeaderProps) {
  const { onNavigate, onBack, sectionStatus } = props;
  const isPhaseOverview = props.mode === "phase-overview";
  const currentModuleId = isPhaseOverview ? null : props.currentModuleId;
  const onSectionClick = isPhaseOverview ? undefined : props.onSectionClick;

  const current = currentModuleId ? getModule(currentModuleId) : null;
  const pageTitle = isPhaseOverview ? "Foundational AI Training" : current!.title;
  const progressLabel = isPhaseOverview ? "Phase 1 of 4" : `Module ${current!.order} of ${TOTAL_MODULES}`;
  const statusText = sectionStatus ?? (isPhaseOverview ? undefined : "Section 1 of 4 Completed");

  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const groups = currentModuleId ? getSubModuleGroups(currentModuleId) : { learn: [], apply: [] };
  const { learn, apply } = groups;
  const showSectionTabs = !isPhaseOverview && !!current?.supportsInPageNav && (learn.length > 0 || apply.length > 0);
  const activeSectionId = useScrollSpy(
    onSectionClick || !current ? [] : current.subModules.map((s) => s.id)
  );

  useEffect(() => {
    if (!pickerOpen) return;
    function onDocClick(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setPickerOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setPickerOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [pickerOpen]);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 200 }}>
      {/* ── Level 2: breadcrumb + progress — fluid padding, collapses on narrow screens ── */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 md:gap-4 px-4 sm:px-6 md:px-10 py-3"
        style={{
          background: colors.offBlack,
          borderBottom: `1px solid ${colors.offBlack}`,
        }}
      >
        <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
          <button
            onClick={onBack}
            className="flex items-center gap-2 shrink-0"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              borderRadius: 4,
            }}
            aria-label="Back to Tax Labs"
            onFocus={applyFocusRing}
            onBlur={clearFocusRing}
          >
            <YellowBackArrow />
            <span
              className="hidden sm:inline"
              style={{ fontFamily: fonts.bold, fontSize: 14, color: colors.yellow, whiteSpace: "nowrap" }}
            >
              Tax Labs
            </span>
          </button>

          <span className="hidden sm:inline shrink-0" aria-hidden="true">
            <ChevronSep />
          </span>

          <div ref={pickerRef} className="relative min-w-0">
            <button
              onClick={() => setPickerOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={pickerOpen}
              className="flex items-center gap-1.5 min-w-0 max-w-[min(100%,240px)] sm:max-w-none"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                borderRadius: 4,
                fontFamily: fonts.bold,
                fontSize: 14,
                color: colors.white,
              }}
              onFocus={applyFocusRing}
              onBlur={clearFocusRing}
            >
              <span className="truncate">{WORKSHOP_LABEL}</span>
              <span
                style={{
                  fontSize: 8,
                  color: colors.yellow,
                  transform: pickerOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.15s",
                  display: "inline-block",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>

            {pickerOpen && (
              <div
                role="menu"
                aria-label="Jump to module"
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  minWidth: 260,
                  maxWidth: "min(90vw, 320px)",
                  background: colors.confidentBlack,
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 8,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                  padding: 6,
                  zIndex: 300,
                }}
              >
                <PickerItem
                  label="Phase 1 Overview"
                  isCurrent={isPhaseOverview}
                  order={null}
                  onClick={() => {
                    setPickerOpen(false);
                    if (!isPhaseOverview) onNavigate(PHASE_PATH);
                  }}
                />
                {MODULES.map((mod) => (
                  <PickerItem
                    key={mod.id}
                    label={mod.title}
                    isCurrent={mod.id === currentModuleId}
                    order={mod.order}
                    onClick={() => {
                      setPickerOpen(false);
                      if (mod.id !== currentModuleId) onNavigate(mod.path);
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <span className="hidden lg:inline shrink-0" aria-hidden="true">
            <ChevronSep />
          </span>

          <span
            className="hidden lg:inline truncate"
            style={{
              color: colors.gray01,
              fontFamily: fonts.regular,
              fontSize: 14,
            }}
            aria-current="page"
          >
            {pageTitle}
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <div
            style={{
              background: colors.yellow,
              borderRadius: 12,
              padding: "6px 12px",
              fontFamily: fonts.bold,
              fontSize: 12,
              color: colors.confidentBlack,
              whiteSpace: "nowrap",
            }}
          >
            {progressLabel}
          </div>
          {statusText && (
            <div className="hidden md:flex items-center gap-2">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: colors.yellow,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              <span style={{ color: colors.white, fontFamily: fonts.regular, fontSize: 12, whiteSpace: "nowrap" }}>
                {statusText}
              </span>
            </div>
          )}
        </div>
      </div>

      {showSectionTabs && (
        <nav
          aria-label={`${pageTitle} sections`}
          className="flex gap-6 md:gap-8 overflow-x-auto px-4 sm:px-6 md:px-10 pt-2.5"
          style={{
            background: colors.offWhite,
            borderBottom: "1px solid rgba(46,46,56,0.1)",
          }}
        >
          {learn.length > 0 && (
            <TabCluster label="Learn" items={learn} activeSectionId={activeSectionId} onSectionClick={onSectionClick} />
          )}
          {learn.length > 0 && apply.length > 0 && (
            <div className="hidden sm:block w-px self-stretch mb-2.5" style={{ background: "rgba(46,46,56,0.12)" }} aria-hidden="true" />
          )}
          {apply.length > 0 && (
            <TabCluster label="Apply" items={apply} activeSectionId={activeSectionId} onSectionClick={onSectionClick} />
          )}
        </nav>
      )}
    </div>
  );
}

function YellowBackArrow() {
  // SVG arrow — text "←" sits off-centre once EY Interstate loads (glyph metrics).
  // Vector keeps optical centre identical on every ModuleHeader screen.
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 26,
        height: 26,
        borderRadius: "50%",
        border: `1.5px solid ${colors.yellow}`,
        color: colors.yellow,
        flexShrink: 0,
        boxSizing: "border-box",
      }}
      aria-hidden="true"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", flexShrink: 0 }}
      >
        <path
          d="M7.5 2.5L4 6l3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ChevronSep() {
  return (
    <span style={{ color: colors.gray01, fontSize: 14, flexShrink: 0 }} aria-hidden="true">
      ›
    </span>
  );
}

function PickerItem({
  label,
  isCurrent,
  order,
  onClick,
}: {
  label: string;
  isCurrent: boolean;
  order: number | null;
  onClick: () => void;
}) {
  return (
    <button
      role="menuitem"
      aria-current={isCurrent ? "page" : undefined}
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: isCurrent ? "rgba(255,230,0,0.1)" : "none",
        border: "none",
        borderRadius: 6,
        padding: "10px 10px",
        cursor: isCurrent ? "default" : "pointer",
        textAlign: "left",
        fontFamily: isCurrent ? fonts.bold : fonts.regular,
        fontSize: 13,
        color: isCurrent ? colors.yellow : colors.white,
      }}
      onMouseEnter={(e) => {
        if (!isCurrent) e.currentTarget.style.background = "rgba(255,255,255,0.08)";
      }}
      onMouseLeave={(e) => {
        if (!isCurrent) e.currentTarget.style.background = "none";
      }}
      onFocus={applyFocusRing}
      onBlur={clearFocusRing}
    >
      {order !== null && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 18,
            height: 18,
            borderRadius: "50%",
            fontSize: 11,
            fontFamily: fonts.bold,
            background: isCurrent ? colors.yellow : "rgba(255,255,255,0.12)",
            color: isCurrent ? colors.offBlack : "rgba(255,255,255,0.7)",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {order}
        </span>
      )}
      {label}
    </button>
  );
}

function TabCluster({
  label,
  items,
  activeSectionId,
  onSectionClick,
}: {
  label: string;
  items: { id: string; label: string }[];
  activeSectionId: string | null;
  onSectionClick?: (sectionId: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
      <span
        style={{
          fontFamily: fonts.bold,
          fontSize: 10,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: colors.gray01,
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", gap: 20 }}>
        {items.map((item) => {
          const isActive = item.id === activeSectionId;
          const tabStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            paddingBottom: 10,
            background: "none",
            border: "none",
            color: isActive ? colors.offBlack : colors.gray01,
            fontFamily: isActive ? fonts.bold : fonts.regular,
            fontSize: 14,
            whiteSpace: "nowrap",
            textDecoration: "none",
            cursor: "pointer",
            borderBottom: isActive ? `3px solid ${colors.yellow}` : "3px solid transparent",
            transition: "color 0.15s, border-color 0.15s",
          };
          return onSectionClick ? (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              style={tabStyle}
              onFocus={applyFocusRing}
              onBlur={clearFocusRing}
            >
              {item.label}
            </button>
          ) : (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              style={tabStyle}
              onFocus={applyFocusRing}
              onBlur={clearFocusRing}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

/** Highlights the section tab whose content is currently most visible under the sticky header. */
function useScrollSpy(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    if (sectionIds.length === 0) return;
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: `-${SUBNAV_SCROLL_OFFSET}px 0px -60% 0px`, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds.join(",")]);

  return activeId;
}

/**
 * Previous / Next module footer control — placed at the bottom of a module's
 * content so users can move forward or back without scrolling to the top bar.
 */
export function ModulePrevNext({
  currentModuleId,
  onNavigate,
  onBack,
}: {
  currentModuleId: ModuleId;
  onNavigate: (path: string) => void;
  onBack: () => void;
}) {
  const { prev, next } = getAdjacentModules(currentModuleId);

  return (
    <nav
      aria-label="Previous and next module"
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 16,
        padding: "28px 32px",
        background: colors.offWhite,
        borderTop: "1px solid rgba(46,46,56,0.08)",
        flexWrap: "wrap",
      }}
    >
      {prev ? (
        <PrevNextButton direction="prev" title={prev.title} onClick={() => onNavigate(prev.path)} />
      ) : (
        <PrevNextButton direction="prev" title="Phase 1 Overview" onClick={onBack} />
      )}
      {next ? (
        <PrevNextButton direction="next" title={next.title} onClick={() => onNavigate(next.path)} />
      ) : (
        <PrevNextButton direction="next" title="Back to Phase 1" onClick={onBack} />
      )}
    </nav>
  );
}

function PrevNextButton({
  direction,
  title,
  onClick,
}: {
  direction: "prev" | "next";
  title: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const isNext = direction === "next";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isNext ? "flex-end" : "flex-start",
        textAlign: isNext ? "right" : "left",
        gap: 4,
        background: "none",
        border: "none",
        borderBottom: `2px solid ${hovered || focused ? colors.yellow : "transparent"}`,
        outline: focused ? FOCUS_RING : "none",
        outlineOffset: 2,
        cursor: "pointer",
        padding: "4px 2px 8px",
        minWidth: 180,
        marginLeft: isNext ? "auto" : 0,
      }}
    >
      <span style={{ color: colors.gray01, fontFamily: fonts.regular, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {isNext ? "Next" : "Previous"}
      </span>
      <span style={{ color: colors.offBlack, fontFamily: fonts.bold, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
        {!isNext && "←"} {title} {isNext && "→"}
      </span>
    </button>
  );
}
