import "./CarritoElemento.css";



const CarritoElemento = ({el}) => {
    
    
    const subtotal = el.cantidad * el.precio


    return(
        <div className="contenedorElemento">
            <img className="imgElemento"  src={el.imagen}/>
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