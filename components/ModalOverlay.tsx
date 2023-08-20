import { ModalProps } from './ModalWindow';

interface ModalOverlatProps {
    onClose?: () => void;
    customBg: string;
}

const ModalOverlay = ({ onClose, customBg }: ModalOverlatProps) => {
  return (
    <div className={`fixed inset-0 ${customBg} z-20`} onClick={onClose}></div>
  );
};

export default ModalOverlay;
