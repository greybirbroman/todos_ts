import { useTodoContext } from '@/utils/context/TodosContext';

const TodoCounter = () => {
  const {
    todo: { totalTodo, doneTodo },
  } = useTodoContext();

  const isVisible = totalTodo !== doneTodo

  return (
    isVisible &&
    <div className='h-full flex gap-1 cursor-default font-bold text-white sm:text-[32px] text-[20px]'>
      <p className=''>{doneTodo}</p>
      <span className=' text-cyan-700'>/</span>
      <p className=''>{totalTodo}</p>
    </div>
  );
};

export default TodoCounter;
