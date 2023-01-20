import React, { createContext, useContext, useReducer } from "react";

//global dat using context api

const StateContext = createContext();

//provide the data using provider

const StateProvider = ({ reducer, initailState, children }) => {
  // const [state, dispatch] = useReducer(reducer, initailState);
  return (
    //returned value of use reducer in value
    <StateContext.Provider value={useReducer(reducer, initailState)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

// thats how we can use context and get the state
export const useStateValue = () => useContext(StateContext);
