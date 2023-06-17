import { useState, useEffect } from "react"

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
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
      Home
      {
        /*
            Utilizando return
            products?.map(() => {
            return <Card />
          })
          Y sin... return
        */
          
          products?.map(products => (
            <Card key={data.id} {...products} />
          ))
      }
    </Layout>
  )
}

export default Home