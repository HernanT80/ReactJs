import './App.css';
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import './components/Products/Products.css'
import './components/ItemCount/ItemCount.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/ItemList/ItemList.css'
//import {BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Products/>
    </div>
  );
}

export default App;
