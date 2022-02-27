import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <h2 style={{ color: "cornsilk" }}>Welcome to React</h2>
        <p className="lead" style={{ color: "white", margin: "0px 50px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          architecto incidunt et hic quis obcaecati vel doloribus ea? Quisquam
          laboriosam, explicabo eveniet possimus totam dignissimos impedit
          consequatur nam ex, quam nulla? Officiis temporibus, eligendi sit
          ducimus sunt magnam optio libero.
        </p>
        <button className="btn btn-outline-danger">Explore More !!!</button>
      </div>
    </div>
  );
}

export default Home;
