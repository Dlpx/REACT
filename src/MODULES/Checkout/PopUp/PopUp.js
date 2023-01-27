import { Link } from "react-router-dom";
import "./PopUp.css";



const PopUp = ({resumen}) => {
    return(
        <div className="window-popup">
            <div className="contenedor-popup">
                    <h3>¡Compra Realizada!</h3>
                    <strong>ID de compra: {resumen && resumen.id} </strong>
                    <div className="contenedor-asides">
                        <div className="contenedor-datos">
                            <h4>Datos del comprador</h4>
                            <p>Nombre: {resumen && resumen.cliente.nombre}</p>
                            <p>Direccion de entrega: {resumen && resumen.cliente.direccion}</p>
                            <p>Telefono de contacto {resumen && resumen.cliente.telefono}</p>
                            <p>Recibiras mas informacion en: {resumen && resumen.cliente.email}</p>
                        </div>
                        <div className="items-compra-screen">
                            <h4>Resumen de la compra</h4>
                            <div className="contenedor-resumen">
                                {
                                    resumen.items.map( (item) => {
                                        return(
                                            <div key={item.id} className="item-contenedor">
                                                <img src={item.imagen} className="img-item" alt={item.instrumento}/>
                                                <div className="datos-item">
                                                    <p>Item: {item.instrumento} | Marca: {item.marca} x {item.cantidad}</p>
                                                    <small>Precio parcial: {item.precio * item.cantidad}</small>
                                                </div>
                                            </div>

                                        ) 
                                    })
                                }
                                <strong className="precio-final">Precio total: {resumen.total}</strong>
                            </div>
                        </div>
                    </div>
                    <Link to='/inicio' className="btn btn-primario"> Volver a Inicio </Link> 
                </div>
            </div>
    )
}



export default PopUp;