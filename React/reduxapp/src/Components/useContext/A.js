import React, { useState } from "react";
import B from "./B";
import myContext from "./Context";

function A() {
  const [state, setState] = useState({
    name: "",
    city: "",
  });
  return (
    <div>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState({
            name: "NIT",
            city: "Hyd",
          });
        }}
      >
        Send Data to C
      </button>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}
export default A;
