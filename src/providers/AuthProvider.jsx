import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    
    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoader(true);
        return signOut(auth)
    }
    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
            setLoader(false);
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;