'use client';
import { useSearchBarContext } from '@/utils/context/SearchContext';
import CustomButton from './CustomButton';

const SearchField = () => {
  const {
    state: { searchQuery, handleChange, resetSearchQuery },
  } = useSearchBarContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='flex w-full'
    >
      <input
        className='w-full h-[55px] bg-white/50 hover:bg-white focus:bg-white text-gray-700 rounded-xl p-2 outline-none placeholder:text-white hover:placeholder:text-gray-700 duration-300'
        type='text'
        id='search'
        name='search'
        value={searchQuery}
        placeholder={'find task...'}
        onChange={handleChange}
        required
        autoComplete='off'
      />
      <div className='flex'>
        {searchQuery && (
          <CustomButton
            onClick={resetSearchQuery}
            imageSrc='/close_icon.svg'
            customClass='flex items-center cursor-pointer bg-white/50 hover:bg-cyan-700 duration-300 p-4 rounded-full ml-5'
          />
        )}
       
      </div>
    </form>
  );
};

export default SearchField;
