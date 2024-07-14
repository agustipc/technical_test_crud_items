// typescript type definitions

export interface Item {
  title: string
  description: string
}

export interface ItemErrors {
  title: string | null
  description: string | null
}

export interface ItemsContextType {
  items: Item[]
  addItem: (newItem: Item) => void
  removeItem: (index: number) => void
  selectedItemIndex: number | null
  selectItem: (intex: number) => void
}
