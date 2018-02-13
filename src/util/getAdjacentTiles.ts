import { filter, flow, map } from "lodash/fp";
import { Field, Tile } from "../interface";

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

export const createAdjacentTilesGetter = ({
  width,
  height,
  tiles,
}: {
  width: number;
  height: number;
  tiles: ReadonlyArray<Tile>;
}) =>
  flow(
    getAdjacentCoordinates,
    filter(
      ([row, column]) =>
        row >= 0 && row < height && column >= 0 && column < width,
    ),
    map(([row, column]) => tiles[row * width + column]),
  );

export const getAdjacentTiles = (field: Field, tile: Tile) =>
  createAdjacentTilesGetter(field)(tile);

export default getAdjacentTiles;
