import React, { createContext, useState } from "react";

//1. Create a context
export const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  //2. to use provider component to provide data

  const toggleFunction = () => setToggle(!toggle);
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
