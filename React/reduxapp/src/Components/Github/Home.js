import React, { Component } from "react";
import Details from "./Details";
import Profile from "./Profile";
import Search from "./Search";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Search />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <Profile />
          </div>
          <div className="col-8">
            <Details />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
