import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <div>
                <button style={{margin:'20px'}}>Google Sign In</button>
            </div>
            <form action="">
                
                <input type="email" placeholder='Enter Email' name="" id="" /> <br />
                <input type="password" placeholder='Password' name="" id="" /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;