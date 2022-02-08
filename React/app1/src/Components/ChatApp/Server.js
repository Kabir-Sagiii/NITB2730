import React, { Component } from "react";
import { connect } from "react-redux";

class Server extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h2>Server Component</h2>
              </div>
              <div className="card-body">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Msg"
                />
                <button className="btn mt-3 px-4 btn-primary">Send</button>
              </div>

              <div className="card-footer">
                <h4>{this.props.data}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect((storeData) => {
  return {
    data: storeData.CR.clientMsg,
  };
}, null)(Server);
