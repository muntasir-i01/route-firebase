import './Home.css'
import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is Home</h2>
            <p>Current User: {user? user.displayName : 'No User'}</p>
        </div>
    );
};

export default Home;