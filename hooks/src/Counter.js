import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    //we cannot same setState multiple times in a state

    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);
  };

  // useEffect(() => {
  //   console.log("compenemt mount");
  // }, []);

  // useEffect(() => {
  //   console.log("compenemt did update");
  // }, [count]);

  // useEffect(() => {
  //   console.log("compenemt did unmount");

  //   return () => {
  //     console.log("unmount called");
  //   };
  // }, []);

  return (
    <div>
      <h1> Counter {count}</h1>
      <button onClick={increment}> increment</button>
    </div>
  );
};

export default Counter;
