import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <span>Home</span>
        <span>Profile</span>
        <span>Resume</span>
        <span>Projects</span>
      </div>
    );
  }
}

export default Menu;
