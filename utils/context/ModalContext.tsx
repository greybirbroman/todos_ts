'use client'

import React, { createContext, useContext, ReactNode } from 'react';
import useModal from '../hooks/useModal';
import { ModalState } from '@/types';

interface ModalContextProps {
  children: ReactNode
}

interface ModalContextType {
  modal: ModalState;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalContextProps) => {
  const modal = useModal();

  return <ModalContext.Provider value={{ modal }}>{children}</ModalContext.Provider>
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};
