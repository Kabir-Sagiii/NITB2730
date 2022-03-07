const userReducer = (
  state = {
    user: [],
  },
  action
) => {
  switch (action.type) {
    case "USER":
      state = {
        ...state,
        user: action.payload,
      };
      break;
  }
  return state;
};

export default userReducer;
