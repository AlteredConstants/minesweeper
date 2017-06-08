import { flow, fill, map, shuffle, filter, sumBy } from 'lodash/fp';

const mapFull = map.convert({ cap: false });

const distributeMines = count => flow(fill(0, count, true), shuffle);

const createTiles = width =>
  mapFull((isMine, index) => ({
    index,
    row: Math.floor(index / width),
    column: index % width,
    isMine: isMine,
    isCleared: false,
    adjacentMineCount: 0,
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
  mapFull((tile, _, tiles) => ({
    ...tile,
    adjacentMineCount: flow(
      getAdjacentTiles({ width, height, tiles }),
      sumBy(adjacentTile => (adjacentTile.isMine ? 1 : 0)),
    )(tile),
  }));

export function createField(options) {
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

function* connectedSafeTilesGenerator(field, tile, seenTiles = new Map()) {
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

export function getConnectedSafeTiles(field, tile) {
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

export function updateInObject(object, key, newProps) {
  return matches(object[key], newProps)
    ? object
    : { ...object, [key]: { ...object[key], ...newProps } };
}

export function updateInArray(array, indexes, newProps) {
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
