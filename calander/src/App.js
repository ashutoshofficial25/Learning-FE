import "./App.css";
import Calander from "./components/Calander/Calander";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="app">
      <Provider>
        <Calander />
      </Provider>
    </div>
  );
}

export default App;
