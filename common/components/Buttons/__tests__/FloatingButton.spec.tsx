import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { FloatingButton } from '../FloatingButton';

it('should render', () => {
  const { asFragment } = render(
    <FloatingButton onClick={() => {}}>A Unique Button</FloatingButton>,
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should call the handler on click', () => {
  const onClick = jest.fn();

  render(
    <FloatingButton onClick={onClick}>Another Unique Button</FloatingButton>,
  );

  fireEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalled();
});
