import React, { Component } from "react";
import fnHoc from "./HOC";

class Hover extends Component {
  render() {
    return (
      <div className="container">
        <p className="lead display-6" onMouseOver={this.props.updateCount}>
          {this.props.name} Hovered me {this.props.count} Times
        </p>
      </div>
    );
  }
}

export default fnHoc(Hover, { countVal: 1000, name: "Hover" });
