import React from "react";
import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <div>
        <div className="signup">Signup</div>
        <div>We do not share your personal details with anyone</div>
        </div>
        <div className="fields">
        <input type='text' placeholder="First Name"/>
        <input type='text' placeholder="Last Name" />
        <input type='email' placeholder="Email" />
        <input type='password' placeholder="Password" />
        <input type='password' placeholder="Confirm Password" />
        <button className="signup-button">Signup</button>
        </div>
        </div>
    )
}

export default Register;