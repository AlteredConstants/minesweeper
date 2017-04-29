import { flow, chunk, fill, map, shuffle, filter, sumBy } from 'lodash/fp';

const mapWithIndex = map.convert({ 'cap': false });

const distributeMines = (count) => flow(fill(0, count, true), shuffle);
const createTiles = ({ width, size, mineCount }) => flow(
  () => Array(size),
  distributeMines(mineCount),
  mapWithIndex((isMine, index) => ({
    row: Math.floor(index / width),
    column: index % width,
    isMine: !!isMine,
    isCleared: false,
    adjacentMineCount: null,
  })),
  chunk(width),
)();

export default function createField({ width, height, mineCount }) {
  return {
    width,
    height,
    mineCount,
    tiles: createTiles({ width, size: width * height, mineCount }),
  };
}

function getSurroundingLocations({ row, column }) {
  const top = row - 1;
  const bottom = row + 1;
  const left = column - 1;
  const right = column + 1;
  return [
    [top, left], [top, column], [top, right],
    [row, left], [row, right],
    [bottom, left], [bottom, column], [bottom, right],
  ]
}

export const countAdjacentMines = (field, tile) => flow(
  getSurroundingLocations,
  filter(([row, column]) => (
      row >= 0 && row < field.height &&
      column >= 0 && column < field.width
  )),
  sumBy(([row, column]) => field.tiles[row][column].isMine ? 1 : 0)
)(tile);
