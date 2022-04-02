import './App.css';
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import './components/Products/Products.css'
import './components/ItemCount/ItemCount.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/ItemList/ItemList.css'
import './components/ItemDetail/ItemDetail.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import {BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
       <NavBar />
      <Products/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
