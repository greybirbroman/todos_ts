'use client';
import { useMemo, useState, useEffect } from 'react';
import { useTodoContext } from '../context/TodosContext';
import { useSearchBarContext } from '../context/SearchContext';
import { useTagsBarContext } from '../context/TagsBarContext';

const useFilteredList = () => {
  const {
    todo: { todoList },
  } = useTodoContext();
  const {
    state: { searchQuery },
  } = useSearchBarContext();
  const {
    state: { selectedTags },
  } = useTagsBarContext();

  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [searchMessage, setSearchMessage] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);


  const filteredList = useMemo(() => {
    // Фильтруем задачи на основе searchQuery и selectedTags
    let filtered = todoList;
    setSearchMessage(`У вас еще нет задач ...`);
    if (debouncedSearchQuery !== '') {
      filtered = filtered.filter(
        (todo) =>
          todo?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo?.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      if(filtered.length === 0) {
        setSearchMessage(`К сожалению по запросу ${searchQuery} ничего не нашлось ...`);
      }
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((todo) =>
        todo?.tags?.some((tag) =>
          selectedTags.some((selectedTag) => selectedTag.name === tag.name)
        )
      );
      if(filtered.length === 0) {
        setSearchMessage('Не нашлось задач удовлетворяющих фильтрации ...');
      }
    }
    return filtered;
  }, [debouncedSearchQuery, selectedTags, todoList]);

  return {
    filteredList,
    searchMessage
  };
};

export default useFilteredList;
