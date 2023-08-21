'use client';

import { useState, ChangeEvent } from 'react';

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const resetSearchQuery = () => {
    setSearchQuery('')
  }

  return {
    searchQuery,
    handleChange,
    resetSearchQuery,
  };
};

export default useSearch;
