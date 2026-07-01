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
    // Navigate once curtain is fully covering (450ms)
    // Keep isAnimating true long enough for CurtainTransition to drive its own sequence
    setTimeout(() => router.push(href), 450);
    setTimeout(() => setIsAnimating(false), 500);
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
