import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>Knock Knock</h2>
            <h4>{user ? user.displayName : 'No user'}</h4>
        </div>
    );
};

export default Products;