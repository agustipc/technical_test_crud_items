import ItemList from './items/components/ItemList/ItemList'
import { ItemsProvider } from './items//context/ItemsContext'
import ItemForm from './items/components/ItemForm/ItemForm'

export default function Home () {
  return (
    <ItemsProvider>
      <main className="flex flex-col min-h-screen items-center p-24">
        <div className='mb-8 flex flex-col items-center'>
          <h1 className='text-3xl'>TECHNICAL TEST</h1>
          <h2 className='text-xl'>CRUD - NextJS form</h2>
        </div>
        <ItemForm/>
        <ItemList/>
      </main>
    </ItemsProvider>
  )
}
