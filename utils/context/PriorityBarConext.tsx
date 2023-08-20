'use client'
import React, { createContext, useContext } from 'react';
import usePriorityBar from '../hooks/usePriorityBar';
import { PriorityBarState } from '@/types';

interface PriorityBarContextType {
  state: PriorityBarState;
}

const PriorityBarContext = createContext<PriorityBarContextType | undefined>(undefined);

export const PriorityBarProvider = ({ children }: any) => {
  const state = usePriorityBar()

  return <PriorityBarContext.Provider value={{ state }}>{children}</PriorityBarContext.Provider>
};

export const usePriorityBarContext = () => {
  const context = useContext(PriorityBarContext);
  if (!context) {
    throw new Error('usePriorityBarContext must be used within a PriorityBarProvider');
  }
  return context;
};
