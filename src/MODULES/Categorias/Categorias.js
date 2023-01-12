import "./Categorias.css";
import { Link } from "react-router-dom";





const Categorias = () => {
    return(
        <div className="containerCategorias">
            <h2 className="titulo">Categorias</h2>
            <nav className="navBar">
                <ul className="navList">
                    <li className="navItem"> <Link className="navLink" to="/productos/Guitarras">Guitarras</Link> </li>
                    <li className="navItem"> <Link className="navLink" to="/productos/Bajos">Bajos</Link> </li>
                    <li className="navItem"> <Link className="navLink" to="/productos/Baterias">Baterias</Link> </li>
                    <li className="navItem"> <Link className="navLink" to="/productos/Pianos">Pianos</Link> </li>
                    <li className="navItem"> <Link className="navLink" to="/productos/Teclados">Teclados</Link> </li>
                    <li className="navItem"> <Link className="navLink" to="/productos/">Ver Todos</Link> </li>
                </ul>
            </nav>
        </div>
    )
}



export default Categorias;