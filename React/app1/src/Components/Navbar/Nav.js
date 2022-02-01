import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            React Props Concept
          </a>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/state" className="nav-link text-white">
                State
              </Link>
            </li>
            <li>
              <Link to="/axios" className="nav-link text-white">
                Axios
              </Link>
            </li>
            <li>
              <Link to="/chat" className="nav-link text-white">
                Chatapp
              </Link>
            </li>
            <li>
              <Link to="/contextapi" className="nav-link text-white">
                ContextAPI
              </Link>
            </li>
            <li>
              <Link to="/contexttask" className="nav-link text-white">
                Context_Task
              </Link>
            </li>
            <li>
              <Link to="/MP" className="nav-link text-white">
                MoutingPhase
              </Link>
            </li>
            <li>
              <Link to="/UP" className="nav-link text-white">
                UpdatingPhase
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
