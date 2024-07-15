// typescript type definitions

export interface Item {
  title: string
  description: string
}

export interface ItemErrors {
  title: string | null
  description: string | null
}

export interface ListItem {
  item: Item
  index: number
  isSelected: boolean
  onSelect: (index: number) => void
  onRemove: (index: number) => void
}

export interface ItemsContextType {
  items: Item[]
  addItem: (newItem: Item) => void
  removeItem: (index: number) => void
  selectedItemIndex: number | null
  selectItem: (intex: number) => void
}
