'use client';
import { ModalProps } from '@/types';
import ModalPortal from './ModalPortal';

const ModalWindow = ({ children, isOpen, onClose }: ModalProps) => {

  if (!isOpen) return null;

  return (
    <>
      <ModalPortal wrapperId='react-portal-container'>
        <div
          onClick={onClose}
          className='fixed inset-0 z-40 bg-black/50'
        />
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white shadow-lg rounded-lg max-w-full min-w-[300px] max-h-full transition-all overflow-hidden'>
          {children}
        </div>
      </ModalPortal>
    </>
  );
};

export default ModalWindow;