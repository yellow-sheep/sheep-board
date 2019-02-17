import * as React from 'react';
import { render } from 'react-testing-library';
import Card from '../Card';

describe('Card', () => {
  test('should render with title props', () => {
    const wrapper = render(<Card title="card title" />);

    expect(wrapper.queryByText('card title')).toBeTruthy();
  });
});
