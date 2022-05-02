import React, { FC } from 'react';

import styles from '../../../styles/Modals.module.css';

type BaseModalProps = {
  modalTitle?: string;
};

const ModalHeader: FC<BaseModalProps> = (props) => {
  return (
    <div className={styles.modalHeader}>
      {props.modalTitle && (
        <div className={styles.modalHeaderTitle}>{props.modalTitle}</div>
      )}
      {props.children}
    </div>
  );
};

export { ModalHeader };
