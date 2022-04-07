import React from 'react';
import '../ItemDetail/ItemDetail.css'
import Container from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';



const ItemDetail = ({data, onAdd, sumItem}) => {

  return (
    <Container className='container-general'> 
           <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={data.image} alt="celu" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{data.title}</h3>
                <p className='info__subtitle'>Precio</p>
                <p className='info__text'>$ {data.price}</p>
                <p className='info__subtitle'>stock</p>
                <p className='info__text'>{data.stock}</p>
                {sumItem ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount stock = {data.stock} initial = {1} onAdd ={onAdd}/>}
                </div>
            </div>
    </Container>
  );
};

export default ItemDetail;

