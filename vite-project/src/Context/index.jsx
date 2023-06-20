import {createContext} from 'react'

const ShoppingCartContex = createContext()


export const ShoppingCartProvider = ({children}) => {

    return (
        <ShoppingCartProvider.Provider>
            {children}
        </ShoppingCartProvider.Provider>
    )
}