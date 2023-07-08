import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContex } from '../../Context'
import OrderCard from '../OrderCard'

import './styles.css'


const CheckoutSiteMenu = () => {

  const context = useContext(ShoppingCartContex)

  return (
    <aside 
        className={`${context.isCheckoutSiteMenuOpen ? 'flex': 'hidden'  } product-detail flex-col fixed right-0 border border-black rounded-lg bg-zinc-50`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div 
                onClick={() => context.closeCheckoutSiteMenu()}>
                <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer"/>
            </div>
        </div>
        
        <div className='px-6'>
          {
            context.cartProducts.map( product => {
              
              const {id, title, price, images} = {...product}
              
              return  <OrderCard
                        key={id}
                          title={title}
                          price={price}
                          images={images}/>
              })
          }
        </div>
    </aside>
  )
}

export default CheckoutSiteMenu