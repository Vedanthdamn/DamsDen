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

function StatusBadge({ status }: { status: ProjectItem['status'] }) {
  const isShipped = status === 'Shipped';
  return (
    <span
      style={{
        display: 'inline-block',
        marginTop: '6px',
        padding: '2px 8px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '9px',
        letterSpacing: '0.1em',
        borderRadius: '2px',
        background: isShipped ? 'rgba(232,234,240,0.15)' : 'rgba(200,180,80,0.1)',
        color: isShipped ? 'rgba(232,234,240,0.5)' : 'rgba(200,180,80,0.5)',
      }}
    >
      {status.toUpperCase()}
    </span>
  );
}

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
      <div
        className="project-row-desktop"
        style={{ padding: '32px 0', display: 'none' }}
      >
        {/* Col 1: year + status */}
        <div style={{ paddingTop: '2px' }}>
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: 'rgba(232,234,240,0.25)',
              margin: 0,
            }}
          >
            {project.year}
          </p>
          <StatusBadge status={project.status} />
        </div>

        {/* Col 2: main content */}
        <div>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '26px',
              color: hovered ? 'rgba(232,234,240,1)' : 'rgba(232,234,240,0.9)',
              fontWeight: 400,
              margin: '0 0 4px 0',
              transition: 'color 200ms ease',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(232,234,240,0.35)',
              fontStyle: 'italic',
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

        {/* Col 3: tags + link */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, textAlign: 'right' }}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: 'rgba(232,234,240,0.25)',
                  lineHeight: 2,
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub — ${project.title}`}
            style={{
              color: 'rgba(232,234,240,0.25)',
              transition: 'color 200ms ease',
              display: 'flex',
              marginTop: '12px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.8)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.25)'; }}
          >
            <IconBrandGithub size={16} />
          </a>
        </div>
      </div>

      {/* Mobile layout */}
      <div
        className="project-row-mobile"
        style={{ padding: '28px 0' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: 'rgba(232,234,240,0.25)',
            }}
          >
            {project.year}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '24px',
            color: 'rgba(232,234,240,0.9)',
            fontWeight: 400,
            margin: '0 0 4px 0',
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </p>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(232,234,240,0.35)',
            fontStyle: 'italic',
            margin: '0 0 12px 0',
          }}
        >
          {project.tagline}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: 'rgba(232,234,240,0.3)',
                background: 'rgba(232,234,240,0.05)',
                padding: '3px 8px',
                borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

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
        <SectionLabel number="03" title="PROJECTS" />
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
        Things I&apos;ve built.
      </motion.h2>

      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} delay={0.1 + i * 0.06} />
        ))}
        {/* Final bottom border */}
        <div style={{ borderTop: '1px solid rgba(232,234,240,0.07)' }} />
      </div>
    </section>
  );
}
