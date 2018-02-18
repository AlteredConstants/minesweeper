import { combineReducers } from "redux";
import { Action } from "../action";
import { Field, Game, Tile } from "../interface";
import { updateInArray } from "../util";

function tilesReducer(
  tiles: ReadonlyArray<Tile>,
  action: Action,
): ReadonlyArray<Tile> {
  switch (action.type) {
    case "TOGGLE_FLAG_TILE": {
      const { tile: { index, isFlagged } } = action;
      return updateInArray(tiles, index, { isFlagged: !isFlagged });
    }

    case "CLEAR_TILE": {
      const { tile: { index, isMine } } = action;
      const nextTiles = updateInArray(tiles, index, { isCleared: true });
      if (!isMine) {
        return nextTiles;
      }
      return updateInArray(
        nextTiles,
        nextTiles.filter(t => t.isMine && !t.isCleared).map(t => t.index),
        { isCleared: true },
      );
    }

    case "CLEAR_CONNECTED_SAFE_TILES": {
      const indexes = action.tiles.map(t => t.index);
      return updateInArray(tiles, indexes, { isCleared: true });
    }

    default: {
      return tiles;
    }
  }
}

function fieldReducer(
  field: Field | null = null,
  action: Action,
): Field | null {
  let nextField = action.type === "START_NEW_FIELD" ? action.field : field;
  if (!nextField) {
    return null;
  }

  const tiles = tilesReducer(nextField.tiles, action);
  if (tiles !== nextField.tiles) {
    nextField = { ...nextField, tiles };
  }

  if (action.type === "TRIP_MINE") {
    nextField = { ...nextField, isExploded: true };
  }

  return nextField;
}

export default combineReducers<Game, Action>({ field: fieldReducer });
