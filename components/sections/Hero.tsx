'use client';

import { useState, useRef } from 'react';
import { motion, Reorder } from 'framer-motion';
import { useCurtainContext } from '@/context/CurtainContext';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const DEFAULT_CARDS = [
  { id: 'about',      title: 'About',      desc: 'The person behind the code.',  href: '/about' },
  { id: 'work',       title: 'Work',        desc: 'Five things I built.',          href: '/projects' },
  { id: 'experience', title: 'Experience',  desc: 'Where I\'ve been.',             href: '/experience' },
  { id: 'skills',     title: 'Skills',      desc: 'What I know.',                  href: '/skills' },
];

function NavCard({ card, onNavigate }: {
  card: typeof DEFAULT_CARDS[0];
  onNavigate: (href: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const draggedRef = useRef(false);

  return (
    <Reorder.Item
      value={card}
      id={card.id}
      onDragStart={() => { draggedRef.current = true; }}
      onDragEnd={() => { setTimeout(() => { draggedRef.current = false; }, 80); }}
      onClick={() => { if (!draggedRef.current) onNavigate(card.href); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileDrag={{ scale: 1.03, zIndex: 10, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
      style={{
        listStyle: 'none',
        flex: '1 1 0',
        minWidth: '200px',
        height: '200px',
        borderRadius: '16px',
        padding: '28px',
        cursor: 'grab',
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: hovered
          ? 'rgba(232,234,240,0.07)'
          : 'rgba(232,234,240,0.04)',
        border: `1px solid ${hovered ? 'rgba(232,234,240,0.16)' : 'rgba(232,234,240,0.08)'}`,
        borderTop: `1px solid ${hovered ? 'rgba(232,234,240,0.28)' : 'rgba(232,234,240,0.13)'}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background 250ms ease, border-color 250ms ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Specular top line */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(232,234,240,0.22), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Title */}
      <span style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(26px, 2.5vw, 36px)',
        fontWeight: 400,
        color: hovered ? 'rgba(232,234,240,0.95)' : 'rgba(232,234,240,0.80)',
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        transition: 'color 250ms ease',
      }}>
        {card.title}
      </span>

      {/* Description */}
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: hovered ? 'rgba(232,234,240,0.45)' : 'rgba(232,234,240,0.28)',
        lineHeight: 1.5,
        transition: 'color 250ms ease',
      }}>
        {card.desc}
      </span>
    </Reorder.Item>
  );
}

export default function Hero() {
  const { triggerCurtain } = useCurtainContext();
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 'clamp(24px, 10vw, 10vw)',
        paddingRight: 'clamp(24px, 10vw, 10vw)',
      }}
    >
      {/* Name */}
      <motion.h1
        {...fade(0)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(56px, 8vw, 96px)',
          fontWeight: 400,
          color: '#E8EAF0',
          letterSpacing: 0,
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Vedanth Dama
      </motion.h1>

      {/* Descriptor */}
      <motion.p
        {...fade(0.3)}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.5)',
          letterSpacing: 0,
          marginTop: '16px',
          marginBottom: 0,
        }}
      >
        I build things that work.
      </motion.p>

      {/* Rule */}
      <motion.div
        {...fade(0.6)}
        style={{
          width: '48px',
          height: '1px',
          background: 'rgba(232,234,240,0.2)',
          marginTop: '32px',
          marginBottom: '24px',
        }}
      />

      {/* CTA links */}
      <motion.div
        {...fade(0.75)}
        style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '48px' }}
      >
        <button
          onClick={() => triggerCurtain('/projects')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            color: 'rgba(232,234,240,0.35)', letterSpacing: 0,
            transition: 'color 200ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.85)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.35)'; }}
        >
          work
        </button>

        <a
          href="https://drive.google.com/file/d/1ij1pB0yc3gjMjbB16xhhB1_2HXAMMTFP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            color: 'rgba(232,234,240,0.35)', letterSpacing: 0,
            textDecoration: 'none', transition: 'color 200ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.85)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.35)'; }}
        >
          resume
        </a>
      </motion.div>

      {/* Draggable nav cards */}
      <motion.div {...fade(0.95)}>
        <Reorder.Group
          axis="x"
          values={cards}
          onReorder={setCards}
          style={{
            display: 'flex',
            gap: '14px',
            padding: 0,
            margin: 0,
            overflowX: 'auto',
            paddingBottom: '4px',
          }}
        >
          {cards.map((card) => (
            <NavCard
              key={card.id}
              card={card}
              onNavigate={triggerCurtain}
            />
          ))}
        </Reorder.Group>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: 'rgba(232,234,240,0.18)',
          marginTop: '12px',
          letterSpacing: '0.05em',
        }}>
          drag to rearrange
        </p>
      </motion.div>

      {/* Bottom-right status — desktop only */}
      <div
        className="hidden md:block"
        style={{ position: 'absolute', bottom: '40px', right: '48px', textAlign: 'right' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(232,234,240,0.2)', lineHeight: 1.6, margin: 0 }}>
          India
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(232,234,240,0.2)', lineHeight: 1.6, margin: 0 }}>
          open to work
        </p>
      </div>
    </section>
  );
}
