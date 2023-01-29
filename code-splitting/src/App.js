import { useState } from "react";
import "./App.css";
// import usernames from "./usernames";
import { transformToUpperCase } from "./utils";

function App() {
  const [usernames, setUsernames] = useState(null);
  const onload = () => {
    import("./usernames").then((modules) =>
      setUsernames(transformToUpperCase(modules.default))
    );
    import("./utils").then((module) => transformToUpperCase(module));
  };

  return (
    <div className="App">
      <h1>{JSON.stringify(usernames)}</h1>

      <button onClick={onload}> Load data</button>
    </div>
  );
}

export default App;
