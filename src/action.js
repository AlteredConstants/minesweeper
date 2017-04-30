import { createField } from './util';

export function startNewField(initProps = { width: 30, height: 16, mineCount: 99 }) {
  return {
    type: 'START_NEW_FIELD',
    payload: createField(initProps),
  };
}

export function toggleFlagTile(tile) {
  return {
    type: 'TOGGLE_FLAG_TILE',
    payload: { tile },
  };
}

export function clearTile(field, tile) {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_TILE',
      payload: { tile },
    });
    if (tile.isMine) {
      dispatch(tripMine());
    }
  };
}

export function tripMine() {
  return {
    type: 'TRIP_MINE',
  };
}
