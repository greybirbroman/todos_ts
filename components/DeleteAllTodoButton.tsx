'use client';
import CustomButton from './CustomButton';
import { useModalContext } from '@/utils/context/ModalContext';

const DeleteAllTodoButton = () => {
  const {
    modal: { openModalConfirmDeleteAll },
  } = useModalContext();

  return (
    <CustomButton
      imageSrc='/delete-icon.svg'
      title='Delete All'
      customClass='flex items-center gap-2 bg-white/50 p-4 w-fit h-fit rounded-xl hover:scale-105 hover:bg-white duration-300 whitespace-nowrap'
      onClick={openModalConfirmDeleteAll}
    />
  );
};

export default DeleteAllTodoButton;
