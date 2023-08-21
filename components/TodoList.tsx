'use client';
import { Todo, Loader, SearchMessageField } from '@/components';
import useLoader from '@/utils/hooks/useLoader';
import useFilteredList from '@/utils/hooks/useFilteredList';

const TodoList = () => {
  const { isLoading } = useLoader(500);
  const { filteredList } = useFilteredList();

  return isLoading ? (
    <Loader />
  ) : filteredList.length > 0 ? (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full items-start'>
      {filteredList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          createdAt={todo.createdAt}
          isDone={todo.isDone}
          tags={todo.tags}
          priority={todo.priority}
        />
      ))}
    </ul>
  ) : (
   <SearchMessageField />
  );
};

export default TodoList;
