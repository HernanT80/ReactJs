import { useParams } from 'react-router-dom';

import { useEffect, useState, useContext } from 'react';
import CartContext from './../context/CartContext'

import { DataProduct } from '../components/DataProduct/DataProduct';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';

const DetailPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [sumItem, setSumItem] = useState(false)
    const { cartProducts, addProductToCart } = useContext(CartContext)

    const getProduct = async() =>{
        const docRef = doc(db, 'Productos', id)
        const docSnap = await getDoc(docRef);  
        
        if (docSnap.exists()){
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
        }else{
            console.log('no existe producto')
        }
    }

    useEffect( () => {
        getProduct()
    }, [id])

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