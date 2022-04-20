import React, {useEffect, useState} from 'react'; 
import { DataProduct } from '../DataProduct/DataProduct';
import '../ItemList/ItemList.css'
import Item from "../Item/Item";
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';


const ItemList =() => {

    const {category} = useParams()
    const [products, setProducts] = useState([])

   /* const getProducts = () => {
        
        return new Promise((resolve, reject) => {
            return resolve(DataProduct)
        })
    } */

    const getProducts = async () => {
        const itemsCollection = collection(db,'Productos')
        const productosSnapshop = await getDocs(itemsCollection)
        const productList = productosSnapshop.docs.map((doc) =>{
            let product = doc.data()
            product.id = doc.id
            return product

        })
        return productList
    } 

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            category ? getCategoryProduct(productos, category) : setProducts(productos)
        })
    }, [category])

    const getCategoryProduct = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
        })
    }

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
                    image = {`../assets/${prod.image}`}
                    />
                </div>
                )
            })
            }
            
         </div>
    )
}

export default ItemList;

