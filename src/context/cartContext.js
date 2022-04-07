import { ThemeContext } from "@emotion/react";
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const[cartProducts, setcartProducts] = useState([])

    const addProductTocart = (product) =>{
        console.log('producto a agregar',product)

    }

    const data ={
        cartProducts,
        addProductTocart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext