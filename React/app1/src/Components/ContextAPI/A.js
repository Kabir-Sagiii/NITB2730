import React, { Component } from "react";
import B from "./B";
import myContext from "./contextObject";

class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "NIT",
      city: "Hyd",
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2>A Component</h2>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.setState({
                      name: "Kabir",
                      city: "Delhi",
                    });
                  }}
                >
                  UpdateState
                </button>
              </div>
              <div className="card-body">
                <myContext.Provider value={this.state}>
                  <B />
                </myContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default A;
