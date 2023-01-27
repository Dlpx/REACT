import { useContext } from "react";
import { LoginContext } from "../../CONTEXT/LoginContext/LoginContext";



const Inicio = () => {
    const {usuario} = useContext(LoginContext)
    return(
        <div>
            <h1>Inicio</h1>
        </div>
    )
}



export default Inicio;