import { renderHook, act } from '@testing-library/react'
import { ItemsProvider } from '../context/ItemsContext'
import useForm from './useForm'

describe('useForm', () => {
  it('should handle form state and validation', () => {
    // Define a wrapper to provide the context to the hook
    const wrapper = ({ children }: { children: React.ReactNode }) => <ItemsProvider>{children}</ItemsProvider>
    const { result } = renderHook(() => useForm(), { wrapper })

    // Simulate a change event for the title input
    act(() => {
      const event = {
        target: { name: 'title', value: 'Test Title' },
        currentTarget: { name: 'title', value: 'Test Title' },
        preventDefault: () => {}
      } as unknown as React.ChangeEvent<HTMLInputElement>

      result.current.handleChange(event)
    })

    expect(result.current.item.title).toBe('Test Title')
    expect(result.current.errors.title).toBeNull()

    // Simulate the form submit event
    act(() => {
      const event = {
        preventDefault: () => {},
        target: document.createElement('form'),
        currentTarget: document.createElement('form')
      } as unknown as React.FormEvent<HTMLFormElement>

      result.current.handleSubmit(event)
    })

    expect(result.current.item.title).toBe('')
    expect(result.current.item.description).toBe('')
  })
})
