'use client';

import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import SectionLabel from '@/components/ui/SectionLabel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const STATS = [
  'SRMIST · AI & ML · 2028',
  '8.60 CGPA',
  'NICSI · DMRC/Deloitte · DRDO (upcoming)',
];

const STATUS_ENTRIES = [
  { status: 'building CardMatch', sub: 'credit card recommendation for India' },
  { status: 'reading about post-quantum cryptography', sub: 'DRDO context' },
  { status: 'DRDO internship', sub: 'starting July 2026' },
  { status: 'Chennai during semester, Delhi otherwise', sub: '' },
];

export default function About() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#050508',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel title="about" />
      </motion.div>

      <div className="about-grid">
        {/* LEFT COLUMN */}
        <div>
          <motion.h2
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '42px',
              fontWeight: 300,
              color: '#E8EAF0',
              lineHeight: 1.25,
              margin: '0 0 32px 0',
            }}
          >
            I build things that work.
          </motion.h2>

          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(232,234,240,0.55)', lineHeight: 1.85, margin: 0 }}>
              Second year at SRMIST, studying AI and ML. I spend most of my time
              building — apps, tools, systems. I care more about whether something
              works well than whether it looks impressive.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(232,234,240,0.55)', lineHeight: 1.85, margin: 0 }}>
              Interned at NICSI building a government chatbot, and with a Deloitte
              team at DMRC on GCP dashboards. Currently managing corporate events
              for Microsoft Student Ambassadors at SRMIST. DRDO internship coming
              up in July.
            </p>
          </motion.div>

          {/* Stat rows */}
          <motion.div {...fadeUp(0.3)} style={{ marginTop: '40px' }}>
            {STATS.map((value) => (
              <div
                key={value}
                style={{
                  padding: '14px 0',
                  borderTop: '1px solid rgba(232,234,240,0.07)',
                }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(232,234,240,0.45)' }}>
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '24px', marginTop: '40px' }}>
            {[
              { label: 'resume', href: 'https://drive.google.com/file/d/1ij1pB0yc3gjMjbB16xhhB1_2HXAMMTFP/view?usp=sharing' },
              { label: 'github', href: 'https://github.com/Vedanthdamn' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(232,234,240,0.35)', textDecoration: 'none', transition: 'color 200ms ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.85)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.35)'; }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div {...fadeUp(0.2)}>
          <div style={{ background: '#0C0C10', border: '1px solid rgba(232,234,240,0.07)', borderRadius: '4px', padding: '32px' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(232,234,240,0.2)', borderBottom: '1px solid rgba(232,234,240,0.06)', paddingBottom: '20px', marginBottom: '24px' }}>
              now
            </div>

            {STATUS_ENTRIES.map(({ status, sub }, i) => (
              <div key={i} style={{ padding: '12px 0', borderBottom: '1px solid rgba(232,234,240,0.05)' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(232,234,240,0.55)', margin: '0 0 2px 0', lineHeight: 1.5 }}>
                  {status}
                </p>
                {sub && (
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(232,234,240,0.25)', margin: 0, lineHeight: 1.4 }}>
                    {sub}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '24px' }}>
            {[
              { Icon: IconBrandGithub, href: 'https://github.com/Vedanthdamn', label: 'GitHub' },
              { Icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/vedanth-dama', label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: 'rgba(232,234,240,0.25)', transition: 'color 200ms ease', display: 'flex' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(232,234,240,0.8)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(232,234,240,0.25)'; }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
