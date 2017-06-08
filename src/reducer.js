// @flow
import { combineReducers } from 'redux';
import { updateInArray, updateInObject } from './util';
import type { Action } from './action';

function updateField(game, newProps) {
  return game.field ? updateInObject(game, 'field', newProps) : game;
}

function updateTile(game, indexes, newProps) {
  return game.field
    ? updateField(game, {
        tiles: updateInArray(game.field.tiles, indexes, newProps),
      })
    : game;
}

function gameReducer(state: Mine$Game = {}, action: Action): Mine$Game {
  switch (action.type) {
    case 'START_NEW_FIELD': {
      return { ...state, field: action.field };
    }

    case 'TOGGLE_FLAG_TILE': {
      const { tile } = action;
      return updateTile(state, tile.index, { isFlagged: !tile.isFlagged });
    }

    case 'CLEAR_TILE': {
      return updateTile(state, action.tile.index, { isCleared: true });
    }

    case 'CLEAR_CONNECTED_SAFE_TILES': {
      const indexes = action.tiles.map(tile => tile.index);
      return updateTile(state, indexes, { isCleared: true });
    }

    case 'TRIP_MINE': {
      return updateField(state, { isExploded: true });
    }

    default: {
      return state;
    }
  }
}

const reducers = { game: gameReducer };

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<typeof reducers, $ExtractFunctionReturn>;

export default combineReducers(reducers);
