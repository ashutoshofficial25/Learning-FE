import React from "react";

const Component1 = ({ counter, setCounter }) => {
  return (
    <div style={{ width: 500, padding: 40, backgroundColor: "gray" }}>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
  );
};

export default Component1;
