import React from "react";

class MountingPhase extends React.Component {
  componentDidMount() {
    console.log("componentDidMount is called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called");
  }
  constructor() {
    super();
    console.log("constructor is called");
  }

  render() {
    console.log("Render is called");
    return (
      <div>
        <h2>Mounting Component</h2>
      </div>
    );
  }
}

export default MountingPhase;
