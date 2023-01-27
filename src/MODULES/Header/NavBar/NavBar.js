import "./NavBar.css"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import { useContext, useState } from "react";
import { LoginContext } from "../../../CONTEXT/LoginContext/LoginContext";
import MiniCarrito from "../MiniCarrito/MiniCarrito";



const NavBar = () => {


    const {logOut, usuario} = useContext(LoginContext)
    const [showCarrito, setShowCarrito] = useState(false)

    const handleMiniCarrito = () => {
        setShowCarrito(!showCarrito)
    }


    return(
        <div className="contenedor">
            <button className="btn btn-primario" onClick={logOut}><strong>Salir de</strong> {usuario.email}</button>
            <nav className="navBar">
                <ul className="navList">
                    <li className="navItem">
                        <Link className="navLink" to="/inicio">Inicio</Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/productos">Categorias</Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/contacto">Contacto</Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/carrito" onMouseEnter={handleMiniCarrito} onMouseLeave={handleMiniCarrito}><CartWidget/></Link>
                    </li>
                    {
                        showCarrito && <MiniCarrito />
                    }
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;