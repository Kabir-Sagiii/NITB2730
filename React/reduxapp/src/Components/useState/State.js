import React, { useState } from "react";

function State() {
  const [state, setState] = useState(100);
  const [name, setName] = useState("NIT");
  var updateData = () => {
    setState(500);
    setName("Naresh Tech");
  };
  return (
    <div>
      <h2>Welcome to {state}</h2>
      <p>{name}</p>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default State;
