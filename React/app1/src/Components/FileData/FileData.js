import React, { Component } from "react";
import { information } from "../../Data";
import { user } from "../../userData";

class FileData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: information,
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

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
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
                {this.state.userInfo.results.map((element) => {
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
