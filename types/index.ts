import { MouseEventHandler, ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface CustomButtonProps {
  title?: string;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  customClass?: string;
  disabled?: boolean;
  imageSrc?: string;
}

export interface TodoProps {
  id: string;
  title?: string;
  description?: string;
  priority: string;
  tags?: Tag[];
  createdAt: string;
  isDone: boolean;
}

export interface TodoState {
  todoList: TodoProps[];
  setTodoList: Dispatch<SetStateAction<TodoProps[]>>;
  currentTodo: TodoProps | null;
  setCurrentTodo: Dispatch<SetStateAction<TodoProps | null>>;
  addNewTodo: (newTodo: TodoProps) => void;
  updateTodo: (newTodo: TodoProps) => void;
  toggleTodoStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
  deleteAllTodos: () => void;
  deleteAllIsDoneTodos: () => void;
  selectCurrentTodo: (id: string) => void;
  totalTodo: number;
  doneTodo: number;
}

export interface Tag {
  name: string;
  color: string;
}

export interface TagsBarState {
  tags: Tag[];
  selectedTags: Tag[];
  selectedTagsInModal: Tag[];
  setSelectedTagsInModal: Dispatch<SetStateAction<Tag[]>>;
  handleSelectTag: (tag: Tag) => void;
  handleSelectTagInModal: (tag: Tag) => void;
  resetTagsInModal: () => void;
  resetTags: () => void;
}

export interface ModalState {
  isModalAddOpen: boolean;
  isModalEditOpen: boolean;
  isModalConfirmDeleteAllOpen: boolean;
  isModalConfirmDeleteDoneOpen: boolean;
  openModalAddTodo: () => void;
  openModalEditTodo: () => void;
  openModalConfirmDeleteAll: () => void;
  openModalConfirmDeleteDone: () => void;
  closeModals: () => void;
}

export interface PriorityBarState {
  priority: string;
  priorityOnFilter: string;
  selected: string;
  setPriority: Dispatch<SetStateAction<string>>;
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleSelect: (item: string) => void;
  resetPriority: () => void;
}

export interface SearchBarState {
  searchQuery: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetSearchQuery: () => void;
}
