import {useContext} from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import {NavLink, UNSAFE_DataRouterContext} from 'react-router-dom'
import { ShoppingCartContex } from '../../Context'

 const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'

    const context = useContext(ShoppingCartContex)

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-zinc-50'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
            <NavLink 
                to={'/'} > 
                Shopi</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/all'}
                onClick={() => context.setSearchByCategory(null)}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                All</NavLink>
            </li>
            <li>
            <NavLink
                to={'/electronics'}
                onClick={() => context.setSearchByCategory('electronics')}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                Electronics</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/clothes'}
                onClick={() => context.setSearchByCategory('clothes')}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                Clothes</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/shoes'}
                onClick={() => context.setSearchByCategory('shoes')}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                Shoes</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/others'}
                onClick={() => context.setSearchByCategory('others')}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                Others</NavLink>
            </li>
        </ul>

        <ul className='flex justify-center gap-3'>
            <li className='text-black/60'>
            dav@davv.com
            </li>
            <li>
            <NavLink 
                to={'/my-orders'}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                My Orders</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/my-account'}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                My account</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/sign-in'}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                Signin</NavLink>
            </li>
            <li onClick={() => context.openCheckoutSiteMenu()} className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6 text-black'/>
            <div>{context.count}</div>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar