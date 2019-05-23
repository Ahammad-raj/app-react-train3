import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import logger from 'redux-logger'


import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./redux";
import { watcherSaga } from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();

