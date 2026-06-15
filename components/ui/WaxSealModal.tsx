'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface WaxSealModalProps {
  open: boolean;
  onClose: () => void;
}

export default function WaxSealModal({ open, onClose }: WaxSealModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5,5,8,0.9)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <motion.div
            key="modal-card"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#0C0C10',
              border: '1px solid rgba(232,234,240,0.1)',
              borderRadius: '2px',
              padding: '48px 40px',
              maxWidth: '380px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {/* Wax seal */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.05, 1] }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.05 }}
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(232,234,240,0.06)',
                  border: '1px solid rgba(232,234,240,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '16px',
                    color: 'rgba(232,234,240,0.4)',
                    letterSpacing: '0.05em',
                  }}
                >
                  VD
                </span>
              </motion.div>
            </div>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '24px',
                fontWeight: 300,
                color: 'rgba(232,234,240,0.85)',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              This chamber is not yet open.
            </p>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'rgba(232,234,240,0.4)',
                lineHeight: 1.7,
                margin: '16px 0 0 0',
              }}
            >
              The digital twin is under construction. Return when it is ready to speak.
            </p>

            <div
              style={{
                width: '32px',
                height: '1px',
                background: 'rgba(232,234,240,0.1)',
                margin: '28px auto',
              }}
            />

            <CloseButton onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '11px',
        color: 'rgba(232,234,240,0.25)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        transition: 'color 200ms ease',
        padding: '4px 0',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.7)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.25)'; }}
    >
      close
    </button>
  );
}
