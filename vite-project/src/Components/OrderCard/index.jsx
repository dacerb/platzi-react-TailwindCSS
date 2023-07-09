import { XMarkIcon } from '@heroicons/react/24/solid'


const OrderCard = props => {
    const {id, title, images, price, handleDelete} = props
    let renderXMARkIcon
    if (handleDelete) {
        renderXMARkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black-500 cursor-pointer"/>
    }

  return (
    <div className="flex justify-between items-center mb-2">
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={images} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
        <p className='text-lg font-medium gap-2'>{price}</p>
        {renderXMARkIcon}
        </div>
            
    </div>
  )
}

export default OrderCard