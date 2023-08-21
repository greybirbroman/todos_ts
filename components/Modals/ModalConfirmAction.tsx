'use client'
import React from 'react';
import ModalWindow from './ModalWindow';
import { useModalContext } from '@/utils/context/ModalContext';
import CustomButton from '../CustomButton';

interface ModalConfirmProps {
  isOpen: boolean;
  title: string;
  acceptButtonTitle: string;
  onAction: () => void;
}

const ModalConfirmAction = ({ isOpen, title, acceptButtonTitle, onAction }: ModalConfirmProps) => {
  const {
    modal: { closeModals },
  } = useModalContext();

  const handleAction = () => {
    onAction()
    closeModals()
  }

  return (
    <ModalWindow isOpen={isOpen} onClose={closeModals}>
      <div className='max-w-[500px] p-4 text-white flex flex-col justify-between gap-20 bg-gradient-to-t from-white to-slate-700'>
        <p className='font-semibold text-3xl'>{title}</p>
        <div className='flex items-center justify-between'>
            <CustomButton title='Cancel' customClass='text-slate-700 hover:scale-105 duration-300' onClick={closeModals}/>
            <CustomButton title={acceptButtonTitle} customClass='py-2 px-5 bg-slate-700 text-white rounded-xl hover:scale-105 duration-300' onClick={handleAction}/>
        </div>
      </div>
    </ModalWindow>
  );
};

export default ModalConfirmAction;
