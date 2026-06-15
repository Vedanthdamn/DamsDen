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
      {/* Name */}
      <motion.h1
        {...fade(0)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(56px, 8vw, 96px)',
          fontWeight: 400,
          color: '#E8EAF0',
          letterSpacing: 0,
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Vedanth Dama
      </motion.h1>

      {/* Descriptor */}
      <motion.p
        {...fade(0.3)}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.5)',
          letterSpacing: 0,
          marginTop: '16px',
          marginBottom: 0,
        }}
      >
        I build things that work.
      </motion.p>

      {/* Rule */}
      <motion.div
        {...fade(0.6)}
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
        {...fade(0.75)}
        style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
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
            color: 'rgba(232,234,240,0.35)',
            letterSpacing: 0,
            transition: 'color 200ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.85)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.35)'; }}
        >
          work
        </button>

        <a
          href="https://drive.google.com/file/d/1ij1pB0yc3gjMjbB16xhhB1_2HXAMMTFP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(232,234,240,0.35)',
            letterSpacing: 0,
            textDecoration: 'none',
            transition: 'color 200ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.85)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.35)'; }}
        >
          resume
        </a>
      </motion.div>

      {/* Bottom-right status — desktop only */}
      <div
        className="hidden md:block"
        style={{ position: 'absolute', bottom: '40px', right: '48px', textAlign: 'right' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(232,234,240,0.2)', lineHeight: 1.6, margin: 0 }}>
          India
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(232,234,240,0.2)', lineHeight: 1.6, margin: 0 }}>
          open to work
        </p>
      </div>
    </section>
  );
}
