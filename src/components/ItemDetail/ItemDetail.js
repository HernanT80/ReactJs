import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ data }) => {
    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`) 
  };

  return (

    <div>
        <img src={data.image} alt="" className="product-detail__img" />
        <ul className="info-grid">
            <li>Titulo:</li>
            <li>{data.title}</li>
            <li>Precio:</li>
            <li>{data.price}</li>
            <li>Stock:</li>
            <li>{data.stock}</li>
    </ul>
    <ItemCount stock = {stock} initial = {1} onAdd ={onAdd}/>
  </div>
  );
};

export default ItemDetail;