'use client'

import { createContext, useState, useContext } from 'react'
import { type Item, type ItemsContextType } from '../lib/definitions'

const defaultValue: ItemsContextType = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  selectedItemIndex: null,
  selectItem: () => {}
}

const ItemsContext = createContext(defaultValue)

export const useItems = () => useContext(ItemsContext)

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([])
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)

  const addItem = (newItem: Item) => { setItems((prevItems) => [...prevItems, newItem]) }

  const removeItem = (index: number) => { setItems((prevItems) => prevItems.filter((_, i) => i !== index)) }

  const selectItem = (index: number) => { setSelectedItemIndex(selectedItemIndex === index ? null : index) }

  return (
    <ItemsContext.Provider value={{ items, selectedItemIndex, addItem, removeItem, selectItem }}>
      {children}
    </ItemsContext.Provider>
  )
}
