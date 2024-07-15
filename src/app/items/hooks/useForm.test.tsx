import { renderHook, act } from '@testing-library/react'
import { ItemsProvider } from '../context/ItemsContext'
import useForm from './useForm'

describe('useForm', () => {
  it('should handle form state and validation', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <ItemsProvider>{children}</ItemsProvider>
    const { result } = renderHook(() => useForm(), { wrapper })

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
