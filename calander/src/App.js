import "./App.css";
import Calander from "./components/Calander/Calander";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Calander />
      </Provider>
    </div>
  );
}

export default App;
