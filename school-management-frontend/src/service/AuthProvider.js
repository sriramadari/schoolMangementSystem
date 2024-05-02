import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = sessionStorage.getItem('token');
      const userData = sessionStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setIsAuthenticated(!!token);
    };

    checkAuthStatus(isAuthenticated);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated,user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};