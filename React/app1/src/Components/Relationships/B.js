import React, { Component } from "react";

export default class B extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "NIT",
    };
  }

  render() {
    return (
      <div>
        <h2>B Component</h2>
      </div>
    );
  }
}
