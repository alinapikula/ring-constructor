import logo from "../../assets/logos/ring-const-logo-long.png"
import logoShort from "../../assets/logos/ring-const-logo-short.png"
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
    return ( 
    <div className="header">
    <Link to={"/"}>
    <img className="header__logo header__logo--long" src={logo}/>
    <img className="header__logo header__logo--short" src={logoShort}/>
    </Link>
     <nav className="header__nav">
        <Link to={"/login"} className="header__nav-link">Login</Link>
        <Link to={"/sign-up"} className="header__nav-link">Sign Up</Link>
    </nav>
    </div> 
    );
}
 
export default Header;