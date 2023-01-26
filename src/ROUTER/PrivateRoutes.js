import Header from '../MODULES/Header/Header';
import Inicio from '../MODULES/Inicio/Inicio';
import Carrito from '../MODULES/Carrito/Carrito';
import Error404 from '../MODULES/Error404/Error404';
import ItemListContainer from '../MODULES/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../MODULES/ItemDetailContainer/ItemDetailContainer';
import Contacto from '../MODULES/Contacto/Contacto';
import { Routes, Route } from 'react-router-dom';
import Checkout from '../MODULES/Checkout/Checkout';
import RegisterPage from '../MODULES/RegisterPage/RegisterPage';
import LoginPage from '../MODULES/LoginPage/LoginPage';



const PrivateRoutes = () => {
    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Inicio/> } />
                <Route path='/inicio' element={ <Inicio/> } />
                <Route path='/carrito' element={ <Carrito/> } />
                <Route path='/productos' element={ <ItemListContainer/> } />
                <Route path='/productos/:instrumento' element={ <ItemListContainer/> } />
                <Route path='/mostrar/:itemId' element={ <ItemDetailContainer/> } />
                <Route path='/contacto' element={ <Contacto/> } />
                <Route path='/checkout' element={ <Checkout/> } />
                <Route path='/login' element={ <LoginPage/> } />
                <Route path='/register' element={ <RegisterPage/> } />
                <Route path='*' element={ <Error404/>} />
            </Routes>
        </>
    )
}



export default PrivateRoutes;