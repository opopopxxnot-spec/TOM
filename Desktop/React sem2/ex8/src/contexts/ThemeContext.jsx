import { createContext, useState, useCallback } from 'react';

// Create the Theme Context
export const ThemeContext = createContext();

// Theme Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');

  // Toggle between light and dark themes
  const toggleTheme = useCallback(() => {
    console.log('[ThemeContext] Toggling theme...');
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  // Update font size
  const updateFontSize = useCallback((size) => {
    console.log('[ThemeContext] Updating font size to:', size);
    setFontSize(size);
  }, []);

  const value = {
    theme,
    fontSize,
    toggleTheme,
    updateFontSize,
    isDark: theme === 'dark',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
