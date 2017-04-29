import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { css } from 'glamor';
import glamorous, { Div } from 'glamorous';
import { startNewField } from './action';
import Field from './Field';

const Overlay = glamorous.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  margin: 0,
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'visibility 0ms 0ms, opacity 100ms ease-out',
}, (props) => {
  const flash = css.keyframes({
    '0%': { backgroundColor: 'rgba(255, 87, 34, 0.6)', fontSize: '1.5em' },
    '100%': { backgroundColor: 'rgba(255, 0, 0, 0.7)', fontSize: '1.6em' },
  });
  return {
    opacity: props.show ? 1 : 0,
    visibility: props.show ? 'visible' : 'hidden',
    animation: `${flash} 1.5s infinite ease-in-out alternate`,
  };
});

export default connect(
  state => ({ isExploded: state.field && state.field.isExploded }),
  dispatch => ({ onReset: compose(dispatch, () => startNewField()) }),
)(
  function App({ isExploded, onReset }) {
    return (
      <div className="App">
        <header>
          <h1>Minesweeper</h1>
        </header>
        <Div css={{
          position: 'relative',
          width: 'fit-content',
          margin: 'auto',
        }}>
          <Field />
          <Overlay show={isExploded} onClick={onReset}>💣 Boom 💣</Overlay>
        </Div>
      </div>
    );
  }
);
