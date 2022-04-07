import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataProduct } from '../components/DataProduct/DataProduct';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})
    const [sumItem, setSumItem] = useState(false)

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

    const onAdd =(count) =>{
        console.log(`Agregast ${product.title}, cantidad: ${count}`)
        setSumItem(true);
    }

    return(
        <>
        <ItemDetail onAdd ={onAdd} data={product} sumItem={sumItem}/>
        </>
    )
}

export default DetailPage