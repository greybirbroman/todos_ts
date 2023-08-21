'use client';
//import Image from 'next/image';
import { Todo, Loader } from '@/components';
import useLoader from '@/utils/hooks/useLoader';
import useFilteredList from '@/utils/hooks/useFilteredList';
import { motion as m } from 'framer-motion';

const TodoList = () => {
  const { isLoading } = useLoader(500);
  const { filteredList, searchMessage } = useFilteredList();

  return isLoading ? (
    <Loader />
  ) : filteredList.length > 0 ? (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full items-start relative'>
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
    <m.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.3}}
    className='text-white sm:text-3xl text-xl text-center flex flex-1 justify-center items-center w-full h-[100%]'>
      {searchMessage}
    </m.div>
  );
};

export default TodoList;

{
  /* <Image
      src='/no-task.png'
      alt='No Tasks Image'
      fill
      priority
      quality={100}
      className='object-contain'
    /> */
}
