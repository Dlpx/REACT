import { useContext } from "react";
import { CartContext } from "../../CONTEXT/CartContext";
import CarritoElemento from "./CarritoElemento/CarritoElemento";
import "./Carrito.css";


const Carrito = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext);


    return(
        <div className="carritoContainer">
            <h1>Su carrito contiene:</h1>
            {
                carrito && carrito.map( (el) => <CarritoElemento key={el.id} el={el}/> )
            }
            {
                carrito.lenght > 0
                ?   <div className="contenedorBtn">
                        <button className="btn vaciar" onClick={vaciarCarrito}> Vaciar Carrito</button>
                        <button className="btn comprar"> Realizar el pago</button>
                    </div>
                :   <strong>Su carrito esta vacio</strong>
            }
            
        </div>
    )
}



export default Carrito;