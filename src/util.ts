import { flow, fill, map, shuffle, filter, sumBy } from 'lodash/fp';
import { Field, Tile } from './index';

const mapFull = map.convert({ cap: false });

const distributeMines = (count: number) => flow(fill(0, count, true), shuffle);

const createTiles = (width: number) =>
  mapFull((isMine: boolean, index): Tile => ({
    index,
    row: Math.floor(index / width),
    column: index % width,
    isMine: isMine,
    isCleared: false,
    adjacentMineCount: 0,
    isFlagged: false,
  }));

const getAdjacentCoordinates = ({ row, column }: Tile) => {
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

const getAdjacentTiles = ({
  width,
  height,
  tiles,
}: { width: number; height: number; tiles: ReadonlyArray<Tile> }) =>
  flow(
    getAdjacentCoordinates,
    filter(
      ([row, column]) =>
        row >= 0 && row < height && column >= 0 && column < width,
    ),
    map(([row, column]) => tiles[row * width + column]),
  );

const updateAdjacentMineCount = (width: number, height: number) =>
  mapFull((tile: Tile, _, tiles: Tile[]) => ({
    ...tile,
    adjacentMineCount: flow(
      getAdjacentTiles({ width, height, tiles }),
      sumBy((adjacentTile: Tile) => (adjacentTile.isMine ? 1 : 0)),
    )(tile),
  }));

export function createField(
  options: { width: number; height: number; mineCount: number },
): Field {
  const { width, height, mineCount } = options;
  const size = width * height;
  const tiles = flow(
    fill(0, size, false),
    distributeMines(mineCount),
    createTiles(width),
    updateAdjacentMineCount(width, height),
  )(Array<boolean>(size));
  return {
    width,
    height,
    mineCount,
    tiles,
    isExploded: false,
  };
}

function* connectedSafeTilesGenerator(
  field: Field,
  tile: Tile,
  seenTiles = new Map<number, boolean>(),
): Iterable<Tile> {
  if (seenTiles.get(tile.index)) {
    return undefined;
  }
  seenTiles.set(tile.index, true);
  yield tile;
  if (tile.adjacentMineCount !== 0) {
    return undefined;
  }
  for (let adjacentTile of getAdjacentTiles(field)(tile)) {
    yield* connectedSafeTilesGenerator(field, adjacentTile, seenTiles);
  }
}

export function getConnectedSafeTiles(field: Field, tile: Tile) {
  return [...connectedSafeTilesGenerator(field, tile)];
}
