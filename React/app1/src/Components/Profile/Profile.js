import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img src={this.props.img} width="100%" height="100%" />
              </div>
              <div className="card-body">
                <h4>{this.props.name}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, quidem.
                </p>
                <button className="btn btn-outline-primary">Explore </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
