import "./App.css";
import CreateBurger from "./createBurger";

function App() {
  return (
    <div className="App">
      <CreateBurger burgerStack={[]} />
      {/* BreadUpper
BreadLower
Cheese
Lettuce
Tomato */}
    </div>
  );
}

export default App;
