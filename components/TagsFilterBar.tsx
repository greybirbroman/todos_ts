'use client';

import { useTagsBarContext } from '@/utils/context/TagsBarContext';

const TagsFilterBar = () => {
  const {
    state: { tags, selectedTags, handleSelectTag },
  } = useTagsBarContext();

  return (
    <ul className='flex flex-wrap lg:flex-col gap-2'>
      {tags.map((tag) => (
        <li 
        key={tag.name}
        className={`flex gap-2 items-center text-lg hover:text-black hover:bg-white/50 duration-300 rounded-full py-2 px-5 cursor-pointer w-fit ${selectedTags &&
       selectedTags.some((item) => item.name === tag.name)
            ? 'bg-white text-black'
            : 'text-white'}`}
        onClick={() => handleSelectTag(tag)}
        >
          <div
            className={`w-6 h-6 rounded-full border border-gray-700 ${tag.color}`}
          ></div>
          <p>{tag.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default TagsFilterBar;
