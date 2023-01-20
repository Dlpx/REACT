import { useContext } from "react";
import { CartContext } from "../../CONTEXT/CartContext/CartContext";
import CarritoElemento from "./CarritoElemento/CarritoElemento";
import "./Carrito.css";
import CarritoVacio from "./CarritoVacio/CarritoVacio";


const Carrito = () => {

    const {carrito, vaciarCarrito, totalCarrito} = useContext(CartContext);


    return(
        <div className="carritoContainer">
            <h1>Su carrito contiene:</h1>
            {
                carrito && carrito.map( (el) => <CarritoElemento key={el.id} el={el}/> )
            }

            {
                carrito.length >= 1
                ?   <div className="contenedor">
                        <h4>Total: { new Intl.NumberFormat('en-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(totalCarrito()) } </h4>
                        <div className="contenedorBtn">
                            <button className="btn vaciar" onClick={vaciarCarrito}> Vaciar Carrito</button>
                            <button className="btn comprar"> Realizar el pago</button>
                        </div>
                    </div>
                :   <CarritoVacio />
            }
            
        </div>
    )
}



export default Carrito;