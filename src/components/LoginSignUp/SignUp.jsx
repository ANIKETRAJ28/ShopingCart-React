import { Link } from "react-router-dom";
import "./LoginSignUp.css";

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
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Username" id="loginUsername"/>
                </div>
                <div className="input-group">
                    <input type="password" className="form-control" placeholder="Password" id="loginPassword"/>
                </div>
                <div className="input-group">
                    <button className="form-control btn btn-primary">Sign Up As User</button>
                </div>
                <Link className="login-signup" to="/login"><div className="signup-btn text-center" id="showSignupBtn">Have an Account? Login In Here</div></Link>
                
            </div>
        </div>
    );
}

export default Login;