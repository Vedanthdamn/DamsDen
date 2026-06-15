'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { experiences, type ExperienceItem } from '@/lib/experience';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

function PulseDot() {
  return (
    <span
      className="pulse-dot"
      style={{
        display: 'inline-block',
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: 'rgba(200,180,80,0.6)',
        marginLeft: '6px',
        verticalAlign: 'middle',
      }}
    />
  );
}

function ExperienceEntry({ item, delay }: { item: ExperienceItem; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      {...fadeUp(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ borderTop: '1px solid rgba(232,234,240,0.07)' }}
    >
      {/* Desktop layout */}
      <div className="exp-row-desktop">
        {/* Period column */}
        <div style={{ paddingTop: '2px' }}>
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: 'rgba(232,234,240,0.25)',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {item.period}
          </p>
          <div
            style={{
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '9px',
                color: 'rgba(232,234,240,0.2)',
                letterSpacing: '0.2em',
              }}
            >
              {item.type.toUpperCase()}
            </span>
            {item.upcoming && <PulseDot />}
          </div>
        </div>

        {/* Content column */}
        <div>
          <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '22px',
                color: hovered ? 'rgba(232,234,240,1)' : 'rgba(232,234,240,0.85)',
                fontWeight: 400,
                transition: 'color 200ms ease',
                lineHeight: 1.2,
              }}
            >
              {item.org}
            </span>
            {item.upcoming && (
              <span
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '11px',
                  color: 'rgba(232,234,240,0.3)',
                  letterSpacing: '0.05em',
                }}
              >
                — Upcoming
              </span>
            )}
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(232,234,240,0.4)',
              fontStyle: 'italic',
              margin: '0 0 4px 0',
            }}
          >
            {item.role}
          </p>
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: 'rgba(232,234,240,0.2)',
              margin: '0 0 20px 0',
            }}
          >
            {item.location}
          </p>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {item.bullets.map((bullet, i) => (
              <li
                key={i}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(232,234,240,0.5)',
                  lineHeight: 1.75,
                  borderLeft: '1px solid rgba(232,234,240,0.1)',
                  paddingLeft: '16px',
                  marginBottom: i < item.bullets.length - 1 ? '8px' : 0,
                }}
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="exp-row-mobile" style={{ padding: '32px 0' }}>
        <div style={{ marginBottom: '16px' }}>
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: 'rgba(232,234,240,0.25)',
              margin: '0 0 4px 0',
            }}
          >
            {item.period}
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '9px',
                color: 'rgba(232,234,240,0.2)',
                letterSpacing: '0.2em',
              }}
            >
              {item.type.toUpperCase()}
            </span>
            {item.upcoming && <PulseDot />}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '20px',
              color: 'rgba(232,234,240,0.85)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {item.org}
          </span>
          {item.upcoming && (
            <span
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '10px',
                color: 'rgba(232,234,240,0.3)',
              }}
            >
              — Upcoming
            </span>
          )}
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(232,234,240,0.4)',
            fontStyle: 'italic',
            margin: '0 0 4px 0',
          }}
        >
          {item.role}
        </p>
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'rgba(232,234,240,0.2)',
            margin: '0 0 16px 0',
          }}
        >
          {item.location}
        </p>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'rgba(232,234,240,0.5)',
                lineHeight: 1.75,
                borderLeft: '1px solid rgba(232,234,240,0.1)',
                paddingLeft: '16px',
                marginBottom: i < item.bullets.length - 1 ? '8px' : 0,
              }}
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#050508',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel number="04" title="EXPERIENCE" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '38px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.9)',
          margin: '0 0 48px 0',
        }}
      >
        Where I&apos;ve worked.
      </motion.h2>

      <div>
        {experiences.map((item, i) => (
          <ExperienceEntry key={item.id} item={item} delay={0.1 + i * 0.1} />
        ))}
        {/* Closing border */}
        <div style={{ borderTop: '1px solid rgba(232,234,240,0.07)' }} />
      </div>
    </section>
  );
}
