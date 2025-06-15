import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    // Create User
    const createUser = (email, password) => {
        return(
        createUserWithEmailAndPassword(auth, email, password)
    )}
    // Sign In User
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect( () => {
        const unsubscribe = () => onAuthStateChanged( auth, (currentUser) => {
            setUser(currentUser);
        })
        return( () => {
            unsubscribe();
        })
    }, [])
    const logOut = () => {
        return signOut(auth);
    }
    const contextData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext value={contextData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;