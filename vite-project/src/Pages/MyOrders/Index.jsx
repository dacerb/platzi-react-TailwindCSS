import { useContext } from 'react'
import {Link } from 'react-router-dom'
import Layout from "../../Components/Layout"
import { ShoppingCartContex } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

const MyOrders = () => {
  const context = useContext(ShoppingCartContex)

  return (
    <Layout>
      MyOrders
      {
        context.order.map((order, index) => {
          return <Link to={`/my-orders/${order.id}`}>
             <OrdersCard 
              key={index}
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}
              />
          </Link>
        })
      }
    </Layout>
  )
}

export default MyOrders