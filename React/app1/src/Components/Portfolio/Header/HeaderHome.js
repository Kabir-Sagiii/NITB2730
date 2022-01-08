import React from "react";
import Brand from "./Brand/Brand";
import Menu from "./Menu/Menu";
import "./HeaderHome.css";

class HeaderHome extends React.Component {
  render() {
    return (
      <div id="header">
        <Brand />
        <Menu />
      </div>
    );
  }
}

export default HeaderHome;
