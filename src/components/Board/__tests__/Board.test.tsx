import * as React from 'react'
import { render } from 'react-testing-library'
import Board from '../Board'

describe('Board', () => {
  test('should render correctly with default settings', () => {
    const wrapper = render(<Board />)

    expect(wrapper.container.textContent).toBe('+ Add List')
  })
})
