'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useCurtainContext } from '@/context/CurtainContext';
import SoundToggle from '@/components/ui/SoundToggle';

const NAV_LINKS = [
  { label: 'about',      href: '/about' },
  { label: 'projects',   href: '/projects' },
  { label: 'experience', href: '/experience' },
  { label: 'skills',     href: '/skills' },
  { label: 'contact',    href: '/contact' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { triggerCurtain } = useCurtainContext();

  useEffect(() => { setMounted(true); }, []);

  function handleNav(href: string) {
    setMobileOpen(false);
    triggerCurtain(href);
  }

  return (
    <>
      {/* Desktop pill */}
      <nav
        className="hidden md:flex"
        style={{
          position: 'fixed',
          top: '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          alignItems: 'center',
          gap: '0',
          height: '46px',
          padding: '0 6px',
          borderRadius: '999px',
          background: 'rgba(8, 8, 14, 0.62)',
          backdropFilter: 'blur(28px) saturate(160%)',
          WebkitBackdropFilter: 'blur(28px) saturate(160%)',
          border: '1px solid rgba(232,234,240,0.13)',
          borderTop: '1px solid rgba(232,234,240,0.28)',
          boxShadow:
            '0 8px 32px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(232,234,240,0.10)',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Specular top highlight */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(232,234,240,0.35) 40%, rgba(232,234,240,0.35) 60%, transparent 100%)',
            borderRadius: '999px',
            pointerEvents: 'none',
          }}
        />

        {/* Name */}
        <button
          onClick={() => handleNav('/')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0 14px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(232,234,240,0.85)',
              letterSpacing: '-0.01em',
            }}
          >
            Vedanth
          </span>
        </button>

        {/* Divider */}
        <span
          style={{
            width: '1px',
            height: '18px',
            background: 'rgba(232,234,240,0.12)',
            flexShrink: 0,
            margin: '0 4px',
          }}
        />

        {/* Links */}
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = mounted && pathname === href;
          return (
            <button
              key={href}
              onClick={() => handleNav(href)}
              style={{
                background: isActive ? 'rgba(232,234,240,0.10)' : 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0 14px',
                height: '34px',
                borderRadius: '999px',
                margin: '0 1px',
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0',
                color: isActive ? 'rgba(232,234,240,0.90)' : 'rgba(232,234,240,0.42)',
                transition: 'color 200ms ease, background 200ms ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(232,234,240,0.80)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(232,234,240,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(232,234,240,0.42)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'none';
                }
              }}
            >
              {label}
            </button>
          );
        })}

        {/* Divider */}
        <span
          style={{
            width: '1px',
            height: '18px',
            background: 'rgba(232,234,240,0.12)',
            flexShrink: 0,
            margin: '0 4px',
          }}
        />

        {/* Sound */}
        <div style={{ padding: '0 10px', display: 'flex', alignItems: 'center' }}>
          <SoundToggle />
        </div>
      </nav>

      {/* Mobile pill */}
      <nav
        className="flex md:hidden"
        style={{
          position: 'fixed',
          top: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '44px',
          padding: '0 8px 0 16px',
          borderRadius: '999px',
          background: 'rgba(8, 8, 14, 0.65)',
          backdropFilter: 'blur(24px) saturate(160%)',
          WebkitBackdropFilter: 'blur(24px) saturate(160%)',
          border: '1px solid rgba(232,234,240,0.13)',
          borderTop: '1px solid rgba(232,234,240,0.26)',
          boxShadow: '0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(232,234,240,0.08)',
          minWidth: '200px',
          gap: '16px',
        }}
      >
        <button
          onClick={() => handleNav('/')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(232,234,240,0.85)',
            }}
          >
            Vedanth
          </span>
        </button>

        <button
          onClick={() => setMobileOpen(true)}
          style={{
            background: 'rgba(232,234,240,0.08)',
            border: '1px solid rgba(232,234,240,0.12)',
            borderRadius: '999px',
            cursor: 'pointer',
            padding: '6px 10px',
            color: 'rgba(232,234,240,0.65)',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Open menu"
        >
          <IconMenu2 size={16} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 80,
              background: 'rgba(5,5,8,0.96)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: 'clamp(24px, 4vw, 48px)',
                background: 'rgba(232,234,240,0.08)',
                border: '1px solid rgba(232,234,240,0.12)',
                borderRadius: '999px',
                cursor: 'pointer',
                color: 'rgba(232,234,240,0.6)',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Close menu"
            >
              <IconX size={16} />
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: 'easeOut' }}
                  onClick={() => handleNav(href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: mounted && pathname === href ? 'rgba(232,234,240,0.90)' : 'rgba(232,234,240,0.55)',
                    letterSpacing: 0,
                  }}
                >
                  {label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
