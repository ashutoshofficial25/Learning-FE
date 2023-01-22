import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);

  console.log("log:", counter);
  return <div className="App"></div>;
}

export default App;
