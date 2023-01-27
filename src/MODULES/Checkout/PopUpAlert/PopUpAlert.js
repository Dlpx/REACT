

export default function PopUpAlert( {outOfStock} ) {
  return (
    <div className="window-popup">
        <div className="contenedor-popup">
            <h3>Compra denegada</h3>
            <strong>Uno o mas items estan fuera de stock</strong>
            {outOfStock.map( item => {
                return <p key={item.id}>{item.instrumento} {item.marca} </p>
            } )}
            
        </div>
    </div>
  );
}