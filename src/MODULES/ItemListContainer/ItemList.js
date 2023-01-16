import "./ItemList.css"
import Item from "./Item";



const ItemList = ( { productos } ) => {
    return(
        <div className="contProductosShow">
            <h2 className="titulo">Productos</h2>
            <div className="contProductos">
                {
                    productos.map( (prod) => <Item key={prod.id} prod={prod} /> )
                }
            </div>
        </div>
    )
}

export default ItemList;