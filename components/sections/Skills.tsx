'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const SKILL_GROUPS = [
  {
    name: 'ARTIFICIAL INTELLIGENCE',
    skills: [
      'Python',
      'PyTorch',
      'Scikit-learn',
      'Natural Language Processing',
      'Physics-Informed Neural Networks',
      'Computer Vision',
      'Federated Learning',
      'C / C++',
    ],
  },
  {
    name: 'SOFTWARE ENGINEERING',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Java & Spring Boot',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'MySQL',
    ],
  },
  {
    name: 'INFRASTRUCTURE & TOOLS',
    skills: [
      'Git & GitHub',
      'Google Cloud Platform',
      'BigQuery',
      'Microsoft Power BI',
      'Docker',
      'Linux',
      'Figma',
    ],
  },
];

const EDUCATION = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech, Computer Science — AI & ML',
    detail: 'Kattankulathur · Expected 2028 · CGPA 8.60',
  },
  {
    institution: 'Delhi Public School, Noida',
    degree: 'Senior Secondary (Class XII)',
    detail: 'Noida · 2024 · 88.2% (XII) · 88% (X)',
  },
];

function SkillCard({ group, delay }: { group: typeof SKILL_GROUPS[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      {...fadeUp(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0C0C10',
        padding: '32px',
        borderRadius: 0,
        border: `1px solid ${hovered ? 'rgba(232,234,240,0.15)' : 'rgba(232,234,240,0.06)'}`,
        transition: 'border-color 300ms ease',
      }}
    >
      <div
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '10px',
          color: 'rgba(232,234,240,0.3)',
          letterSpacing: '0.3em',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(232,234,240,0.06)',
          marginBottom: '24px',
        }}
      >
        {group.name}
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {group.skills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </ul>
    </motion.div>
  );
}

function SkillItem({ skill }: { skill: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: hovered ? 'rgba(232,234,240,0.95)' : 'rgba(232,234,240,0.6)',
        lineHeight: 2.4,
        transition: 'color 150ms ease',
        cursor: 'default',
      }}
    >
      {skill}
    </li>
  );
}

export default function Skills() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#050508',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel number="02" title="SKILLS" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '38px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.9)',
          margin: '0 0 48px 0',
        }}
      >
        The instruments. Not the identity.
      </motion.h2>

      {/* Skill grid */}
      <div className="skills-grid">
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.name} group={group} delay={0.16 + i * 0.08} />
        ))}
      </div>

      {/* Education */}
      <motion.div
        {...fadeUp(0.4)}
        style={{
          marginTop: '80px',
          borderTop: '1px solid rgba(232,234,240,0.06)',
          paddingTop: '48px',
        }}
      >
        <div className="education-grid">
          {EDUCATION.map(({ institution, degree, detail }, i) => (
            <motion.div
              key={institution}
              {...fadeUp(0.48 + i * 0.08)}
              style={{
                borderLeft: '1px solid rgba(232,234,240,0.1)',
                paddingLeft: '24px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '20px',
                  color: 'rgba(232,234,240,0.85)',
                  fontWeight: 400,
                  margin: '0 0 8px 0',
                }}
              >
                {institution}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(232,234,240,0.4)',
                  fontStyle: 'italic',
                  margin: '0 0 6px 0',
                }}
              >
                {degree}
              </p>
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: 'rgba(232,234,240,0.25)',
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
