import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducer from "../Reducers/userReducer";
import logger from "redux-logger";

const cb = combineReducers({
  userReducer,
});

const store = createStore(cb, applyMiddleware(logger));
export default store;
