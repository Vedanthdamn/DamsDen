'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaxSealModal from '@/components/ui/WaxSealModal';

export default function DigitalTwin() {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          zIndex: 50,
        }}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute',
                bottom: 'calc(100% + 10px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#0C0C10',
                border: '1px solid rgba(232,234,240,0.1)',
                borderRadius: '20px',
                padding: '6px 12px',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '10px',
                  color: 'rgba(232,234,240,0.6)',
                  letterSpacing: '0.15em',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Digital Twin
              </p>
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px',
                  color: 'rgba(232,234,240,0.25)',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Coming Soon
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#0C0C10',
            border: `1px solid ${hovered ? 'rgba(232,234,240,0.4)' : 'rgba(232,234,240,0.15)'}`,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'border-color 200ms ease',
            padding: 0,
          }}
          className="dt-pulse"
          aria-label="Digital Twin"
        >
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '22px',
              fontStyle: 'italic',
              color: hovered ? 'rgba(232,234,240,0.95)' : 'rgba(232,234,240,0.7)',
              transition: 'color 200ms ease',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            V
          </span>
        </motion.button>
      </div>

      <WaxSealModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
