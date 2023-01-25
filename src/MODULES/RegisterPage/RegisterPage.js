import { Switch } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../CONTEXT/LoginContext/LoginContext";
import "./RegisterPage.css";



const RegisterPage = () => {

    const {usuario, register, loading} = useContext(LoginContext)
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

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        register(valores)
    }



    const handleVerContraseña = () => {
        setVerContraseña(!verContraseña)
        console.log(verContraseña)
    }


    return(
        <div className="contenedorLoginPage">
            <div className="contenedor">
                <h1 className="titulo">Registrarse</h1>
                <form className="formulario" onSubmit={handleSubmitRegister}>
                    <input
                        type="email"
                        className="input"
                        placeholder="Correo"
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
                    <button className="boton" disabled={loading}>{loading ? 'Cargando...' : 'Registrarme'}</button>
                    {usuario.error && <p className='error'>{usuario.error}</p>}
                    <Link to='/login' className="login-register">Ya tengo una cuenta</Link>
                </form>
            </div>
        </div>
    )
}



export default RegisterPage;