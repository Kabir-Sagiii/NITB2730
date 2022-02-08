const defaultData = {
  user: {},
};

const githubReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "USER":
      state = {
        ...state,
        user: action.payload,
      };
  }
  return state;
};

export default githubReducer;
