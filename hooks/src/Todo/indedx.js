import React, { useState } from "react";
import Controlled from "./components/Controlled";
import NameFormUnconrtolled from "./components/Uncontrolled";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState("");
  const [todosList, setTodosList] = useState([]);

  const handleChange = (e) => {
    setTodos(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // let newTodoList = [...todosList];
    // newTodoList.push(todos);
    // setTodosList(newTodoList);
    setTodosList((todos) => todosList.push([...todosList, todos]));
  };

  return (
    <div>
      {/* <NameFormUnconrtolled /> */}
      {/* <Controlled /> */}

      <div className="app-header">
        <h1>TodoApp</h1>
      </div>
      <form className="form">
        <label className="label">What do you want to do today</label>
        <br />
        <input type="text" className="input" onChange={handleChange} />
        <button onSubmit={handleSubmit} className="submit-button" type="submit">
          Submit
        </button>

        <div className="todo">
          <input type="checkbox" />
          <h4>hello</h4>
          <button className="delete-btn">delete</button>
        </div>
      </form>
    </div>
  );
};

export default App;
