import storeInformation from "../InitialData";
const nameReducer = (state = storeInformation, action) => {
  switch (action.type) {
    case "NAME":
      state = {
        ...state,
        name: action.payload, //insertion or updation
      };
      break;
    case "CITY":
      state = {
        ...state,
        city: action.payload,
      };
      break;
  }

  return state;
};

export default nameReducer;
