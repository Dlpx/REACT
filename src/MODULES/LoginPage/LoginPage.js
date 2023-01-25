import { Switch } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../CONTEXT/LoginContext/LoginContext";
import "./LoginPage.css";



const LoginPage = () => {
    
    const {usuario, login, loading} = useContext(LoginContext)
    const [verContraseña, setVerContraseña] = useState(false)

    const [valores, setValores] = useState({
        email: '',
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
                        type="email"
                        className="input"
                        placeholder="Usuario"
                        name="email"
                        value={valores.email}
                        onChange={handleInputChange}
                    />
                    <div className="contenedorContraseña">
                        <input
                            type={verContraseña ? 'text' : 'password'}
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
                    <button className="boton" disabled={loading}>{loading ? 'Ingresando' : 'Ingresar'}</button>
                    {usuario.error && <p className='error'>{usuario.error}</p>}
                </form>
            <Link to='/register' className="login-register">Crear una cuenta</Link>
            </div>
        </div>
    )
}



export default LoginPage;