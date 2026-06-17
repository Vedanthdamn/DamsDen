'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const SKILL_GROUPS = [
  {
    name: 'ai & ml',
    skills: [
      { label: 'Python', pct: 88 },
      { label: 'Scikit-learn', pct: 80 },
      { label: 'PyTorch', pct: 74 },
      { label: 'Computer Vision', pct: 68 },
      { label: 'NLP', pct: 65 },
      { label: 'C++', pct: 60 },
      { label: 'Federated Learning', pct: 52 },
    ],
  },
  {
    name: 'software',
    skills: [
      { label: 'React', pct: 85 },
      { label: 'TypeScript', pct: 80 },
      { label: 'PostgreSQL / MySQL', pct: 75 },
      { label: 'Next.js', pct: 72 },
      { label: 'FastAPI', pct: 72 },
      { label: 'Java / Spring Boot', pct: 65 },
      { label: 'Supabase', pct: 62 },
    ],
  },
  {
    name: 'tools & infra',
    skills: [
      { label: 'Git', pct: 90 },
      { label: 'Linux', pct: 72 },
      { label: 'Google Cloud / BigQuery', pct: 68 },
      { label: 'Docker', pct: 65 },
      { label: 'Power BI', pct: 62 },
      { label: 'Figma', pct: 58 },
    ],
  },
];

const EDUCATION = [
  {
    institution: 'SRM Institute of Science and Technology',
    detail: 'B.Tech, Computer Science (AI & ML) · Kattankulathur · 2028 · CGPA 8.60',
  },
  {
    institution: 'Delhi Public School, Noida',
    detail: 'Senior Secondary · 2024 · 88.2% (XII) · 88% (X)',
  },
];

function SkillBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      style={{ marginBottom: '18px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'rgba(232,234,240,0.55)',
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'rgba(232,234,240,0.25)',
          }}
        >
          {pct}%
        </span>
      </div>
      {/* Track */}
      <div
        style={{
          height: '3px',
          background: 'rgba(232,234,240,0.06)',
          borderRadius: '999px',
          overflow: 'hidden',
        }}
      >
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.1, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, rgba(232,234,240,0.5) 0%, rgba(232,234,240,0.2) 100%)',
            borderRadius: '999px',
          }}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({ group, delay }: { group: typeof SKILL_GROUPS[0]; delay: number }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      style={{
        background: '#0C0C10',
        padding: '28px 28px 12px',
        border: '1px solid rgba(232,234,240,0.06)',
      }}
    >
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.10em',
          color: 'rgba(232,234,240,0.28)',
          textTransform: 'uppercase',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(232,234,240,0.06)',
          marginBottom: '24px',
          marginTop: 0,
        }}
      >
        {group.name}
      </p>
      {group.skills.map((s, i) => (
        <SkillBar key={s.label} label={s.label} pct={s.pct} delay={delay + i * 0.05} />
      ))}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel title="skills" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '42px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.9)',
          margin: '0 0 48px 0',
        }}
      >
        Skills.
      </motion.h2>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.name} group={group} delay={0.16 + i * 0.08} />
        ))}
      </div>

      {/* Education */}
      <motion.div
        {...fadeUp(0.4)}
        style={{ marginTop: '80px', borderTop: '1px solid rgba(232,234,240,0.06)', paddingTop: '48px' }}
      >
        <div className="education-grid">
          {EDUCATION.map(({ institution, detail }, i) => (
            <motion.div key={institution} {...fadeUp(0.48 + i * 0.08)}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: 'rgba(232,234,240,0.7)',
                  fontWeight: 500,
                  margin: '0 0 6px 0',
                }}
              >
                {institution}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(232,234,240,0.3)',
                  margin: 0,
                }}
              >
                {detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
