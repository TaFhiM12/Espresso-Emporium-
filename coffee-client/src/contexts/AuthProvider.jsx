import { AuthContext } from './AuthContext';
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = async (profileData) => {
        setLoading(true);
        try {
            await updateProfile(auth.currentUser, {
                displayName: profileData.name,
                photoURL: profileData.photo
            });
            
            setUser({
                ...auth.currentUser,
                displayName: profileData.name,
                photoURL: profileData.photo
            });
            
            return true; 
        } catch (error) {
            console.error("Error updating profile:", error);
            return false; 
        } finally {
            setLoading(false);
        }
    };


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    } , [])

    const userInfo = {
        createUser,
        signInUser,
        user,
        setUser,
        loading,
        signOutUser,
        updateUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;