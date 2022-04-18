import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import '../CartPage/CartPage.css'
//import ModalCustom from '../components/Modal/Modal';
import { Button } from '@mui/material';

const CartPage = () => {

    const { cartProducts, removeItem, totalPrice, calcTotal  } = useContext(CartContext);
    console.log('cartproductos:', cartProducts)
    return (
        <Container className='container-general'>
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Cantidad</h2>
                    <h2>Quitar</h2>
                </div>
                {cartProducts.map((prod) => {
                    return (
                        <>
                            <div className='cart-table__content' key={prod.item.id}>
                                <div className='cart-table__content-img'>
                                    <img src={prod.item.image} />
                                </div>
                                <div className='cart-table__content-title'>
                                    <p>{prod.item.title}</p>
                                </div>
                                <div className='cart-table__content-price'>
                                    <p>$ {prod.item.price}</p>
                                </div>
                                <div className='cart-table__content-quantity'>
                                    <p>{prod.count}</p>
                                </div>
                                <div className='cart-table__content-price'>
                                    <button className='btn-delete' onClick={() => removeItem(prod.item, prod.count)}>
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        </>

                    )
                }
                )
                }
                <div className='cart-footer'>
                    <Button className='btn-custom'>Continuar comprando</Button>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {totalPrice }</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {totalPrice  }</span>
                        </div>
                        <Button className='btn-custom'>Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CartPage