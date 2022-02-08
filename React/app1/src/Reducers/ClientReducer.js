const clientReducer = (state = { clientMsg: "" }, action) => {
  switch (action.type) {
    case "CLIENT":
      state = {
        ...state,
        clientMsg: action.clientData,
      };
      break;
  }

  return state;
};

export default clientReducer;
