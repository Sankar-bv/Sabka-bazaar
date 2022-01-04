import React from "react";
import './Signin.css';

const SignIn = () => {
    return (
        <div className="signin">
            <div>
        <div className="login">Login</div>
        <div>Get access to your Orders, Wishlist and Recommendations</div>
        </div>
        <div className="fields">
        <input type='email' placeholder="Email" />
        <input type='password' placeholder="Password" />
        <button className="login-button">Login</button>
        </div>
        </div>
    )
}

export default SignIn;