import logo from "../../assets/logos/ring-const-logo-long.png"
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
    return ( 
    <div className="header">
    <Link to={"/"}>
    <img className="header__logo" src={logo}/>
    </Link>
     <nav className="header__nav">
        <Link to={"/login"} className="header__nav-link">Login</Link>
        <p>Sign Up</p>
    </nav>
    </div> 
    );
}
 
export default Header;