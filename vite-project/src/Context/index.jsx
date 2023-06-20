import {createContext, useState} from 'react'

export const ShoppingCartContex = createContext()


export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    console.log('COUNT: ', count)

    return (
        <ShoppingCartProvider.Provider value={{count, setCount}} >
            {children}
        </ShoppingCartProvider.Provider>
    )
}