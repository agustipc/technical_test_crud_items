import { useState } from 'react'
import { type Item, type ItemErrors } from '../lib/definitions'
import { formValidation } from '../lib/utils'
import { useItems } from '../context/ItemsContext'

const useForm = () => {
  const { addItem } = useItems()
  const [item, setItem] = useState<Item>({ title: '', description: '' })
  const [errors, setErrors] = useState<ItemErrors>({ title: null, description: null })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (errors.title === null && errors.description === null) {
      addItem(item)
      setItem({ title: '', description: '' })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const error = formValidation(name, value)

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }))
    setItem((prevItem) => ({ ...prevItem, [name]: value }))
  }

  return { item, errors, handleChange, handleSubmit }
}

export default useForm
