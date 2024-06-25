import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListButton from '../../components/ListButtons';

describe('DutyList', () => {
  it('renders the list of duties', () => {
    render(
      <ListButton
        selectedItem={{ name: 'test', done: false, deleted: false }}
      />,
    );
    expect(screen.getAllByRole('img').length).toBe(3); // Updated assertion
  });

});
