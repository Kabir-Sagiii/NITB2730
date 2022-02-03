import React, { Component } from "react";
import Counter from "./Counter";
import Hover from "./Hover";

class HOCHome extends Component {
  render() {
    return (
      <div className="container mt-5 text-center">
        <div className="row">
          <Counter />
        </div>

        <div className="row mt-5">
          <Hover />
        </div>
      </div>
    );
  }
}

export default HOCHome;
