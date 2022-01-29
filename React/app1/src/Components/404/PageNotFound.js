import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center text-danger">
            <p className="display-1">Page Not Found</p>
          </div>
        </div>
      </div>
    );
  }
}
