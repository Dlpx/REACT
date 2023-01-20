import { Switch } from "@mui/material";
import { useContext, useState } from "react";
import { LoginContext } from "../../CONTEXT/LoginContext/LoginContext";
import "./LoginPage.css";



const LoginPage = () => {

    const {usuario, login} = useContext(LoginContext)

    const [valores, setValores] = useState({
        usuario: '',
        contraseña: ''
    })

    const handleInputChange = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(valores)
        console.log(usuario)
    }


    const [verContraseña, setVerContraseña] = useState(false)

    const handleVerContraseña = () => {
        setVerContraseña(!verContraseña)
        console.log(verContraseña)
    }


    return(
        <div className="contenedorLoginPage">
            <div className="contenedor">
                <h1 className="titulo">Ingresar</h1>
                <form className="formulario" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        placeholder="Usuario"
                        name="usuario"
                        value={valores.usuario}
                        onChange={handleInputChange}
                    />
                    <div className="contenedorContraseña">
                        <input
                            type="password"
                            className="input"
                            placeholder="Contraseña"
                            name="contraseña"
                            value={valores.contraseña}
                            onChange={handleInputChange}
                        />
                        <div>
                            <Switch onClick={handleVerContraseña} estado={verContraseña} />
                        </div>
                    </div>
                    <button className="boton">Ingresar</button>
                </form>
            </div>
        </div>
    )
}



export default LoginPage;