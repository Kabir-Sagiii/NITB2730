import React, { Component } from "react";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientValue: "",
    };

    this.inputRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  getMsg = () => {
    console.log(this.inputRef.current.value);
    console.log(this.passwordRef.current.innerText);
    alert(this.state.clientValue);
  };

  stateUpdated = (event) => {
    this.setState({
      clientValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2 ref={this.passwordRef}>Client Component</h2>
              </div>
              <div className="card-body">
                <input
                  ref={this.inputRef}
                  className="form-control"
                  type="text"
                  onChange={this.stateUpdated}
                  placeholder="Enter Msg"
                />

                <button
                  className="btn mt-3 px-4 btn-primary"
                  onClick={this.getMsg}
                >
                  Send
                </button>
              </div>

              <div className="card-footer">
                <h4>Server Component Data</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
