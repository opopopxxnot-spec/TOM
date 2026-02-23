import { createContext, useState, useCallback } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulate login
  const login = useCallback((email, password) => {
    console.log('[AuthContext] Logging in user:', email);
    setIsLoading(true);
    setError(null);

    // Simulate API call with delay
    setTimeout(() => {
      if (email && password) {
        setUser({
          id: Math.random(),
          email,
          name: email.split('@')[0],
          loginTime: new Date().toLocaleTimeString(),
        });
      } else {
        setError('Invalid credentials');
      }
      setIsLoading(false);
    }, 500);
  }, []);

  // Logout
  const logout = useCallback(() => {
    console.log('[AuthContext] Logging out user');
    setUser(null);
    setError(null);
  }, []);

  // Update user profile
  const updateUser = useCallback((updates) => {
    console.log('[AuthContext] Updating user:', updates);
    setUser(prev => prev ? { ...prev, ...updates } : null);
  }, []);

  const value = {
    user,
    isLoading,
    error,
    login,
    logout,
    updateUser,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
