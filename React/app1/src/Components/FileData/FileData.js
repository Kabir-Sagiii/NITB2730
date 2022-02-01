import React, { Component } from "react";
import { information } from "../../Data";
import { user } from "../../userData";

class FileData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: user.results,
    };
  }

  updateData = () => {
    this.setState({
      userInfo: user,
    });
  };

  previousData = () => {
    this.setState({
      userInfo: information,
    });
  };

  filterUserData = (event) => {
    if (event.target.value === "male") {
      this.filterData = user.results.filter((ele) => {
        return ele.gender === "male";
      });
      console.log(this.filterData);
      this.setState({
        userInfo: this.filterData,
      });
    } else if (event.target.value === "female") {
      this.filterData = user.results.filter((ele) => {
        return ele.gender === "female";
      });
      console.log(this.filterData);
      this.setState({
        userInfo: this.filterData,
      });
    } else {
      this.setState({
        userInfo: user.results,
      });
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <input
              type="radio"
              name="gender"
              value="all"
              onChange={this.filterUserData}
            />{" "}
            ALL
          </div>
          <div className="col-4">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.filterUserData}
            />{" "}
            Male
          </div>
          <div className="col-4">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.filterUserData}
            />{" "}
            Female
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <button className="btn btn-primary" onClick={this.updateData}>
              Update Information
            </button>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={this.previousData}>
              Previous Information
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>EMAIL ID</th>
                  <th>CITY</th>
                </tr>
              </thead>
              <tbody>
                {this.state.userInfo.map((element) => {
                  console.log(element);
                  return (
                    <tr>
                      <td>
                        <img
                          src={element.picture.large}
                          alt="Profile Picture"
                        />
                      </td>
                      <td>
                        {element.name.first}
                        {element.name.last}
                      </td>
                      <td>{element.gender}</td>
                      <td>{element.email}</td>
                      <td>{element.location.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default FileData;
