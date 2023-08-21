'use client'
import { useState, useEffect } from 'react'
import { lockScroll, unLockScroll } from '../lockScroll'

const useModal = () => {

    const [isModalAddOpen, setIsModalAddOpen] = useState(false)
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    const [isModalConfirmDeleteAllOpen, setIsModalConfirmDeleteAllOpen] = useState(false)
    const [isModalConfirmDeleteDoneOpen, setIsModalConfirmDeleteDoneOpen] = useState(false)

    const openModalAddTodo = () => {
      setIsModalAddOpen(true)
      lockScroll()
    }

    const openModalEditTodo = () => {
      setIsModalEditOpen(true)
      lockScroll()
    }

    const openModalConfirmDeleteAll = () => {
      setIsModalConfirmDeleteAllOpen(true)
      lockScroll()
    }

    const openModalConfirmDeleteDone = () => {
      setIsModalConfirmDeleteDoneOpen(true)
      lockScroll()
    }

    const closeModals = () => {
      setIsModalAddOpen(false)
      setIsModalEditOpen(false)
      setIsModalConfirmDeleteAllOpen(false)
      setIsModalConfirmDeleteDoneOpen(false)
      unLockScroll()
    }

    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
          e.key === 'Escape' ? closeModals() : null
        };
          document.body.addEventListener('keydown', handleEscapeKey);
          return (): void => {
            document.body.removeEventListener('keydown', handleEscapeKey);
        }
      }, [closeModals]);


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