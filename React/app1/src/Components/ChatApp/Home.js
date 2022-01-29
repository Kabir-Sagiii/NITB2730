import React, { Component } from "react";
import Client from "./Client";
import Server from "./Server";

class Home extends Component {
  render() {
    return (
      <div className="container bg-danger mt-5 p-5">
        <div className="row text-white">
          <h2>Home Component</h2>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <Client />
          </div>

          <div className="col-6">
            <Server />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
