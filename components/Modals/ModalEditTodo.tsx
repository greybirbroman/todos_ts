'use client';
import { useEffect, FormEvent } from 'react';
import ModalWindow from './ModalWindow';
import CustomButton from '../CustomButton';
import { useModalContext } from '@/utils/context/ModalContext';
import { useTodoContext } from '@/utils/context/TodosContext';
import { usePriorityBarContext } from '@/utils/context/PriorityBarConext';
import { useTagsBarContext } from '@/utils/context/TagsBarContext';
import useForm from '@/utils/hooks/useForm';
import { PriorityBar, TagsBar } from '..';

const ModalEditTodo = () => {
  const {
    modal: { isModalEditOpen, closeModals },
  } = useModalContext();

  const {
    todo: { updateTodo, currentTodo },
  } = useTodoContext();

  const {
    state: { priority, setPriority },
  } = usePriorityBarContext();

  const {
    state: { selectedTagsInModal, setSelectedTagsInModal },
  } = useTagsBarContext();

  const { values, setValues, handleChange } = useForm();

  useEffect(() => {
    if(currentTodo) {
        setValues({
            title: currentTodo.title || '',
            description: currentTodo.description || '',
        });
        setSelectedTagsInModal(currentTodo.tags || [])
        setPriority((currentTodo.priority) || '')
    }
  }, [isModalEditOpen]);


  const handleEditTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(currentTodo) {
        const newTodo = {
          id: currentTodo.id,
          title: values.title || currentTodo?.title,
          description: values.description || currentTodo?.description,
          createdAt: currentTodo.createdAt,
          priority: priority || '',
          isDone: currentTodo.isDone,
          tags: selectedTagsInModal,
        };
        updateTodo(newTodo);
    }
    closeModals();
  };

  return (
    <ModalWindow isOpen={isModalEditOpen} onClose={closeModals}>
      <form
        id='add'
        className='flex flex-col gap-5 p-4 max-w-[500px] text-gray-700'
        onSubmit={handleEditTodo}
      >
        <div className='flex justify-between items-center'>
          <CustomButton
            title='Cancel'
            customClass='font-semibold'
            onClick={closeModals}
          />
          <CustomButton
            title='Edit Task'
            type='submit'
            customClass='font-semibold border-2 border-cyan-700 py-2 px-5 rounded-xl hover:bg-cyan-700 hover:text-white duration-300'
          />
        </div>
        <fieldset className='flex flex-col'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Todo title here...'
            value={values.title}
            onChange={handleChange}
            className='bg-slate-50 border border-gray-500 rounded-lg p-2'
          />
        </fieldset>

        <fieldset className='flex flex-col'>
          <label>Description</label>
          <textarea
            rows={4}
            name='description'
            placeholder='Todo description here...'
            value={values.description}
            onChange={handleChange}
            className='bg-slate-50 border border-gray-500 rounded-lg p-2'
          />
        </fieldset>
        <PriorityBar />
        <TagsBar />
      </form>
    </ModalWindow>
  );
};

export default ModalEditTodo;
