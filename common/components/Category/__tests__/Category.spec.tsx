import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { BallotsItemType } from '../../../hooks/useBallotsGet/types';

import { Category } from '../Category';

const mockBallotData: BallotsItemType = {
  id: '1',
  title: 'Category 1',
  items: [
    {
      id: '1',
      title: 'Nominee',
      photoUrL:
        'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
    },
  ],
};

it('should render', () => {
  const { asFragment } = render(
    <Category ballot={mockBallotData} onSelectNominee={() => {}} />,
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should call the select nominee handler on click', () => {
  const onClick = jest.fn();

  render(<Category ballot={mockBallotData} onSelectNominee={onClick} />);

  fireEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalled();
});
