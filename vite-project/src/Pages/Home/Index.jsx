import { useContext } from "react"

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContex } from '../../Context'


const Home = () => {
  const context = useContext(ShoppingCartContex)

  const renderView = () => {
      if (context.filteredProducts?.length > 0) {
        return context.filteredProducts?.map(product => (
          <Card  key={product.id} {...product}/>
        ))
      } else {
        return (
          <div className="flex items-center justify-center relative w-80 mb-4">
            <h2 className='font-medium text-xl'>We Don't Have Anything</h2>
          </div>
        )
      }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Seach a product" 
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSeachByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          renderView()
        }  
      </div> 

      <ProductDetail/>
    
    </Layout>
  )
}

export default Home