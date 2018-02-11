import freeze from "deep-freeze";
const { default: createField } = require.requireActual("../createField");

// Will use mocked `distributeMines` to generate a consistent field.
export const mockField = freeze(
  createField({ width: 4, height: 4, mineCount: 4 })
);

export const mockZeroTile = mockField.tiles[4];
export const mockNumberTile = mockField.tiles[5];
export const mockSurroundedNumberTile = mockField.tiles[13];
export const mockMineTile = mockField.tiles[12];
export const mockConnectedSafeTilesForZeroTile = [0, 1, 2, 5, 4, 6, 8, 9].map(
  index => mockField.tiles[index]
);

export default jest.fn(() => mockField);
