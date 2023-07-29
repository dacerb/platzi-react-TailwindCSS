import {createContext, useState, useEffect} from 'react'

export const ShoppingCartContex = createContext()


export const ShoppingCartProvider = ({children}) => {
    // Shpping cart - Increment Quantity
    const [count, setCount] = useState(0)
    
    // Product Detail - Open/Close
    const [isProdctDetailOpne, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)


    // Product Side Menu - Open/Close
    const [isCheckoutSiteMenuOpen, setIsCheckoutSiteMenuOpen] = useState(false)
    const openCheckoutSiteMenu = () => setIsCheckoutSiteMenuOpen(true)
    const closeCheckoutSiteMenu = () => setIsCheckoutSiteMenuOpen(false)


    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart, add shopping cart
    const [cartProducts, setCartProducts] = useState([])


    // Shopping Cart . Oder
    const [order, setOrder] = useState([])

    //useEffect(() => {
        //console.log("update cart: ", cartProducts)
    //  }, [cartProducts])

    // Get products
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error))
      }, [])

    // Get products Filtered
    const [filteredProducts, setFilteredProducts] = useState(null)

    // Get products by title
    const [seachByTitle, setSeachByTitle] = useState(null)

    const filteredProductsByTitle = ( products, seachByTitle ) => {
        return products?.filter(product => product?.title.toLocaleLowerCase().includes(seachByTitle.toLocaleLowerCase()))
    }
    
    useEffect(()=>{
        if(seachByTitle) setFilteredProducts(filteredProductsByTitle(products, seachByTitle))
        //console.log("useEffect total items: ", products.length, " products filter by ", seachByTitle, " result: ", filteredProducts.length, " r ",  filteredProducts)
    }, [products, seachByTitle])
    
    return (
        <ShoppingCartContex.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProdctDetailOpne,
            productToShow,
            cartProducts,
            isCheckoutSiteMenuOpen,
            openCheckoutSiteMenu,
            closeCheckoutSiteMenu,
            setCartProducts,
            setProductToShow,
            order, 
            setOrder,
            products, 
            setProducts,
            seachByTitle,
            setSeachByTitle,
            filteredProducts, 
            setFilteredProducts
        }}>

            {children}
        
        </ShoppingCartContex.Provider>
    )
}
