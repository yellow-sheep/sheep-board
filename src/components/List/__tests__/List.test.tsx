import { render, cleanup, fireEvent } from 'react-testing-library';
import React = require('react');
import List from '../List';
import 'jest-dom/extend-expect';

describe('Container', () => {
  afterEach(cleanup);
  test('should render default state container', () => {
    const wrapper = render(<List />);

    expect(wrapper.queryAllByPlaceholderText(/enter title.../i)).toBeTruthy();
    expect(wrapper.container.textContent).toBe('Add Card');
  });

  test('should render a new card on click', () => {
    const wrapper = render(<List />);
    const inputBox = wrapper.getByPlaceholderText(/enter title.../i);
    const submitButton = wrapper.getByText(/Add Card/i);

    fireEvent.change(inputBox, { target: { value: 'new title' } });
    fireEvent.click(submitButton);

    expect(wrapper.queryByText('new title')).toBeInTheDocument();
  });
});
