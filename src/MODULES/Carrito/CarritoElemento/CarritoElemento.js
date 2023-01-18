import { useContext } from "react";
import { RxTrash } from "react-icons/rx";
import { CartContext } from "../../../CONTEXT/CartContext";
import "./CarritoElemento.css";



const CarritoElemento = ({el}) => {
    
    const subtotal = el.cantidad * el.precio
    
    const {removerDelCarrito} = useContext(CartContext)

    return(
        <div className="contenedorElemento">
            <div className="divLeft">
                <button onClick={() => removerDelCarrito(el.id)}><RxTrash/></button>
                <img className="imgElemento"  src={el.imagen}/>
            </div>
            <div className="divMedio">
                <h3 className="productoElemento">{el.marca} {el.modelo}</h3>
                <p className="categoriaElemento" >| {el.instrumento}{el.descripcion} |</p >
            </div>
            <div className="divRight" >
                <p className="cantidad" >Cantidad: {el.cantidad}</p>
                <p className="precioUnit" >Unidad: { new Intl.NumberFormat('en-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(el.precio) }</p>
                <p className="subtotal" >Subtotal: <strong>{ new Intl.NumberFormat('en-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(subtotal) }</strong></p>
            </div>
        </div>
    )
}


export default CarritoElemento;