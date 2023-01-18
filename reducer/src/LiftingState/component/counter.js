import React, { useState } from "react";
import Component1 from "./component1/Component1";
import Component2 from "./component2/Component2";

const Counter = () => {
  //lifting the state up
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <div>
        <Component1 counter={counter} setCounter={setCounter} />
        <Component2 counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
};

export default Counter;
