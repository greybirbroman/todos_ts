import {
  TodoList,
  SearchField,
  TagsFilterBar,
  DeleteAllTodoButton,
  DeleteAllIsDoneTodoButton,
  PriorityFilterBar,
} from '@/components';

export default function Home() {
  return (
    <>
      <main className='flex max-w-[1440px] flex-col p-4 sm:p-8 relative gap-5 flex-1'>
        <div className='flex max-lg:flex-col w-full justify-between gap-5'>
          <SearchField />
          <div className='flex max-lg:flex-wrap gap-5 h-full'>
            <PriorityFilterBar />
            <div className='flex gap-2'>
              <DeleteAllIsDoneTodoButton />
              <DeleteAllTodoButton />
            </div>
          </div>
        </div>
        <div className='flex max-lg:flex-1 max-lg:flex-col gap-5'>
          <div className='flex lg:flex-col lg:gap-5'>
            <TagsFilterBar />
          </div>
          <TodoList />
        </div>
      </main>
    </>
  );
}
