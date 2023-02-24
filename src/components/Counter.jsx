import React from "react";

class Counter extends React.Component {
  render() {
    return (

      <div className="row text-center">
        <h1>Counter: </h1>
        <button>+1</button>
        <button>-1</button>
      </div>
    );
  }
}

export default Counter;
