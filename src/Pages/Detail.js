import { useParams } from 'react-router-dom';

import { useEffect, useState, useContext } from 'react';
import CartContext from './../context/CartContext'

import { DataProduct } from '../components/DataProduct/DataProduct';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})
    const [sumItem, setSumItem] = useState(false)
    const { cartProducts, addProductToCart } = useContext(CartContext)

    useEffect( () => {
        filterProductById(DataProduct, id)
        console.log("cartProducts:", cartProducts)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    const onAdd =(count) =>{
        addProductToCart(product,count);
        setSumItem(true);
    }

    return(
        <>
        <ItemDetail onAdd ={onAdd} data={product} sumItem={sumItem}/>
        </>
    )
}

export default DetailPage