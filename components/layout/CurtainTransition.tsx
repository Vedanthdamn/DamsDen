'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCurtainContext } from '@/context/CurtainContext';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

function Rocket() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      {/* Ship body */}
      <svg
        viewBox="0 0 80 120"
        width="52"
        height="78"
        fill="none"
        style={{ filter: 'drop-shadow(0 0 10px rgba(110,150,255,0.25))' }}
      >
        {/* Main hull */}
        <path
          d="M40 5 C30 5 22 26 21 57 L40 65 L59 57 C58 26 50 5 40 5Z"
          fill="rgba(232,234,240,0.06)"
          stroke="rgba(232,234,240,0.26)"
          strokeWidth="0.8"
        />
        {/* Nose highlight */}
        <path
          d="M40 5 C37 5 33 14 30 28 C34 23 40 21 40 21 C40 21 46 23 50 28 C47 14 43 5 40 5Z"
          fill="rgba(232,234,240,0.12)"
        />
        {/* Cockpit */}
        <ellipse
          cx="40" cy="38" rx="8.5" ry="12"
          fill="rgba(110,150,255,0.13)"
          stroke="rgba(150,185,255,0.36)"
          strokeWidth="0.8"
        />
        {/* Cockpit inner reflection */}
        <ellipse cx="37" cy="34" rx="2.5" ry="4" fill="rgba(200,220,255,0.09)" />
        {/* Left wing */}
        <path
          d="M21 57 L5 80 L30 73 L21 57Z"
          fill="rgba(232,234,240,0.04)"
          stroke="rgba(232,234,240,0.14)"
          strokeWidth="0.7"
        />
        {/* Right wing */}
        <path
          d="M59 57 L75 80 L50 73 L59 57Z"
          fill="rgba(232,234,240,0.04)"
          stroke="rgba(232,234,240,0.14)"
          strokeWidth="0.7"
        />
        {/* Engine bell */}
        <path
          d="M31 64 L29 75 L51 75 L49 64Z"
          fill="rgba(232,234,240,0.09)"
          stroke="rgba(232,234,240,0.17)"
          strokeWidth="0.6"
        />
        {/* Engine bell throat glow */}
        <path d="M34 67 L33 73 L47 73 L46 67Z" fill="rgba(80,110,220,0.20)" />
      </svg>

      {/* Engine exhaust layers */}
      <div style={{ marginTop: '-2px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Core flame */}
        <motion.div
          animate={{
            scaleY: [1, 1.3, 0.82, 1.22, 1],
            scaleX: [1, 0.84, 1.1, 0.88, 1],
            opacity: [0.88, 1, 0.74, 1, 0.88],
          }}
          transition={{ duration: 0.48, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
          style={{
            width: '12px',
            height: '26px',
            borderRadius: '0 0 60% 60% / 0 0 80% 80%',
            background:
              'linear-gradient(180deg, rgba(190,215,255,0.96) 0%, rgba(110,155,255,0.82) 38%, rgba(72,105,225,0.52) 74%, transparent 100%)',
            filter: 'blur(1.5px)',
            transformOrigin: 'top center',
          }}
        />
        {/* Mid glow */}
        <motion.div
          animate={{
            scaleY: [1, 1.45, 0.72, 1.28, 1],
            opacity: [0.38, 0.62, 0.28, 0.58, 0.38],
          }}
          transition={{ duration: 0.64, repeat: Infinity, ease: 'easeInOut', delay: 0.09, repeatType: 'mirror' }}
          style={{
            position: 'absolute',
            top: 0,
            width: '26px',
            height: '38px',
            borderRadius: '0 0 60% 60% / 0 0 80% 80%',
            background:
              'linear-gradient(180deg, rgba(80,125,255,0.28) 0%, rgba(60,92,205,0.12) 60%, transparent 100%)',
            filter: 'blur(5px)',
            transformOrigin: 'top center',
          }}
        />
        {/* Outer halo */}
        <motion.div
          animate={{ opacity: [0.18, 0.38, 0.14, 0.36, 0.18], scaleX: [1, 1.65, 0.9, 1.5, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
          style={{
            position: 'absolute',
            top: '-6px',
            width: '44px',
            height: '56px',
            background: 'radial-gradient(ellipse at 50% 14%, rgba(80,135,255,0.22) 0%, transparent 70%)',
            filter: 'blur(10px)',
            transformOrigin: 'top center',
          }}
        />
      </div>
    </div>
  );
}

export default function CurtainTransition() {
  const { isAnimating } = useCurtainContext();
  const [launched, setLaunched] = useState(false);
  const [entryDone, setEntryDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLaunched(true), 960);
    const t2 = setTimeout(() => setEntryDone(true), 1920);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* ── Initial page load ── */}
      {!entryDone && (
        <>
          {/* Black overlay slides up after launch */}
          <motion.div
            initial={{ y: '0%' }}
            animate={launched ? { y: '-100%' } : { y: '0%' }}
            transition={launched ? { duration: 0.66, ease: EASE, delay: 0.22 } : {}}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: '#050508',
              pointerEvents: 'none',
            }}
          />

          {/* Spaceship — wrapper handles centering, motion handles animation */}
          <div
            style={{
              position: 'fixed',
              left: '50%',
              top: '50%',
              zIndex: 101,
              pointerEvents: 'none',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: '-50%', y: '-44%' }}
              animate={
                launched
                  ? { opacity: 0, x: '-50%', y: '-520px', scale: 0.8 }
                  : { opacity: 1, x: '-50%', y: '-44%' }
              }
              transition={
                launched
                  ? { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
                  : { duration: 0.42, ease: 'easeOut', delay: 0.18 }
              }
            >
              <Rocket />
            </motion.div>
          </div>
        </>
      )}

      {/* ── Route-change curtain ── */}
      <motion.div
        animate={isAnimating ? ['cover', 'uncover'] : { y: '100%' }}
        variants={{
          cover: { y: '0%', transition: { duration: 0.35, ease: EASE } },
          uncover: { y: '-100%', transition: { duration: 0.35, ease: EASE, delay: 0.35 } },
        }}
        initial={{ y: '100%' }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          backgroundColor: '#050508',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
