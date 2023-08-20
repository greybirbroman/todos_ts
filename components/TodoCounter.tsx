import { useTodoContext } from '@/utils/context/TodosContext';

const TodoCounter = () => {
  const {
    todo: { totalTodo, doneTodo },
  } = useTodoContext();

  return (
    <div className='bg-white/50 py-5 px-5 flex rounded-full cursor-default w-fit h-fit'>
      <p className='self-start text-lg font-semibold'>{doneTodo}</p>
      <span className='self-center text-lg font-bold text-cyan-700'>/</span>
      <p className='self-end text-lg font-semibold'>{totalTodo}</p>
    </div>
  );
};

export default TodoCounter;
