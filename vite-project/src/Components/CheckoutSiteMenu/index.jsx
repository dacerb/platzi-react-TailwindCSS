import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { totalPrice } from '../../utils'
import { ShoppingCartContex } from '../../Context'
import OrderCard from '../OrderCard'

import './styles.css'


const CheckoutSiteMenu = () => {

  const context = useContext(ShoppingCartContex)


  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

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
        <div className='px-6 overflow-y-scroll'>
          {
            context.cartProducts.map( product => {
              
              const {id, title, price, images} = {...product}
              
              return  <OrderCard
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        images={images}
                        handleDelete={handleDelete}
                      />
              })
          }
        </div>
        <div className='px-6 mb-10 mt-5'>
          <p className='flex justify-between items-center'>
            <span className='font-light'>Total:</span>
            <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
          </p>
        </div>
    </aside>
  )
}

export default CheckoutSiteMenu