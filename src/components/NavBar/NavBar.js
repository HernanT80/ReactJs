import React from 'react'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



export default function NavBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return(

        <header className = 'main-header'>
            <div className = 'container-logo'>
                <Link to={"/"}><img src="./assets/logo.jpg" className = "img-header" /></Link>
            </div>
            <ul className = 'navbar'>
                <li><Link to={"/"}>
                    <Button variant="contained">Inicio</Button>
                </Link>
                </li>
                <li>
                    <Link to={"/category"}><Button
                        variant="contained"
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Productos
                    </Button></Link>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                        'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <Link to={"/productos/MotoE"}><MenuItem onClick={handleClose}>Moto E</MenuItem></Link>
                        <Link to={"/productos/MotoG"}><MenuItem onClick={handleClose}>Moto G</MenuItem></Link>
                    </Menu>
                </li>
                <li><Button variant="contained">Nosotros</Button> </li>
                <li><Button variant="contained">Contacto</Button> </li>
            </ul>
            <CartWidget/>
          
        </header>
        
    )
}
/*
<PopupState variant="popover" popupId="demo-popup-menu">
                         {(popupState) => (
                    <Button variant="contained" {...bindTrigger(popupState)}>Productos</Button>
                    <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                     )}
                     </PopupState>
                     );*/




 