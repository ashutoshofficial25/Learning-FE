import React from "react";
import "./App.css";

import { useContextValue } from "./context/theme-context";

function App() {
  const { theme, toggle, dark } = useContextValue();

  return (
    <div
      className="App"
      onClick={toggle}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <h1> theme Toggler</h1>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="button_container">
          {" "}
          Toggle to {`Toggle to ${!dark ? "Dark" : "Light"} Mode`} mode{" "}
        </div>
        <h2>Context api theme Toggler</h2>{" "}
      </div>
    </div>
  );
}

export default App;
