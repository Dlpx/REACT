import { useContext } from "react";
import { CartContext } from "../../CONTEXT/CartContext";
import CarritoElemento from "./CarritoElemento/CarritoElemento";
import "./Carrito.css";


const Carrito = () => {

    const {carrito} = useContext(CartContext);
    console.log(carrito)

    return(
        <div className="carritoContainer">
            <h1>Su carrito contiene:</h1>
            {
                carrito && carrito.map( (el) => <CarritoElemento key={el.id} el={el}/> )
            }
            <div className="contenedorBtn">
                <button className="btn vaciar"> Vaciar Carrito</button>
                <button className="btn comprar"> Realizar el pago</button>
            </div>
            
        </div>
    )
}



export default Carrito;