'use client'

import { useState, useEffect } from 'react'

const useModal = () => {

    const [isModalAddOpen, setIsModalAddOpen] = useState(false)
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    const [isModalConfirmDeleteAllOpen, setIsModalConfirmDeleteAllOpen] = useState(false)
    const [isModalConfirmDeleteDoneOpen, setIsModalConfirmDeleteDoneOpen] = useState(false)


    const openModalAddTodo = () => {
      setIsModalAddOpen(true)
    }

    const openModalEditTodo = () => {
      setIsModalEditOpen(true)
    }

    const openModalConfirmDeleteAll = () => {
      setIsModalConfirmDeleteAllOpen(true)
    }

    const openModalConfirmDeleteDone = () => {
      setIsModalConfirmDeleteDoneOpen(true)
    }

    const closeModals = () => {
      setIsModalAddOpen(false)
      setIsModalEditOpen(false)
      setIsModalConfirmDeleteAllOpen(false)
      setIsModalConfirmDeleteDoneOpen(false)
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
        isModalConfirmDeleteAllOpen,
        isModalConfirmDeleteDoneOpen,
        openModalAddTodo,
        openModalEditTodo,
        openModalConfirmDeleteAll,
        openModalConfirmDeleteDone,
        closeModals,
    }
}

export default useModal;