import React from "react";
import Profile from "./Profile/Profile";
import Content from "./Content/Content";

class ImageDivHome extends React.Component {
  render() {
    return (
      <div id="imgDiv">
        <Profile />
        <Content />
      </div>
    );
  }
}
export default ImageDivHome;
