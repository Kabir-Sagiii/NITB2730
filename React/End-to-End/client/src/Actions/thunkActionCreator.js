const actionCreator = (data) => {
  debugger;
  return (dispatch, getState) => {
    debugger;
    console.log(!(getState().userReducer.user.length === 10));
    if (!(getState().userReducer.user.length === 10)) {
      dispatch({
        type: "USER",
        payload: data,
      });
      console.log("Action Creator");
    } else {
      console.log("no need to call dispatch");
    }
  };
};

export default actionCreator;
