import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDoInput from '../../components/ToDoInput';

describe('DutyList', () => {
  it('renders the list of duties', () => {
    render(<ToDoInput onAdd={() => {}} />);
    expect(screen.getByPlaceholderText('Insert a new ToDo')).toBeInTheDocument(); // Updated assertion
  });

  it('renders the button', () => {
    render(<ToDoInput onAdd={() => {}} />);
    expect(screen.getByText('Add')).toBeInTheDocument();
  });
});
