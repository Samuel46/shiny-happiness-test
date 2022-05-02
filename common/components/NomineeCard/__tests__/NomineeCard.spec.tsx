import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { NomineeType } from '../../../hooks/useBallotsGet/types';

import { NomineeCard } from '../NomineeCard';

const mockNomineeData: NomineeType = {
  id: '1',
  title: 'Nominee',
  photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
};

it('should render', () => {
  const { asFragment } = render(<NomineeCard nominee={mockNomineeData} />);

  expect(asFragment()).toMatchSnapshot();
});

it('should call the select Nominee handler on click', () => {
  const onClick = jest.fn();

  render(<NomineeCard nominee={mockNomineeData} onSelectNominee={onClick} />);

  fireEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalled();
});
