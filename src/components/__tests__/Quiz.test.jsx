import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Quiz from '../Quiz'

test('complete quiz and receive a recommendation', async () => {
  render(<Quiz />)
  const user = userEvent.setup()

  // For brevity, pick the first option every time to ensure Florence is recommended
  for (let i = 0; i < 4; i++) {
    const buttons = await screen.findAllByRole('button')
    await user.click(buttons[0])
  }

  // Expect recommended destination text
  const recommended = await screen.findByText(/Florence — 1504/i)
  expect(recommended).toBeInTheDocument()
  const explanation = screen.getByText(/Renaissance creativity/i)
  expect(explanation).toBeInTheDocument()
})
