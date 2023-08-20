'use client'

import React, { createContext, useContext } from 'react';
import useModal, { ModalState } from '../hooks/useModal';

interface ModalContextType {
  modal: ModalState;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: any) => {
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
