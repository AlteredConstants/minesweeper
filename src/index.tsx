import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import reducer from "./reducer";
import * as serviceWorker from "./serviceWorker";
import { deserialize, serialize } from "./util/fieldSerialization";

const fieldString = localStorage.getItem("field");
const initialField = fieldString ? deserialize(fieldString) : undefined;
const initialState = { field: initialField };

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  const { field } = store.getState();
  if (field.state === "init") {
    localStorage.removeItem("field");
  } else {
    localStorage.setItem("field", serialize(field));
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
