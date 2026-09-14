import { useEffect } from "react";
import { createContext, useState } from "react";
import { Darktheme } from "./components/Darktheme";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark",
    );
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
