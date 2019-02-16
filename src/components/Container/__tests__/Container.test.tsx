import { render } from 'react-testing-library'
import React = require('react')
import Container from '../Container'

describe('Container', () => {
  test('should render default state container', () => {
    const wrapper = render(<Container />)

    expect(wrapper.container.textContent).toBe('+ Add Group')
  })
})
