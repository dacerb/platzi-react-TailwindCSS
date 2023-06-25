import {createContext, useState} from 'react'

export const ShoppingCartContex = createContext()


export const ShoppingCartProvider = ({children}) => {
    // Shpping cart - Increment Quantity
    const [count, setCount] = useState(0)
    
    // Product Detail - Open/Close
    const [isProdctDetailOpne, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContex.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProdctDetailOpne,
            productToShow,
            setProductToShow
        }}>

            {children}
        
        </ShoppingCartContex.Provider>
    )
}