import './App.css';
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import ItemList from './components/ItemList/ItemList';
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import './components/Products/Products.css'
import './components/ItemCount/ItemCount.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/ItemList/ItemList.css'
import './components/ItemDetail/ItemDetail.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom'


//pages
import HomePage from './Pages/HomePage';
import ContactPages from './Pages/ContactPages';
import ProductosPages from './Pages/ProductosPage';
import DetailPage from './Pages/Detail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/category' element={<ProductosPages />}/>
          <Route path='/:category/:id' element={<DetailPage />}/>
          <Route path='/productos/:category' element={<ItemListContainer />}/>
          <Route path='/Contacto' element={<ContactPages />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<Products/>
