'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { TodoProps } from '@/types';
import CustomButton from './CustomButton';
import { useTodoContext } from '@/utils/context/TodosContext';
import { useModalContext } from '@/utils/context/ModalContext';

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
  const isRapid = priority === 'bg-red-700'

  // DELETE TODO
  const handleEditTodo = () => {
    selectCurrentTodo(id);
    openModalEditTodo();
    toggleMenuSettings();
  };

  // EDIT TODO
  const handleDeleteTodo = () => {
    deleteTodo(id)
  }
  
  const toggleMenuSettings = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleOutsideMenuClick = () => {
    if(isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const MenuSettings = () => {
    return (
      isMenuOpen && (
        <div className='flex flex-col gap-2 absolute bg-white text-gray-700 right-2 top-10 py-2 px-2 w-[100px] rounded-lg'>
          <CustomButton
            title='Edit'
            imageSrc='/edit-icon.svg'
            customClass='flex justify-between items-center hover:text-cyan-700'
            onClick={handleEditTodo}
          />
          <CustomButton
            title='Delete'
            imageSrc='/delete-icon.svg'
            customClass='flex justify-between items-center hover:text-red-700'
            onClick={handleDeleteTodo}
          />
        </div>
      )
    );
  };

  return (
    <div
    className={`${isRapid && !isDone ? 'text-white' : 'text-gray-700' } flex flex-col justify-between gap-2 p-4 rounded-xl shadow-xl relative cursor-default ${
      !isDone ? priority : 'bg-slate-100 line-through'
    }`}
    onClick={handleOutsideMenuClick}
    >
      {isRapid &&
      <div className='bg-black/50 p-3 rounded-full absolute -top-5 -left-5'>
        <Image src='/flash.png' alt='Rapid' width={24} height={24} className='object-contain'/>
      </div>

      
      }
      <div className='flex justify-between items-center relative'>
        <h2 className='font-semibold text-xl max-w-[80%] whitespace-normal overflow-hidden overflow-ellipsis'>{title}</h2>
        <CustomButton
          imageSrc='/menu-settings.svg'
          onClick={toggleMenuSettings}
        />
        <MenuSettings />
      </div>

     <p className='text-sm'>{description}</p>

    
      
      {tags && tags.length > 0 && (
        <div className='flex gap-2 items-center'>
          <p>#tags:</p>
          <ul className='flex flex-wrap items-center gap-2'>
            {tags.map((tag, index) => (
              <li
                key={index}
                className={`${tag.color} rounded-full w-5 h-5`}
              ></li>
            ))}
          </ul>
        </div>
      )}
      <div className='flex items-center justify-between'>
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
    </div>
  );
};

export default Todo;
