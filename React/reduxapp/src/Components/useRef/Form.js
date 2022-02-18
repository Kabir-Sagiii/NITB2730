import React, { useRef } from "react";

function Form() {
  const inputText = useRef();
  const inputPassword = useRef();
  const getData = () => {
    console.log(inputText.current.value, inputPassword.current.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card">
            <div className="card-header">
              <h3>Login Form</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <input
                  ref={inputText}
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  ref={inputPassword}
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <br />
              <button className="btn btn-primary mx-3" onClick={getData}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
