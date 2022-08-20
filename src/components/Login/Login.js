import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app);

const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    // const {signInWithGoogle} = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathName || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace: true})
        })
    }

    return (
        <div>
            <h3>Please Login</h3>
            <div>
                {/* <button onClick={signInWithGoogle} style={{margin:'20px'}}>Google Sign In</button> */}
                {/* <button onClick={() => signInWithGoogle()} style={{margin:'20px'}}>Google Sign In</button> */}

                <button onClick={handleGoogleSignIn}>Google Sign In</button>
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