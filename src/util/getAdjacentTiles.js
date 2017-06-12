import { flow, map, filter } from "lodash/fp";

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

export const createAdjacentTilesFactory = ({ width, height, tiles }) =>
  flow(
    getAdjacentCoordinates,
    filter(
      ([row, column]) =>
        row >= 0 && row < height && column >= 0 && column < width,
    ),
    map(([row, column]) => tiles[row * width + column]),
  );

export const getAdjacentTiles = (field, tile) =>
  createAdjacentTilesFactory(field)(tile);

export default getAdjacentTiles;
