'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { projects, type ProjectItem } from '@/lib/projects';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

function ProjectRow({ project, delay }: { project: ProjectItem; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      {...fadeUp(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: '1px solid rgba(232,234,240,0.07)',
        background: hovered ? 'rgba(232,234,240,0.02)' : 'transparent',
        transition: 'background 200ms ease',
        cursor: 'default',
      }}
    >
      {/* Desktop layout */}
      <div className="project-row-desktop" style={{ padding: '32px 0', display: 'none' }}>
        {/* Main content */}
        <div>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '26px',
              color: hovered ? 'rgba(232,234,240,1)' : 'rgba(232,234,240,0.9)',
              fontWeight: 400,
              margin: '0 0 2px 0',
              transition: 'color 200ms ease',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              color: 'rgba(232,234,240,0.2)',
              margin: '0 0 10px 0',
            }}
          >
            {project.status === 'Shipped' ? 'shipped' : 'in development'}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(232,234,240,0.35)',
              margin: '0 0 12px 0',
            }}
          >
            {project.tagline}
          </p>

          <AnimatePresence>
            {hovered && (
              <motion.p
                key="desc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(232,234,240,0.5)',
                  lineHeight: 1.7,
                  margin: 0,
                  overflow: 'hidden',
                }}
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Tags + link */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(232,234,240,0.25)', margin: 0, textAlign: 'right', lineHeight: 1.6 }}>
            {project.tags.join(', ')}
          </p>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub — ${project.title}`}
            style={{ color: 'rgba(232,234,240,0.25)', transition: 'color 200ms ease', display: 'flex', marginTop: '12px' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.8)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.25)'; }}
          >
            <IconBrandGithub size={16} />
          </a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="project-row-mobile" style={{ padding: '28px 0' }}>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '24px',
            color: 'rgba(232,234,240,0.9)',
            fontWeight: 400,
            margin: '0 0 2px 0',
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(232,234,240,0.2)', margin: '0 0 8px 0' }}>
          {project.status === 'Shipped' ? 'shipped' : 'in development'}
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(232,234,240,0.35)', margin: '0 0 12px 0' }}>
          {project.tagline}
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(232,234,240,0.25)', margin: '0 0 12px 0' }}>
          {project.tags.join(', ')}
        </p>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub — ${project.title}`}
          style={{ color: 'rgba(232,234,240,0.25)', display: 'inline-flex' }}
        >
          <IconBrandGithub size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#050508',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel title="projects" />
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
        Work.
      </motion.h2>

      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} delay={0.1 + i * 0.06} />
        ))}
        <div style={{ borderTop: '1px solid rgba(232,234,240,0.07)' }} />
      </div>
    </section>
  );
}
