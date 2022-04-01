import React from'react';
import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import ProductMock from '../DataProduct/ProductMock';



const ItemDetailContainer = () =>{

    const [productData, setProductData] = useState({})

    const getProduct = () =>{
        return new Promise((resolve, reject) => {
            return resolve(ProductMock)
        })
    }

    useEffect( () =>{
        getProduct().then((producto) =>{
            setProductData(producto)
        }).finally( () => {
            console.log('finalizo la llamada')
        })

    },[])


    return (
        <div>
            <ItemDetail data={productData} />
        </div>
   
    )
}

export default ItemDetailContainer;
