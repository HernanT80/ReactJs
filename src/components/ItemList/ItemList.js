import React, {useEffect, useState} from 'react';
import { DataProduct } from '../DataProduct/DataProduct';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemList/ItemList.css'

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
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

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`) 
      }

    return(
        <div className='container-products'>
            {products.map( ( prod ) => {
             return(
                 <div key ={prod.id}>
                    <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                    component="img"
                    height="300"
                    image={prod.image}
                    />
                    <CardContent>
                        <h3>{prod.title}</h3>
                        <p>Precio: {prod.price}</p>
                        <ItemCount stock = {prod.stock} initial = {1} onAdd ={onAdd}/>
                    </CardContent>
                    <Item/>
                    </Card>
                  </div>
                )
            })}
        </div>
    )


}

export default ItemList