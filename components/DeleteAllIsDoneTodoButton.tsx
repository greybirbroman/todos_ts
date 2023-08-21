'use client';
import { useModalContext } from '@/utils/context/ModalContext';
import CustomButton from './CustomButton';

const DeleteAllIsDoneTodoButton = () => {
  const {
    modal: { openModalConfirmDeleteDone },
  } = useModalContext();

  return (
    <CustomButton
      imageSrc='/delete-icon.svg'
      title='Done'
      customClass='flex gap-2 items-center bg-white/50 rounded-xl p-2 hover:bg-white hover:scale-105 duration-300'
      onClick={openModalConfirmDeleteDone}
    />
  );
};

export default DeleteAllIsDoneTodoButton;
