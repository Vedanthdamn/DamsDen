'use client';

import { useState } from 'react';
import { useCurtainContext } from '@/context/CurtainContext';

const NAV_LINKS = [
  { label: 'how this was made', href: '/how-this-was-made' },
  { label: 'beyond the code', href: '/beyond-the-code' },
  { label: 'contact', href: '/contact' },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  const { triggerCurtain } = useCurtainContext();
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={() => triggerCurtain(href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        color: hovered ? 'rgba(232,234,240,0.75)' : 'rgba(232,234,240,0.35)',
        transition: 'color 200ms ease',
        textDecoration: hovered ? 'underline' : 'none',
        textUnderlineOffset: '3px',
      }}
    >
      {label} →
    </button>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(232,234,240,0.07)',
        padding: 'clamp(40px, 6vw, 64px) clamp(24px, 10vw, 10vw)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Top row: name + socials */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '22px',
            fontWeight: 300,
            color: 'rgba(232,234,240,0.85)',
            letterSpacing: '-0.01em',
          }}
        >
          Vedanth Dama
        </span>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/Vedanthdamn' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vedanth-dama' },
            { label: 'damavedanth@gmail.com', href: 'mailto:damavedanth@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(232,234,240,0.35)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.8)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.35)'; }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: 'rgba(232,234,240,0.25)',
          margin: '0 0 16px 0',
        }}
      >
        Not built for bots or ATS. Built for people.
      </p>

      {/* Bottom row: build note + nav links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '6px',
          rowGap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(232,234,240,0.2)',
          }}
        >
          Built with deliberate attention to detail.
        </span>

        <span style={{ color: 'rgba(232,234,240,0.12)', margin: '0 4px' }}>·</span>

        {NAV_LINKS.map((link, i) => (
          <span key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FooterLink label={link.label} href={link.href} />
            {i < NAV_LINKS.length - 1 && (
              <span style={{ color: 'rgba(232,234,240,0.12)' }}>·</span>
            )}
          </span>
        ))}
      </div>
    </footer>
  );
}
