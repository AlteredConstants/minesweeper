import createField, { countAdjacentMines } from './createField';

export function startNewField(initProps) {
  return {
    type: 'START_NEW_FIELD',
    payload: createField(initProps),
  };
}
export function clearTile(field, tile) {
  let adjacentMineCount = null;
  if (!tile.isMine && !Number.isInteger(tile.adjacentMineCount)) {
    adjacentMineCount = countAdjacentMines(field, tile);
  }
  return {
    type: 'CLEAR_TILE',
    payload: {
      tile,
      adjacentMineCount,
    }
  }
}
