import { useState } from 'react';

type UseDisclosureProps = {
  isOpen?: boolean;
};

const useDisclosure = (props: UseDisclosureProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen || false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export { useDisclosure };
