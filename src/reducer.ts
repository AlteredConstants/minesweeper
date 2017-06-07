import { combineReducers } from 'redux';
import { Tile, State } from './index';
import { Action } from './action';

function updateInArray<T>(
  array: ReadonlyArray<T>,
  index: number,
  newProps: Partial<T>,
): ReadonlyArray<T> {
  // Can't use spread syntax yet: https://github.com/Microsoft/TypeScript/issues/10727
  return array.map(
    (item, loopIndex) =>
      index === loopIndex ? Object.assign({}, item, newProps) : item,
  );
}

function clearTile(tiles: ReadonlyArray<Tile>, tile: Tile) {
  if (tile.isCleared) {
    return tiles;
  }
  return updateInArray(tiles, tile.index, { isCleared: true });
}

function game(state: State['game'] = {}, action: Action): State['game'] {
  if (action.type === 'START_NEW_FIELD') {
    return { ...state, field: action.field };
  }

  // All the other actions require a field.
  if (!state.field) {
    return state;
  }

  switch (action.type) {
    case 'TOGGLE_FLAG_TILE': {
      const { tile: { index, isFlagged } } = action;
      return {
        ...state,
        field: {
          ...state.field,
          tiles: updateInArray(state.field.tiles, index, {
            isFlagged: !isFlagged,
          }),
        },
      };
    }

    case 'CLEAR_TILE': {
      return {
        ...state,
        field: {
          ...state.field,
          tiles: clearTile(state.field.tiles, action.tile),
        },
      };
    }

    case 'CLEAR_CONNECTED_SAFE_TILES': {
      return {
        ...state,
        field: {
          ...state.field,
          tiles: action.tiles.reduce(clearTile, state.field.tiles),
        },
      };
    }

    case 'TRIP_MINE': {
      return {
        ...state,
        field: {
          ...state.field,
          isExploded: true,
        },
      };
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({ game });
