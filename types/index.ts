import { MouseEventHandler, ChangeEvent } from 'react';

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
  todo?: TodoProps;
  title?: string;
  description?: string;
  priority: string;
  tags?: Tag[];
  createdAt?: string;
  isDone?: boolean;
}

export interface TodoState {
  todoList: TodoProps[];
  filteredList: TodoProps[];
  setFilteredList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  currentTodo: TodoProps | null;
  addNewTodo: (newTodo: TodoProps) => void;
  updateTodo: (newTodo: TodoProps) => void;
  toggleTodoStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
  deleteAllTodos: () => void;
  filterTodo: (searchQuery: string) => void;
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
  setSelectedTagsInModal: React.Dispatch<React.SetStateAction<Tag[]>>;
  handleSelectTag: (tag: Tag) => void;
  handleSelectTagInModal: (tag: Tag) => void;
  resetTags: () => void;
}

export interface PriorityBarState {
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  resetPriority: () => void;
}

export interface SearchBarState {
  searchQuery: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  resetSearchQuery: () => void;
}
