import React, { Component } from "react";
import Name from "../Name/Name";
import nameAction from "../../Actions/NameAction";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  sendDataToAction = () => {
    nameAction(this.state.name);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2>Redux Concept</h2>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                />
                <button
                  className="btn btn-primary mx-3 mt-2"
                  onClick={this.sendDataToAction}
                >
                  Send
                </button>
              </div>
              <div className="card-footer">
                <Name />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
