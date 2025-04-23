import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

// Enhanced Blue color palette - more pleasing and stylish
export const colors = {
  // Primary colors
  primary: '#3b82f6', // More vibrant medium blue (tailwind blue-500)
  secondary: '#93c5fd', // Softer light blue (tailwind blue-300)
  accent: '#1e40af', // Rich dark blue (tailwind blue-800)
  
  // Background & surface colors
  background: '#FFFFFF',
  surface: '#F8FAFF', // Very subtle blue tint
  text: '#1e293b', // Blue-tinted slate (tailwind slate-800)
  
  // Functional colors
  error: '#ef4444', // More vibrant red (tailwind red-500)
  disabled: '#cbd5e1', // Soft slate gray (tailwind slate-300)
  placeholder: '#94a3b8', // Medium slate (tailwind slate-400)
  backdrop: 'rgba(15, 23, 42, 0.3)', // Slightly blue-tinted overlay
  notification: '#2563eb', // Strong blue (tailwind blue-600)
  
  // Extended blue palette
  blue50: '#eff6ff',  // Barely-there blue (tailwind blue-50)
  blue100: '#dbeafe', // Very light blue (tailwind blue-100)
  blue200: '#bfdbfe', // Light blue (tailwind blue-200)
  blue300: '#93c5fd', // Soft blue (tailwind blue-300)
  blue400: '#60a5fa', // Medium-light blue (tailwind blue-400)
  blue500: '#3b82f6', // Medium blue (tailwind blue-500)
  blue600: '#2563eb', // Medium-dark blue (tailwind blue-600)
  blue700: '#1d4ed8', // Dark blue (tailwind blue-700)
  blue800: '#1e40af', // Very dark blue (tailwind blue-800)
  blue900: '#1e3a8a', // Deep blue (tailwind blue-900)
  
  // Complementary colors
  coolGray: '#e2e8f0', // For subtle borders and separators
  indigo: '#6366f1',   // For highlights and accents
  skyBlue: '#0ea5e9',  // For secondary actions
  
  // Dark theme colors
  darkBackground: '#000000', // Pure black
  darkSurface: '#000000',    // Also pure black for consistent look
  darkElevated: '#121212',   // Slightly lighter for elevated elements
  darkBorder: '#222222',     // Dark gray for borders
  darkText: '#FFFFFF',       // Pure white text
  darkSubtext: '#AAAAAA',    // Light gray for subtexts
};

// Create our custom theme by extending MD3LightTheme
export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    onPrimary: '#FFFFFF',
    primaryContainer: colors.blue100,
    onPrimaryContainer: colors.blue900,
    secondary: colors.secondary,
    onSecondary: colors.blue900,
    secondaryContainer: colors.blue50,
    onSecondaryContainer: colors.blue800,
    tertiary: colors.indigo,
    background: colors.background,
    surface: colors.surface,
    error: colors.error,
    disabled: colors.disabled,
    placeholder: colors.placeholder,
    backdrop: colors.backdrop,
    notification: colors.notification,
  },
};

// Create our custom dark theme by extending MD3DarkTheme
export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: colors.blue400, // Brighter blue for dark mode
    onPrimary: '#000000',
    primaryContainer: '#222222', // Dark gray instead of blue
    onPrimaryContainer: '#FFFFFF',
    secondary: colors.blue200,
    onSecondary: '#000000',
    secondaryContainer: '#222222', // Dark gray instead of blue
    onSecondaryContainer: '#FFFFFF',
    tertiary: '#a5b4fc', // Lighter indigo for dark mode
    background: colors.darkBackground, // Pure black background
    surface: colors.darkSurface, // Also pure black
    surfaceVariant: '#121212', // Slightly lighter black for variants
    surfaceDisabled: '#121212',
    text: colors.darkText, // Pure white text
    disabled: '#666666', // Medium gray for disabled elements
    placeholder: '#888888', // Light gray for placeholders
    notification: colors.blue300,
    card: colors.darkBackground, // For card backgrounds
    border: colors.darkBorder, // For borders
    backdrop: 'rgba(0, 0, 0, 0.5)', // Black overlay
    elevation: {
      level0: 'transparent',
      level1: colors.darkElevated,
      level2: '#1A1A1A',
      level3: '#222222',
      level4: '#252525',
      level5: '#2A2A2A',
    },
  },
};

export type AppTheme = typeof lightTheme; 