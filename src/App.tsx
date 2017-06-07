import * as React from 'react';
import { connect } from 'react-redux';
import { keyframes } from 'glamor';
import glamorous from 'glamorous';
import { State } from './index';
import { startNewField } from './action';
import Field from './Field';

type OverlayContainerProps = { isExploded: boolean };
const OverlayContainer = glamorous.div<OverlayContainerProps>(
  {
    position: 'relative',
    width: 'fit-content',
    margin: 'auto',
    userSelect: 'none',
  },
  ({ isExploded }) => ({
    cursor: isExploded ? 'pointer' : 'url(./bomb-detector.png) 0 32, default',
  }),
);

type OverlayProps = { show: boolean };
const Overlay = glamorous.div<OverlayProps>(
  {
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
  },
  props => {
    const flash = keyframes({
      '0%': { backgroundColor: 'rgba(255, 87, 34, 0.6)', fontSize: '1.5em' },
      '100%': { backgroundColor: 'rgba(255, 0, 0, 0.7)', fontSize: '1.6em' },
    });
    return {
      opacity: props.show ? 1 : 0,
      visibility: props.show ? 'visible' : 'hidden',
      animation: `${flash} 1.5s infinite ease-in-out alternate`,
    };
  },
);

type AppStateProps = {
  isExploded?: boolean;
};
type AppDispatchProps = {
  onReset: () => void;
};
const App = ({
  isExploded = false,
  onReset,
}: AppStateProps & AppDispatchProps) =>
  <div className="App">
    <header>
      <h1>Minesweeper</h1>
    </header>
    <OverlayContainer isExploded={isExploded}>
      <Field />
      <Overlay show={isExploded} onClick={() => onReset()}>💣 Boom 💣</Overlay>
    </OverlayContainer>
  </div>;

export default connect<AppStateProps, AppDispatchProps, {}>(
  (state: State) => ({
    isExploded: state.game.field && state.game.field.isExploded,
  }),
  { onReset: startNewField },
)(App);
