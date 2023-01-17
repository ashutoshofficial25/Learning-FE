import React, { createContext, useContext, useEffect, useState } from "react";

const themes = {
  dark: { backgroundColor: "black", color: "white" },
  light: { backgroundColor: "white", color: "black" },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

//1. Create context
const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  //default theme is light
  const [dark, setDark] = useState(false);

  //On mount , get userPreffered theme from local storage
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  const toggle = () => {
    //keeping track of theme in localstorage
    console.log(dark);
    localStorage.setItem("dark", JSON.stringify(!dark));
    setDark(!dark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useContextValue = () => useContext(ThemeContext);

export { ThemeProvider, ThemeContext, useContextValue };
