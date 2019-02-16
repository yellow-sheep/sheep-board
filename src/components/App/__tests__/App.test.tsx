import * as React from 'react'
import { render, fireEvent, waitForElement } from 'react-testing-library'

import App from '../App'

/**
 * Just a simple integration tests
 */

test('App Component renders', () => {
  const wrap = render(<App />)

  expect(wrap.getByTestId('toggle-container')).toBeTruthy()
  expect(wrap.getByTestId('toggle-container').textContent).toBe(
    '+ Add Container'
  )
})
