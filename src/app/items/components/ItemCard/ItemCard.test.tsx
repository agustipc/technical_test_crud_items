import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ItemCard from './ItemCard'
import { type ListItem } from '@/app/lib/definitions'

// Mock item data to be used in the tests
const mockItem: ListItem = {
  item: {
    title: 'Test Item',
    description: 'This is a test item'
  },
  index: 0,
  isSelected: false,
  onSelect: jest.fn(),
  onRemove: jest.fn()
}

describe('ItemCard', () => {
  it('should render the item card with the correct title', () => {
    render(<ItemCard {...mockItem} />)

    // Get the title element by its text content (using case-insensitive regex)
    const titleElement = screen.getByText(/Test item/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render the item card with the correct description', () => {
    // set the isSelected property to true to show the description
    mockItem.isSelected = true
    render(<ItemCard {...mockItem} />)

    // Get the description element by its text content (using case-insensitive regex)
    const descriptionElement = screen.getByText(/This is a test item/i)
    expect(descriptionElement).toBeInTheDocument()
  })

  it('should call the select function when the item card is clicked', () => {
    render(<ItemCard {...mockItem} />)

    // Get the item card element by its role
    const cardElement = screen.getByRole('listitem')
    // Simulate a click event on the item card
    fireEvent.click(cardElement)
    expect(mockItem.onSelect).toHaveBeenCalledWith(0)
  })

  it('should call the delete function when the delete button is clicked', () => {
    render(<ItemCard {...mockItem} />)

    // Get the delete button element by its role and name (using case-insensitive regex)
    const deleteButtonElement = screen.getByRole('button', { name: /remove test item/i })
    // Simulate a click event on the delete button
    fireEvent.click(deleteButtonElement)
    expect(mockItem.onRemove).toHaveBeenCalledWith(0)
  })
})
