import React, { useContext } from'react';
import { useState, useEffect} from 'react';
import CartContext from '../../context/cartContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import ProductMock from '../DataProduct/ProductMock'



const ItemDetailContainer = () =>{

    const [product, setProduct] = useState([])
    const [sumItem, setSumItem] = useState(false)

    const { addProductToCart } = useContext(CartContext)

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(ProductMock)
        });
    }

    useEffect(() =>{
        getProduct().then ( (producto) => {
            setProduct(producto)
        }).finally( () => {
            console.log("termino la llamada")
        })
    },[])

    const onAdd =(count) =>{
        addProductToCart(product,count);
        setSumItem(true);
    }
     
    return (
        <>
            <ItemDetail onAdd ={onAdd} data={product} sumItem={sumItem}/>
        </>
   
    )
}

export default ItemDetailContainer;
