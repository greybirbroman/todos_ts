import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  type,
  onClick,
  title,
  customClass,
  disabled,
  imageSrc,
}: CustomButtonProps) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`${customClass}`}
      disabled={disabled}
    >
      {title}
      {imageSrc && 
      <div className='relative w-6 h-6'>
          <Image src={imageSrc} alt='Button Image' fill className='object-contain'/>
      </div>
      }
    </button>
  );
};

export default CustomButton;
