import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer({image, title,price}){

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`) 
      }

    return(
        <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="300"
          image={image}
        />
        <CardContent>
            <h3>{title}</h3>
            <p>Precio: {price}</p>
            <ItemCount stock = {5} initial = {0} onAdd ={onAdd}/>
        </CardContent>
        </Card>

    )
}
