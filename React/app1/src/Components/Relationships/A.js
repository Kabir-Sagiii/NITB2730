import React, { Component } from "react";
import Home from "./Home";
import B from "./B";

export default class A extends Component {
  render() {
    return (
      <div>
        <h2>A Component</h2>
        <Home />

        <B />
      </div>
    );
  }
}
