import { useContext } from "react";
import { LoginContext } from "../../CONTEXT/LoginContext/LoginContext";



const Inicio = () => {
    const {usuario} = useContext(LoginContext)
    console.log(usuario)
    return(
        <div>
            <h1>Inicio</h1>
        </div>
    )
}



export default Inicio;