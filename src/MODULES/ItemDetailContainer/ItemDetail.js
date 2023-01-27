import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../CONTEXT/CartContext/CartContext";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";


// id, instrumento, descripcion, marca, modelo, detalle, precio, imagen, stock

const ItemDetail = ( {item} ) => {
    const { agregarAlCarrito, isInCart, removerDelCarrito } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)


    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemAComprar = {...item, cantidad: cantidad}
        agregarAlCarrito(itemAComprar)

    }


    return(
        <div className="contenedorItemDetail">
            <h1 className="titulo">{item.instrumento} - {item.descripcion} | Marca {item.marca}</h1>
            {
                item.modelo && <h2 className="subtitulo">Modelo {item.modelo}</h2>
            }
            <div className="contenedorImgAside">
                <img className="imgInstrumento" src={item.imagen} alt={item.marca} />
                <div className="contenedorAside">
                    <p className="detalle">{item.detalle}</p>
                    <p className="precio">Precio: { new Intl.NumberFormat('en-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(item.precio) }</p>
                    <div className="contenedorItemCount">
                        {
                            isInCart(item.id) 
                            ?   <div className="isNotInCart">
                                    <p className="yaAgregado">Producto ya agregado</p>
                                    <div className="botones">
                                        <Link className="btn btn-primario" to="/productos">Seguir Comprando</Link>
                                        <Link className="btn btn-primario" to="/carrito">Ir a pagar</Link>
                                        <button className="btn btn-primario" onClick={() => removerDelCarrito(item.id)}>Quitar del carrito</button>
                                    </div>
                                </div>
                            : <ItemCount 
                                    max={item.stock} 
                                    item={item}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    onAdd={handleAgregar}
                                />
                            
                        }

                    </div>
                </div>
            </div>
            <button className="btn btn-secundario" onClick={handleVolver}>Volver</button>
        </div>
    )
}



export default ItemDetail;