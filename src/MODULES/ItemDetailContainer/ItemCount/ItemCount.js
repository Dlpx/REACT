import "./ItemCount.css"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



const ItemCount = ( {cantidad, setCantidad, max, onAdd} ) => {

    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }


    
    return(
        <div className="itemCount">
            <p className="stock">Stock actual: {max}</p>
            <div className="contenedorBotones">
                <button 
                    onClick={handleRestar}
                    disabled={cantidad === 1} 
                    className={`btn ${cantidad > 1 ? 'enabled' : 'disabled'}`}> 
                        <RemoveOutlinedIcon /> 
                </button>

                <span className="cantidad"> {cantidad} </span>

                <button 
                    onClick={handleSumar}
                    disabled={cantidad === max} 
                    className={`btn ${cantidad === max ? 'disabled' : 'enabled'}`}> 
                        <AddOutlinedIcon /> 
                </button>
            </div>
            
            <button onClick={onAdd} className="añadirCarrito"> Añadir al carrito</button>
        </div>
    )
}



export default ItemCount;