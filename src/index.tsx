import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { startNewField } from "./action";
import App from "./App";
import "./index.css";
import reducer from "./reducer";
import registerServiceWorker from "./registerServiceWorker";

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
