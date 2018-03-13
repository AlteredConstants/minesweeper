import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import reducer from "./reducer";
import registerServiceWorker from "./registerServiceWorker";
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
  localStorage.setItem("field", serialize(field));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

registerServiceWorker();
