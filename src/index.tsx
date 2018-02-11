import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducer";
import { startNewField } from "./action";

// Beginner: 9x9x10
// Intermediate: 16x16x40
// Expert: 30x16x99

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

store.dispatch(startNewField());
registerServiceWorker();
