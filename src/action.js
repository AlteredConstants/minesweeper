import { createField, getAdjacentTiles } from './util';

const DefaultField = { width: 30, height: 16, mineCount: 99 };

export function startNewField(initProps = DefaultField) {
  return {
    type: 'START_NEW_FIELD',
    payload: createField(initProps),
  };
}

export function toggleFlagTile(tile) {
  return {
    type: 'TOGGLE_FLAG_TILE',
    payload: { tile },
  };
}

export function clearTile(tile) {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLEAR_TILE',
      payload: { tile },
    });
    if (tile.isCleared) {
      return;
    }
    if (tile.isMine) {
      dispatch(tripMine());
    } else if (tile.adjacentMineCount === 0) {
      const { field } = getState();
      dispatch(clearConnectedSafeTiles(field, tile));
    }
  };
}

function* getConnectedSafeTiles(
  field,
  tile,
  seenTiles = Array(field.tiles.length),
) {
  if (seenTiles[tile.index]) {
    return;
  }
  seenTiles[tile.index] = true;
  yield tile;
  if (tile.adjacentMineCount !== 0) {
    return;
  }
  for (let adjacentTile of getAdjacentTiles(field, tile)) {
    yield* getConnectedSafeTiles(field, adjacentTile, seenTiles);
  }
}

export function clearConnectedSafeTiles(field, tile) {
  return {
    type: 'CLEAR_CONNECTED_SAFE_TILES',
    payload: [...getConnectedSafeTiles(field, tile)],
  };
}

export function tripMine() {
  return {
    type: 'TRIP_MINE',
  };
}
