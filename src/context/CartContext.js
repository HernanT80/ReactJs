import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product, count) => {

        const cartArray ={
            item: product,
            count
        }
        setCartProducts([...cartProducts, cartArray])
    }

    const removeItem = (id) => {
        const deleteCart = cartProducts.filter(e => e.id !== id);
        setCartProducts(deleteCart);
    }

    const clear = () => {
        setCartProducts([]);
        
    }

    const isInCart = (id) => {
        return cartProducts.some(e => e.id === id)
    }


    const data = {
        cartProducts,
        addProductToCart,
        removeItem,
        clear,
        isInCart,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext