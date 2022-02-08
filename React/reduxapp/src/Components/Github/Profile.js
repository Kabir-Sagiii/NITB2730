import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { name, bio, avatar_url } = this.props.storeData;
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img
                  src={
                    avatar_url ||
                    "https://th.bing.com/th/id/OIP.zCwu_6DK9X3hczk_iF4MBgHaEM?w=284&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  }
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <h3>{name}</h3>
                <p>
                  {bio} || Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cum doloremque aperiam sequi hic iure labore architecto
                  perferendis officia, alias cumque?
                </p>
                <button className="btn btn-danger px-3">Profile</button>
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
    storeData: storeData.githubReducer.user,
  };
}, null)(Profile);
