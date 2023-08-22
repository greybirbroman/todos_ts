'use client';

import { useState } from 'react';
import { TodoProps } from '@/types';
import { showToast } from '../toaster';

const useTodos = () => {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [currentTodo, setCurrentTodo] = useState<TodoProps | null>(null);
  const totalTodo = todoList.length;
  const doneTodo = todoList.filter((item) => item.isDone).length;

  const selectCurrentTodo = (id: string) => {
    const todoToEdit = todoList.find((item) => item.id === id);
    if (todoToEdit) {
      setCurrentTodo(todoToEdit);
    }
  };

  const addNewTodo = (newTodo: TodoProps) => {
    setTodoList((prev) => {
      const newList = [newTodo, ...prev];
      return newList;
    });
    showToast('New Todo successfuly added!');
  };

  const updateTodo = (newTodo: TodoProps) => {
    setTodoList((prev) => {
      const updatedList = prev.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        }
        return todo;
      });
      return updatedList;
    });
    showToast('Todo updated successfully!');
  };

  const deleteTodo = (id: string) => {
    setTodoList((prev) => {
      const updated = prev.filter((todo) => todo.id !== id);
      return updated;
    });
    showToast('Todo deleted successfully!');
  };

  const deleteAllTodos = () => {
    setTodoList([]);
    localStorage.clear()
  };

  const deleteAllIsDoneTodos = () => {
    setTodoList((prev) => {
      const updated = prev.filter((todo) => !todo.isDone);
      return updated;
    });
  };

  const toggleTodoStatus = (id: string) => {
    setTodoList((prev) => {
      const updated = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(updated));
      return updated;
    });
  };

  return {
    todoList,
    setTodoList,
    addNewTodo,
    updateTodo,
    toggleTodoStatus,
    deleteTodo,
    deleteAllTodos,
    deleteAllIsDoneTodos,
    selectCurrentTodo,
    currentTodo,
    setCurrentTodo,
    totalTodo,
    doneTodo,
  };
};
export default useTodos;
