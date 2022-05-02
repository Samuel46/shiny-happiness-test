import React, { FC } from 'react';

import styles from '../../../styles/Modals.module.css';

const ModalBody: FC = (props) => {
  return <div className={styles.modalBody}>{props.children}</div>;
};

export { ModalBody };
