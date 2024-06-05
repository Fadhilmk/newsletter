// // context/AuthContext.js
"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setLoading(false);
  };

  const storeUserData = ({ uid, email, username }) => {
    localStorage.setItem('uid', uid);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    
    console.log("Stored uid:", uid);
    console.log("Stored email:", email);
    console.log("Stored username:", username);
  };

  const getUserData = () => {
    const uid = localStorage.getItem('uid');
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    return { uid, email, username };
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, storeUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
