import { useState } from 'react';

const usePriorityBar = () => {
  const [priority, setPriority] = useState<string>('bg-red-200');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value);
  };

  const resetPriority = () => {
    setPriority('bg-red-200');
  };

  return {
    priority,
    setPriority,
    handleSelectChange,
    resetPriority,
  };
};

export default usePriorityBar;
