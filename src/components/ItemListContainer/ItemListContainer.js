import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function ItemListContainer({title,price}){
    return(
        <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="Moto edge 20 lite"
          height="300"
          image="./assets/celular.png"
        />
        <CardContent>
            <h3>{title}</h3>
            <p>Precio: {price}</p>
            <Button variant="contained">Comprar</Button>
        </CardContent>
        </Card>

    )
}