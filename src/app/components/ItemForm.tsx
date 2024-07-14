'use client'

import useForm from '../hooks/useForm'
import AppButton from './AppButton'

export default function ItemForm () {
  const { item, errors, handleChange, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 bg-white rounded-lg" aria-labelledby="form-title" aria-describedby='form-instructions'>
      <h2 id="form-title" className="text-lg font-medium text-gray-900 mb-2">Add a New Item</h2>
      <p id="form-instructions" className="text-xs text-gray-600 mb-4">
        Please fill out the form below to add a new item. All fields are required.
      </p>
      <hr className='mb-8'/>

      <fieldset>
        <legend className="sr-only">Item Details</legend>
        <div className='mb-6'>
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
            aria-describedby="title-error"
            aria-label='Item Name'
            required
          />
          <div className="relative">
            <span
              id="title-error"
              aria-live="assertive"
              className={`absolute text-red-500 text-xs ${errors.title !== null ? 'visible' : 'invisible'}`}
              role={errors.title !== null ? 'alert' : undefined}
            >
              {errors.title}
            </span>
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
            aria-describedby="description-error"
            aria-label='Item Description'
            required
          />
          <div className="relative">
            <span
              id="description-error"
              aria-live="assertive"
              className={`absolute text-red-500 text-xs ${errors.description !== null ? 'visible' : 'invisible'}`}
              role={errors.description !== null ? 'alert' : undefined}
            >
              {errors.description}
            </span>
          </div>
        </div>
      </fieldset>
      <AppButton title='Add Item' />
    </form>
  )
}
