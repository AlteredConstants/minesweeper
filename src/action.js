import { createField, getConnectedSafeTiles } from './util';

const DefaultField = { width: 30, height: 16, mineCount: 99 };

export function startNewField(options = DefaultField) {
  return {
    type: 'START_NEW_FIELD',
    field: createField(options),
  };
}

export function toggleFlagTile(tile) {
  return {
    type: 'TOGGLE_FLAG_TILE',
    tile,
  };
}

export function clearTile(tile) {
  return {
    type: 'CLEAR_TILE',
    tile,
  };
}

export function clearConnectedSafeTiles(field, tile) {
  return {
    type: 'CLEAR_CONNECTED_SAFE_TILES',
    originTile: tile,
    tiles: getConnectedSafeTiles(field, tile),
  };
}

export function tripMine() {
  return {
    type: 'TRIP_MINE',
  };
}

export function clear(tile) {
  return (dispatch, getState) => {
    dispatch(clearTile(tile));
    if (tile.isCleared) {
      return;
    }
    if (tile.isMine) {
      dispatch(tripMine());
    } else if (tile.adjacentMineCount === 0) {
      const { game: { field } } = getState();
      if (field) {
        dispatch(clearConnectedSafeTiles(field, tile));
      }
    }
  };
}
