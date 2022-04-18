import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, count) => {

        let exist = cartProducts.find(cartProduct => cartProduct.item.id === product.id)
        if(!exist) {  
            setTotalPrice(totalPrice + product.price * count) 

        const cartArray ={
            item: product,
            count
             }
        setCartProducts([...cartProducts, cartArray])
        } 
        
    }

    const removeItem = (product, count) => {

        cartProducts.find(cartProduct => cartProduct.item.id === product.id)
        let total = product.price * count
        console.log('total ',total)
        setTotalPrice(totalPrice - total) 

        const deleteCart = cartProducts.filter(e => e.item.id !== product.id);
        setCartProducts(deleteCart); 
        
    }


    const clear = () => {
        setCartProducts([]);
        
    }


    const data = {
        cartProducts,
        addProductToCart,
        removeItem,
        clear,
        totalPrice

    }

   

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext