import githubstore from "../ReduxStore/GithubStore";
const githubAction = (data) => {
  githubstore.dispatch({
    type: "USER",
    payload: data,
  });
};
export default githubAction;
