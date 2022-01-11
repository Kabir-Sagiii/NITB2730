import React from "react";
import Address from "./Address";

class Person extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Kabir",
      city: "Delhi",
    };
  }
  updateState = () => {
    this.setState({
      name: "NIT",
      city: "Hyd",
    });
  };

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <button className="btn btn-primary" onClick={this.updateState}>
          Update Data
        </button>
        <p>---------------------------------------</p>
        {/* <Address name="NIT" city="HYD" /> */}
        <Address n={this.state.name} c={this.state.city} />
      </div>
    );
  }
}

export default Person;
