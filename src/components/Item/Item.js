import React from 'react';

import Button from '@mui/material/Button';
//import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';




const Item = ({id, title, price, stock, image}) =>{

       



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
            <Link to={`/category/${id}`}><Button variant="contained">Ver detalle</Button></Link>           
        </CardContent>
        </Card>
    );
};

export default Item;