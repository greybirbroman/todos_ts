'use client'

import {useEffect} from 'react'
import { useTodoContext } from '../context/TodosContext';

const useLocalStorage = () => {

    const {todo: { todoList, setTodoList, currentTodo, setCurrentTodo }} = useTodoContext()
    
  // Для загрузки данных из LocalStorage
  useEffect(() => {
    const savedTodoList = localStorage.getItem('todos');
    if (savedTodoList) {
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

}

export default useLocalStorage
