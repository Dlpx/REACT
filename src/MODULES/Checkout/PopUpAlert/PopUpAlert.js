import { Link } from "react-router-dom";




export default function PopUpAlert( {outOfStock} ) {
  return (
    <div className="window-popup">
        <div className="contenedor-popup">
            <h3>Compra denegada</h3>
            <strong>El o los siguientes items estan fuera de stock:</strong>
            {outOfStock.map( item => {
                return <p key={item.id} className="item-out-stock">{item.instrumento} {item.marca} </p>
            } )}
            <p>Regresa al carrito y modifica o elimina los items fuera de stock</p>
            <Link to='/carrito' className="btn btn-primario">Volver</Link> 
        </div>
    </div>
  );
}