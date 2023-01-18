import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Counter from "./LiftingState/component/counter";

export const CountContext = createContext();

function contextCOunt() {
  const [counter, setCounter] = useState(0);

  return (
    <CountContext.Provider
      value={{ counter, setCounter }}
      className="contextCOunt"
    >
      <Counter />
    </CountContext.Provider>
  );
}

export default contextCOunt;
