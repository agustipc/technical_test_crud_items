'use client'

import useForm from '../hooks/useForm'
import AppButton from './AppButton'

export default function ItemForm () {
  const { item, errors, handleChange, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 bg-white rounded-lg">
      <div className="mb-6">
        <label htmlFor="title" className="text-sm text-gray-700">
          Item Name
        </label>
        <input
          className={`mt-2 w-full border-b text-gray-900 placeholder-gray-500 p-2 focus:outline-none ${errors.title !== null ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-teal-700'}`}
          id="title"
          type="text"
          name="title"
          placeholder="Enter your item name"
          onChange={handleChange}
          value={item.title}
          required
        />
        <div className="relative">
          <span className={`absolute text-red-500 text-xs  ${errors.title !== null ? 'visible' : 'invisible'}`}>{errors.title}</span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="text-sm text-gray-700">
          Description
        </label>
        <input
          className={`mt-2 w-full border-b text-gray-900 placeholder-gray-500 p-2 focus:outline-none ${errors.description !== null ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-teal-700'}`}
          id="description"
          type="text"
          name="description"
          placeholder="Enter your item description"
          onChange={handleChange}
          value={item.description}
          required
        />
        <div className="relative">
          <span className={`absolute text-red-500 text-xs  ${errors.description !== null ? 'visible' : 'invisible'}`}>{errors.description}</span>
        </div>
      </div>
      <AppButton title='Add Item'/>
    </form>
  )
}
