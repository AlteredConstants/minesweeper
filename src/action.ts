import { Action } from "redux";
import { FieldConfig, Tile } from "./interface";

export type Action =
  | ClearAdjacentTilesAction
  | ClearTileAction
  | InitFieldAction
  | StartNewFieldAction
  | ToggleFlagTileAction;

interface InitFieldAction extends Action {
  type: "INIT_NEW_FIELD";
}
export const initField = (): InitFieldAction => ({
  type: "INIT_NEW_FIELD",
});

interface StartNewFieldAction extends Action {
  type: "START_NEW_FIELD";
  options: FieldConfig;
  startTileIndex?: number;
}
export const startNewField = (
  options: FieldConfig,
  startTileIndex?: number,
): StartNewFieldAction => ({
  type: "START_NEW_FIELD",
  options,
  startTileIndex,
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
