'use client';

import { useState, useEffect } from 'react';
import { TodoProps } from '@/types';

const useTodos = () => {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [filteredList, setFilteredList] = useState<TodoProps[]>([])
  const [currentTodo, setCurrentTodo] = useState<TodoProps | null>(null);
  const totalTodo = todoList.length
  const doneTodo = todoList.filter((item) => item.isDone).length
  console.log(filteredList)
 

  // Для загрузки данных из LocalStorage
  useEffect(() => {
    const savedTodoList = localStorage.getItem('todos');
    if (savedTodoList && todoList.length === 0) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);

  // Для обновления todos в LocalStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const savedCurrentTodo = localStorage.getItem('currentTodo');
    if (savedCurrentTodo) {
      setCurrentTodo(JSON.parse(savedCurrentTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentTodo', JSON.stringify(currentTodo));
  }, [currentTodo]);

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
  };

  const deleteTodo = (id: string) => {
    setTodoList((prev) => {
      const updated = prev.filter((todo) => todo.id !== id);
      return updated;
    });
  };

  const deleteAllTodos = () => {
    setTodoList([])
  }

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
  const filterTodo = (searchQuery: string) => {
    const filtered = todoList.filter((todo) => {
      return todo.title?.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredList(filtered);
  };


  return {
    todoList,
    filteredList,
    setFilteredList,
    addNewTodo,
    updateTodo,
    toggleTodoStatus,
    deleteTodo,
    deleteAllTodos,
    filterTodo,
    selectCurrentTodo,
    currentTodo,
    totalTodo,
    doneTodo
  };
};
export default useTodos;
