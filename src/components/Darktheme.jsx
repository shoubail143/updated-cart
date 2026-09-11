import React from "react";
import { useContext } from "react";
import ThemeContext from "../theme-context";

export const Darktheme = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch To {isDarkMode ? "Light" : "Dark"} Theme
    </button>
  );
};
