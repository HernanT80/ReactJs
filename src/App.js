import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'


function App() {
  return (
    <div className="App">
          <NavBar />
          <ItemListContainer title='Moto Edge 20 lite' price={69.999}/>
    </div>
  );
}

export default App;
