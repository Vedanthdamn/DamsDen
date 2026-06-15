'use client';

import { createContext, useContext, useRef, useState } from 'react';
import type { Howl } from 'howler';

interface SoundContextValue {
  isSoundOn: boolean;
  setIsSoundOn: (on: boolean) => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isSoundOn, setIsSoundOnState] = useState(false);
  const howlRef = useRef<Howl | null>(null);

  function setIsSoundOn(on: boolean) {
    setIsSoundOnState(on);

    if (on) {
      import('howler').then(({ Howl }) => {
        const instance = new Howl({
          src: ['/audio/ambient.mp3'],
          loop: true,
          volume: 0.25,
        });
        howlRef.current = instance;
        instance.play();
      });
    } else {
      if (howlRef.current) {
        howlRef.current.fade(0.25, 0, 600);
        setTimeout(() => {
          howlRef.current?.stop();
        }, 650);
      }
    }
  }

  return (
    <SoundContext.Provider value={{ isSoundOn, setIsSoundOn }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundContext() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error('useSoundContext must be used inside SoundProvider');
  return ctx;
}
