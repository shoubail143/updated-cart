import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";

export const Darktheme = () => {
  // Added missing semicolon at the end of this line
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    // Wrapped all JSX elements in a React Fragment (<>...</>)
    <>
      <button onClick={toggleTheme}>
        Switch To {isDarkMode ? "Light" : "Dark"} Theme
      </button>
    </>
  );
};
