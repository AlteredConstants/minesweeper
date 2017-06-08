// @flow
import { flow, fill, map, shuffle, filter, sumBy } from 'lodash/fp';

const mapWithIndex = map.convert({ cap: false });

const distributeMines = count => flow(fill(0, count, true), shuffle);

const createTiles = width =>
  mapWithIndex((isMine, index: number): Mine$Tile => ({
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
      sumBy(adjacentTile => (adjacentTile.isMine ? 1 : 0)),
    )(tile),
  }));

export function createField(options: {
  width: number,
  height: number,
  mineCount: number,
}): Mine$Field {
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

function* connectedSafeTilesGenerator(
  field: Mine$Field,
  tile: Mine$Tile,
  seenTiles: Map<number, boolean> = new Map(),
): Iterable<Mine$Tile> {
  if (seenTiles.get(tile.index)) {
    return;
  }
  seenTiles.set(tile.index, true);
  yield tile;
  if (tile.adjacentMineCount !== 0) {
    return;
  }
  for (let adjacentTile of getAdjacentTiles(field)(tile)) {
    yield* connectedSafeTilesGenerator(field, adjacentTile, seenTiles);
  }
}

export function getConnectedSafeTiles(field: Mine$Field, tile: Mine$Tile) {
  return [...connectedSafeTilesGenerator(field, tile)];
}

function matches(object, newProps) {
  if (object === newProps) {
    return false;
  }
  if (object == null || newProps == null) {
    return true;
  }
  return Object.entries(newProps).reduce(
    (result, [key, value]) => result || object[key] === value,
    false,
  );
}

export function updateInObject<T: { [string]: * }, U: { [string]: T }>(
  object: U,
  key: string,
  newProps: $Shape<T>, // TODO: This doesn't work: https://github.com/facebook/flow/issues/3713
) {
  return matches(object[key], newProps)
    ? object
    : { ...object, [key]: { ...object[key], ...newProps } };
}

export function updateInArray<T: { [string]: * }, U: $ReadOnlyArray<T>>(
  array: U,
  indexes: number | Array<number>,
  newProps: $Shape<T>, // TODO: This doesn't work: https://github.com/facebook/flow/issues/3713
) {
  const updateIndexes = Array.isArray(indexes) ? indexes : [indexes];
  let isUpdated = false;
  const newArray = array.map((item, index) => {
    if (!updateIndexes.includes(index) || matches(array[index], newProps)) {
      return item;
    }
    isUpdated = true;
    return { ...item, ...newProps };
  });
  return isUpdated ? newArray : array;
}
