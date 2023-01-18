import "./NavBar.css"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return(
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
    )
}

export default NavBar;