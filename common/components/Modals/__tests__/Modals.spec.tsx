import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { BaseModal } from '../BaseModal';

it('should render', () => {
  const { asFragment } = render(<BaseModal isOpen>Some modal</BaseModal>);

  expect(asFragment()).toMatchSnapshot();
});

it('should call the dismiss modal handler on click', () => {
  const onClick = jest.fn();

  render(
    <BaseModal isOpen onDismiss={onClick}>
      A Modal
    </BaseModal>,
  );

  fireEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalled();
});
