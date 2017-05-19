// @flow
import { createField, getConnectedSafeTiles } from './util';
import type { State } from './reducer';

const DefaultField = { width: 30, height: 16, mineCount: 99 };

type GetState = () => State;
type Dispatch<A> = (action: A) => void;
type ThunkAction<A> = (dispatch: Dispatch<A>, getState: GetState) => void;

type StartNewFieldAction = {
  type: 'START_NEW_FIELD',
  field: Field,
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
  tile: Tile,
};
export function toggleFlagTile(tile: Tile): ToggleFlagTileAction {
  return {
    type: 'TOGGLE_FLAG_TILE',
    tile,
  };
}

type ClearTileAction = {
  type: 'CLEAR_TILE',
  tile: Tile,
};
export function clearTile(tile: Tile): ClearTileAction {
  return {
    type: 'CLEAR_TILE',
    tile,
  };
}

type ClearConnectSafeTilesAction = {
  type: 'CLEAR_CONNECTED_SAFE_TILES',
  tiles: Array<Tile>,
};
export function clearConnectedSafeTiles(
  field: Field,
  tile: Tile,
): ClearConnectSafeTilesAction {
  return {
    type: 'CLEAR_CONNECTED_SAFE_TILES',
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

type ClearAction = ThunkAction<
  ClearTileAction | ClearConnectSafeTilesAction | TripMineAction
>;
export function clear(tile: Tile): ClearAction {
  return (dispatch, getState) => {
    dispatch(clearTile(tile));
    if (tile.isCleared) {
      return;
    }
    if (tile.isMine) {
      dispatch(tripMine());
    } else if (tile.adjacentMineCount === 0) {
      const { field } = getState();
      if (field) {
        dispatch(clearConnectedSafeTiles(field, tile));
      }
    }
  };
}

export type Action =
  | ClearConnectSafeTilesAction
  | ClearTileAction
  | StartNewFieldAction
  | ToggleFlagTileAction
  | TripMineAction;
