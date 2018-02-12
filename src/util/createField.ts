import { flow, map, sumBy } from "lodash/fp";
import distributeMines from "./distributeMines";
import { createAdjacentTilesGetter } from "./getAdjacentTiles";
import { Field, Tile } from "../interface";

const uncappedMap = map.convert({ cap: false });

const createTilesCreator = (width: number) =>
  uncappedMap((isMine: boolean, index): Tile => ({
    index,
    row: Math.floor(index / width),
    column: index % width,
    isMine,
    adjacentMineCount: 0,
    isCleared: false,
    isFlagged: false,
  }));

const createAdjacentMineCountUpdater = (width: number, height: number) =>
  uncappedMap((tile: Tile, index, tiles: Tile[]): Tile => ({
    ...tile,
    adjacentMineCount: flow(
      createAdjacentTilesGetter({ width, height, tiles }),
      sumBy(adjacentTile => (adjacentTile.isMine ? 1 : 0)),
    )(tile),
  }));

export default function createField(options: {
  width: number;
  height: number;
  mineCount: number;
}): Field {
  const { width, height, mineCount } = options;
  const createTiles = createTilesCreator(width);
  const updateAdjacentMineCount = createAdjacentMineCountUpdater(width, height);
  const mines = distributeMines(width * height, mineCount);
  const tiles = updateAdjacentMineCount(createTiles(mines));
  return {
    width,
    height,
    mineCount,
    tiles,
    isExploded: false,
  };
}

export type FieldCreator = typeof createField;
