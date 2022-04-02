import React from 'react';
import '../ItemDetail/ItemDetail.css'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';



const ItemDetail = ({data}) => {
    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`) 
  };


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
                <Button variant="contained">COMPRAR</Button>
                </div>
            </div>
    </Container>
  );
};

export default ItemDetail;