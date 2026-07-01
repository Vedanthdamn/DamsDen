'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCurtainContext } from '@/context/CurtainContext';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

function Rocket() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <svg
        viewBox="0 0 80 120"
        width="52"
        height="78"
        fill="none"
        style={{ filter: 'drop-shadow(0 0 8px rgba(232,234,240,0.12))' }}
      >
        {/* Hull */}
        <path
          d="M40 5 C30 5 22 26 21 57 L40 65 L59 57 C58 26 50 5 40 5Z"
          fill="rgba(232,234,240,0.06)"
          stroke="rgba(232,234,240,0.24)"
          strokeWidth="0.8"
        />
        {/* Nose highlight */}
        <path
          d="M40 5 C37 5 33 14 30 28 C34 23 40 21 40 21 C40 21 46 23 50 28 C47 14 43 5 40 5Z"
          fill="rgba(232,234,240,0.14)"
        />
        {/* Cockpit */}
        <ellipse cx="40" cy="38" rx="8.5" ry="12"
          fill="rgba(232,234,240,0.08)" stroke="rgba(232,234,240,0.26)" strokeWidth="0.8" />
        {/* Cockpit reflection */}
        <ellipse cx="37" cy="34" rx="2.5" ry="4" fill="rgba(232,234,240,0.12)" />
        {/* Left wing */}
        <path d="M21 57 L5 80 L30 73 L21 57Z"
          fill="rgba(232,234,240,0.04)" stroke="rgba(232,234,240,0.13)" strokeWidth="0.7" />
        {/* Right wing */}
        <path d="M59 57 L75 80 L50 73 L59 57Z"
          fill="rgba(232,234,240,0.04)" stroke="rgba(232,234,240,0.13)" strokeWidth="0.7" />
        {/* Engine bell */}
        <path d="M31 64 L29 75 L51 75 L49 64Z"
          fill="rgba(232,234,240,0.09)" stroke="rgba(232,234,240,0.17)" strokeWidth="0.6" />
        {/* Bell throat */}
        <path d="M34 67 L33 73 L47 73 L46 67Z" fill="rgba(232,234,240,0.18)" />
      </svg>

      {/* Exhaust */}
      <div style={{ marginTop: '-2px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Core — white-silver */}
        <motion.div
          animate={{ scaleY: [1, 1.3, 0.82, 1.22, 1], scaleX: [1, 0.84, 1.1, 0.88, 1], opacity: [0.88, 1, 0.72, 1, 0.88] }}
          transition={{ duration: 0.48, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
          style={{
            width: '12px', height: '26px',
            borderRadius: '0 0 60% 60% / 0 0 80% 80%',
            background: 'linear-gradient(180deg, rgba(242,244,250,0.96) 0%, rgba(205,212,232,0.82) 40%, rgba(165,178,212,0.50) 75%, transparent 100%)',
            filter: 'blur(1.5px)',
            transformOrigin: 'top center',
          }}
        />
        {/* Mid glow */}
        <motion.div
          animate={{ scaleY: [1, 1.45, 0.72, 1.28, 1], opacity: [0.32, 0.55, 0.24, 0.52, 0.32] }}
          transition={{ duration: 0.64, repeat: Infinity, ease: 'easeInOut', delay: 0.09, repeatType: 'mirror' }}
          style={{
            position: 'absolute', top: 0,
            width: '26px', height: '38px',
            borderRadius: '0 0 60% 60% / 0 0 80% 80%',
            background: 'linear-gradient(180deg, rgba(220,228,245,0.24) 0%, rgba(180,192,220,0.09) 60%, transparent 100%)',
            filter: 'blur(5px)',
            transformOrigin: 'top center',
          }}
        />
        {/* Outer halo */}
        <motion.div
          animate={{ opacity: [0.12, 0.28, 0.09, 0.25, 0.12], scaleX: [1, 1.7, 0.9, 1.5, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
          style={{
            position: 'absolute', top: '-6px',
            width: '44px', height: '56px',
            background: 'radial-gradient(ellipse at 50% 14%, rgba(220,228,245,0.16) 0%, transparent 70%)',
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
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* ── Initial page load: ship + overlay ── */}
      {!entryDone && (
        <>
          <motion.div
            initial={{ y: '0%' }}
            animate={launched ? { y: '-100%' } : { y: '0%' }}
            transition={launched ? { duration: 0.66, ease: EASE, delay: 0.22 } : {}}
            style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: '#050508', pointerEvents: 'none' }}
          />
          <div style={{ position: 'fixed', left: '50%', top: '50%', zIndex: 101, pointerEvents: 'none' }}>
            <motion.div
              initial={{ opacity: 0, x: '-50%', y: '-44%' }}
              animate={
                launched
                  ? { opacity: 0, x: '-50%', y: '-520px', scale: 0.8 }
                  : { opacity: 1, x: '-50%', y: '-44%' }
              }
              transition={
                launched
                  ? { duration: 0.40, ease: [0.76, 0, 0.24, 1] }
                  : { duration: 0.42, ease: 'easeOut', delay: 0.18 }
              }
            >
              <Rocket />
            </motion.div>
          </div>
        </>
      )}

      {/* ── Route-change curtain — rocket rides on it ── */}
      <motion.div
        animate={isAnimating ? ['cover', 'uncover'] : { y: '100%' }}
        variants={{
          cover:   { y: '0%',    transition: { duration: 0.42, ease: EASE } },
          uncover: { y: '-100%', transition: { duration: 0.42, ease: EASE, delay: 0.44 } },
        }}
        initial={{ y: '100%' }}
        style={{
          position: 'fixed', inset: 0, zIndex: 100,
          backgroundColor: '#050508', pointerEvents: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <div style={{ transform: 'translateY(-52px)' }}>
          <Rocket />
        </div>
      </motion.div>
    </>
  );
}
