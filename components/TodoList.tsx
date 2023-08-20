'use client'
//import Image from 'next/image';
import { Todo, Loader } from '@/components';
import useLoader from '@/utils/hooks/useLoader';
import useFilteredList from '@/utils/hooks/useFilteredList';

const TodoList = () => {
  
  const { isLoading } = useLoader(1000)
  const { filteredList, searchMessage } = useFilteredList()


  return isLoading ? (
    <Loader />
  ) : filteredList.length > 0 ? (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-start'>
      {filteredList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo}
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
    <div className='text-white text-3xl text-center flex justify-center items-center'>{searchMessage}</div>
  );
};

export default TodoList;

{/* <Image
      src='/no-task.png'
      alt='No Tasks Image'
      fill
      priority
      quality={100}
      className='object-contain'
    /> */}