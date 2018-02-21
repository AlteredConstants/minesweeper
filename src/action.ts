import { Action } from "redux";
import { Field, Tile } from "./interface";
import { createField } from "./util";

const DefaultField = { width: 30, height: 16, mineCount: 99 };

export type Action =
  | ClearAdjacentTilesAction
  | ClearTileAction
  | StartNewFieldAction
  | ToggleFlagTileAction;

interface StartNewFieldAction extends Action {
  type: "START_NEW_FIELD";
  field: Field;
}
export const startNewField = (
  options: {
    width: number;
    height: number;
    mineCount: number;
  } = DefaultField,
): StartNewFieldAction => ({
  type: "START_NEW_FIELD",
  field: createField(options),
});

interface ToggleFlagTileAction extends Action {
  type: "TOGGLE_FLAG_TILE";
  tile: Tile;
}
export const toggleFlagTile = (tile: Tile): ToggleFlagTileAction => ({
  type: "TOGGLE_FLAG_TILE",
  tile,
});

interface ClearTileAction extends Action {
  type: "CLEAR_TILE";
  tile: Tile;
}
export const clearTile = (tile: Tile): ClearTileAction => ({
  type: "CLEAR_TILE",
  tile,
});

interface ClearAdjacentTilesAction extends Action {
  type: "CLEAR_ADJACENT_TILES";
  tile: Tile;
}
export const clearAdjacentTiles = (tile: Tile): ClearAdjacentTilesAction => ({
  type: "CLEAR_ADJACENT_TILES",
  tile,
});
