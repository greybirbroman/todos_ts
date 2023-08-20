'use client'
import React, { createContext, useContext } from 'react';
import useSearch from '../hooks/useSearch';
import { SearchBarState } from '@/types';

interface SearchBarContextType {
  state: SearchBarState;
}

const SearchBarContext = createContext<SearchBarContextType | undefined>(undefined);

export const SearchBarProvider = ({ children }: any) => {
  const state = useSearch()

  return <SearchBarContext.Provider value={{ state }}>{children}</SearchBarContext.Provider>
};

export const useSearchBarContext = () => {
  const context = useContext(SearchBarContext);
  if (!context) {
    throw new Error('useSearchBarContext must be used within a SearchBarProvider');
  }
  return context;
};