import createField, { countAdjacentMines } from './createField';

export function startNewField(initProps) {
  return {
    type: 'START_NEW_FIELD',
    payload: createField(initProps),
  };
}

export function clearTile(field, tile) {
  const updatedAdjacentMineCount = (tile.adjacentMineCount === null) ? countAdjacentMines(field, tile) : null;
  return {
    type: 'CLEAR_TILE',
    payload: {
      tile,
      updatedAdjacentMineCount,
    }
  }
}
