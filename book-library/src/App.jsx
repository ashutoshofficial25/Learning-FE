import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));

  const requestOptions = {
    method: "POST",
    headers: { "content-type": "Application/json" },
    body: JSON.stringify({ name: "myname" }),
  };
  return (
    <div className="App">
      <h1>Books Library</h1>
    </div>
  );
}

export default App;
