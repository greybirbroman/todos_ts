'use client';
import { useState } from 'react';
import { priorityOptions } from '@/utils/contsants';
import { getColorByPriority } from '@/utils/functions';
import { usePriorityBarContext } from '@/utils/context/PriorityBarConext';
import CustomButton from './CustomButton';

const PriorityFilterBar = () => {
  const {
    state: { handleSelect, priorityOnFilter },
  } = usePriorityBarContext();

  return (
    <ul className='flex max-sm:flex-wrap gap-2 text-gray-700'>
      {priorityOptions.map((item) => (
        <li key={item}>
          <CustomButton
            title={item}
            onClick={() => handleSelect(item)}
            imageSrc={item === 'rapid' ? '/flash.png' : ''}
            customClass={`${
              priorityOnFilter === item
                ? getColorByPriority(item)
                : 'bg-white/50'
            } ${
              item === 'rapid' ? 'text-white font-semibold flex gap-2 items-center' : ''
            } py-2 px-5 h-full rounded-xl capitalize hover:scale-105 duration-300 hover:text-white`}
          />
        </li>
      ))}
    </ul>
  );
};

export default PriorityFilterBar;
