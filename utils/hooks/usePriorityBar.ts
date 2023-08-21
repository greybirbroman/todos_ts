import { useState } from 'react';

const usePriorityBar = () => {
  const [priority, setPriority] = useState<string>('high');
  const [priorityOnFilter, setPriorityOnFilter] = useState<string>('')
  const [selected, setSelected] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value);
  };

  const handleSelect = (item: string) => {
    if (item === priorityOnFilter) {
      resetPriority();
    } else {
      setPriorityOnFilter(item);
    }
  }


  const resetPriority = () => {
    setPriority('high');
    setPriorityOnFilter('')
    setSelected('')
  };

  return {
    priority,
    setPriority,
    selected,
    priorityOnFilter,
    handleSelectChange,
    handleSelect,
    resetPriority,
  };
};

export default usePriorityBar;
