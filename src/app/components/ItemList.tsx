'use client'
import { useItems } from '../context/ItemsContext'
import { FaTrash } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

export default function ItemList () {
  // Use the custom hook to get the items list and the selected item index from the context
  const { items, selectedItemIndex, removeItem, selectItem } = useItems()

  return (
    <section className='w-full max-w-lg mt-20'>
      <ul>
        {
          items.length === 0 && (
            <p className='text-center'>Not items yet</p>
          )
        }
        {/* Map through the items list and render each item */}
        {items.map((item, index) => (
          <li
            key={index}
            className='my-4 flex flex-row gap-4 items-center'
            onClick={() => { selectItem(index) }}
          >
            <div className='max-w-md w-full p-4 flex flex-col bg-[#f5f5f5] hover:bg-white text-gray-900 rounded-lg transition-transform duration-300 ease-in-out hover:scale-[1.01] cursor-pointer'>
              <header className='flex flex-row justify-between items-center'>
                <h1 className='text-lg w-full break-words'>{item.title}</h1>
                <IoIosArrowForward size={24} className={`transition-transform duration-300 ${selectedItemIndex === index ? 'transform rotate-90' : ''}`} />
              </header>
              {selectedItemIndex === index && <p className='break-words text-gray-500 italic mt-2'>{item.description}</p>}
            </div>
            <button
              onClick={(e) => {
                // Prevent the event to propagat to the parent element if not this would trigger the selectItem function
                e.stopPropagation()
                removeItem(index)
              }
              }
              className="text-gray-900 hover:bg-red-700 transition-colors bg-red-500 p-4 rounded-full"
            >
              <FaTrash size={20} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
