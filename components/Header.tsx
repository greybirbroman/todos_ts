'use client';
import React from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton';
import TodoCounter from './TodoCounter';
import { useModalContext } from '@/utils/context/ModalContext';
import useFilteredList from '@/utils/hooks/useFilteredList';

const Header = () => {
  const { modal: { openModalAddTodo } } = useModalContext();
  const { resetFilters } = useFilteredList()


  return (
    <header className='flex justify-between items-center p-4 sm:p-8'>
      <Link href='/' className='font-bold sm:text-[32px] text-[24px] text-white hover:text-cyan-700 hover:scale-110 duration-300' onClick={resetFilters}>
        My Todo's
      </Link>
      <TodoCounter />
      <CustomButton
        title='new todo'
        onClick={openModalAddTodo}
        customClass='font-bold sm:text-[32px] text-[24px] text-white hover:text-cyan-700 hover:scale-110 duration-300'
      />
    </header>
  );
};

export default Header;
