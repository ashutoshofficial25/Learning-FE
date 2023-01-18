import logo from "./logo.svg";
import "./App.css";
import { createContext, useReducer, useState } from "react";
import Counter from "./LiftingState/component/counter";

export const CountContext = createContext();

//reducer is pure function
//reducer function two takes  the` parameters state and action
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementByNum":
      return state + action.payload;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const initialState = 10;

function App() {
  // const [counter, setCounter] = useState(0);

  // const [updatedState, dispatch('action')] = useReducer(reducer function(state,action) , initialState);)
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ counter, dispatch }} className="App">
      <Counter />
    </CountContext.Provider>
  );
}

export default App;
