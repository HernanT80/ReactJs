import React from'react';
import React, { useEffect, useState } from 'react';
import { DataProduct } from '../DataProduct/DataProduct';



const ItemDetailContainer = ({id}) =>{

    const [product, setProduct] = useState(null);

    useEffect(()=>{
        productId(DataProduct,id)
    },[id])
    
    console.log(product)
    const productId = () => {
        return DataProduct.map(( product) =>{
            if (product.id == id) {
            return console.log(product)
        }
        })
    }

    return (
        <div>
            <ItemDetail item={product} />
        </div>
   
    )
}

export default ItemDetailContainer;
