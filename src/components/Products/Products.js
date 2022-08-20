import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Products = () => {

    const [user] = useAuthState(auth);
    // const {user} = useFirebase();
    return (
        <div>
            <h2>Knock Knock</h2>
            <h4>{user ? user.displayName : 'No user'}</h4>
        </div>
    );
};

export default Products;