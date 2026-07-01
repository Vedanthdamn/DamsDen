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
  { status: 'building CardMatch', sub: 'credit card recommender for India' },
  { status: 'reading post-quantum cryptography', sub: 'DRDO prep' },
  { status: 'DRDO internship', sub: 'starting July 2026' },
  { status: 'Chennai (sem) · Delhi (breaks)', sub: '' },
];

const INTERESTS = [
  {
    tag: 'money stuff',
    title: 'Personal Finance',
    body: `Started because I wanted to pay less tax. Stayed because the math is genuinely interesting. XIRR, indexation, SWP, HRA exemptions — I study this the way most people study for exams, except this one actually pays out. The goal is simple: earn more, spend intentionally, and retire before 40. Or at least understand what that would take.`,
  },
  {
    tag: 'points game',
    title: 'Credit Cards',
    body: `I have a spreadsheet mapping every card's reward category to every type of spend I make. Is that normal? Probably not. Do I care? Absolutely not — because I flew business class on points last year. The strategy: milk sign-up bonuses, stack reward categories, never pay interest, and travel for almost free. Credit card nerd, zero regrets.`,
  },
  {
    tag: '3am alarms',
    title: 'Football · Barça',
    body: `I watch every single Barcelona game no matter the kick-off time, time zone, or what I have at 8am the next day. Miss a lecture? Fine. Miss a Barça game? Absolutely not. I have watched them crash out of the UCL enough times to understand genuine heartbreak. Still setting the alarm. Still believing. The trophy is coming — I'm just not sure which decade.`,
  },
  {
    tag: 'covid trade',
    title: 'Stock Market',
    body: `Started investing in Class 10 during COVID because I had time, a Zerodha account, and ₹2000 that felt very important. Accidentally became a long-term investor by simply not knowing when to sell. Now I actually understand what P/E means, why free cash flow matters, and why timing the market is a myth I once believed. Portfolio > CGPA.`,
  },
];

export default function About() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel title="about" />
      </motion.div>

      {/* ── Main bio grid ── */}
      <div className="about-grid">
        {/* LEFT */}
        <div>
          <motion.h2
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(34px, 4vw, 48px)',
              fontWeight: 300,
              color: '#E8EAF0',
              lineHeight: 1.2,
              margin: '0 0 32px 0',
            }}
          >
            I find the gaps where things<br />should already be automated.
          </motion.h2>

          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(232,234,240,0.55)', lineHeight: 1.85, margin: 0 }}>
              Second year at SRMIST studying AI & ML — but really, I spend my time looking for the
              awkward gaps where something still takes a human twenty minutes that it absolutely shouldn't.
              DriveScore.ai started because dashcams record but don't think. FlowSense.ai started because
              traffic signals don't know what's in front of them. Most of what I build begins with
              "why isn't this automated yet?"
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(232,234,240,0.55)', lineHeight: 1.85, margin: 0 }}>
              Spontaneous developer. I ship fast, think in systems, and care far more about whether
              it actually runs than how clean the architecture looks. If I brainstorm it at 2am,
              there's a good chance there's a GitHub repo for it by 3am. Interned at NICSI and
              DMRC/Deloitte. DRDO internship coming up in July.
            </p>
          </motion.div>

          {/* Stat rows */}
          <motion.div {...fadeUp(0.3)} style={{ marginTop: '40px' }}>
            {STATS.map((value) => (
              <div
                key={value}
                style={{ padding: '14px 0', borderTop: '1px solid rgba(232,234,240,0.07)' }}
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

        {/* RIGHT — Now box */}
        <motion.div {...fadeUp(0.2)}>
          <div style={{ background: '#0C0C10', border: '1px solid rgba(232,234,240,0.07)', borderRadius: '4px', padding: '32px' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.10em', color: 'rgba(232,234,240,0.2)', borderBottom: '1px solid rgba(232,234,240,0.06)', paddingBottom: '20px', marginBottom: '24px' }}>
              NOW
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

      {/* ── Interests section ── */}
      <motion.div
        {...fadeUp(0.5)}
        style={{ marginTop: 'clamp(80px, 10vw, 120px)', borderTop: '1px solid rgba(232,234,240,0.06)', paddingTop: '64px' }}
      >
        <motion.h3
          {...fadeUp(0.55)}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 300,
            color: 'rgba(232,234,240,0.85)',
            margin: '0 0 48px 0',
            lineHeight: 1.2,
          }}
        >
          Things I care about outside the terminal.
        </motion.h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(232,234,240,0.06)',
            border: '1px solid rgba(232,234,240,0.06)',
          }}
        >
          {INTERESTS.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(0.6 + i * 0.07)}
              style={{
                background: '#050508',
                padding: '32px',
              }}
            >
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'rgba(232,234,240,0.25)',
                textTransform: 'uppercase',
                margin: '0 0 16px 0',
              }}>
                {item.tag}
              </p>
              <h4 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '26px',
                fontWeight: 400,
                color: 'rgba(232,234,240,0.88)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                {item.title}
              </h4>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13.5px',
                color: 'rgba(232,234,240,0.42)',
                lineHeight: 1.8,
                margin: 0,
              }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
