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
  { label: 'INSTITUTION', value: 'SRM Institute of Science and Technology, Kattankulathur' },
  { label: 'CGPA', value: '8.60 / 10 — up to 3rd Semester' },
  { label: 'INTERNSHIPS', value: 'NICSI · DMRC (with Deloitte) · DRDO (upcoming)' },
];

const STATUS_ENTRIES = [
  { status: 'Building CardMatch', sub: 'Indian credit card recommendation engine' },
  { status: 'Exploring post-quantum cryptography', sub: 'DRDO research context' },
  { status: 'Upcoming: DRDO Internship', sub: 'July 2026' },
  { status: 'Based in Chennai during semester', sub: 'Delhi off-semester' },
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
        <SectionLabel number="01" title="ABOUT" />
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
              marginBottom: '32px',
              margin: '0 0 32px 0',
            }}
          >
            Second-year engineer building at the intersection of AI, software, and systems.
          </motion.h2>

          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: 'rgba(232,234,240,0.55)',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              B.Tech student in Computer Science (AI &amp; ML) at SRMIST, Kattankulathur. I build things
              that are complete — full-stack applications, ML pipelines, and tools that make systems
              faster and smarter.
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: 'rgba(232,234,240,0.55)',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              Corporate Events Manager at Microsoft Student Ambassadors, SRMIST. Interned at NICSI
              building conversational AI, and embedded with a Deloitte engineering team at DMRC on
              enterprise GCP and Power BI infrastructure.
            </p>
          </motion.div>

          {/* Stat rows */}
          <motion.div {...fadeUp(0.3)} style={{ marginTop: '40px' }}>
            {STATS.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '16px 0',
                  borderTop: '1px solid rgba(232,234,240,0.07)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: 'rgba(232,234,240,0.25)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(232,234,240,0.75)',
                    textAlign: 'right',
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            {...fadeUp(0.4)}
            style={{ display: 'flex', gap: '24px', marginTop: '40px' }}
          >
            {[
              {
                label: 'Download Resume →',
                href: 'https://drive.google.com/file/d/1ij1pB0yc3gjMjbB16xhhB1_2HXAMMTFP/view?usp=sharing',
              },
              { label: 'GitHub Profile →', href: 'https://github.com/Vedanthdamn' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(232,234,240,0.4)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.9)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.4)'; }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div {...fadeUp(0.2)}>
          {/* Now card */}
          <div
            style={{
              background: '#0C0C10',
              border: '1px solid rgba(232,234,240,0.07)',
              borderRadius: '4px',
              padding: '32px',
            }}
          >
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: 'rgba(232,234,240,0.2)',
                letterSpacing: '0.3em',
                borderBottom: '1px solid rgba(232,234,240,0.06)',
                paddingBottom: '20px',
                marginBottom: '24px',
              }}
            >
              NOW
            </div>

            {STATUS_ENTRIES.map(({ status, sub }, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(232,234,240,0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'rgba(232,234,240,0.3)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: 'rgba(232,234,240,0.6)',
                      lineHeight: 1.5,
                    }}
                  >
                    {status}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: 'rgba(232,234,240,0.2)',
                    paddingLeft: '15px',
                  }}
                >
                  {sub}
                </span>
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
                style={{
                  color: 'rgba(232,234,240,0.25)',
                  transition: 'color 200ms ease',
                  display: 'flex',
                }}
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
