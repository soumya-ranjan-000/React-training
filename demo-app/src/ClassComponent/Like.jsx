import React from "react";

class Like extends React.Component {
  constructor() {
    super();
    this.decrementLike = this.decrementLike.bind(this);
    this.state = { like: 0, dislike: 0 };
  }

  incrementLike = () => {
    this.setState({ like: this.state.like + 1 });
  };

  decrementLike() {
    this.setState({ dislike: this.state.dislike + 1 });
  }

  render() {
    return (
      <div className="card">
        <button onClick={this.incrementLike}>👍</button>
        <h1>{this.state.like}</h1>
        <button onClick={this.decrementLike}>👎</button>
        <h1>{this.state.dislike}</h1>
      </div>
    );
  }
}

export default Like;
