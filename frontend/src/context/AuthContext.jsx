import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

// Create the context
const AuthContext = createContext(null);

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // Initialize state on startup
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');

      if (storedToken) {
        try {
          // Verify token against backend /me route
          const response = await axios.get(`${API_BASE_URL}/me`, {
            headers: {
              Authorization: `Bearer ${storedToken}`
            }
          });

          if (response.data.success) {
            setToken(storedToken);
            setUser(response.data.data);
            setIsAuthenticated(true);
          } else {
            handleAuthFailure();
          }
        } catch (error) {
          console.error('Auth verification failed on startup:', error);
          handleAuthFailure();
        } finally {
          setAuthLoading(false);
        }
      } else {
        setAuthLoading(false);
      }
    };

    const handleAuthFailure = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setToken(null);
      setUser(null);
      setIsAuthenticated(false);
    };

    initializeAuth();
  }, []);

  // Login handler
  const login = (userData, tokenVal) => {
    setToken(tokenVal);
    setUser(userData);
    setIsAuthenticated(true);

    localStorage.setItem('token', tokenVal);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Logout handler
  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);

    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    token,
    isAuthenticated,
    authLoading,
    login,
    logout
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white font-sans">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-10 w-10 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-slate-400 text-sm animate-pulse">Initializing session...</p>
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom Hook to consume Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
