export { default as createField } from "./createField";
export { default as getConnectedSafeTiles } from "./getConnectedSafeTiles";
export { updateInObject, updateInArray } from "./updateIn";
export { default as getAdjacentTiles } from "./getAdjacentTiles";

export const getCoordinates = (index: number, width: number) => ({
  row: Math.floor(index / width),
  column: index % width,
});
