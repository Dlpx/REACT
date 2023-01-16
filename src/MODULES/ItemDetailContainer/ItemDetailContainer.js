// import "ItemDetailContainer.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../../HELPERS/pedirDatos";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const {itemId} = useParams()


    useEffect(() => {
        pedirItemPorId( Number(itemId) )
        .then( (data) => {
            setItem(data)
        })
    }, [itemId])


    return(
        <div className="itemDetailContainer">
            {
                item && <ItemDetail item={ {...item} }/>
                
            }

        </div>
    )
}



export default ItemDetailContainer;