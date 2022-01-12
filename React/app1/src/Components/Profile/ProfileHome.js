import React, { Component } from "react";
import Profile from "./Profile";

class ProfileHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Profile
              img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              name="Chris"
            />
          </div>
          <div className="col-4">
            <Profile
              img="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              name="Adam"
            />
          </div>
          <div className="col-4">
            <Profile
              img="https://images.pexels.com/photos/7651715/pexels-photo-7651715.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              name="Jenny"
            />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-4">
            <Profile />
          </div>
          <div className="col-4">
            <Profile />
          </div>
          <div className="col-4">
            <Profile />
          </div>
        </div> */}
      </div>
    );
  }
}
export default ProfileHome;
