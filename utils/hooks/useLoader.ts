'use client';
import { useState, useEffect } from 'react';

const useLoader = (delay: number) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return {
    isLoading,
  }
};

export default useLoader;
