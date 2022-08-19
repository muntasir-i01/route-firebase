import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                
            })
    }
    
    // on useEffect () -> is empty depencency, => {} -> callback function
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);
    // return [user, setUser];
    return { user, signInWithGoogle, handleLogOut };
}

export default useFirebase;