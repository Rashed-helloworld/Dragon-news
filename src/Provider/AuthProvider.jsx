import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return(
        createUserWithEmailAndPassword(auth, email, password)
    )}
    // Sign In User
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // User Update
    const updateUser = (userData) => {
        updateProfile(auth.currentUser, userData)
    }
    useEffect( () => {
        const unsubscribe = () => onAuthStateChanged( auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
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
        loading,
        setLoading,
        updateUser,
    }

    return (
        <AuthContext value={contextData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;