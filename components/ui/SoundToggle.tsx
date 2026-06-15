'use client';

import { useState } from 'react';
import { IconVolume2, IconVolumeOff } from '@tabler/icons-react';
import { useSoundContext } from '@/context/SoundContext';

export default function SoundToggle() {
  const { isSoundOn, setIsSoundOn } = useSoundContext();
  const [hovered, setHovered] = useState(false);

  const color = hovered ? 'rgba(232,234,240,0.6)' : 'rgba(232,234,240,0.2)';

  return (
    <button
      onClick={() => setIsSoundOn(!isSoundOn)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        color,
        transition: 'color 200ms ease',
      }}
      aria-label={isSoundOn ? 'Mute ambient sound' : 'Play ambient sound'}
    >
      {isSoundOn ? <IconVolume2 size={15} /> : <IconVolumeOff size={15} />}
    </button>
  );
}
