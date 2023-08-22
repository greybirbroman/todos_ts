'use client';
import { useState } from 'react';
import Image from 'next/image';
import { getColorByPriority } from '@/utils/functions';
import { TodoProps, TodoMenuProps } from '@/types';
import CustomButton from './CustomButton';
import { useTodoContext } from '@/utils/context/TodosContext';
import { useModalContext } from '@/utils/context/ModalContext';
import { motion as m } from 'framer-motion';
import { todoVariants } from '@/utils/motion';

const TodoMenu = ({ isOpen, onEdit, onDelete }: TodoMenuProps) => {
  if (!isOpen) return null;
  return (
    <div className='flex flex-col gap-2 absolute bg-slate-100 text-gray-700 right-0 top-6 py-2 px-2 w-[100px] border rounded-lg'>
      <CustomButton
        title='Edit'
        imageSrc='/edit-icon.svg'
        customClass='flex justify-between items-center hover:text-cyan-700'
        onClick={onEdit}
      />
      <CustomButton
        title='Delete'
        imageSrc='/delete-icon.svg'
        customClass='flex justify-between items-center hover:text-red-700'
        onClick={onDelete}
      />
    </div>
  );
};

const Todo = ({
  title,
  description,
  createdAt,
  priority,
  tags,
  isDone,
  id,
}: TodoProps) => {
  const {
    todo: { toggleTodoStatus, deleteTodo, selectCurrentTodo },
  } = useTodoContext();

  const {
    modal: { openModalEditTodo },
  } = useModalContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRapid = priority === 'rapid';

  // EDIT TODO
  const handleEditTodo = () => {
    selectCurrentTodo(id);
    openModalEditTodo();
    toggleMenuSettings();
  };

  // DELETE TODO
  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  const toggleMenuSettings = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClickOutsideMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <m.div
      variants={todoVariants}
      initial='initial'
      animate='show'
      className={`${
        isRapid && !isDone ? 'text-white' : 'text-gray-700'
      } flex flex-col justify-between gap-2 p-4 rounded-xl shadow-xl relative cursor-default duration-300 ${
        !isDone ? getColorByPriority(priority) : 'bg-slate-100 line-through'
      }`}
      onClick={handleClickOutsideMenu}
    >
      {isRapid && (
        <div className='bg-black/50 p-3 rounded-full absolute -top-5 -left-5'>
          <Image
            src='/flash.png'
            alt='Rapid'
            width={24}
            height={24}
            className='object-contain'
          />
        </div>
      )}
      <div className='flex justify-between items-center relative'>
        <h3 className='font-semibold text-xl max-w-[80%] whitespace-normal overflow-hidden overflow-ellipsis'>
          {title}
        </h3>
        <CustomButton
          imageSrc='/menu-settings.svg'
          onClick={toggleMenuSettings}
        />
        <TodoMenu
          isOpen={isMenuOpen}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
      <p className='text-sm'>{description}</p>
      {tags && tags.length > 0 && (
        <div className='flex gap-2 items-center'>
          <ul className='flex flex-wrap items-center gap-2'>
            {tags.map((tag, index) => (
              <li
                key={index}
                className={`${tag.color} rounded-full w-5 h-5 ring-1 ring-white`}
              ></li>
            ))}
          </ul>
        </div>
      )}
      <div className='flex items-center justify-between text-[14px]'>
        <p className='capitalize'>{createdAt}</p>
        <div className='flex items-center gap-2'>
          <CustomButton title='done' onClick={() => toggleTodoStatus(id)} />
          <input
            type='checkbox'
            checked={isDone}
            className='w-5 h-5 cursor-pointer'
            onChange={() => toggleTodoStatus(id)}
          />
        </div>
      </div>
    </m.div>
  );
};

export default Todo;
