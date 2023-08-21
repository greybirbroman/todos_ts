import { ReactNode, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
  wrapperId: string;
}

const createWrapper = (wrapperId: string) => {
  if (!document) return null;
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const ModalPortal = ({ children, wrapperId }: ModalPortalProps) => {
  const [wrapperElement, setWrapperEllement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapper(wrapperId);
    }
    setWrapperEllement(element!);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default ModalPortal;
