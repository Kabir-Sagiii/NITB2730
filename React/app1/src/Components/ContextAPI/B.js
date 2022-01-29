import React, { Component } from "react";
import C from "./C";

class B extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h2>B Component</h2>
              </div>
              <div className="card-body">
                <C />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default B;
