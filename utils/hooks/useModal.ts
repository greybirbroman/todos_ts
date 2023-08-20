'use client'

import { useState, useEffect } from 'react'

export interface ModalState {
    isModalAddOpen: boolean;
    isModalEditOpen: boolean;
    openModalAddTodo: () => void;
    openModalEditTodo: () => void;
    closeModals: () => void;
}


const useModal = (): ModalState => {

    const [isModalAddOpen, setIsModalAddOpen] = useState(false)
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)

    const openModalAddTodo = () => {
      setIsModalAddOpen(true)
    }

    const openModalEditTodo = () => {
      setIsModalEditOpen(true)
    }

    const closeModals = () => {
      setIsModalAddOpen(false)
      setIsModalEditOpen(false)
    }

    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
           closeModals()
          }
        };
        if (isModalAddOpen || isModalEditOpen) {
          document.addEventListener('keydown', handleEscapeKey);
          return () => {
            document.removeEventListener('keydown', handleEscapeKey);
          };
        }
      }, [isModalAddOpen, isModalEditOpen]);

    return {
        isModalAddOpen,
        isModalEditOpen,
        openModalAddTodo,
        openModalEditTodo,
        closeModals,
    }
}

export default useModal;