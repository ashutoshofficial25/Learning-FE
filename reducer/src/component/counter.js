import React, { useContext, useState } from "react";
import { CountContext } from "../../App";
import Component1 from "./component1/Component1";
import Component2 from "./component2/Component2";

const Counter = () => {
  //lifting the state up
  const { counter } = useContext(CountContext);
  const [counte, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <div>
        <Component1 counter={counte} setCounter={setCounter} />
        <Component2 counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
};

export default Counter;
