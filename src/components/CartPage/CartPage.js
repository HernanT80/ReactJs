import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import '../CartPage/CartPage.css'
import { Button } from '@mui/material';
import MiModal from '../Modal/MyModal';
import db from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';


const CartPage = () => {

    const { cartProducts, removeItem, totalPrice  } = useContext(CartContext);
    const [ openModal, setOpenModal ] = useState(false)
    const [ formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [ order, setOrder ] = useState(
        {
            buyer: formData,
            items: cartProducts.map( (cartProduct) =>{
                return {
                    id: cartProduct.item.id,
                    title: cartProduct.item.title,
                    price: cartProduct.item.price
                }
            }),
            total: totalPrice
        }
    )

    console.log('orden:', order)

    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }   
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
        
    }

    const handleChange = (e) =>{
        const {value, name} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(e.target.value, e.target.name)
    }
 
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
                        <Button className='btn-custom' onClick={() => setOpenModal(true)} >Completar Compra</Button>
                    </div>
                </div>
            </div>
            <MiModal handleClose= {()=> setOpenModal(false)} open={openModal}>

                    {successOrder ? (
                        <div>
                             <h3>Orden generada correctamente</h3>
                            <p>Su numero de orden es: {successOrder}</p>
                        </div>
                    ) : (
                        <>
                            <h2>FORM USUARIO</h2>
                            <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre' 
                                onChange={handleChange} 
                                value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono' 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='mail' 
                                onChange={handleChange} 
                                value={formData.email}
                            />

                            <Button type="submit">Enviar</Button>
                        </form>
                    </>
                    )}
            </MiModal>
        </Container>
    )
}

export default CartPage