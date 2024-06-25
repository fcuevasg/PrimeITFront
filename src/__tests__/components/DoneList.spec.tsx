import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import DutyList from '../../components/DutyList';
import { Duty } from '../../interfaces/Duty';
import '@testing-library/jest-dom';
import DoneList from '../../components/DoneList';

const mockDuties: Duty[] = [
  { id: 1, name: 'Duty 1', done: true, deleted: false },
  { id: 2, name: 'Duty 2', done: true, deleted: false },
];

describe('DutyList', () => {
  it('renders the list of duties', () => {
    render(
      <DoneList
        Duty={mockDuties}
        loading={false}
        selectedItem={mockDuties[0]}
      />,
    );
    expect(screen.getByText('Duty 1')).toBeInTheDocument(); // Updated assertion
    expect(screen.getByText('Duty 2')).toBeInTheDocument(); // Updated assertion
  });

  it('renders no data state', () => {
    render(<DutyList Duty={[]} loading={false} selectedItem={mockDuties[0]} />);
    expect(screen.getByText('No data')).toBeInTheDocument();
  });
});
