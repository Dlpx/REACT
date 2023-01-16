import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";


// id, instrumento, descripcion, marca, modelo, detalle, precio, imagen, stock

const ItemDetail = ( {item} ) => {


    const [cantidad, setCantidad] = useState(1)


    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        console.log({cantidad, ...item})
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
                    <p className="precio">Precio: {item.precio}</p>
                    <div className="contenedorItemCount">
                        <ItemCount 
                            max={item.stock} 
                            item={item}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                            />

                    </div>
                </div>
            </div>
            <button className="btnVolver" onClick={handleVolver}>Volver</button>
        </div>
    )
}



export default ItemDetail;