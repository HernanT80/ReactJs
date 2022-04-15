import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartPage = () => {

    const { cartProducts } = useContext(CartContext) ;

    return(
        <div>
            {cartProducts.map(prod => <p>{prod.item.title}</p> )}
        </div>
    )
}

export default CartPage