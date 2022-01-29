import React, { Component } from "react";
import myContext from "./contextObject";

class D extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h2>D Component</h2>
              </div>
              <div className="card-body">
                <myContext.Consumer>
                  {(data) => {
                    return (
                      <div>
                        <p>{data.name}</p>
                        <p>{data.city}</p>
                      </div>
                    );
                  }}
                </myContext.Consumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default D;
