/**
 * EY Global Design Kit
 *
 * Import any component or token from this single entry point:
 *
 *   import { EYNavbar, EYButton, EYCard, colors } from '@/design-kit';
 *   // or
 *   import { EYFrame, EYTypography } from '../design-kit';
 */

// ── Tokens ───────────────────────────────────────────────────────────────────
export { colors, fonts, typeScale, spacing, spectrumGradients, spectrumCss, frameStroke } from './tokens';

// ── Components ───────────────────────────────────────────────────────────────
export { EYLogo } from './EYLogo';
export { EYButton } from './EYButton';
export { EYNavbar } from './EYNavbar';
export { EYFooter } from './EYFooter';
export { EYCard } from './EYCard';
export { EYFrame } from './EYFrame';
export { SiteHeader, PlatformModeBadge } from './SiteHeader';
export type { SiteSection } from './SiteHeader';
export { ModuleHeader, ModulePrevNext, SUBNAV_SCROLL_OFFSET } from './LearningNav';
export { EYWhatsNext, EYWhatsNextHighlight } from './EYWhatsNext';
export {
  MODULES,
  PHASE_LABEL,
  PHASE_PATH,
  BRAND_LABEL,
  TOTAL_MODULES,
  getModule,
  getAdjacentModules,
  getSubModuleGroups,
} from './curriculum';
export {
  EYEyebrow,
  EYDisplay,
  EYHeading,
  EYSubheading,
  EYBody,
  EYCTA,
  EYCaption,
  EYQuote,
} from './EYTypography';

// ── Types re-exported for convenience ────────────────────────────────────────
export type { NavItem } from './EYNavbar';
export type { ModuleId, CurriculumModule, SubModule } from './curriculum';
