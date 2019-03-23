import freeze from "deep-freeze";
import { StartedField } from "../../interface";
import { FieldCreator } from "../createField";
const createField: FieldCreator = require.requireActual("../createField")
  .default;

// Will use mocked `distributeMines` to generate a consistent field.
export const mockField = freeze<StartedField>(
  createField({ width: 4, height: 4, mineCount: 4 }),
) as StartedField;

const mineTileIndexes = [7, 10, 12, 15];
export const mockMineTiles = mineTileIndexes.map(i => mockField.tiles[i]);
export const mockSafeTiles = mockField.tiles.filter(
  ({ index }) => !mineTileIndexes.includes(index),
);

export const mockZeroTile = mockField.tiles[4];
export const mockNumberTile = mockField.tiles[5];
export const mockSurroundedNumberTile = mockField.tiles[13];
export const mockMineTile = mockField.tiles[12];
export const mockConnectedSafeTilesForZeroTile = [0, 1, 2, 5, 4, 6, 8, 9].map(
  index => mockField.tiles[index],
);

export default jest.fn(() => mockField);
