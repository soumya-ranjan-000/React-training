// eslint-disable-next-line
import React from "react";
let score = 100;
class Counter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Score:{score}</h1>
        <button onClick={this.incrementScore}>This is a button</button>
      </React.Fragment>
    );
  }
  incrementScore() {
    score += 1;
    console.log(score);
    return score;
  }
}

export default Counter;
