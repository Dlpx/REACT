import { useState, useEffect } from "react"
import { pedirDatos } from "../../HELPERS/pedirDatos"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Categorias from "../Categorias/Categorias"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { instrumento } = useParams()


    useEffect(() => {
        pedirDatos()
        .then( (res) => {
            if(instrumento){
                setProductos(res.filter(prod => prod.instrumento === instrumento))
            } else {
                setProductos(res)
            }
            
        })
        .catch( (err) => {
            console.log(err)
        })
    },[instrumento])


    return(
        <div>
            <Categorias />
            <ItemList productos={productos}/>
        </div>

        
    );
}

export default ItemListContainer;