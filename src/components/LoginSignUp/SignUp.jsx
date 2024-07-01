import { Link } from "react-router-dom";
import "./LoginSignUp.css";
import Auth from "./Auth";

function Login() {
    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">SignUp</h4>
                <Auth/>
                <Link className="login-signup" to="/login"><div className="signup-btn text-center" id="showSignupBtn">Have an Account? Login In Here</div></Link>
                
            </div>
        </div>
    );
}

export default Login;