'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.innerWidth <= 768) return;

    const el = ref.current;
    if (!el) return;

    el.style.display = 'block';

    function onMove(e: MouseEvent) {
      if (!el) return;
      el.style.transform = `translate(${e.clientX - 140}px, ${e.clientY - 140}px)`;
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,234,240,0.025) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'transform 100ms linear',
        willChange: 'transform',
      }}
    />
  );
}
