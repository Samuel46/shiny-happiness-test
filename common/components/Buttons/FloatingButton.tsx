import React, { ButtonHTMLAttributes, FC } from 'react';

import styles from '../../../styles/Buttons.module.css';

type FloatingButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton: FC<FloatingButtonProps> = (props) => (
  <div className={styles.floatingButtonContainer}>
    <button type="button" className={styles.floatingButton} {...props}>
      {props.children}
    </button>
  </div>
);

export { FloatingButton };
