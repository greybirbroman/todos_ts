'use client'
import React, { createContext, useContext, ReactNode } from 'react';
import usePriorityBar from '../hooks/usePriorityBar';
import { PriorityBarState } from '@/types';

interface PriorityBarContactProps {
  children: ReactNode
}

interface PriorityBarContextType {
  state: PriorityBarState;
}

const PriorityBarContext = createContext<PriorityBarContextType | undefined>(undefined);

export const PriorityBarProvider = ({ children }: PriorityBarContactProps) => {
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
