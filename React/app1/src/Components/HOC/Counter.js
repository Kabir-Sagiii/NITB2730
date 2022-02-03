import React, { Component } from "react";
import fnHoc from "./HOC";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <p className="display-6">
          {this.props.name} clicked me {this.props.count} Times
        </p>
        <button
          className="btn btn-outline-primary"
          onClick={this.props.updateCount}
        >
          Update Count
        </button>
      </div>
    );
  }
}

export default fnHoc(Counter, { countVal: 100, name: "Button" });
