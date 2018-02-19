import { filter, flow, map } from "lodash/fp";
import { Tile } from "../interface";

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

const getDimensions = (tiles: ReadonlyArray<Tile>) => {
  const lastTile = tiles[tiles.length - 1];
  return {
    width: lastTile.column + 1,
    height: lastTile.row + 1,
  };
};

export const createAdjacentTilesGetter = (tiles: ReadonlyArray<Tile>) => {
  const { width, height } = getDimensions(tiles);
  return flow(
    getAdjacentCoordinates,
    filter(
      ([row, column]) =>
        row >= 0 && row < height && column >= 0 && column < width,
    ),
    map(([row, column]) => tiles[row * width + column]),
  );
};

export const getAdjacentTiles = (tiles: ReadonlyArray<Tile>, tile: Tile) =>
  createAdjacentTilesGetter(tiles)(tile);

export default getAdjacentTiles;
