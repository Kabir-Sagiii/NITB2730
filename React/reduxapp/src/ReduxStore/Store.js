import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import nameReducer from "../Reducers/NameReducer";
import cityReducer from "../Reducers/CityReducer";

const combinedReducers = combineReducers({
  nameReducer,
  cityReducer,
});

const myStore = createStore(combinedReducers, applyMiddleware(logger));

export default myStore;
