import React, { FC } from 'react';

import styles from '../../../styles/Modals.module.css';

const ModalFooter: FC = (props) => {
  return <div className={styles.modalFooter}>{props.children}</div>;
};

export { ModalFooter };
