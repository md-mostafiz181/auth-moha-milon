
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
        
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log("observing of current user from inside", currentUser)
        })

        return ()=>{
                unSubscribe()
        }
    }, [])

    const authInfo = {user,loading, createUser, signIn,signInWithGoogle, logOut}


    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;