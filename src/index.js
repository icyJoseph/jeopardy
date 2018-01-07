import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./components/App";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const initialState = { categories: [] };

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
