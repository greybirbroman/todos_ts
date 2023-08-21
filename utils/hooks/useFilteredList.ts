'use client';
import { useMemo, useState, useEffect } from 'react';
import { useTodoContext } from '../context/TodosContext';
import { useSearchBarContext } from '../context/SearchContext';
import { useTagsBarContext } from '../context/TagsBarContext';
import { usePriorityBarContext } from '../context/PriorityBarConext';

const useFilteredList = () => {
  const {
    todo: { todoList },
  } = useTodoContext();
  const {
    state: { searchQuery, resetSearchQuery },
  } = useSearchBarContext();
  const {
    state: { selectedTags, resetTags },
  } = useTagsBarContext();

  const {
    state: { priorityOnFilter, resetPriority },
  } = usePriorityBarContext();


  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [searchMessage, setSearchMessage] = useState('');

  const resetFilters = () => {
    resetSearchQuery()
    resetTags()
    resetPriority()
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  const filteredList = useMemo(() => {
    
    let filtered = todoList;
    setSearchMessage(`У вас еще нет задач ...`);
    if (debouncedSearchQuery !== '') {
      filtered = filtered.filter(
        (todo) =>
          todo?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo?.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length === 0) {
        setSearchMessage(
          `К сожалению по запросу "${searchQuery}" ничего не нашлось ...`
        );
      }
    }

    if (priorityOnFilter) {
      filtered = filtered.filter((todo) => todo.priority === priorityOnFilter);
      if (filtered.length === 0) {
        setSearchMessage(`Не нашлось задач удовлетворяющих приоритету "${priorityOnFilter}" ...`);
      }
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((todo) =>
        todo?.tags?.some((tag) =>
          selectedTags.some((selectedTag) => selectedTag.name === tag.name)
        )
      );
      if (filtered.length === 0) {
        setSearchMessage(`У Вас нет задач удовлетворяющих фильтру ${selectedTags.map((tag) => tag.name).join(' или ')}...`);
      }
    }
    return filtered;
  }, [debouncedSearchQuery, selectedTags, priorityOnFilter, todoList]);

  return {
    filteredList,
    resetFilters,
    searchMessage,
  };
};

export default useFilteredList;
