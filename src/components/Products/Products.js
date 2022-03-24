import React from 'react';
import  ItemListContainer from "../ItemListContainer/ItemListContainer";

export default function Products() {

    return(

        <div className='container-products'>
        <ItemListContainer image={"./assets/celular.png"} title='Moto Edge 20 lite' price={69.999}/>
        <ItemListContainer image={"./assets/celular.png"} title='Moto Edge 20 lite' price={69.999}/>
        <ItemListContainer image={"./assets/celular.png"} title='Moto Edge 20 lite' price={69.999}/>
        </div>
    )
}