import "./Header.css"
import NavBar from "./NavBar/NavBar";


const Header = () => {
    return(
        <div className="headerContainer">
            <p className="logo">MAGIC TOUCH</p>
            <NavBar />
        </div>
    )
}

export default Header;