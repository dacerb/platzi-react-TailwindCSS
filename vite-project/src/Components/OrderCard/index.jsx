import { XMarkIcon } from '@heroicons/react/24/solid'


const OrderCard = props => {
    const {id, title, images, price} = props
  return (
    <div className="flex justify-between items-center mb-2">
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={images} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div>
            <p className='text-lg font-medium gap-2'>{price}</p>
            <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer"/>
        </div>
    </div>
  )
}

export default OrderCard