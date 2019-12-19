import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";
axios.defaults.headers.common["Content-Type"] = "application/json";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
