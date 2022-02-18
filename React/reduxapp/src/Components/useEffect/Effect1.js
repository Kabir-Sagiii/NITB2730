import React, { useState, useEffect } from "react";

function Effect1() {
  const [state, setState] = useState("ComponentDidMount LCMEthod");
  const [name, setName] = useState("NIT");
  const [city, setCity] = useState("Hyd");

  useEffect(() => {
    console.log(state);
  }, [name, city]);

  return (
    <div>
      <h2>Component called {state}</h2>
      <p>
        My name is {name} and I am from {city}
      </p>
      <button
        onClick={() => {
          //   setState("ComponentDidUpdate");
          //   setName("Naresh IT");
          setCity("Delhi");
        }}
      >
        Update State
      </button>
    </div>
  );
}

export default Effect1;
