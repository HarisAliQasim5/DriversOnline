import React, { createContext, useContext } from 'react';
import { useState } from 'react';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const login = (token) => {
    setAuthToken(token);
    setUserLoggedIn(true);
  };

  const logout = () => {
    setAuthToken(null);
    setUserLoggedIn(false);
  };

  const isLoggedIn = () => {
    return userLoggedIn;
  };

  return (
    <AuthContext.Provider value={{ authToken, userLoggedIn, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
