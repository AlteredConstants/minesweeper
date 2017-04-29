import { combineReducers } from 'redux';
import { set } from 'lodash/fp';

function updateTile({ field, tile, newProps }) {
  return set(
    `tiles[${tile.row}][${tile.column}]`,
    { ...tile, ...newProps },
    field,
  );
}

function fieldReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case 'START_NEW_FIELD': {
      return payload;
    }

    case 'TOGGLE_FLAG_TILE': {
      const { tile } = payload;
      return updateTile({ field: state, tile, newProps: {
        isFlagged: !tile.isFlagged,
      }});
    }

    case 'CLEAR_TILE': {
      const { tile, adjacentMineCount } = payload;
      if (tile.isCleared) {
        return state;
      }
      return updateTile({ field: state, tile, newProps: {
        isCleared: true,
        adjacentMineCount: adjacentMineCount,
      }});
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
