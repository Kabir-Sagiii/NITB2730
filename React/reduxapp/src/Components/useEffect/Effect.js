import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    console.log("dscds");
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUserName(res.data[0].name);
    });
  });
  return (
    <div>
      <h2>NAME:{userName}</h2>
    </div>
  );
};

export default Effect;
