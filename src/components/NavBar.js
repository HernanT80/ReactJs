import React from 'react'

import Button from '@mui/material/Button';

function NavBar() {
    return(
        <header className = 'main-header'>
            <div className = 'container-logo'>
                <img src="logo.jpg" className = "img-header" />
            </div>

            <ul className = 'navbar'>
                <li><Button variant="contained">Inicio</Button> </li>
                <li><Button variant="contained">Productos</Button> </li>
                <li><Button variant="contained">Nosotros</Button> </li>
                <li><Button variant="contained">Contacto</Button> </li>
            </ul>
        </header>
    )
}

export default NavBar;