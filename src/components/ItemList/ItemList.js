import React, {useEffect, useState} from 'react';
import { DataProduct } from '../DataProduct/DataProduct';
import '../ItemList/ItemList.css'
import Item from "../Item/Item";

const ItemList =() => {

    const [products, setProducts] = useState([])

    const getProduct = new Promise((resolve, reject) => {

        setTimeout (() => {
            resolve(DataProduct)
        },2000) 
    });

    const getProductMook = async () =>{
        try{
            const result = await getProduct
            setProducts(result)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getProductMook()
    },[])

    return(
        <div className='container-products'>

            {
            
            products.map((prod) => {
              
                return (
                    <div key ={prod.id}>
                    <Item
                    id ={prod.id}
                    title ={prod.title}
                    price ={prod.price}
                    stock ={prod.stock}
                    image = {prod.image}
                    />
                </div>
                )
            })
            }
            
         </div>
    )
}

export default ItemList;

