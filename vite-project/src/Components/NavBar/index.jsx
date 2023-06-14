import React from 'react'
import {NavLink, UNSAFE_DataRouterContext} from 'react-router-dom'

 const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
            <NavLink 
                to={'/'} > 
                Shopi</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/all'}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                All</NavLink>
            </li>
            <li>
            <NavLink
                to={'/electronics'}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                Electronics</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/furnitures'}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                Furnitures</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/toys'}
                className={({isActive}) => isActive ? activeStyle: undefined}> 
                Toys</NavLink>
            </li>
            <li>
            <NavLink 
                to={'/others'}
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
            <li>
            🛒 0
            </li>
        </ul>
    </nav>
  )
}

export default NavBar