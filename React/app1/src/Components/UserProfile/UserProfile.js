import React, { Component } from "react";
import axios from "axios";

class UserProfile extends Component {
  clearInterval;
  fetchUserInfo = () => {
    this.clearInterval = setInterval(() => {
      axios.get("https://randomuser.me/api/?results=1").then(
        (res) => {
          console.log(res.data.results[0]);
          this.setState({
            imgurl: res.data.results[0].picture.large,

            name: res.data.results[0].name.first,
            city: res.data.results[0].location.city,
            Email: res.data.results[0].email,
          });
        },
        (errorMsg) => {
          clearInterval(this.clearInterval);
          this.setState({
            name: "",
            imgurl: "",
            email: "",
            city: "",
          });
          alert("Error while fetching user Information");
          console.log(errorMsg);
        }
      );
    }, 2000);
  };

  constructor(props) {
    super(props);

    this.state = {
      imgurl:
        "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      name: "Naresh",
      city: "Vizag",
      Email: "Naresh@gmail.com",
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            {this.state.name !== "" ? (
              <div className="card p-3">
                <div className="row">
                  <div className="col-4">
                    <img
                      width="100%"
                      height="100%"
                      src={this.state.imgurl}
                      className="img-fluid"
                      alt="User Image"
                    />
                  </div>
                  <div className="col-8">
                    <p>{this.state.name}</p>
                    <p>{this.state.city}</p>
                    <p>{this.state.Email}</p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Maiores aliquam vel explicabo laboriosam perspiciatis qui
                      id officiis, obcaecati corrupti quos officia facilis.
                      Veniam ipsam deserunt quidem debitis consectetur quia
                      facere eius, totam ducimus. Assumenda aliquam consequatur
                      necessitatibus? Dolore, mollitia aut.
                    </p>
                    <button
                      className="btn btn-warning text-white"
                      onClick={this.fetchUserInfo}
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <h2 className="text-danger text-center">No Data</h2>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
