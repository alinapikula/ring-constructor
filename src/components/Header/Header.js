import logo from "../../assets/logos/ring-const-logo-long.png"
import "./Header.scss"
const Header = () => {
    return ( 
    <div className="header">
    <img className="header__logo" src={logo}/>
     <nav className="header__nav">
        <p>Login</p>
        <p>Sign Up</p>
    </nav>
    </div> 
    );
}
 
export default Header;