import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { startNewField } from './action';
import App from './App';

// Beginner: 9x9x10
// Intermediate: 16x16x40
// Expert: 30x16x99

const FieldWidth = 30;
const FieldHeight = 16;
const MineCount = 99;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

store.dispatch(startNewField({width: FieldWidth, height: FieldHeight, mineCount: MineCount}));