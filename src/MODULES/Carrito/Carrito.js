import { useContext } from "react";
import { CartContext } from "../../CONTEXT/CartContext/CartContext";
import CarritoElemento from "./CarritoElemento/CarritoElemento";
import "./Carrito.css";
import CarritoVacio from "./CarritoVacio/CarritoVacio";
import { Link } from "react-router-dom";


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
                            <button className="btn btn-hover-green" onClick={vaciarCarrito}> Vaciar Carrito</button>
                            <Link to='/checkout' className="btn btn-hover-red"> Realizar el pago</Link>
                        </div>
                    </div>
                :   <CarritoVacio />
            }
            
        </div>
    )
}



export default Carrito;