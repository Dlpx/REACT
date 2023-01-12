import './App.css';
import Header from './MODULES/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './MODULES/Inicio/Inicio';
import Carrito from './MODULES/Carrito/Carrito';
import Error404 from './MODULES/Error404/Error404';
import ItemListContainer from './MODULES/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './MODULES/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>

        <Route path='/' element={ <Inicio /> }/>
        <Route path='/inicio' element={ <Inicio /> }/>
        <Route path='/carrito' element={ <Carrito /> }/>
        <Route path='/productos' element={ <ItemListContainer  /> }/>
        <Route path='/productos/:instrumento' element={ <ItemListContainer /> }/>
        <Route path='/mostrar/:itemId' element={ <ItemDetailContainer /> }/>
        <Route path='*' element={ <Error404 /> }/>
        
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
