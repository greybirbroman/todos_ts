'use client';
import React from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton';
import TodoCounter from './TodoCounter';
import { useModalContext } from '@/utils/context/ModalContext';

const Header = () => {
  const { modal: { openModalAddTodo } } = useModalContext();
  

  return (
    <header className='flex justify-between items-start p-8'>
      <Link href='/' className='font-bold text-[32px] text-white'>
        My Todo's
      </Link>
      <TodoCounter />
      <CustomButton
        title='new todo'
        onClick={openModalAddTodo}
        customClass='font-bold text-[32px] text-white hover:text-cyan-700 hover:scale-110 duration-300'
      />
    </header>
  );
};

export default Header;
