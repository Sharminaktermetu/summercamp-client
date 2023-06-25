import  { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext =createContext();
const auth =getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true)
const provider = new GoogleAuthProvider();
    const createUser =(email,password)=>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const login =(email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }
    const googleLog =()=>{
      setLoading(true)
      return  signInWithPopup(auth,provider)
    }
    const logOut =()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser =>{
             console.log('auth state change', currentUser);
             setUser(currentUser)
             setLoading(false);
          })
          return ()=>{
            return  unSubscribe();
          }
  },[])

const authInfo={
    user,
    loading,
    createUser,
    googleLog,
    login,
    logOut
}

    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;