import { Action, Dispatch } from "redux";
import { Field, State, Tile } from "./interface";
import { createField, getConnectedSafeTiles } from "./util";
import { getAdjacentTiles } from "./util/getAdjacentTiles";

const DefaultField = { width: 30, height: 16, mineCount: 99 };

export type Action =
  | ClearConnectSafeTilesAction
  | ClearTileAction
  | StartNewFieldAction
  | ToggleFlagTileAction
  | TripMineAction;

interface StartNewFieldAction extends Action {
  type: "START_NEW_FIELD";
  field: Field;
}
export function startNewField(
  options: {
    width: number;
    height: number;
    mineCount: number;
  } = DefaultField,
): StartNewFieldAction {
  return {
    type: "START_NEW_FIELD",
    field: createField(options),
  };
}

interface ToggleFlagTileAction extends Action {
  type: "TOGGLE_FLAG_TILE";
  tile: Tile;
}
export function toggleFlagTile(tile: Tile): ToggleFlagTileAction {
  return {
    type: "TOGGLE_FLAG_TILE",
    tile,
  };
}

interface ClearTileAction extends Action {
  type: "CLEAR_TILE";
  tile: Tile;
}
export function clearTile(tile: Tile): ClearTileAction {
  return {
    type: "CLEAR_TILE",
    tile,
  };
}

interface ClearConnectSafeTilesAction extends Action {
  type: "CLEAR_CONNECTED_SAFE_TILES";
  originTile: Tile;
  tiles: ReadonlyArray<Tile>;
}
export function clearConnectedSafeTiles(
  field: Field,
  tile: Tile,
): ClearConnectSafeTilesAction {
  return {
    type: "CLEAR_CONNECTED_SAFE_TILES",
    originTile: tile,
    tiles: getConnectedSafeTiles(field, tile),
  };
}

interface TripMineAction extends Action {
  type: "TRIP_MINE";
}
export function tripMine(): TripMineAction {
  return {
    type: "TRIP_MINE",
  };
}

export function clear(tile: Tile) {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    if (tile.isCleared) {
      return;
    }
    dispatch(clearTile(tile));
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

export function clearSurrounding(tile: Tile) {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    if (!tile.isCleared) {
      return;
    }
    const { game: { field } } = getState();
    if (!field) {
      return;
    }
    const adjacentTiles = getAdjacentTiles(field, tile);
    const flaggedTilesCount = adjacentTiles.filter(t => t.isFlagged).length;
    if (flaggedTilesCount !== tile.adjacentMineCount) {
      return;
    }
    for (const adjacentTile of adjacentTiles.filter(t => !t.isFlagged)) {
      dispatch(clear(adjacentTile));
    }
  };
}
