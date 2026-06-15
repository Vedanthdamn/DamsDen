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

const REWRITTEN_BULLETS: Record<string, string[]> = {
  drdo: [
    'Selected for a research internship starting July 2026.',
    'Working on AI and post-quantum cryptography.',
  ],
  dmrc: [
    'Worked with a Deloitte team on GCP data infrastructure and Power BI dashboards for Delhi Metro.',
    'Built parts of a multi-view operational dashboard used in production.',
  ],
  msa: [
    'Run corporate events for the SRMIST chapter — logistics, vendors, budgets, the whole thing.',
    'About 300+ students across events so far.',
  ],
  nicsi: [
    'Built a government chatbot for service delivery.',
    'First internship. Learned how production AI systems actually work.',
  ],
};

function ExperienceEntry({ item, delay }: { item: ExperienceItem; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const bullets = REWRITTEN_BULLETS[item.id] ?? item.bullets;

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
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(232,234,240,0.25)', margin: '0 0 4px 0', lineHeight: 1.5 }}>
            {item.period}
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(232,234,240,0.18)', margin: 0, lineHeight: 1.5 }}>
            {item.location}
          </p>
        </div>

        {/* Content column */}
        <div>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '22px',
              color: hovered ? 'rgba(232,234,240,1)' : 'rgba(232,234,240,0.85)',
              fontWeight: 400,
              transition: 'color 200ms ease',
              lineHeight: 1.2,
              display: 'block',
              marginBottom: '4px',
            }}
          >
            {item.org}
          </span>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(232,234,240,0.4)', fontStyle: 'italic', margin: '0 0 20px 0' }}>
            {item.role}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {bullets.map((bullet, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(232,234,240,0.45)',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {bullet}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="exp-row-mobile" style={{ padding: '32px 0' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(232,234,240,0.25)', margin: '0 0 2px 0' }}>
          {item.period}
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(232,234,240,0.18)', margin: '0 0 12px 0' }}>
          {item.location}
        </p>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: 'rgba(232,234,240,0.85)', fontWeight: 400, lineHeight: 1.2, display: 'block', marginBottom: '4px' }}>
          {item.org}
        </span>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(232,234,240,0.4)', fontStyle: 'italic', margin: '0 0 16px 0' }}>
          {item.role}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {bullets.map((bullet, i) => (
            <p key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(232,234,240,0.45)', lineHeight: 1.75, margin: 0 }}>
              {bullet}
            </p>
          ))}
        </div>
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
        <SectionLabel title="experience" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '42px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.9)',
          margin: '0 0 48px 0',
        }}
      >
        Experience.
      </motion.h2>

      <div>
        {experiences.map((item, i) => (
          <ExperienceEntry key={item.id} item={item} delay={0.1 + i * 0.1} />
        ))}
        <div style={{ borderTop: '1px solid rgba(232,234,240,0.07)' }} />
      </div>
    </section>
  );
}
