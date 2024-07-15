import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { ItemsProvider, useItems } from './ItemsContext'
import { type Item } from '../../lib/definitions'

describe('ItemsContext', () => {
  it('should add an item', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <ItemsProvider>{children}</ItemsProvider>
    const { result } = renderHook(() => useItems(), { wrapper })

    const newItem: Item = { title: 'Test Item', description: 'This is a test item' }

    act(() => {
      result.current.addItem(newItem)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0]).toEqual(newItem)
  })

  it('should remove an item', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <ItemsProvider>{children}</ItemsProvider>
    const { result } = renderHook(() => useItems(), { wrapper })

    const newItem1: Item = { title: 'Test Item 1', description: 'This is a test item 1' }
    const newItem2: Item = { title: 'Test Item 2', description: 'This is a test item 2' }

    act(() => {
      result.current.addItem(newItem1)
      result.current.addItem(newItem2)
    })

    expect(result.current.items).toHaveLength(2)

    act(() => {
      result.current.removeItem(0)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0]).toEqual(newItem2)
  })

  it('should select and deselect an item', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <ItemsProvider>{children}</ItemsProvider>
    const { result } = renderHook(() => useItems(), { wrapper })

    const newItem: Item = { title: 'Test Item', description: 'This is a test item' }

    act(() => {
      result.current.addItem(newItem)
    })

    expect(result.current.selectedItemIndex).toBeNull()

    act(() => {
      result.current.selectItem(0)
    })

    expect(result.current.selectedItemIndex).toBe(0)

    act(() => {
      result.current.selectItem(0)
    })

    expect(result.current.selectedItemIndex).toBeNull()
  })
})
