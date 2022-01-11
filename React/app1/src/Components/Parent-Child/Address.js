import React from "react";

class Address extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Child Component</h2>
        {/* <p>{this.props.name}</p>

        <p>{this.props.city}</p> */}

        <p className="text-primary">{this.props.n}</p>
        <p className="text-danger">{this.props.c}</p>
      </div>
    );
  }
}

export default Address;
