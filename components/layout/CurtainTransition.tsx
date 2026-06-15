'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCurtainContext } from '@/context/CurtainContext';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function CurtainTransition() {
  const { isAnimating } = useCurtainContext();
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHasEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Entry reveal on first page load */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            key="entry"
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            onAnimationComplete={() => setHasEntered(true)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: '#050508',
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>

      {/* Route-change curtain */}
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
