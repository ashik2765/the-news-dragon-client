import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const[user, setUser] = useState()

    const createUser = (email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)

    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        onAuthStateChanged(auth,loggedUser=>{
            console.log('hello',loggedUser)
        })
        
    },[])
    const authInfo ={
        user,
        createUser,
        signIn

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;