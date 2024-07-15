import { IoIosArrowForward } from 'react-icons/io'
import { type ListItem } from '../../lib/definitions'
import { FaTrash } from 'react-icons/fa'

export default function ItemCard ({ item, index, isSelected, onSelect, onRemove }: ListItem) {
  return (
    <li
      key={index}
      className='my-4 flex flex-row gap-4 items-center'
      onClick={() => { onSelect(index) } }
      role='listitem'
      aria-expanded={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(index)
        }
      }}
    >
      <div className='max-w-md w-full p-4 flex flex-col bg-[#f5f5f5] hover:bg-white text-gray-900 rounded-lg transition-transform duration-300 ease-in-out hover:scale-[1.01] cursor-pointer'>
        <header className='flex flex-row justify-between items-center'>
          <h1 className='text-lg w-full break-words' aria-label={`Item ${index + 1}: ${item.title}`}>{item.title}</h1>
          <IoIosArrowForward size={24} className={`transition-transform duration-300 ${isSelected ? 'transform rotate-90' : ''}`} />
        </header>
        {isSelected && <p className='break-words text-gray-500 italic mt-2'>{item.description}</p>}
      </div>
      <button
        onClick={(e) => {
          // Prevent the event to propagat to the parent element if not this would trigger the selectItem function
          e.stopPropagation()
          onRemove(index)
        }
        }
        aria-label={`Remove ${item.title}`}
        className="text-white hover:bg-red-700 hover:scale-110 transition-all ease-in-out duration-300 bg-red-500 p-4 rounded-full"
      >
        <FaTrash size={20} />
      </button>
    </li>
  )
}
