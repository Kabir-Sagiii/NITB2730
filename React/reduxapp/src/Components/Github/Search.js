import React, { Component } from "react";
import axios from "axios";
import githubAction from "../../Actions/GithubAction";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  getUserInfo = () => {
    axios.get(`https://api.github.com/users/${this.state.username}`).then(
      (res) => {
        githubAction(res.data);
      },
      () => {}
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h2>GITHUB SEARCH</h2>
              </div>
              <div className="card-body ">
                <div className="col-8 d-flex">
                  <input
                    onChange={(event) => {
                      this.setState({
                        username: event.target.value,
                      });
                    }}
                    placeholder="Enter Username"
                    type="text"
                    className="form-control"
                  />
                  <button
                    className="btn px-5 btn-primary mx-3"
                    onClick={this.getUserInfo}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
