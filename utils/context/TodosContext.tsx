'use client'
import React, { ReactNode, createContext, useContext } from 'react';
import useTodos from '../hooks/useTodos'
import { TodoState } from '@/types';

interface TodosContextProps {
  children: ReactNode
}

interface TodosContextType {
  todo: TodoState;
}

const TodoContext = createContext<TodosContextType | undefined>(undefined);

export const TodoProvider = ({ children }: TodosContextProps) => {
  const todo = useTodos()

  return <TodoContext.Provider value={{ todo }}>{children}</TodoContext.Provider>
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
