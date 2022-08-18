import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, [])

    const signInWithGoogle = () => {
        console.log('google sign in');
    }
    // return [user, setUser];
    return { user, signInWithGoogle };
}

export default useFirebase;