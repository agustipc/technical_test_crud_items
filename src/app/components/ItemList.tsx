'use client'
import { useItems } from '../context/ItemsContext'
import { FaTrash } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

export default function ItemList () {
  const { items, selectedItemIndex, removeItem, selectItem } = useItems()

  return (
    <section className='w-full max-w-lg mt-20'>
      <ul>
        {
          items.length === 0 && (
            <p className='text-center'>Not items yet</p>
          )
        }
        {items.map((item, index) => (
          <li
            key={index}
            className='my-4 flex flex-row gap-4 items-center'
            onClick={() => { selectItem(index) }}
          >
            <div className='w-full p-4 flex flex-col bg-[#f5f5f5] hover:bg-white text-gray-900 rounded-lg transition-transform duration-300 ease-in-out hover:scale-[1.01] cursor-pointer'>
              <header className='flex flex-row justify-between items-center'>
                <h1 className='text-lg'>{item.title}</h1>
                <IoIosArrowForward size={24} className={`transition-transform duration-300 ${selectedItemIndex === index ? 'transform rotate-90' : ''}`} />
              </header>
              {selectedItemIndex === index && <p className='text-gray-500 italic mt-2'>{item.description}</p>}
            </div>
            <button
              onClick={() => { removeItem(index) }}
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
