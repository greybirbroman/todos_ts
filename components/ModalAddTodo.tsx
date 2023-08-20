'use client';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ModalWindow from './ModalWindow';
import CustomButton from './CustomButton';
import { getTaskColorByPriority, formatDate } from '@/utils/functions';
import { useModalContext } from '@/utils/context/ModalContext';
import { useTodoContext } from '@/utils/context/TodosContext';
import { usePriorityBarContext } from '@/utils/context/PriorityBarConext';
import { useTagsBarContext } from '@/utils/context/TagsBarContext';
import useForm from '@/utils/hooks/useForm';
import { PriorityBar, TagsBar } from '.';

const ModalAddTodo = () => {
  const {
    modal: { isModalAddOpen, closeModals },
  } = useModalContext();

  const {
    todo: { addNewTodo },
  } = useTodoContext();

  const {
    state: { priority, resetPriority },
  } = usePriorityBarContext();

  const {
    state: { selectedTagsInModal, resetTags },
  } = useTagsBarContext();

  const { values, resetValues, handleChange } = useForm();

  const resetForm = () => {
    resetPriority();
    resetValues();
    resetTags();
  };

  useEffect(() => {
    resetForm();
  }, [isModalAddOpen]);

  const handleAddNewTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      createdAt: formatDate(new Date()),
      priority: getTaskColorByPriority(priority) || '',
      isDone: false,
      tags: selectedTagsInModal,
    };
    addNewTodo(newTodo);
    closeModals();
  };

  return (
    <ModalWindow isOpen={isModalAddOpen} onClose={closeModals}>
      <form
        id='add'
        className='flex flex-col gap-5 p-4 max-w-[500px]'
        onSubmit={handleAddNewTodo}
      >
        <div className='flex justify-between items-center'>
          <CustomButton
            title='Cancel'
            customClass='font-semibold'
            onClick={closeModals}
          />
          <CustomButton
            title='Add Task'
            type='submit'
            customClass='font-semibold border-2 border-cyan-700 py-2 px-5 rounded-xl hover:bg-cyan-700 hover:text-white duration-300'
          />
        </div>
        <fieldset className='flex flex-col'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Title here...'
            value={values.title || ''}
            onChange={handleChange}
            className='bg-slate-50 rounded-lg p-2 focus:outline-cyan-700'
          />
        </fieldset>

        <fieldset className='flex flex-col'>
          <label>Description</label>
          <textarea
            rows={4}
            name='description'
            placeholder='Description here...'
            value={values.description || ''}
            onChange={handleChange}
            className='bg-slate-100  rounded-lg p-2 focus:outline-cyan-700'
          />
        </fieldset>

        <PriorityBar />
        <TagsBar />
      </form>
    </ModalWindow>
  );
};

export default ModalAddTodo;
