import React, { useContext } from "react";
import { CountContext } from "../../../App";

const Component1 = () => {
  const { dispatch } = useContext(CountContext);

  return (
    <div style={{ width: 500, padding: 40, backgroundColor: "gray" }}>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "incrementByNum", payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Component1;
