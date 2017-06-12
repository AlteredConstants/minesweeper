import { flow, fill, map, shuffle, sumBy } from "lodash/fp";
import { createAdjacentTilesFactory } from "./getAdjacentTiles";

const uncappedMap = map.convert({ cap: false });

const distributeMines = count => flow(fill(0, count, true), shuffle);

const createTiles = width =>
  uncappedMap((isMine, index) => ({
    index,
    row: Math.floor(index / width),
    column: index % width,
    isMine,
    adjacentMineCount: 0,
    isCleared: false,
    isFlagged: false,
  }));

const updateAdjacentMineCount = (width, height) =>
  uncappedMap((tile, _, tiles) => ({
    ...tile,
    adjacentMineCount: flow(
      createAdjacentTilesFactory({ width, height, tiles }),
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
