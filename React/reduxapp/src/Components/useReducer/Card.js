import React, { useReducer } from "react";

const cardReducer = (state, action) => {
  switch (action.type) {
    case "CAR":
      state = action.payload;

      break;
    case "BIKE":
      state = action.payload;
  }
  return state;
};

function Card() {
  const [state, dispatch] = useReducer(cardReducer, {
    Image:
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    Name: "Tata Car",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim",
  });

  const updateCar = () => {
    dispatch({
      type: "CAR",
      payload: {
        Image:
          "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        Name: "Rapidocar",
        bio: "This is new fastest car in the world",
      },
    });
  };

  const updateBike = () => {
    dispatch({
      type: "BIKE",
      payload: {
        Image:
          "https://images.pexels.com/photos/2317519/pexels-photo-2317519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        Name: "Honda Bike",
        bio: "This is new fastest Bike in the world",
      },
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card">
            <div className="card-header">
              <img src={state.Image} className="img-fluid" />
            </div>
            <div className="card-body">
              <h2>{state.Name}</h2>
              <p>{state.bio}</p>
              <button className="btn btn-outline-danger" onClick={updateCar}>
                Car
              </button>
              <button
                className="btn btn-outline-danger mx-3"
                onClick={updateBike}
              >
                Bike
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
