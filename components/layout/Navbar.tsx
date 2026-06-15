'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useCurtainContext } from '@/context/CurtainContext';
import SoundToggle from '@/components/ui/SoundToggle';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { triggerCurtain } = useCurtainContext();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNav(href: string) {
    setMobileOpen(false);
    triggerCurtain(href);
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '64px',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 300ms ease, border-color 300ms ease',
          background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(232,234,240,0.06)'
            : '1px solid transparent',
          paddingLeft: 'clamp(24px, 4vw, 48px)',
          paddingRight: 'clamp(24px, 4vw, 48px)',
        }}
      >
        {/* Signature mark */}
        <button
          onClick={() => handleNav('/')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
        >
          <div
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '12px',
              letterSpacing: '0.25em',
              color: 'rgba(232,234,240,0.9)',
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            VEDANTH DAMA
          </div>
          <div
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '13px',
              fontStyle: 'italic',
              letterSpacing: '0.08em',
              color: 'rgba(232,234,240,0.35)',
              fontWeight: 300,
              lineHeight: 1.3,
            }}
          >
            Vedanth Damae
          </div>
        </button>

        {/* Desktop nav */}
        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '32px' }}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <button
                key={href}
                onClick={() => handleNav(href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: isActive
                    ? 'rgba(232,234,240,0.9)'
                    : 'rgba(232,234,240,0.45)',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(232,234,240,0.9)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(232,234,240,0.45)';
                }}
              >
                {label}
              </button>
            );
          })}

          {/* Divider */}
          <div
            style={{
              width: '1px',
              height: '16px',
              background: 'rgba(232,234,240,0.1)',
              margin: '0 16px',
              flexShrink: 0,
            }}
          />

          <SoundToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            color: 'rgba(232,234,240,0.6)',
          }}
          aria-label="Open menu"
        >
          <IconMenu2 size={20} />
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
              background: '#050508',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: 'clamp(24px, 4vw, 48px)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(232,234,240,0.6)',
                padding: 0,
              }}
              aria-label="Close menu"
            >
              <IconX size={20} />
            </button>

            {/* Staggered links */}
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
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '32px',
                    fontWeight: 300,
                    color: 'rgba(232,234,240,0.7)',
                    letterSpacing: '0.04em',
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
