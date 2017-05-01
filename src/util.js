import { flow, fill, map, shuffle, filter, sumBy, _, curry } from 'lodash/fp';

const mapFull = map.convert({ cap: false });

const distributeMines = count => flow(fill(0, count, true), shuffle);

const createTiles = width =>
  mapFull((isMine, index) => ({
    index,
    row: Math.floor(index / width),
    column: index % width,
    isMine: !!isMine,
    isCleared: false,
    adjacentMineCount: null,
    isFlagged: false,
  }));

const getAdjacentCoordinates = ({ row, column }) => {
  const top = row - 1;
  const bottom = row + 1;
  const left = column - 1;
  const right = column + 1;
  return [
    [top, left],
    [top, column],
    [top, right],
    [row, left],
    [row, right],
    [bottom, left],
    [bottom, column],
    [bottom, right],
  ];
};

export const getAdjacentTiles = curry(({ width, height, tiles }, tile) =>
  flow(
    getAdjacentCoordinates,
    filter(
      ([row, column]) =>
        row >= 0 && row < height && column >= 0 && column < width,
    ),
    map(([row, column]) => tiles[row * width + column]),
  )(tile),
);

const updateAdjacentMineCount = (width, height) =>
  mapFull((tile, _, tiles) => ({
    ...tile,
    adjacentMineCount: flow(
      getAdjacentTiles({ width, height, tiles }),
      sumBy(tile => (tile.isMine ? 1 : 0)),
    )(tile),
  }));

export function createField({ width, height, mineCount }) {
  const tiles = flow(
    () => Array(width * height),
    distributeMines(mineCount),
    createTiles(width),
    updateAdjacentMineCount(width, height),
  )();
  return {
    width,
    height,
    mineCount,
    tiles,
    isExploded: false,
  };
}
