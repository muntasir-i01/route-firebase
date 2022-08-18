import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {

    const {signInWithGoogle} = useFirebase();

    return (
        <div>
            <h3>Please Login</h3>
            <div>
                <button onClick={signInWithGoogle} style={{margin:'20px'}}>Google Sign In</button>
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