import { Link } from "react-router-dom";
import "./Header.css"
import NavBar from "./NavBar/NavBar";


const Header = () => {


    return(
        <div className="headerContainer">
            <Link className="logo" to="/inicio">MAGIC TOUCH</Link>
            <NavBar />
        </div>
    )
}

export default Header;