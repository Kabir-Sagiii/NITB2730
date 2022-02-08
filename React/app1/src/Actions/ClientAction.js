const clientAction = (data, dispatch) => {
  dispatch({
    type: "CLIENT",
    clientData: data,
  });
};

export default clientAction;
