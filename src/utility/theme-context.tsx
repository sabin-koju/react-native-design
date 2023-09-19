// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppTheme } from "./type";
import colors from "../styles/colors";
import { Text, useColorScheme } from "react-native";

interface ThemeContextType {
  theme: string;
  themeStyles: { [key: string]: string };
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(
    colorScheme || "light"
  );

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const theme = currentTheme;
  const themeStyles = currentTheme === "light" ? colors.light : colors.dark;

  return (
    <ThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
