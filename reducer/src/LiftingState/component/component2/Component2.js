import React, { useContext } from "react";
import { CountContext } from "../../../App";

const Component2 = ({ counter }) => {
  const { setCounter } = useContext(CountContext);

  return (
    <div>
      {" "}
      <div style={{ width: 500, padding: 40, backgroundColor: "aqua" }}>
        <button onClick={() => setCounter(counter + 1)}>increment</button>
        {/* <button onClick={() => setCounter(counter - 1)}>decrement</button> */}
        <button onClick={() => setCounter(0)}>reset</button>
      </div>
    </div>
  );
};

export default Component2;
