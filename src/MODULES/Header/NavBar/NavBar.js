import "./NavBar.css"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import { useContext } from "react";
import { LoginContext } from "../../../CONTEXT/LoginContext/LoginContext";



const NavBar = () => {


    const {logOut} = useContext(LoginContext)


    return(
        <div className="contenedor">
            <button className="logOut" onClick={logOut}>LogOut</button>
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
                        <Link className="navLink" to="/carrito"><CartWidget/></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;