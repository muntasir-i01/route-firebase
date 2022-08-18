import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    
    const [user, setUser] = useState({});

    useEffect(() => {

    }, [])

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
    // return [user, setUser];
    return { user, signInWithGoogle };
}

export default useFirebase;