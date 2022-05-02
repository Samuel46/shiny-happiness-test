import React, { useEffect, useRef } from 'react';

type UseModalProps = {
  isOpen?: boolean;
};

const useModal = (props: UseModalProps) => {
  const documentRef = useRef<HTMLBodyElement>();

  if (documentRef.current) {
    if (props.isOpen) {
      documentRef.current.style.overflow = 'hidden';
    } else {
      documentRef.current.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    const bodyElement = document.querySelector('body');

    if (bodyElement) {
      documentRef.current = bodyElement;
    }
  }, []);

  return {
    documentRef,
  };
};

export { useModal };
