import React, { useContext } from "react";
import myContext from "./Context";

function C() {
  const contextData = useContext(myContext);
  return (
    <div>
      <h2>C Component</h2>
      <p>NAME:{contextData.name}</p>
      <p>City:{contextData.city}</p>
    </div>
  );
}
export default C;
