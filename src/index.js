import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import ScrollToTop from "./utilities/scrollToTop";
import App from "./App";

import Mock from "./state/mock";
import "./state/database";
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import { configureStore } from "webapp/_store";

Mock.onAny().passThrough();

const {store,persistor} = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
