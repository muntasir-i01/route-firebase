import './Register.css';
import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form action="">
                <input type="text" placeholder='Enter Your Name' name="" id="" /> <br />
                <input type="email" placeholder='Enter Email' name="" id="" /> <br />
                <input type="password" placeholder='Password' name="" id="" /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;