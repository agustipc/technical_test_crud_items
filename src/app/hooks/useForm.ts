import { useState } from 'react'
import { type Item, type ItemErrors } from '../lib/definitions'
import { formValidation } from '../lib/utils'
import { useItems } from '../context/ItemsContext'

// Create a custom hook to handle the form state and validation
const useForm = () => {
  const { addItem } = useItems()
  const [item, setItem] = useState<Item>({ title: '', description: '' })
  const [errors, setErrors] = useState<ItemErrors>({ title: null, description: null })

  // Handle the form submit event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (errors.title === null && errors.description === null) {
      // Call the function of the context to add a new item
      addItem(item)
      // Reset the form state
      setItem({ title: '', description: '' })
    }
  }

  // Handle the form input change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    // Validate the input value
    const error = formValidation(name, value)

    // Update the form state and errors
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }))
    setItem((prevItem) => ({ ...prevItem, [name]: value }))
  }

  return { item, errors, handleChange, handleSubmit }
}

export default useForm
