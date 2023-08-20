import {
  TodoList,
  SearchField,
  TagsFilterBar,
  DeleteAllTodoButton,
} from '@/components';

export default function Home() {
  return (
    <>
      <main className='flex max-w-[1440px] flex-col p-8 relative gap-5 flex-1'>
        <SearchField />
        <div className='max-sm:flex-col flex sm:gap-5 gap-5'>
          <div className='w-fit flex sm:flex-col sm:max-w-fit'>
            <TagsFilterBar />
            <DeleteAllTodoButton />
          </div>
          <TodoList />
        </div>
      </main>
    </>
  );
}
