import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Details(props) {
  const { id } = useParams();
  const [state, setState] = useState([]);

  const data = useSelector((storeData) => {
    return storeData;
  });

  useEffect(() => {
    const filteredData = data.userReducer.user.filter((e, i) => {
      return e.phone === id;
    });
    setState(filteredData);
  }, []);
  //

  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="row">
              <div className="col-4">
                <img
                  src={state.length > 0 ? state[0].picture.medium : ""}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-8">
                <h2>{state.length > 0 ? state[0].name.first : ""}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
