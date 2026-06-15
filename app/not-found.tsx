'use client';

import { useState } from 'react';
import { useCurtainContext } from '@/context/CurtainContext';

export default function NotFound() {
  const { triggerCurtain } = useCurtainContext();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050508',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(72px, 12vw, 120px)',
          fontWeight: 200,
          color: 'rgba(232,234,240,0.06)',
          lineHeight: 1,
          margin: '0 0 24px 0',
          userSelect: 'none',
        }}
      >
        404
      </p>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '28px',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.7)',
          margin: '0 0 12px 0',
          lineHeight: 1.3,
        }}
      >
        You&apos;ve wandered beyond the map.
      </p>

      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: 'rgba(232,234,240,0.35)',
          margin: 0,
        }}
      >
        This page does not exist.
      </p>

      <button
        onClick={() => triggerCurtain('/')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          marginTop: '40px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: hovered ? 'rgba(232,234,240,0.8)' : 'rgba(232,234,240,0.35)',
          transition: 'color 200ms ease',
          padding: 0,
        }}
      >
        Return →
      </button>
    </div>
  );
}
