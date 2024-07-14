'use client'
import { useItems } from '../context/ItemsContext'
import ItemCard from './ItemCard'

export default function ItemList () {
  // Use the custom hook to get the items list and the selected item index from the context
  const { items, selectedItemIndex, removeItem, selectItem } = useItems()

  return (
    <section className='w-full max-w-lg mt-20'>
      <ul role='list'>
        {
          items.length === 0 && (
            <p className='text-center'>Not items yet</p>
          )
        }
        {/* Map through the items list and render each item */}
        {items.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
            index={index}
            isSelected={selectedItemIndex === index}
            onSelect={selectItem}
            onRemove={removeItem}
          />
        ))}
      </ul>
    </section>
  )
}
