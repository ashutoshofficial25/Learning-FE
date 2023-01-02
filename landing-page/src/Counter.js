import React from "react";
import "./Counter.css";
class Counter extends React.Component {
  constructor() {
    super();

    console.log("constructor is called  ");
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("conponent mounted");

    console.log("edmddfasdfdf");
  }

  render() {
    console.log("render called");

    return (
      <div className="counter-container">
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default Counter;
