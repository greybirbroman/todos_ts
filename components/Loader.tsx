'use client';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <Circles
        height='80'
        width='80'
        color='#674EAE'
        ariaLabel='circles-loading'
        visible={true}
      />
    </div>
  );
};

export default Loader;
