import { useState, useEffect } from "react"
import { pedirDatos } from "../../HELPERS/pedirDatos"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Categorias from "../Categorias/Categorias"
import CircularIndeterminate from "./CircularIndeterminate"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { instrumento } = useParams()

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        pedirDatos()
        .then( (res) => {
            if(instrumento){
                setProductos(res.filter(prod => prod.instrumento === instrumento))
                setLoading(false)
            } else {
                setLoading(false)
                setProductos(res)
            }
            
        })
        .catch( (err) => {
                setLoading(false)
                console.log(err)
        })
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