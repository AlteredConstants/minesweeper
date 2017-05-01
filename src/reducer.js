import { combineReducers } from 'redux';
import { set } from 'lodash/fp';

function updateTile({ field, tile, newProps }) {
  return set(`tiles[${tile.index}]`, { ...tile, ...newProps }, field);
}

function clearTile(field, tile) {
  if (tile.isCleared) {
    return field;
  }
  return updateTile({ field, tile, newProps: { isCleared: true } });
}

function fieldReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case 'START_NEW_FIELD': {
      return payload;
    }

    case 'TOGGLE_FLAG_TILE': {
      const { tile } = payload;
      return updateTile({
        field: state,
        tile,
        newProps: {
          isFlagged: !tile.isFlagged,
        },
      });
    }

    case 'CLEAR_TILE': {
      const { tile } = payload;
      return clearTile(state, tile);
    }

    case 'CLEAR_CONNECTED_SAFE_TILES': {
      const tiles = payload;
      return tiles.reduce(clearTile, state);
    }

    case 'TRIP_MINE': {
      return { ...state, isExploded: true };
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({ field: fieldReducer });
