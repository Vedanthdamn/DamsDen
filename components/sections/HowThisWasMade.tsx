'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

function SectionLabel2({ label }: { label: string }) {
  return (
    <p
      style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '10px',
        color: 'rgba(232,234,240,0.2)',
        letterSpacing: '0.3em',
        margin: '0 0 24px 0',
      }}
    >
      {label}
    </p>
  );
}

const PALETTE = [
  { color: '#050508', name: 'Void', hex: '#050508', border: true },
  { color: '#E8EAF0', name: 'Silver', hex: '#E8EAF0' },
  { color: '#0C0C10', name: 'Surface', hex: '#0C0C10', border: true },
  { color: 'rgba(232,234,240,0.45)', name: 'Dim', hex: 'rgba(232,234,240,0.45)' },
  { color: 'rgba(232,234,240,0.08)', name: 'Ghost', hex: 'rgba(232,234,240,0.08)' },
  { color: 'rgba(232,234,240,0.1)', name: 'Edge', hex: 'rgba(232,234,240,0.1)' },
];

const STACK = [
  'Next.js 14 (App Router)',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Tabler Icons',
  'Howler.js',
  'Vercel (deployment)',
  'Claude Code (AI-assisted development)',
];

const PRINCIPLES = [
  {
    num: 'I.',
    name: 'Restraint over spectacle',
    body: 'Dark, quiet, and spacious. The web defaults to noise. This site defaults to silence. Every element earns its place.',
  },
  {
    num: 'II.',
    name: 'Typography as architecture',
    body: 'Cormorant Garamond carries the weight. Inter handles clarity. The two together create hierarchy without decoration.',
  },
  {
    num: 'III.',
    name: 'Motion with purpose',
    body: 'Slow fades only. Nothing moves unless it helps you understand something. Subtlety is not laziness — it is confidence.',
  },
  {
    num: 'IV.',
    name: 'Space as design',
    body: 'Negative space is not empty. It is what makes the content legible, the layout breathable, and the impression lasting.',
  },
];

export default function HowThisWasMade() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#050508',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel number="07" title="HOW THIS WAS MADE" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '38px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.9)',
          margin: '0 0 16px 0',
        }}
      >
        Every choice was deliberate.
      </motion.h2>

      <motion.p
        {...fadeUp(0.16)}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          color: 'rgba(232,234,240,0.4)',
          fontStyle: 'italic',
          margin: '0 0 64px 0',
        }}
      >
        This page documents them.
      </motion.p>

      {/* A — PALETTE */}
      <motion.div {...fadeUp(0.24)} style={{ marginBottom: '64px' }}>
        <SectionLabel2 label="PALETTE" />
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {PALETTE.map(({ color, name, hex, border }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '2px',
                  background: color,
                  border: border ? '1px solid rgba(232,234,240,0.12)' : undefined,
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(232,234,240,0.5)',
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {name}
              </p>
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: 'rgba(232,234,240,0.25)',
                  margin: 0,
                  lineHeight: 1.3,
                  wordBreak: 'break-all',
                  maxWidth: '72px',
                }}
              >
                {hex}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* B — TYPOGRAPHY */}
      <motion.div {...fadeUp(0.32)} style={{ marginBottom: '64px' }}>
        <SectionLabel2 label="TYPOGRAPHY" />
        <div>
          {/* Cormorant */}
          <div style={{ padding: '24px 0', borderTop: '1px solid rgba(232,234,240,0.07)' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '36px',
                fontWeight: 300,
                color: 'rgba(232,234,240,0.85)',
                margin: '0 0 8px 0',
                lineHeight: 1.2,
              }}
            >
              Vedanth Dama
            </p>
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: 'rgba(232,234,240,0.25)',
                margin: 0,
                letterSpacing: '0.05em',
              }}
            >
              Display · Titles &amp; Names · Renaissance-cut serif
            </p>
          </div>

          {/* Inter */}
          <div style={{ padding: '24px 0', borderTop: '1px solid rgba(232,234,240,0.07)' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                color: 'rgba(232,234,240,0.75)',
                margin: '0 0 8px 0',
                lineHeight: 1.5,
              }}
            >
              Engineer · Builder · Student of Systems
            </p>
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: 'rgba(232,234,240,0.25)',
                margin: 0,
                letterSpacing: '0.05em',
              }}
            >
              Body · Prose &amp; UI · Neutral grotesque
            </p>
          </div>

          {/* JetBrains Mono */}
          <div style={{ padding: '24px 0', borderTop: '1px solid rgba(232,234,240,0.07)' }}>
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '14px',
                color: 'rgba(232,234,240,0.65)',
                margin: '0 0 8px 0',
                lineHeight: 1.5,
              }}
            >
              B.Tech CSE (AI &amp; ML) · 2028
            </p>
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: 'rgba(232,234,240,0.25)',
                margin: 0,
                letterSpacing: '0.05em',
              }}
            >
              Monospace · Data &amp; Labels · Technical
            </p>
          </div>
        </div>
      </motion.div>

      {/* C — STACK */}
      <motion.div {...fadeUp(0.40)} style={{ marginBottom: '64px' }}>
        <SectionLabel2 label="BUILT WITH" />
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {STACK.map((item) => (
            <li
              key={item}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'rgba(232,234,240,0.5)',
                lineHeight: 2.4,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* D — PRINCIPLES */}
      <motion.div {...fadeUp(0.48)}>
        <SectionLabel2 label="PRINCIPLES" />
        <div>
          {PRINCIPLES.map(({ num, name, body }, i) => (
            <motion.div
              key={num}
              {...fadeUp(0.56 + i * 0.08)}
              style={{
                padding: '28px 0',
                borderTop: '1px solid rgba(232,234,240,0.07)',
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '16px',
                alignItems: 'start',
              }}
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: 'rgba(232,234,240,0.2)',
                  paddingTop: '4px',
                }}
              >
                {num}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px',
                    color: 'rgba(232,234,240,0.8)',
                    fontWeight: 400,
                    margin: '0 0 8px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {name}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(232,234,240,0.4)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(232,234,240,0.07)' }} />
        </div>
      </motion.div>
    </section>
  );
}
