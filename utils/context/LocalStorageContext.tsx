'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface LocalStorageProps {
  children: ReactNode;
}

const LocalStorageContext = createContext<{} | null>(null);

export const LocalStorageProvider = ({ children }: LocalStorageProps) => {
  useLocalStorage();

  return (
    <LocalStorageContext.Provider value={{}}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      'useLocalStorageContext must be used within a LocalStorageProvider'
    );
  }
  return context;
};
