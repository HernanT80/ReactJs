import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount] = useState(initial);
   
    const addProduct = () => {
        setCount (count + 1)
    }

    const lessProduct = () => {
        setCount (count - 1)
    }

    return(
        <div className='container-count'>
            <div className='container-count-button'>
                <button className='button-count' onClick={lessProduct} disabled ={count === 1 ? true : false}>-</button>
                <p className='count' >{count}</p>
                <button className='button-count' onClick={addProduct} disabled={count === stock ? true : false}>+</button>
            </div>
            
            <Button variant="contained" onClick={() =>  onAdd(count) } disabled={count === 0 ? true : false}>Agregar al carrito</Button>    
        </div>
    )
}

export default ItemCount;