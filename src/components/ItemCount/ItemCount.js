import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount] = useState(initial);
   
    const addProduct = () => {
        setCount (count + 1)
    }

    const lessProduct = () => {
        setCount (count - 1)
    }
    const click = ()=>{
        <Link to='/cart'Ir al carrito></Link>
        
    }

    return(
        <div className='container-count'>
            <div className='container-count-button'>
                <button className='button-count' onClick={lessProduct} disabled ={count === 1 ? true : false}>-</button>
                <p className='count' >{count}</p>
                <button className='button-count' onClick={addProduct} disabled={count === stock ? true : false}>+</button>
            </div>
            
            <Button variant="contained" onClick={({click}) =>  onAdd(count) } disabled={count === 0 ? true : false}>Agregar al carrito</Button>    
        </div>
    )
}

export default ItemCount;