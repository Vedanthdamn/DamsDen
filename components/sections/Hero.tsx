'use client';

import { motion } from 'framer-motion';
import { useCurtainContext } from '@/context/CurtainContext';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
  const { triggerCurtain } = useCurtainContext();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 'clamp(24px, 10vw, 10vw)',
        paddingRight: 'clamp(24px, 10vw, 10vw)',
      }}
    >
      {/* Top label */}
      <motion.p
        {...fade(0)}
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: 'rgba(232,234,240,0.3)',
          letterSpacing: '0.2em',
          marginBottom: '32px',
        }}
      >
        01 — PORTFOLIO
      </motion.p>

      {/* Name */}
      <motion.h1
        {...fade(0.3)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(56px, 8vw, 96px)',
          fontWeight: 300,
          color: '#E8EAF0',
          letterSpacing: '-0.01em',
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Vedanth Dama
      </motion.h1>

      {/* Descriptor */}
      <motion.p
        {...fade(0.6)}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          color: 'rgba(232,234,240,0.5)',
          letterSpacing: '0.04em',
          marginTop: '16px',
          marginBottom: '8px',
        }}
      >
        Engineer · Builder · Student of Systems
      </motion.p>

      {/* Detail */}
      <motion.p
        {...fade(0.8)}
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '12px',
          color: 'rgba(232,234,240,0.25)',
        }}
      >
        B.Tech CSE (AI &amp; ML) · SRMIST · Class of 2028
      </motion.p>

      {/* Rule */}
      <motion.div
        {...fade(1.0)}
        style={{
          width: '48px',
          height: '1px',
          background: 'rgba(232,234,240,0.2)',
          marginTop: '32px',
          marginBottom: '24px',
        }}
      />

      {/* CTA links */}
      <motion.div
        {...fade(1.2)}
        style={{ display: 'flex', gap: '28px', alignItems: 'center' }}
      >
        <button
          onClick={() => triggerCurtain('/projects')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(232,234,240,0.45)',
            letterSpacing: '0.02em',
            transition: 'color 200ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.9)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.45)'; }}
        >
          View Work ↓
        </button>

        <a
          href="https://drive.google.com/file/d/1ij1pB0yc3gjMjbB16xhhB1_2HXAMMTFP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(232,234,240,0.45)',
            letterSpacing: '0.02em',
            textDecoration: 'none',
            transition: 'color 200ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.9)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.45)'; }}
        >
          Resume →
        </a>
      </motion.div>

      {/* Bottom-right status — desktop only */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '48px',
          textAlign: 'right',
        }}
      >
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'rgba(232,234,240,0.2)',
            lineHeight: 1.6,
          }}
        >
          New Delhi, India
        </p>
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'rgba(232,234,240,0.2)',
            lineHeight: 1.6,
          }}
        >
          Available for internships
        </p>
      </div>
    </section>
  );
}
