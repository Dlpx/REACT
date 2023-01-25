// import "ItemDetailContainer.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FIREBASE/Config";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {itemId} = useParams()


    useEffect(() => {
        const refDoc = doc(db, "productos", itemId)
        getDoc(refDoc)
            .then(doc => {
                setItem({...doc.data(), id: doc.id})
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