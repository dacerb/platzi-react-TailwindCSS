import { useState, useEffect } from "react"

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

const Home = () => {
  
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error))
  }, [])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
            products?.map(product => (
              <Card  key={product.id} {...product}/>
          ))
        }  
      </div> 

      <ProductDetail/>
    
    </Layout>
  )
}

export default Home