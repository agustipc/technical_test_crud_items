import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ItemCard from './ItemCard'
import { type ListItem } from '@/app/lib/definitions'

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
    const titleElement = screen.getByText(/Test item/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render the item card with the correct description', () => {
    mockItem.isSelected = true
    render(<ItemCard {...mockItem} />)

    const descriptionElement = screen.getByText(/This is a test item/i)
    expect(descriptionElement).toBeInTheDocument()
  })

  it('should call the select function when the item card is clicked', () => {
    render(<ItemCard {...mockItem} />)
    const cardElement = screen.getByRole('listitem')
    fireEvent.click(cardElement)
    expect(mockItem.onSelect).toHaveBeenCalledWith(0)
  })

  it('should call the delete function when the delete button is clicked', () => {
    render(<ItemCard {...mockItem} />)
    const deleteButtonElement = screen.getByRole('button', { name: /remove test item/i })
    fireEvent.click(deleteButtonElement)
    expect(mockItem.onRemove).toHaveBeenCalledWith(0)
  })
})
