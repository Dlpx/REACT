import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Categorias from "../Categorias/Categorias"
import CircularIndeterminate from "./CircularIndeterminate"
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../../FIREBASE/Config"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { instrumento } = useParams()

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        // 1. Armar referencia: 
        const refProductos = collection(db, "productos")
        const q = instrumento
                    ? query(refProductos, where("instrumento", "==", instrumento) )
                    : refProductos
        // 2. Realizar peticion asincronica
        getDocs(q)
            .then((res) => {
                setProductos( res.docs.map( (doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                } ) )
            })
            .catch((err) => {console.log(err)})
            .finally( () => {setLoading(false)})
    },[instrumento])



    return(
        <div>
            {
                loading 
                    ? <CircularIndeterminate /> 
                    : <div><Categorias /><ItemList productos={productos}/></div> 
                    
            }
            
        </div>

        
    );
}

export default ItemListContainer;