import React from "react";
import Address from "./Address";
import PersonalDetails from "./PersonalDetails";
import Login from "./Login.js";
import axios from "axios";
import userContext from "./UserContext";

class ContextHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };
  }

  componentDidMount() {
    this.getDataFromServer();
  }

  getDataFromServer = async () => {
    this.data = await axios.get("https://randomuser.me/api/?results=1");
    console.log(this.data.data.results);
    this.setState({
      userInfo: this.data.data.results,
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img
                    src={
                      this.state.userInfo.length > 0
                        ? this.state.userInfo[0].picture.medium
                        : ""
                    }
                    className="img-fluid"
                  />
                </div>
                <userContext.Provider value={this.state.userInfo[0]}>
                  <div className="col-8">
                    <div className="row">
                      <PersonalDetails />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Address />
                      </div>
                      <div className="col-6">
                        <Login />
                      </div>
                    </div>
                  </div>
                </userContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContextHome;
