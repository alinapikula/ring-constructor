import "./Login.scss"
import back1 from "../../assets/backgrounds/Group 21.png"


const Login = () => {

return (
    <div className="login" >
        
        <div className="login__form-container">
            <form className="login__form" action="submit">
            <label className="login__label" htmlFor="email">EMAIL</label>
            <input name="email" id="email" placeholder="Enter your email"/>
            <label className="login__label" htmlFor="password">PASSWORD</label>
            <input name="password" id="password" placeholder="Enter your password"/>
            <button>ENTER MY ACCOUNT</button>
            </form>
        </div>
        
    </div>
);
}

export default Login;