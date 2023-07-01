import {createContext, useState, useEffect} from 'react'

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

    // Shopping Cart, add shopping cart
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        console.log("update cart: ", cartProducts)
      }, [cartProducts])

    return (
        <ShoppingCartContex.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProdctDetailOpne,
            productToShow,
            cartProducts,
            setCartProducts,
            setProductToShow
        }}>

            {children}
        
        </ShoppingCartContex.Provider>
    )
}