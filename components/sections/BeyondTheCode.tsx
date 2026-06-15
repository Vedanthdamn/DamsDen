'use client';

import { motion } from 'framer-motion';
import {
  IconToolsKitchen2,
  IconCompass,
  IconMusic,
  IconHammer,
} from '@tabler/icons-react';
import SectionLabel from '@/components/ui/SectionLabel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const ENTRIES = [
  {
    domain: 'CULINA',
    Icon: IconToolsKitchen2,
    title: 'Food as design.',
    body: 'A considered meal is a form of engineering. Ingredients, sequence, balance — the same logic applies whether you are writing a function or preparing a plate. I take food seriously as a craft, not a convenience.',
  },
  {
    domain: 'ITER',
    Icon: IconCompass,
    title: 'Travel as fieldwork.',
    body: 'Italy taught me more about systems, logistics, and human behaviour than any textbook. Navigating rail strikes, reading transit maps in a language you barely speak, finding the right trattoria before 2pm — it builds a particular kind of competence.',
  },
  {
    domain: 'MUSICA',
    Icon: IconMusic,
    title: 'Music that creates space.',
    body: 'Romantic and cinematic scores while working. Not music that fills silence, but music that makes silence feel intentional. The kind that makes a long debugging session feel like a scene in a film worth watching.',
  },
  {
    domain: 'FABRICA',
    Icon: IconHammer,
    title: 'The act of building.',
    body: 'The satisfaction is the same regardless of what you are building — a working prototype, a structured codebase, a carefully planned event. Something that did not exist now does. That is the constant.',
  },
];

export default function BeyondTheCode() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#050508',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel number="05" title="BEYOND THE CODE" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '42px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.9)',
          lineHeight: 1.2,
          margin: '0 0 16px 0',
        }}
      >
        What I bring to the table isn&apos;t only technical.
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
        The engineer is shaped by more than what he builds.
      </motion.p>

      {/* Entries */}
      <div>
        {ENTRIES.map(({ domain, Icon, title, body }, i) => (
          <motion.div
            key={domain}
            {...fadeUp(0.2 + i * 0.1)}
            style={{
              borderTop: '1px solid rgba(232,234,240,0.07)',
              padding: '36px 0',
              display: 'flex',
              gap: '48px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: domain + icon (desktop only) */}
            <div
              className="btc-left"
              style={{
                width: '120px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '10px',
                  color: 'rgba(232,234,240,0.2)',
                  letterSpacing: '0.3em',
                }}
              >
                {domain}
              </span>
              <Icon size={20} color="rgba(232,234,240,0.12)" />
            </div>

            {/* Right: content */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  color: 'rgba(232,234,240,0.8)',
                  fontWeight: 400,
                  margin: '0 0 12px 0',
                  lineHeight: 1.3,
                }}
              >
                {title}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: 'rgba(232,234,240,0.45)',
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Closing border */}
        <div style={{ borderTop: '1px solid rgba(232,234,240,0.07)' }} />
      </div>

      {/* Closing quote */}
      <motion.div
        {...fadeUp(0.6)}
        style={{
          marginTop: '48px',
          display: 'flex',
          gap: '0',
        }}
      >
        <div
          style={{
            width: '2px',
            background: 'rgba(232,234,240,0.15)',
            flexShrink: 0,
            alignSelf: 'stretch',
          }}
        />
        <div style={{ paddingLeft: '24px' }}>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '20px',
              color: 'rgba(232,234,240,0.6)',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            &ldquo;I am more interested in the quality of attention I bring to something than the domain it belongs to.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: 'rgba(232,234,240,0.2)',
              margin: '12px 0 0 0',
            }}
          >
            — Vedanth Dama
          </p>
        </div>
      </motion.div>
    </section>
  );
}
