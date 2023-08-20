'use client';
import { useState, useEffect, ChangeEvent } from 'react';
import { useTodoContext } from '../context/TodosContext';

const useSearch = () => {
  const {
    todo: { filterTodo },
  } = useTodoContext();

  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     handleSearch(); // Вызываем filterTodo с текущим значением searchQuery
  //   }, 500);
  //   // Очищаем таймер при каждом изменении searchQuery
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [searchQuery]);

  // const handleSearch = () => {
  //   filterTodo(searchQuery);
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const resetSearchQuery = () => {
    setSearchQuery('')
  }

  return {
    searchQuery,
    handleChange,
    //handleSearch,
    resetSearchQuery,
  };
};

export default useSearch;
