import React from "react";

class State extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "JAVASCRIPT",
      description: "JS is a Programming Lanaguage",
    };
  }
  updateState = () => {
    if (this.state.title === "React") {
      this.setState({
        title: "Javascript",
        description: "ReactJs is JS Library",
      });
    } else {
      this.setState({
        title: "React",
        description: "ReactJs is JS Library",
      });
    }
  };
  previousState = () => {
    this.setState({
      title: "Javascript",
      description: "this is Programming Lanaguage",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <button onClick={this.updateState}>Update to React</button>
        {/* <button onClick={this.previousState}>Update to Previous</button> */}
      </div>
    );
  }
}
export default State;
