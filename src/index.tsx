import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import { startNewField } from './action';
import App from './App';
import './index.css';

// Beginner: 9x9x10
// Intermediate: 16x16x40
// Expert: 30x16x99

export interface Tile {
  readonly index: number;
  readonly row: number;
  readonly column: number;
  readonly isMine: boolean;
  readonly adjacentMineCount: number;
  readonly isCleared: boolean;
  readonly isFlagged: boolean;
};

export interface Field {
  readonly width: number;
  readonly height: number;
  readonly mineCount: number;
  readonly tiles: ReadonlyArray<Tile>;
  readonly isExploded: boolean;
};

export interface State {
  field: Field | null;
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'),
);

store.dispatch(startNewField());
