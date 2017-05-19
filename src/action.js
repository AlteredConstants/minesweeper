// @flow
import { createField, getConnectedSafeTiles } from './util';
import type { Tile, Field } from './util';

const DefaultField = { width: 30, height: 16, mineCount: 99 };

export function startNewField(
  options: {
    width: number,
    height: number,
    mineCount: number,
  } = DefaultField,
) {
  return {
    type: 'START_NEW_FIELD',
    payload: createField(options),
  };
}

export function toggleFlagTile(tile: Tile) {
  return {
    type: 'TOGGLE_FLAG_TILE',
    payload: { tile },
  };
}

export function clearTile(tile: Tile) {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLEAR_TILE',
      payload: { tile },
    });
    if (tile.isCleared) {
      return;
    }
    if (tile.isMine) {
      dispatch(tripMine());
    } else if (tile.adjacentMineCount === 0) {
      const { field } = getState();
      dispatch(clearConnectedSafeTiles(field, tile));
    }
  };
}

export function clearConnectedSafeTiles(field: Field, tile: Tile) {
  return {
    type: 'CLEAR_CONNECTED_SAFE_TILES',
    payload: getConnectedSafeTiles(field, tile),
  };
}

export function tripMine() {
  return {
    type: 'TRIP_MINE',
  };
}
