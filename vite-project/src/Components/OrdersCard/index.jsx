import { PrinterIcon, XMarkIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const {totalPrice, totalProducts} = props




  return (
    <div className="flex justify-between items-center mb-3 mt-5 border border-black rounded-lg p-4 w-80">
        <p className='flex justify-between w-full'>
            <div className='flex flex-col'>
              <span className='font-light'>01.02.23</span>
              <span className='font-light'><strong>QTY:</strong> {totalProducts} articles.</span>
            </div>
            <span className='font-medium text-2xl'>${totalPrice}</span>
        </p>
    </div>
  )
}

export default OrdersCard