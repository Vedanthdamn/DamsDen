'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCurtainContext } from '@/context/CurtainContext';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

type Phase = 'idle' | 'cover' | 'hold' | 'uncover';

// Geometric arrow rocket matching the user's reference image —
// single unified path: wide V-wing body + narrow tail spike
function Rocket() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      {/* Outer glow */}
      <motion.div
        animate={{ opacity: [0.18, 0.38, 0.14, 0.34, 0.18], scale: [1, 1.08, 0.96, 1.05, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
        style={{
          position: 'absolute',
          inset: '-20px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 50% 40%, rgba(232,234,240,0.12) 0%, transparent 70%)',
          filter: 'blur(12px)',
          pointerEvents: 'none',
        }}
      />

      <svg
        viewBox="0 0 80 108"
        width="56"
        height="76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Unified body + tail — matches reference image shape */}
        <path
          d="M40 4 L73 56 L50 43 L44 65 L40 100 L36 65 L30 43 L7 56 Z"
          fill="rgba(232,234,240,0.88)"
        />
        {/* Inner specular highlight on nose */}
        <path
          d="M40 4 L56 36 L40 30 L24 36 Z"
          fill="rgba(232,234,240,0.30)"
        />
      </svg>

      {/* Engine glow at tail */}
      <motion.div
        animate={{ opacity: [0.45, 0.75, 0.35, 0.70, 0.45], scaleX: [1, 1.5, 0.8, 1.3, 1] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
        style={{
          position: 'absolute',
          bottom: '-4px',
          width: '16px',
          height: '22px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(232,234,240,0.55) 0%, transparent 80%)',
          filter: 'blur(6px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default function CurtainTransition() {
  const { isAnimating } = useCurtainContext();

  // ── Initial page load ──
  const [launched, setLaunched] = useState(false);
  const [entryDone, setEntryDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLaunched(true), 960);
    const t2 = setTimeout(() => setEntryDone(true), 1920);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // ── Route-change phase system ──
  const [phase, setPhase] = useState<Phase>('idle');
  const prevAnimating = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (isAnimating && !prevAnimating.current) {
      timers.current.forEach(clearTimeout);
      timers.current = [];

      setPhase('cover');
      timers.current.push(setTimeout(() => setPhase('hold'),   440));
      timers.current.push(setTimeout(() => setPhase('uncover'), 440 + 1000));
      timers.current.push(setTimeout(() => setPhase('idle'),   440 + 1000 + 520));
    }
    prevAnimating.current = isAnimating;
  }, [isAnimating]);

  useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);

  return (
    <>
      {/* ── Initial page load ── */}
      {!entryDone && (
        <>
          {/* Dark overlay — StarField (z:101) renders above this */}
          <motion.div
            initial={{ y: '0%' }}
            animate={launched ? { y: '-100%' } : { y: '0%' }}
            transition={launched ? { duration: 0.66, ease: EASE, delay: 0.22 } : {}}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              backgroundColor: '#050508', pointerEvents: 'none',
            }}
          />
          {/* Ship */}
          <div style={{ position: 'fixed', left: '50%', top: '50%', zIndex: 102, pointerEvents: 'none' }}>
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
        animate={
          phase === 'idle'    ? { y: '100%' } :
          phase === 'cover'   ? { y: '0%' }   :
          phase === 'hold'    ? { y: '0%' }   :
                                { y: '-100%' }
        }
        transition={
          phase === 'cover'   ? { duration: 0.44, ease: EASE } :
          phase === 'uncover' ? { duration: 0.50, ease: EASE } :
          phase === 'idle'    ? { duration: 0 } :
                                {}
        }
        initial={{ y: '100%' }}
        style={{
          position: 'fixed', inset: 0, zIndex: 100,
          backgroundColor: '#050508', pointerEvents: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        {/* Ship z-index must beat the curtain (100) but StarField is 101 so stars show above */}
        <div style={{ position: 'relative', zIndex: 100, transform: 'translateY(-52px)' }}>
          <Rocket />
        </div>
      </motion.div>
    </>
  );
}
