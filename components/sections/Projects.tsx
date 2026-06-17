'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { projects, type ProjectItem } from '@/lib/projects';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

function StatusPill({ status }: { status: ProjectItem['status'] }) {
  const isShipped = status === 'Shipped';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '3px 10px',
        borderRadius: '999px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        background: isShipped
          ? 'rgba(120,220,150,0.15)'
          : 'rgba(200,180,80,0.15)',
        color: isShipped
          ? 'rgba(120,220,150,0.9)'
          : 'rgba(200,180,80,0.9)',
        border: `1px solid ${isShipped ? 'rgba(120,220,150,0.3)' : 'rgba(200,180,80,0.3)'}`,
      }}
    >
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: isShipped ? 'rgba(120,220,150,0.9)' : 'rgba(200,180,80,0.9)',
          flexShrink: 0,
        }}
      />
      {isShipped ? 'Shipped' : 'In Dev'}
    </span>
  );
}

function ProjectCard({ project, delay }: { project: ProjectItem; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }

  const glareX = mousePos.x * 100;
  const glareY = mousePos.y * 100;

  return (
    <motion.div
      {...fadeUp(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        borderRadius: '20px',
        padding: '28px',
        cursor: 'default',
        overflow: 'hidden',
        transition: 'transform 300ms ease, box-shadow 300ms ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',

        /* Liquid glass base */
        background: hovered
          ? 'linear-gradient(135deg, rgba(232,234,240,0.14) 0%, rgba(232,234,240,0.07) 60%, rgba(232,234,240,0.11) 100%)'
          : 'linear-gradient(135deg, rgba(232,234,240,0.10) 0%, rgba(232,234,240,0.05) 60%, rgba(232,234,240,0.08) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',

        /* Glass borders — top edge is the specular highlight */
        border: '1px solid rgba(232,234,240,0.18)',
        borderTop: '1px solid rgba(232,234,240,0.38)',

        /* Depth */
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(232,234,240,0.25)'
          : '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(232,234,240,0.18)',
      }}
    >
      {/* Moving glare — follows cursor like iOS glass */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '20px',
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(232,234,240,0.10) 0%, transparent 60%)`,
            pointerEvents: 'none',
            transition: 'background 0ms',
          }}
        />
      )}

      {/* Static top-left specular */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(232,234,240,0.5) 0%, rgba(232,234,240,0.15) 50%, transparent 100%)',
          borderRadius: '20px 20px 0 0',
          pointerEvents: 'none',
        }}
      />

      {/* Card content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <StatusPill status={project.status} />
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: 'rgba(232,234,240,0.4)',
              letterSpacing: '0.05em',
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '28px',
            fontWeight: 400,
            color: 'rgba(232,234,240,0.97)',
            margin: '0 0 6px 0',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </h3>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(232,234,240,0.72)',
            margin: '0 0 16px 0',
            lineHeight: 1.5,
            fontStyle: 'italic',
          }}
        >
          {project.tagline}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13.5px',
            color: 'rgba(232,234,240,0.60)',
            lineHeight: 1.7,
            margin: '0 0 20px 0',
          }}
        >
          {project.description}
        </p>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, rgba(232,234,240,0.15) 0%, transparent 100%)',
            marginBottom: '16px',
          }}
        />

        {/* Footer: tags + links */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', flex: 1 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: 'rgba(232,234,240,0.65)',
                  background: 'rgba(232,234,240,0.08)',
                  border: '1px solid rgba(232,234,240,0.12)',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  letterSpacing: '0.02em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub — ${project.title}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'rgba(232,234,240,0.08)',
                border: '1px solid rgba(232,234,240,0.15)',
                color: 'rgba(232,234,240,0.7)',
                transition: 'background 200ms ease, color 200ms ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'rgba(232,234,240,0.18)';
                el.style.color = 'rgba(232,234,240,1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'rgba(232,234,240,0.08)';
                el.style.color = 'rgba(232,234,240,0.7)';
              }}
            >
              <IconBrandGithub size={15} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit — ${project.title}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'rgba(232,234,240,0.08)',
                border: '1px solid rgba(232,234,240,0.15)',
                color: 'rgba(232,234,240,0.7)',
                transition: 'background 200ms ease, color 200ms ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'rgba(232,234,240,0.18)';
                el.style.color = 'rgba(232,234,240,1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'rgba(232,234,240,0.08)';
                el.style.color = 'rgba(232,234,240,0.7)';
              }}
            >
              <IconExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      style={{
        minHeight: '100vh',
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
          color: 'rgba(232,234,240,0.95)',
          margin: '0 0 48px 0',
        }}
      >
        Work.
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={0.1 + i * 0.07} />
        ))}
      </div>
    </section>
  );
}
