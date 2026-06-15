'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowUpRight, IconCheck } from '@tabler/icons-react';
import SectionLabel from '@/components/ui/SectionLabel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

function ContactRow({
  method,
  value,
  href,
  onClick,
  copied,
}: {
  method: string;
  value: string;
  href?: string;
  onClick?: () => void;
  copied?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 8px',
        background: hovered ? 'rgba(232,234,240,0.02)' : 'transparent',
        transition: 'background 200ms ease',
        cursor: href ? 'pointer' : 'default',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'rgba(232,234,240,0.25)',
            letterSpacing: '0.15em',
            margin: '0 0 6px 0',
          }}
        >
          {method}
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '20px',
            color: hovered ? 'rgba(232,234,240,1)' : 'rgba(232,234,240,0.7)',
            fontWeight: 400,
            margin: 0,
            transition: 'color 200ms ease',
          }}
        >
          {value}
        </p>
      </div>
      <div
        style={{
          color: hovered ? 'rgba(232,234,240,0.7)' : 'rgba(232,234,240,0.2)',
          transition: 'color 200ms ease',
          display: 'flex',
        }}
      >
        {copied ? <IconCheck size={16} /> : <IconArrowUpRight size={16} />}
      </div>
    </div>
  );

  const wrapperStyle = { borderTop: '1px solid rgba(232,234,240,0.07)' };

  if (onClick) {
    return (
      <div
        style={wrapperStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      >
        {inner}
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </a>
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText('damavedanth@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#050508',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel number="06" title="CONTACT" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '48px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.9)',
          margin: '0 0 16px 0',
          lineHeight: 1.15,
        }}
      >
        Let&apos;s build something.
      </motion.h2>

      <motion.p
        {...fadeUp(0.16)}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          color: 'rgba(232,234,240,0.4)',
          margin: '0 0 64px 0',
        }}
      >
        Open to internships, research collaborations, and interesting problems.
      </motion.p>

      {/* Contact entries */}
      <motion.div {...fadeUp(0.24)}>
        <ContactRow
          method="EMAIL"
          value="damavedanth@gmail.com"
          onClick={handleCopyEmail}
          copied={copied}
        />
        <ContactRow
          method="LINKEDIN"
          value="vedanth-dama"
          href="https://www.linkedin.com/in/vedanth-dama"
        />
        <ContactRow
          method="GITHUB"
          value="Vedanthdamn"
          href="https://github.com/Vedanthdamn"
        />
        <div style={{ borderTop: '1px solid rgba(232,234,240,0.07)' }} />
      </motion.div>

      {/* Resume block */}
      <ResumeBlock />

      {/* Spacer pushes footer to bottom */}
      <div style={{ flexGrow: 1 }} />

      {/* Footer */}
      <Footer />
    </section>
  );
}

function ResumeBlock() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
      href="https://drive.google.com/file/d/1ij1pB0yc3gjMjbB16xhhB1_2HXAMMTFP/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '48px',
        padding: '28px 32px',
        border: `1px solid ${hovered ? 'rgba(232,234,240,0.15)' : 'rgba(232,234,240,0.08)'}`,
        borderRadius: '2px',
        background: hovered ? 'rgba(232,234,240,0.02)' : 'transparent',
        transition: 'border-color 200ms ease, background 200ms ease',
        textDecoration: 'none',
        gap: '16px',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: 'rgba(232,234,240,0.55)',
            margin: '0 0 4px 0',
          }}
        >
          Vedanth Dama — Résumé
        </p>
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'rgba(232,234,240,0.2)',
            margin: 0,
          }}
        >
          B.Tech CSE (AI &amp; ML) · SRMIST · 2028
        </p>
      </div>
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: hovered ? 'rgba(232,234,240,0.9)' : 'rgba(232,234,240,0.4)',
          transition: 'color 200ms ease',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Download PDF →
      </span>
    </motion.a>
  );
}

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      style={{ marginTop: '64px' }}
    >
      <div style={{ borderTop: '1px solid rgba(232,234,240,0.06)', paddingTop: '24px' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '24px',
        }}
      >
        <span
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '11px',
            color: 'rgba(232,234,240,0.2)',
            letterSpacing: '0.1em',
          }}
        >
          Vedanth Dama
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'rgba(232,234,240,0.15)',
          }}
        >
          Built with Next.js · Framer Motion · Tailwind · Claude Code
        </span>
      </div>
    </motion.footer>
  );
}
