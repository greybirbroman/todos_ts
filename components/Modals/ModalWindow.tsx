'use client';
import React, { useRef, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './ModalOverlay';

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ModalWindow = ({ children, isOpen, onClose }: ModalProps) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  return (
    <section className='fixed inset-0 flex justify-center items-center z-20 p-2'>
      <ModalOverlay onClose={onClose} customBg='bg-black/50'/>
      <div
        className={`flex flex-col items-center relative bg-white shadow-lg rounded-lg z-30 max-w-[75vw] max-h-[85vh] transition-all overflow-hidden`}
        ref={modalRef}
      >
        {children}
      </div>
    </section>
  );
};

export default ModalWindow;

 {/* <div
          className='bg-black/70 absolute top-2 right-2 cursor-pointer p-2 flex items-center justify-center rounded-full hover:scale-110 duration-75 z-50'
          onClick={onClose}
        >
          <button type='button'>
            <Image
              src='/close_icon.svg'
              alt='Закрыть, иконка'
              width={30}
              height={30}
            />
          </button>
        </div> */}
