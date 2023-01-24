import { Link } from "react-router-dom";




const Item = ({prod}) => {
    console.log(prod)
    return(
        <Link className="producto" to={`/mostrar/${(prod.id)}`}>
            <img className="prodImg" src={prod.imagen} alt={prod.instrumento}/>
            <h3 className="prodNombre">{ prod.instrumento } { prod.marca } { prod.modelo }</h3>
            <p className="prodCategoria">{ prod.instrumento } { prod.descripcion }</p>
            <p className="prodPrecio">Precio: { new Intl.NumberFormat('en-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(prod.precio) }</p>
        </Link>
    )
}

export default Item;