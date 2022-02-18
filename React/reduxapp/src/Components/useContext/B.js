import React, { useContext } from "react";
import C from "./C";
import myContext from "./Context";

function B() {
  const contextData = useContext(myContext);
  return (
    <>
      <h2>B Component</h2>
      <p>{contextData.city}</p>
      <C />
    </>
  );
}
export default B;
