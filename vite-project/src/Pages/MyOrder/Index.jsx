import { useContext } from 'react'
import {Link } from 'react-router-dom'
import { ChevronLeftIcon} from '@heroicons/react/24/solid'
import Layout from "../../Components/Layout"
import { ShoppingCartContex } from '../../Context'
import OrderCard from '../../Components/OrderCard'

const MyOrder = () => {
  const context = useContext(ShoppingCartContex)
  const currentPath = window.location.pathname
  const index_subtring = currentPath.lastIndexOf('/') +1
  let index = currentPath.substring(index_subtring)
  if (index === 'last') index = context.order?.length -1


  // console.log(context.order)
  
  return (
    <Layout>
      
          <div className='flex  items-center justify-center w-80 relative mb-10'>
                    <Link to='/my-orders' className='absolute left-0'>
                      <ChevronLeftIcon className="h-6 w-6 text-black-500 cursor-pointer"/>
                    </Link>
                    <h1>MyOrders</h1>            
                  </div>
          <div className='flex flex-col w-80'>
          {
            //context.order?.slice(-1)[0].products.map( product => {
            context.order?.[index]?.products.map( product => {
            //context.order?.[index].products.map( product => {
              const {id, title, price, images} = {...product}
                return  <OrderCard
                          key={id}
                          id={id}
                          title={title}
                          price={price}
                          images={images}
                  />
              }) 
          }
        </div>
    </Layout>
  )
}

export default MyOrder