import React, { Component } from 'react';
import './App.css';
import FieldModel from './model/Field';
import Field from './Field';

// Beginner: 9x9x10
// Intermediate: 16x16x40
// Expert: 30x16x99

const FieldWidth = 30;
const FieldHeight = 16;
const MineCount = 99;

class App extends Component {
  state = { field: null };

  componentDidMount() {
    const field = new FieldModel({width: FieldWidth, height: FieldHeight, mineCount: MineCount});
    this.setState({ field });
  }

  clearTile = (tile) => {
    if (!tile.isClearable()) { return; }
    this.setState(s => ({ field: s.field.clearTile(tile) }));
  };

  render() {
    if (!this.state.field) {
      return <strong>Loading...</strong>;
    }
    return (
      <div className="App">
        <header>
          <h1>Minesweeper</h1>
        </header>
        <Field field={this.state.field} onClearTile={this.clearTile} />
      </div>
    );
  }
}

export default App;
