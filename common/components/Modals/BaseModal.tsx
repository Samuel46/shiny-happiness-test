import React, { FC } from 'react';

import styles from '../../../styles/Modals.module.css';
import { useModal } from '../../hooks/useBaseModal';

type BaseModalProps = {
  isOpen: boolean;
  onDismiss?: () => void;
};

const BaseModal: FC<BaseModalProps> = (props) => {
  useModal({ isOpen: props.isOpen });

  return props.isOpen ? (
    <div className={styles.baseModalWrapper}>
      <div className={styles.baseModalContainer}>
        {!!props.onDismiss && (
          <div className={styles.dismissModalButtonContainer}>
            <button
              type="button"
              onClick={props.onDismiss}
              className={styles.dismissModalButton}
            >
              Close
            </button>
          </div>
        )}
        {props.children}
      </div>
    </div>
  ) : null;
};

export { BaseModal };
