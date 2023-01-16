import "./ItemCount.css"



const ItemCount = ( {cantidad, setCantidad, max, onAdd} ) => {

    
    const handleRestar = () => {
        cantidad > 1 ? setCantidad(cantidad - 1) : alert("No podes comprar meno de 1")
    }

    const handleSumar = () => {
        cantidad < max ? setCantidad(cantidad + 1) : alert("No podes comprar mas de los que hay en stock actualmente")
    }


    
    return(
        <div className="itemCount">
            <p className="stock">Stock actual: {max}</p>
            <div className="contenedorBotones">
                <button onClick={handleRestar} className="btn" > 🔽 </button>
                <span className="cantidad"> {cantidad} </span>
                <button onClick={handleSumar} className="btn" > 🔼 </button>
            </div>
            
            <button onClick={onAdd} className="añadirCarrito"> Añadir al carrito</button>
        </div>
    )
}



export default ItemCount;