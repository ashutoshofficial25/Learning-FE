import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const NameField = () => {
  const [name, setName] = useState("");

  return (
    <input
      style={{ height: "25px" }}
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

const Timer = () => {
  console.log("timer");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, [count]);

  return <div>Timer: {count}</div>;
};

function App() {
  const [sendName, setSendName] = useState();
  return (
    <div className="App">
      App
      {/* It combines it in app, and it treates it like a hooks */}
      {/* if we call it multiple times then it might break , because it unable to handle multiple hooks in a single time  */}
      <div>
        <label htmlFor="name">
          <input
            type="checkbox"
            checked={sendName}
            onChange={(e) => setSendName(e.target.checked)}
            name="name"
            id="name"
          />
        </label>
      </div>
      {/* {sendName && NameField()} */}
      {sendName && <NameField />}
      {/* <NameField /> */}
    </div>
  );
}

export default App;
