import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers";
import middleware from "./middleware";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(middleware);

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
