// @flow
import { createField, getConnectedSafeTiles } from './util';
import type { State } from './reducer';

const DefaultField = { width: 30, height: 16, mineCount: 99 };

type StartNewFieldAction = {
  type: 'START_NEW_FIELD',
  field: Mine$Field,
};
export function startNewField(
  options: {
    width: number,
    height: number,
    mineCount: number,
  } = DefaultField,
): StartNewFieldAction {
  return {
    type: 'START_NEW_FIELD',
    field: createField(options),
  };
}

type ToggleFlagTileAction = {
  type: 'TOGGLE_FLAG_TILE',
  tile: Mine$Tile,
};
export function toggleFlagTile(tile: Mine$Tile): ToggleFlagTileAction {
  return {
    type: 'TOGGLE_FLAG_TILE',
    tile,
  };
}

type ClearTileAction = {
  type: 'CLEAR_TILE',
  tile: Mine$Tile,
};
export function clearTile(tile: Mine$Tile): ClearTileAction {
  return {
    type: 'CLEAR_TILE',
    tile,
  };
}

type ClearConnectSafeTilesAction = {
  type: 'CLEAR_CONNECTED_SAFE_TILES',
  tiles: Array<Mine$Tile>,
};
export function clearConnectedSafeTiles(
  field: Mine$Field,
  tile: Mine$Tile,
): ClearConnectSafeTilesAction {
  return {
    type: 'CLEAR_CONNECTED_SAFE_TILES',
    originTile: tile,
    tiles: getConnectedSafeTiles(field, tile),
  };
}

type TripMineAction = {
  type: 'TRIP_MINE',
};
export function tripMine(): TripMineAction {
  return {
    type: 'TRIP_MINE',
  };
}

export type Action =
  | ClearConnectSafeTilesAction
  | ClearTileAction
  | StartNewFieldAction
  | ToggleFlagTileAction
  | TripMineAction;

type GetState = () => State;
type $Dispatch<A: Action> = (action: A | ThunkAction<$Subtype<A>>) => A;
type ThunkAction<A> = (dispatch: $Dispatch<A>, getState: GetState) => void;
export type Dispatch = $Dispatch<Action>;

type ClearAction = ThunkAction<
  ClearTileAction | ClearConnectSafeTilesAction | TripMineAction,
>;
export function clear(tile: Mine$Tile): ClearAction {
  return (dispatch, getState) => {
    dispatch(clearTile(tile));
    if (tile.isCleared) {
      return;
    }
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
