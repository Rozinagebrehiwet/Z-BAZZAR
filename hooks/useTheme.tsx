import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './theme';

type ThemeContextType = {
  theme: typeof lightTheme;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useColorScheme();
  // Default to light mode instead of following system preference
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Remove the effect that syncs with system preference to keep default light mode
  // useEffect(() => {
  //   setIsDarkMode(colorScheme === 'dark');
  // }, [colorScheme]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 