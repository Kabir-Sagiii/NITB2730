import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
    };
  }

  updateParentState = (n, c) => {
    this.setState({
      name: n,
      city: c,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2>Parent Component</h2>
              </div>
              <div className="card-body">
                <Child updateParentState={this.updateParentState} />
              </div>

              <div className="card-footer">
                <p>NAME:{this.state.name}</p>
                <p>City:{this.state.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parent;
