import { createStore, combineReducers, applyMiddleware } from "redux";
import clientReducer from "../Reducers/ClientReducer";
import logger from "redux-logger";

const cb = combineReducers({
  CR: clientReducer,
});

const store = createStore(cb, applyMiddleware(logger));

export default store;
