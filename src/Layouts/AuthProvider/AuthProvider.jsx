import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const googleAuth = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const signUpWithEmailPass = (email, password) => {
        setIsloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singUpWithGoogle = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleAuth)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                axios.post('http://localhost:5000/jwt')
                    .then(data => {
                        localStorage.setItem('access_token', data.data.token)
                    })
            } else {
                localStorage.removeItem('access_token')
            }

            setIsloading(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        singUpWithGoogle,
        signUpWithEmailPass,
        logOut,
        logInWithEmailPassword,
        isLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;