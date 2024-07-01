import { useState } from "react";
import "./LoginSignUp.css";

function Auth({ onSubmit }) {

    const [formDetails, setFormDetails] = useState({userName: '', userPassword: '', userEmail: '', isLoading: false});

    return (
        <>
            <div className="input-group">
                <input type="email" className="form-control" placeholder="Email" id="loginUsermail" value={formDetails.userEmail} onChange={(e) => setFormDetails({...formDetails, userEmail: e.target.value})}/>
            </div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Username" id="loginUsername" value={formDetails.userName} onChange={(e) => setFormDetails({...formDetails, userName: e.target.value})}/>
            </div>
            <div className="input-group">
                <input type="password" className="form-control" placeholder="Password" id="loginPassword" value={formDetails.userPassword} onChange={(e) => setFormDetails({...formDetails, userPassword: e.target.value})}/>
            </div>
            <div className="input-group">
                <button onClick={() => {
                    onSubmit(formDetails);
                    setFormDetails({...formDetails, userName: '', userPassword: '', userEmail: '', isLoading: true})
                }} className="form-control btn btn-primary">
                    {(formDetails.isLoading) ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Submit"}
                </button>
            </div>
        </>
    );
}

export default Auth;