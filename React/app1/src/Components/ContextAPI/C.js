import React, { Component } from "react";
import D from "./D";
import myContext from "./contextObject";

class C extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h2>C Component</h2>
                <myContext.Consumer>
                  {(contextdata) => {
                    return <p>{contextdata.city}</p>;
                  }}
                </myContext.Consumer>
              </div>
              <div className="card-body">
                <D />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default C;
