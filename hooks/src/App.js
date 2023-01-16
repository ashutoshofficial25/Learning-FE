import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{ backgroundColor: toggle ? "tomato" : "white" }}
    >
      <h1>Context API</h1>
      <button onClick={toggleFunction}>change the theme</button>
    </div>
  );
};

export default App;
