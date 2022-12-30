import "./App.css";
import CreateBurger from "./createBurger";
import { burgerConponentEnum } from "./resourses";

function App() {
  return (
    <div className="App">
      <CreateBurger
        burgerStack={[
          burgerConponentEnum.LETTUCE,
          burgerConponentEnum.TOMATO,
          burgerConponentEnum.CHEESE,
          burgerConponentEnum.LETTUCE,
          burgerConponentEnum.TOMATO,
          burgerConponentEnum.TOMATO,
        ]}
      />
      {/* BreadUpper
BreadLower
Cheese
Lettuce
Tomato */}
    </div>
  );
}

export default App;
