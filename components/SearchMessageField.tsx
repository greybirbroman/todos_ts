'use client';
import { motion as m } from 'framer-motion';
import useFilteredList from '@/utils/hooks/useFilteredList';
import { todoVariants } from '@/utils/motion';

const SearchMessageField = () => {
  const { searchMessage } = useFilteredList();

  return (
    <m.div
      variants={todoVariants}
      initial='initial'
      animate='show'
      className='text-gray-700 sm:text-3xl text-xl text-center flex flex-1 justify-center items-center w-full h-[100%] bg-white/50 rounded-xl px-4'
    >
      {searchMessage}
    </m.div>
  );
};

export default SearchMessageField;
