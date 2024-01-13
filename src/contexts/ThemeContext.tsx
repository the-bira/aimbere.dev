import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const isClientSide = typeof window !== 'undefined';
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      if (!isClientSide) return false;

      const theme = localStorage.getItem('theme');
      return theme === 'dark';
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return false;
    }
  });

  useEffect(() => {
    if (!isClientSide) return;
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => {
      const newTheme = prevIsDarkMode ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return !prevIsDarkMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};