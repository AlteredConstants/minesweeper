// @flow
import { flow, fill, map, shuffle, filter, sumBy } from 'lodash/fp';

export type Tile = {
  index: number,
  row: number,
  column: number,
  isMine: boolean,
  adjacentMineCount: number,
  isCleared: boolean,
  isFlagged: boolean,
};

export type Field = {
  width: number,
  height: number,
  mineCount: number,
  tiles: Array<Tile>,
  isExploded: boolean,
};

const mapWithIndex = map.convert({ cap: false });

const distributeMines = count => flow(fill(0, count, true), shuffle);

const createTiles = width =>
  mapWithIndex((isMine, index: number): Tile => ({
    index,
    row: Math.floor(index / width),
    column: index % width,
    isMine,
    adjacentMineCount: 0,
    isCleared: false,
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

const getAdjacentTiles = ({ width, height, tiles }) =>
  flow(
    getAdjacentCoordinates,
    filter(
      ([row, column]) =>
        row >= 0 && row < height && column >= 0 && column < width,
    ),
    map(([row, column]) => tiles[row * width + column]),
  );

const updateAdjacentMineCount = (width, height) =>
  mapWithIndex((tile, index: number, tiles) => ({
    ...tile,
    adjacentMineCount: flow(
      getAdjacentTiles({ width, height, tiles }),
      sumBy(tile => (tile.isMine ? 1 : 0)),
    )(tile),
  }));

export function createField(
  options: { width: number, height: number, mineCount: number },
): Field {
  const { width, height, mineCount } = options;
  const size = width * height;
  const tiles = flow(
    fill(0, size, false),
    distributeMines(mineCount),
    createTiles(width),
    updateAdjacentMineCount(width, height),
  )(Array(size));
  return {
    width,
    height,
    mineCount,
    tiles,
    isExploded: false,
  };
}

function* getConnectedSafeTilesGenerator(field, tile, seenTiles = new Map()) {
  if (seenTiles.get(tile.index)) {
    return;
  }
  seenTiles.set(tile.index, true);
  yield tile;
  if (tile.adjacentMineCount !== 0) {
    return;
  }
  for (let adjacentTile of getAdjacentTiles(field)(tile)) {
    yield* getConnectedSafeTilesGenerator(field, adjacentTile, seenTiles);
  }
}

export function getConnectedSafeTiles(field: Field, tile: Tile) {
  return [...getConnectedSafeTilesGenerator(field, tile)];
}
