import * as React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Board from '../Board';

describe('Board', () => {
  afterEach(cleanup);
  test('should render correctly with default settings', () => {
    const wrapper = render(<Board />);

    expect(wrapper.container.textContent).toBe('Add List');
  });

  test('should display a list on click', () => {
    const wrapper = render(<Board />);
    const addListButton = wrapper.getByText(/^Add List$/i);

    fireEvent.click(addListButton);

    expect(wrapper.queryByPlaceholderText(/enter title.../i)).toBeTruthy();
    expect(wrapper.queryByText(/^Add Card$/i)).toBeTruthy();
  });
});
