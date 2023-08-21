'use client';
import React from 'react';
import { ModalAddTodo, ModalEditTodo, ModalConfirmAction } from '..';
import { useTodoContext } from '@/utils/context/TodosContext';
import { useModalContext } from '@/utils/context/ModalContext';
import {
  deleteAllConfirmMessage,
  deleteAllDoneConfirmMessage,
} from '../../utils/contsants';

const Modals = () => {
  const {
    todo: { deleteAllTodos, deleteAllIsDoneTodos },
  } = useTodoContext();

  const {
    modal: { isModalConfirmDeleteAllOpen, isModalConfirmDeleteDoneOpen },
  } = useModalContext();

  return (
    <>
      <ModalAddTodo />
      <ModalEditTodo />
      {/* {CONFIRM DELETE ALL} */}
      <ModalConfirmAction
        isOpen={isModalConfirmDeleteAllOpen}
        title={deleteAllConfirmMessage}
        acceptButtonTitle='Delete All'
        onAction={deleteAllTodos}
      />
      {/* {CONFIRM DELETE ALL IS DONE} */}
      <ModalConfirmAction
        isOpen={isModalConfirmDeleteDoneOpen}
        title={deleteAllDoneConfirmMessage}
        acceptButtonTitle='Delete'
        onAction={deleteAllIsDoneTodos}
      />
    </>
  );
};

export default Modals;
