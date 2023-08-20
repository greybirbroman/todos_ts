'use client'
import { Circles } from 'react-loader-spinner';
import ModalOverlay from '../components/ModalOverlay';

const Loader = () => {
  return (
    <>
      <ModalOverlay customBg='bg-black/20'/>
      <div className='relative w-full h-screen flex items-center justify-center'>
        <Circles
          height="80"
          width="80"
          color="#674EAE"
          ariaLabel="circles-loading"
          visible={true}
        />

      </div>
     
    </>
  );
};

export default Loader;