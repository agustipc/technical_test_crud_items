import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AppButton from './AppButton'

describe('AppButton', () => {
  it('should render the button with the correct text', () => {
    render(<AppButton title='Submit' />)

    const buttonElement = screen.getByRole('button', { name: /submit/i })
    expect(buttonElement).toBeInTheDocument()
  })
})
