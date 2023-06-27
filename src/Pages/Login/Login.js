import "./Login.scss"
import back1 from "../../assets/backgrounds/Group 21.png"
import Maitenance from "../Maintanence/Maitenance";
import { Link } from "react-router-dom";


const Login = () => {

return (
    <div className="login" >
        
        <div className="login__form-container">
            <h3 className="login__title">Welcome back to your creative space!</h3>
            <form className="login__form" action="submit">
            <label className="login__label" htmlFor="email">EMAIL</label>
            <input className="login__input" type="text" name="email" id="email" placeholder="Enter your email"/>
            <label className="login__label" htmlFor="password">PASSWORD</label>
            <input className="login__input" type="password" name="password" id="password" placeholder="Enter your password"/>
            <Link to={'/maitenance'}><button className="login__btn">ENTER MY ACCOUNT</button></Link>
            </form>
        </div>
        
    </div>
);
}

export default Login;