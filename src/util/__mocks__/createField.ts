import freeze from "deep-freeze";
import { FieldCreator } from "../createField";
const createField: FieldCreator = require.requireActual("../createField")
  .default;

export const mockFieldConfig = { width: 4, height: 4, mineCount: 4 };

// Will use mocked `distributeMines` to generate a consistent field.
export const mockField = freeze(createField(mockFieldConfig));

export const mockMineTileIndexes = [7, 10, 12, 15];
export const mockMineTiles = mockMineTileIndexes.map(i => mockField.tiles[i]);
export const mockSafeTiles = mockField.tiles.filter(
  ({ index }) => !mockMineTileIndexes.includes(index),
);
export const mockSafeTileIndexes = mockSafeTiles.map(({ index }) => index);

export const mockZeroTileIndex = 4;
export const mockZeroTile = mockField.tiles[mockZeroTileIndex];
export const mockNumberTileIndex = 5;
export const mockNumberTile = mockField.tiles[mockNumberTileIndex];
export const mockSurroundedNumberTileIndex = 13;
export const mockSurroundedNumberTile =
  mockField.tiles[mockSurroundedNumberTileIndex];
export const mockMineTileIndex = 12;
export const mockMineTile = mockField.tiles[mockMineTileIndex];
export const mockConnectedSafeTilesForZeroTile = [0, 1, 2, 5, 4, 6, 8, 9].map(
  index => mockField.tiles[index],
);

export const updateAdjacentMineCount = require.requireActual("../createField")
  .updateAdjacentMineCount;

export default jest.fn(() => mockField);
