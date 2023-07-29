import { ChevronRightIcon,PrinterIcon, XMarkIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const {totalPrice, totalProducts} = props




  return (
    <div className="flex justify-between items-center mb-3 mt-5 border border-black rounded-lg p-4 w-80">
        <div className='flex justify-between w-full'>
            <p className='flex flex-col'>
              <span className='font-light'>01.02.23</span>
              <span className='font-light'><strong>QTY:</strong> {totalProducts} articles.</span>
            </p>
            <p className='flex gap-3 items-center'>
              <span className='font-medium text-2xl'>${totalPrice}</span>
              <ChevronRightIcon className="h-6 w-6 text-black-500 cursor-pointer"></ChevronRightIcon>
            </p>
        </div>
    </div>
  )
}

export default OrdersCard