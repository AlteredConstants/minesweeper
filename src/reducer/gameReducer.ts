import { combineReducers } from "redux";
import { Action } from "../action";
import { Field, FieldState, Game, Tile } from "../interface";
import {
  getAdjacentTiles,
  getConnectedSafeTiles,
  updateInArray,
} from "../util";

type Tiles = ReadonlyArray<Tile>;

function setClearedTileFlag(state: Tiles, tiles: Tiles): Tiles {
  const indexes = tiles.filter(t => !t.isCleared).map(t => t.index);
  if (indexes.length === 0) {
    return state;
  }
  return updateInArray(state, indexes, { isCleared: true });
}

function clearAllMines(state: Tiles, { isMine }: Tile): Tiles {
  const mineTiles = state.filter(t => t.isMine);
  return setClearedTileFlag(state, mineTiles);
}

function clearConnectedSafeTiles(state: Tiles, tile: Tile): Tiles {
  const connectedSafeTiles = getConnectedSafeTiles(state, tile);
  return setClearedTileFlag(state, connectedSafeTiles);
}

function clearTile(state: Tiles, tile: Tile): Tiles {
  const nextState = setClearedTileFlag(state, [tile]);
  if (tile.isMine) {
    return clearAllMines(nextState, tile);
  }
  if (tile.adjacentMineCount === 0) {
    return clearConnectedSafeTiles(nextState, tile);
  }
  return nextState;
}

function tilesReducer(tiles: Tiles, action: Action): Tiles {
  switch (action.type) {
    case "TOGGLE_FLAG_TILE": {
      const { tile: { index, isFlagged } } = action;
      return updateInArray(tiles, index, { isFlagged: !isFlagged });
    }

    case "CLEAR_TILE": {
      const { tile } = action;
      return clearTile(tiles, tile);
    }

    case "CLEAR_ADJACENT_TILES": {
      const { tile } = action;
      const { isCleared } = tile;
      if (!isCleared) {
        return tiles;
      }
      const adjacentTiles = getAdjacentTiles(tiles, tile);
      const flaggedTilesCount = adjacentTiles.filter(t => t.isFlagged).length;
      if (flaggedTilesCount !== tile.adjacentMineCount) {
        return tiles;
      }
      return adjacentTiles.filter(t => !t.isFlagged).reduce(clearTile, tiles);
    }

    default: {
      return tiles;
    }
  }
}

function isMineCleared(tiles: Tiles): boolean {
  return tiles.some(t => t.isMine && t.isCleared);
}

function getRemainingSafeTiles(tiles: Tiles): Tiles {
  return tiles.filter(t => !t.isMine && !t.isCleared);
}

function fieldReducer(
  state: Field | null = null,
  action: Action,
): Field | null {
  let nextField = action.type === "START_NEW_FIELD" ? action.field : state;
  if (!nextField) {
    return null;
  }

  const tiles = tilesReducer(nextField.tiles, action);
  if (tiles !== nextField.tiles) {
    nextField = { ...nextField, tiles };
  }

  if (action.type === "CLEAR_TILE" || action.type === "CLEAR_ADJACENT_TILES") {
    if (isMineCleared(nextField.tiles)) {
      return { ...nextField, state: FieldState.Exploded };
    } else if (getRemainingSafeTiles(nextField.tiles).length === 0) {
      return { ...nextField, state: FieldState.Cleared };
    }
  }

  return nextField;
}

export default combineReducers<Game, Action>({ field: fieldReducer });
