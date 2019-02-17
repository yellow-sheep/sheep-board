import { render, cleanup } from 'react-testing-library';
import * as React from 'react';
import 'jest-dom/extend-expect';
import { InputBox } from '../InputBox';

describe('InputBox', () => {
  afterEach(cleanup);
  test('should render correctly with no props', () => {
    const wrapper = render(<InputBox />);

    expect(wrapper.container).toMatchSnapshot();
  });

  test('should render text when passed as props', () => {
    const wrapper = render(<InputBox text="test text" />);

    expect(wrapper.container).toMatchSnapshot();
  });

  test('should render placeholder text correctly when passed as props', () => {
    const wrapper = render(<InputBox placeholder="enter title..." />);

    expect(
      wrapper.queryByPlaceholderText('enter title...')
    ).toBeInTheDocument();
  });
});
