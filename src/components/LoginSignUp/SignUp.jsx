import { Link, useNavigate } from "react-router-dom";
import "./LoginSignUp.css";
import Auth from "./Auth";
import axios from "axios";
import { userSignUp } from "../../apis/fakeStoreApis";

function Login() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">SignUp</h4>
                <Auth
                    onSubmit = {async (args) => {
                        try {
                            const response = await axios.post(userSignUp(), {
                                email: args.userEmail,
                                password: args.userPassword,
                                username: args.userName
                            });
                            console.log(response);
                            navigate('/login');
                            return true;
                        } catch (error) {
                            console.log(error);
                            return false;
                        }
                    }}
                />
                <Link className="login-signup" to="/login"><div className="signup-btn text-center" id="showSignupBtn">Have an Account? Login In Here</div></Link>
                
            </div>
        </div>
    );
}

export default Login;