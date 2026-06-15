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
    name: 'ai & ml',
    skills: 'Python, PyTorch, Scikit-learn, NLP, Physics-Informed Neural Networks, computer vision, federated learning, C++',
  },
  {
    name: 'software',
    skills: 'React, TypeScript, Next.js, Java, Spring Boot, FastAPI, PostgreSQL, Supabase, MySQL',
  },
  {
    name: 'tools & infra',
    skills: 'Git, Google Cloud Platform, BigQuery, Power BI, Docker, Linux, Figma',
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
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: 'rgba(232,234,240,0.3)',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(232,234,240,0.06)',
          marginBottom: '24px',
          marginTop: 0,
        }}
      >
        {group.name}
      </p>
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: 'rgba(232,234,240,0.5)',
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        {group.skills}
      </p>
    </motion.div>
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
