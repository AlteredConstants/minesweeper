// @flow
import { combineReducers } from 'redux';
import { set } from 'lodash/fp';
import type { Action } from './action';

function updateTile(
  field: Mine$Field,
  tile: Mine$Tile,
  newProps: Mine$PartialTile,
): Mine$Field {
  return set(`tiles[${tile.index}]`, { ...tile, ...newProps }, field);
}

function clearTile(field, tile) {
  return tile.isCleared ? field : updateTile(field, tile, { isCleared: true });
}

type FieldState = ?Mine$Field;
function fieldReducer(state: FieldState = null, action: Action): FieldState {
  switch (action.type) {
    case 'START_NEW_FIELD': {
      return action.field;
    }

    case 'TOGGLE_FLAG_TILE': {
      const { tile } = action;
      const isFlagged = !tile.isFlagged;
      return state ? updateTile(state, tile, { isFlagged }) : state;
    }

    case 'CLEAR_TILE': {
      return state ? clearTile(state, action.tile) : state;
    }

    case 'CLEAR_CONNECTED_SAFE_TILES': {
      return state ? action.tiles.reduce(clearTile, state) : state;
    }

    case 'TRIP_MINE': {
      return { ...state, isExploded: true };
    }

    default: {
      return state;
    }
  }
}

const reducers = { field: fieldReducer };

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<typeof reducers, $ExtractFunctionReturn>;

export default combineReducers(reducers);
