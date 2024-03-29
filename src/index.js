import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";
import { WithPerformance } from "./modules/performance";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <WithPerformance />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
