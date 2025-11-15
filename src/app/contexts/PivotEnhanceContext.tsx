'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PivotEnhanceContextType {
  isPivotEnhanceVisible: boolean;
  setPivotEnhanceVisible: (visible: boolean) => void;
}

const PivotEnhanceContext = createContext<PivotEnhanceContextType | undefined>(undefined);

export function PivotEnhanceProvider({ children }: { children: ReactNode }) {
  const [isPivotEnhanceVisible, setPivotEnhanceVisible] = useState(false);

  return (
    <PivotEnhanceContext.Provider value={{ isPivotEnhanceVisible, setPivotEnhanceVisible }}>
      {children}
    </PivotEnhanceContext.Provider>
  );
}

export function usePivotEnhance() {
  const context = useContext(PivotEnhanceContext);
  if (context === undefined) {
    throw new Error('usePivotEnhance must be used within a PivotEnhanceProvider');
  }
  return context;
}

