import { Link } from "react-router-dom";
import "./LoginSignUp.css";
import Auth from "./Auth";
import axios from "axios";
import { userLogin } from "../../apis/fakeStoreApis";

function Login() {
    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Login</h4>
                <Auth
                    onSubmit = {async (args) => {
                        // const response = await axios.post(userLogin(), {
                        //     email: args.userEmail,
                        //     password: args.userPassword,
                        //     username: args.userName
                        // });
                        // console.log(response);
                    }}
                />
                <Link className="login-signup" to="/signup"><div className="signup-btn text-center" id="showSignupBtn">Don't have an Account? Sign Up Here</div></Link>
                
            </div>
        </div>
    );
}

export default Login;