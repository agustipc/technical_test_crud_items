'use client'

import { createContext, useState, useContext, useCallback } from 'react'
import { type Item, type ItemsContextType } from '../lib/definitions'

// Create a default value for the context
const defaultValue: ItemsContextType = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  selectedItemIndex: null,
  selectItem: () => {}
}

// Create the context
const ItemsContext = createContext(defaultValue)

// Create a custom hook to use the context in a component
export const useItems = () => useContext(ItemsContext)

// Create a provider to wrap the application with the context which will have the state functions
export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  // Create the state for the items list and the selected item index(default is null)
  const [items, setItems] = useState<Item[]>([])
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)

  // Create the functions to add an item, that will add a new list Item object
  // Here we use the useCallback hook to memoize the function and avoid unnecessary re-renders
  const addItem = useCallback((newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem])
  }, [])

  // Create the function to remove an item, that will remove the item from the list and update the selected item index
  // Passing the selectedItemIndex as a dependency in this case is necessary to update the function accordingly to the selected item
  const removeItem = useCallback((index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index))

    // If the selectedItemIndex is equal to the on that's being remove its turned to null
    // If the selectedItemIndex is greater than the one that's being remove it's decremented by 1 to match the new position
    if (selectedItemIndex === index) {
      setSelectedItemIndex(null)
    } else if (selectedItemIndex !== null && selectedItemIndex > index) {
      setSelectedItemIndex((prevIndex) => prevIndex !== null ? prevIndex - 1 : null)
    }
  }, [selectedItemIndex])

  // Create the function to select or deselect an item
  const selectItem = useCallback((index: number) => {
    setSelectedItemIndex((prevSelectedItemIndex) => (prevSelectedItemIndex === index ? null : index))
  }, [])

  return (
    <ItemsContext.Provider value={{ items, selectedItemIndex, addItem, removeItem, selectItem }}>
      {children}
    </ItemsContext.Provider>
  )
}
