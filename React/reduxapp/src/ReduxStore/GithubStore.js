import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import githubReducer from "../Reducers/GithubReducer";

const combinedReducer = combineReducers({
  githubReducer,
});

const githubstore = createStore(combinedReducer, applyMiddleware(logger));
export default githubstore;
