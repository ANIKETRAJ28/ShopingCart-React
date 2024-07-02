import { Link, useNavigate } from "react-router-dom";
import "./LoginSignUp.css";
import Auth from "./Auth";
import axios from "axios";
import { userLogin } from "../../apis/fakeStoreApis";
import { useCookies } from 'react-cookie';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { jwtDecode } from "jwt-decode";

function Login() {

    const navigate = useNavigate();
    const [token, setToken] = useCookies(['jwt-token']);
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Login</h4>
                <Auth onSubmit={async (args) => {
                    try {
                        const response = await axios.post(userLogin(), {
                            email: args.userEmail,
                            password: args.userPassword,
                            username: args.userName
                        }, {withCredentials: true});
                        setToken('jwt-token', response.data.token, {httpOnly: true});
                        const jwtToken = jwtDecode(response.data.token);
                        setUser({username: jwtToken.user, id: jwtToken.id});
                        navigate("/");
                        return true;
                    } catch (error) {
                        console.log(error);
                        return false;
                    }

                }}/>
                <Link className="login-signup" to="/signup"><div className="signup-btn text-center" id="showSignupBtn">Don't have an Account? Sign Up Here</div></Link>
                
            </div>
        </div>
    );
}

export default Login;