import React from'react';
import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import ProductMock from '../DataProduct/ProductMock'



const ItemDetailContainer = () =>{

    const [product, setProduct] = useState([])
    const [sumItem, setSumItem] = useState(false)

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
        console.log(`Agregastess ${product.title}, cantidad: ${count}`)
        setSumItem(true);
    }
     
    return (
        <>
            <ItemDetail onAdd ={onAdd} data={product} sumItem={sumItem}/>
        </>
   
    )
}

export default ItemDetailContainer;
