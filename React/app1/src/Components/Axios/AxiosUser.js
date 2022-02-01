import React, { Component } from "react";
import Axios from "axios"; // Imported axios library

class AxiosUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        console.log(response.data);
        this.setState({
          userInfo: response.data,
        });
      },
      (errorMsg) => {
        alert("Error While Getting the data");
        console.log(errorMsg);
      }
    );
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col p-3">
            <button
              className="btn btn-outline-primary"
              onClick={this.getUserData}
            >
              Get Information
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              {this.state.userInfo.length > 0 ? (
                <div>
                  {this.state.userInfo.map((element, index) => {
                    return (
                      <ul className="list-group mt-3">
                        <li className="list-group-item">{element.name}</li>
                        <li className="list-group-item">
                          {element.address.city}
                        </li>
                      </ul>
                    );
                  })}{" "}
                </div>
              ) : (
                <h3 className="text-danger">No Data</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AxiosUser;
