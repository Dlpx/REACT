import { useContext } from "react";
import { CartContext } from "../../../CONTEXT/CartContext/CartContext";
import "./MiniCarrito.css"



const MiniCarrito = () => {



    const { carrito } = useContext(CartContext)

    return(
        <div className="miniCarrito">
            <h3>Carrito</h3>
            {
                carrito.length > 0 
                    ? carrito.map( (item) => {
                        return(
                            <div key={item.id} className="mini-producto">
                                <img src={item.imagen} alt={item.instrumento}/>
                                <p>{item.instrumento} x {item.cantidad} = ${item.precio * item.cantidad}</p>
                            </div>
                        )
                    })
                    : <p>Carrito vacio por ahora</p>
            }
        </div>
    )
}



export default MiniCarrito;