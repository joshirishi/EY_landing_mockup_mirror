/**
 * EYFooter — Global footer following EY web component spec
 *
 * Sections:
 *   - EY Logo (mark-only variant)
 *   - Optional link columns (Services, About, Legal)
 *   - Spectrum gradient top border accent
 *   - Copyright line
 *   - Optional social links slot
 *
 * Usage:
 *   <EYFooter
 *     columns={[{ heading: 'Services', links: [{ label: 'Consulting', href: '/consulting' }] }]}
 *     copyright="© 2026 EY. All Rights Reserved."
 *   />
 */

import { useState } from 'react';
import { colors, fonts, spectrumCss } from './tokens';
import { EYLogo } from './EYLogo';
import type { CSSProperties, ReactNode } from 'react';

interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

interface EYFooterProps {
  columns?: FooterColumn[];
  copyright?: string;
  /** Slot for social icons or extra content */
  socialSlot?: ReactNode;
  /** Spectrum gradient number (1–7) for the top accent line */
  gradient?: number;
  style?: CSSProperties;
  className?: string;
}

export function EYFooter({
  columns = [],
  copyright = '© EY. All Rights Reserved.',
  socialSlot,
  gradient = 4,
  style,
  className,
}: EYFooterProps) {
  return (
    <footer
      className={className}
      style={{
        background: colors.confidentBlack,
        color: colors.gray02,
        position: 'relative',
        ...style,
      }}
      aria-label="Site footer"
    >
      {/* Spectrum gradient top accent line */}
      <div
        style={{
          height: 3,
          background: spectrumCss(gradient),
          width: '100%',
        }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '40px 32px 32px',
        }}
      >
        {/* ── Top row: logo + columns ──────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: columns.length > 0 ? `220px repeat(${columns.length}, 1fr)` : '1fr',
            gap: 48,
            marginBottom: 40,
          }}
        >
          {/* Logo + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <EYLogo variant="horizontal-sm" theme="dark" />
            <p style={{
              fontFamily: "'EYInterstate:Light', Arial, sans-serif",
              fontSize: 13,
              color: colors.gray02,
              lineHeight: 1.55,
              margin: 0,
              maxWidth: 180,
            }}>
              Building a better working world.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p style={{
                fontFamily: fonts.bold,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: colors.yellow,
                margin: '0 0 12px 0',
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom row: copyright + social ───────────────────────────── */}
        <div
          style={{
            borderTop: `1px solid rgba(255,255,255,0.08)`,
            paddingTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <p style={{
            fontFamily: "'EYInterstate:Light', Arial, sans-serif",
            fontSize: 12,
            color: colors.gray02,
            margin: 0,
          }}>
            {copyright}
          </p>
          {socialSlot && <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>{socialSlot}</div>}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ link }: { link: FooterLink }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (link.onClick) link.onClick();
    else if (link.href) window.location.href = link.href;
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: "'EYInterstate:Regular', Arial, sans-serif",
        fontSize: 13,
        color: hovered ? colors.white : colors.gray02,
        transition: 'color 0.15s',
        textAlign: 'left',
      }}
    >
      {link.label}
    </button>
  );
}

