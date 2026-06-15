'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const ENTRIES = [
  {
    title: 'Food.',
    body: 'A good meal is a form of engineering. I take it seriously.',
  },
  {
    title: 'Travel.',
    body: 'Italy in 2025. Navigated a rail strike, read menus in Italian, found the right trattoria before 2pm. Travel builds a kind of competence that projects don\'t.',
  },
  {
    title: 'Music.',
    body: 'Romantic and cinematic scores while working. Music that creates space, not fills it.',
  },
  {
    title: 'Making.',
    body: 'The satisfaction is the same whether it\'s a working app, a structured codebase, or a well-run event. Something that didn\'t exist now does.',
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
        <SectionLabel title="beyond the code" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '42px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.9)',
          lineHeight: 1.2,
          margin: '0 0 48px 0',
        }}
      >
        Beyond the code.
      </motion.h2>

      <div>
        {ENTRIES.map(({ title, body }, i) => (
          <motion.div
            key={title}
            {...fadeUp(0.16 + i * 0.1)}
            style={{
              borderTop: '1px solid rgba(232,234,240,0.06)',
              padding: '32px 0',
            }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '22px',
                color: 'rgba(232,234,240,0.8)',
                fontWeight: 400,
                margin: '0 0 10px 0',
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
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {body}
            </p>
          </motion.div>
        ))}
        <div style={{ borderTop: '1px solid rgba(232,234,240,0.06)' }} />
      </div>
    </section>
  );
}
