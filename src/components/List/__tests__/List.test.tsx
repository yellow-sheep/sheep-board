import { render } from 'react-testing-library';
import React = require('react');
import List from '../List';

describe('Container', () => {
  test('should render default state container', () => {
    const wrapper = render(<List />);

    expect(wrapper.container.textContent).toBe('Add Card');
  });
});
