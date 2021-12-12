import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date().toLocaleTimeString() };
    setInterval(this.updateTime, 1000);
  }
  updateTime = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };
  render() {
    return (
      <div className="clock">
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
