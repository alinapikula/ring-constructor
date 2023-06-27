import "./SignUp.scss"
import back1 from "../../assets/backgrounds/Group 21.png"

import { Link } from "react-router-dom";


const SignUp = () => {

return (
    <div className="sign-up" >
        
        <div className="sign-up__form-container">
            <h3 className="sign-up__title">Welcome to your creative space!</h3>
            <form className="sign-up__form" action="submit">
            <label className="sign-up__label" htmlFor="email">EMAIL</label>
            <input className="sign-up__input" type="text" name="email" id="email" placeholder="Enter your email"/>
            <label className="sign-up__label" htmlFor="password">CREATE A PASSWORD</label>
            <input className="sign-up__input" type="password" name="password" id="password" placeholder="Enter your password"/>
            <label className="sign-up__label" htmlFor="password">REPEAT YOUR PASSWORD</label>
            <input className="sign-up__input" type="password" name="password" id="password" placeholder="Enter your password"/>
            <Link to={'/maitenance'}><button className="sign-up__btn">CREATE AN ACCOUNT</button></Link>
            </form>
        </div>
        
    </div>
);
}

export default SignUp;