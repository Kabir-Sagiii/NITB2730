import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kabir",
      city: "Delhi",
    };
  }

  callProps = () => {
    this.props.updateParentState(this.state.name, this.state.city);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h2>Child Component</h2>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-outline-dark"
                  onClick={this.callProps}
                >
                  Send Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Child;
