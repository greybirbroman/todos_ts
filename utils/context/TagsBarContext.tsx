'use client'

import React, { ReactNode, createContext, useContext } from 'react';
import useTagsBar from '../hooks/useTagsBar';
import { TagsBarState } from '@/types';

interface TagsBarContextProps {
  children: ReactNode
}

interface TagsBarContextType {
    state: TagsBarState
}

const TagsBarContext = createContext<TagsBarContextType | undefined>(undefined);

export const TagsBarProvider = ({ children }: TagsBarContextProps) => {
    const state = useTagsBar()
  
    return <TagsBarContext.Provider value={{ state }}>{children}</TagsBarContext.Provider>
  };

  export const useTagsBarContext = () => {
    const context = useContext(TagsBarContext);
    if (!context) {
      throw new Error('useTagsBarContext must be used within a TagsBarProvider');
    }
    return context;
  };
  