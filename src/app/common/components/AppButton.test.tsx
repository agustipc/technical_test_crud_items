import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AppButton from './AppButton'

describe('AppButton', () => {
  it('should render the button with the correct text', () => {
    render(<AppButton title='Submit' />)

    // Get the button element by its role and name (using case-insensitive regex)
    const buttonElement = screen.getByRole('button', { name: /submit/i })
    expect(buttonElement).toBeInTheDocument()
  })
})
