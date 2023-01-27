import "./PopUpAlert.css"



const PopUpAlert = ({ outOfStock }) => {
    console.log(outOfStock)

    return(
        <div className="window-popup">
            <div className="contenedor-popup">
                <h3>Uno o varios items estan fuera de stock!!</h3>
                {
                    outOfStock.forEach((item) => {<strong key={item.id}>Item: {item.instrumento}| {item.marca}| {item.modelo && item.modelo}</strong>})
                }
                <button className="btn-volver-inicio">Volver atras</button>
            </div>
        </div>
    )
}



export default PopUpAlert;