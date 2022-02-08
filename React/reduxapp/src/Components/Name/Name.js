import React, { Component } from "react";
// import myStore from "../../ReduxStore/Store";
import { connect } from "react-redux";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    console.log(this.props.data.nameReducer.name);
  }

  render() {
    return (
      <div>
        <h4>Name:{this.props.data.nameReducer.name}</h4>
      </div>
    );
  }
}

export default connect((storeData) => {
  return {
    data: storeData,
  };
}, null)(Name);
