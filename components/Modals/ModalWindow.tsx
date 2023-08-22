'use client';
import { ModalProps } from '@/types';
import ModalPortal from './ModalPortal';
import { motion as m } from 'framer-motion';
import { modalVariants } from '@/utils/motion';

const ModalWindow = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalPortal wrapperId='react-portal-container'>
        <div className='fixed inset-0 z-40 flex items-center justify-center'>
          <div
            className='absolute inset-0 bg-black/50 backdrop-blur-[3px]'
            onClick={onClose}
          />
          <m.div
            variants={modalVariants}
            initial='hidden'
            animate='show'
            className='relative min-w-fit bg-white rounded-lg overflow-hidden mx-4'
          >
            {children}
          </m.div>
        </div>
      </ModalPortal>
    </>
  );
};

export default ModalWindow;
