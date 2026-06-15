'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only activate on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    setVisible(true);

    function onMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(232,234,240,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%))`,
        transition: 'transform 80ms linear',
      }}
    />
  );
}
