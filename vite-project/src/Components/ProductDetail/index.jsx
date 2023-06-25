import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContex } from '../../Context'

import './styles.css'


const ProductDetail = () => {

  const context = useContext(ShoppingCartContex)
  console.log(context.productToShow)


  return (
    <aside 
        className={`${context.isProdctDetailOpne ? 'flex': 'hidden'  } product-detail flex-col fixed right-0 border border-black rounded-lg bg-yellow-200`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div onClick={() => context.closeProductDetail()}>
                <XMarkIcon className="h-6 w-6 text-black-500"/>
            </div>
            <figure>
                <img src={context.productToShow.images[0]} alt="" />
            </figure>
        </div>
    </aside>
  )
}

export default ProductDetail