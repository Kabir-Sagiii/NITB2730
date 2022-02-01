import React from "react";

class UpdatePhase extends React.Component {
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps is called");
  }

  componentWillUnmount() {
    alert("Component will be removed");
    console.log("componentWillUnmount is called");
  }

  shouldComponentUpdate(props, state) {
    // console.log(state.count === this.state.count);
    console.log("shouldComponentUpdate is called");
    // return false;
    if (state.count === this.state.count) {
      return false;
    } else {
      return true;
    }
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate is called");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Constructor is called");
  }
  render() {
    console.log("Render is called");
    return (
      <div className="container mt-5 text-center">
        <p className="display-6 text-peimary">Counter : {this.state.count}</p>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Counter
        </button>
      </div>
    );
  }
}

export default UpdatePhase;
