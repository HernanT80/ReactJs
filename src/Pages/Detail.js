import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataProduct } from '../components/DataProduct/DataProduct';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(DataProduct, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    
    return(
        <>
        <ItemDetail data={product}/>
         </>
    )
}

export default DetailPage