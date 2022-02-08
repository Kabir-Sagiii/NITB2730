import myStore from "../ReduxStore/Store";
const nameAction = (data) => {
  myStore.dispatch({
    type: "NAME",
    payload: data,
  });
};

export default nameAction;
