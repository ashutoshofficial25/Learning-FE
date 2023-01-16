import React, { createContext, useEffect, useState } from "react";

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
    const idDark = localStorage.getItem("dark") === true;
    setDark(idDark);
  }, [dark]);

  const toggle = () => {
    //keeping track of theme in localstorage
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

export { ThemeProvider, ThemeContext };
