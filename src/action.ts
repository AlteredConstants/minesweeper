import { FieldConfig, InitField, Tile } from "./interface";

export type Action =
  | ClearAdjacentTilesAction
  | ClearTileAction
  | InitFieldAction
  | StartNewFieldAction
  | ToggleFlagTileAction;

interface InitFieldAction {
  type: "INIT_NEW_FIELD";
  initialField: InitField;
}
interface StartNewFieldAction {
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

interface ToggleFlagTileAction {
  type: "TOGGLE_FLAG_TILE";
  tile: Tile;
}
export const toggleFlagTile = (tile: Tile): ToggleFlagTileAction => ({
  type: "TOGGLE_FLAG_TILE",
  tile,
});

interface ClearTileAction {
  type: "CLEAR_TILE";
  tile: Tile;
}
export const clearTile = (tile: Tile): ClearTileAction => ({
  type: "CLEAR_TILE",
  tile,
});

interface ClearAdjacentTilesAction {
  type: "CLEAR_ADJACENT_TILES";
  tile: Tile;
}
