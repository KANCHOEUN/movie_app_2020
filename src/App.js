import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };
  componentDidMount() {
    console.log("Component Rendered");
  }
  componentDidUpdate() {
    console.log("I just Updated");
  }
  componentWillUnmount() {
    console.log("Goodbye");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>I'm a class {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
