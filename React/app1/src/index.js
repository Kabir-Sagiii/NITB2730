import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Header from "./Components/Headers/Header";
// import Main from "./Components/Main/Main";
import { Provider } from "react-redux";
import store from "./Redux/ChatStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
