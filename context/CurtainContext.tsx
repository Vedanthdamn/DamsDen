'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

interface CurtainContextValue {
  isAnimating: boolean;
  triggerCurtain: (href: string) => void;
}

const CurtainContext = createContext<CurtainContextValue | null>(null);

export function CurtainProvider({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  function triggerCurtain(href: string) {
    setIsAnimating(true);
    setTimeout(() => {
      router.push(href);
      setTimeout(() => {
        setIsAnimating(false);
      }, 350);
    }, 350);
  }

  return (
    <CurtainContext.Provider value={{ isAnimating, triggerCurtain }}>
      {children}
    </CurtainContext.Provider>
  );
}

export function useCurtainContext() {
  const ctx = useContext(CurtainContext);
  if (!ctx) throw new Error('useCurtainContext must be used inside CurtainProvider');
  return ctx;
}
