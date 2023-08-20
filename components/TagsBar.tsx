import { useTagsBarContext } from '@/utils/context/TagsBarContext';

const TagsBar = () => {
  const {
    state: { tags, selectedTagsInModal, handleSelectTagInModal },
  } = useTagsBarContext();

  return (
    <div className='flex gap-2 w-full'>
      <span>Tags: </span>
      <ul className='flex flex-wrap gap-2 items-center'>
        {tags.map((tag) => (
          <li
            key={tag.name}
            className={`w-fit gap-2 px-5 py-2 rounded-lg cursor-pointer text-gray-900 hover:scale-105 duration-300 ${
              selectedTagsInModal &&
              selectedTagsInModal.some((item) => item.name === tag.name)
                ? `${tag.color}`
                : 'bg-slate-100'
            }`}
            onClick={() => handleSelectTagInModal(tag)}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsBar;
