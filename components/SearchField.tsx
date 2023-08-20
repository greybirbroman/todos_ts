'use client';
import { useSearchBarContext } from '@/utils/context/SearchContext';
import Image from 'next/image';

const SearchField = () => {
  const {
    state: { searchQuery, handleChange, handleSearch, resetSearchQuery },
  } = useSearchBarContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(), handleSearch;
      }}
      className='flex'
    >
      <input
        className='w-full h-[55px] bg-white/50 focus:bg-white text-gray-700 text-sm rounded-xl p-2 outline-none placeholder:text-white hover:placeholder:text-cyan-700 hover:placeholder:duration-300'
        type='text'
        id='search'
        name='search'
        value={searchQuery}
        placeholder={'find task...'}
        onChange={handleChange}
        required
        autoComplete='off'
      />
      {searchQuery && (
        <div
          className='relative flex items-center cursor-pointer bg-white/50 hover:bg-cyan-700 duration-300 p-4 rounded-full ml-5'
          onClick={resetSearchQuery}
        >
          <Image
            src='/close_icon.svg'
            alt='Clear Field Icon'
            width={24}
            height={24}
            className=''
          />
        </div>
      )}
    </form>
  );
};

export default SearchField;
