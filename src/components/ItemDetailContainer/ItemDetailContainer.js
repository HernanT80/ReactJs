import React from'react';
import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import ProductMock from '../DataProduct/ProductMock'



const ItemDetailContainer = () =>{

    const [product, setProduct] = useState([])

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
     
    return (
        <>
            <ItemDetail data={product}/>
        </>
   
    )
}

export default ItemDetailContainer;
