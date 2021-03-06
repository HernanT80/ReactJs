import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar'
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import './components/Products/Products.css'
import './components/ItemCount/ItemCount.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/ItemList/ItemList.css'
import './components/ItemDetail/ItemDetail.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartPage from './components/CartPage/CartPage'


//pages
import HomePage from './Pages/HomePage';
import ContactPages from './Pages/ContactPages';
import ProductosPages from './Pages/ProductosPage';
import DetailPage from './Pages/Detail';

//context
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
          <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
             <Route path='/cart' element={<CartPage />}/>
              <Route path='/' element={<HomePage />}/>
              <Route path='/category' element={<ProductosPages />}/>
              <Route path='/:category/:id' element={<DetailPage />}/>
              <Route path='/productos/:category' element={<ItemListContainer />}/>
              <Route path='/Contacto' element={<ContactPages />}/>
            </Routes>
          </BrowserRouter>
          </CartProvider>
    </div>
  );
}

export default App;

//<Products/>
