import freeze from "deep-freeze";
import { type FieldCreator } from "../createField";
import { difference, range } from "lodash";
const createField: FieldCreator =
	require.requireActual("../createField").default;

export const mockFieldConfig = { width: 4, height: 4, mineCount: 4 };

// Will use mocked `distributeMines` to generate a consistent field.
export const mockField = freeze(createField(mockFieldConfig));

export const mockTileIndexes = range(16);
export const mockMineTileIndexes = [7, 10, 12, 15];
export const mockMineTiles = mockMineTileIndexes.map((i) => mockField.tiles[i]);
export const mockSafeTileIndexes = difference(
	mockTileIndexes,
	mockMineTileIndexes,
);
export const mockSafeTiles = mockSafeTileIndexes.map((i) => mockField.tiles[i]);

export const mockZeroTileIndex = 4;
export const mockZeroTile = mockField.tiles[mockZeroTileIndex];
export const mockNumberTileIndex = 5;
export const mockNumberTile = mockField.tiles[mockNumberTileIndex];
export const mockSurroundedNumberTileIndex = 13;
export const mockSurroundedNumberTile =
	mockField.tiles[mockSurroundedNumberTileIndex];
export const mockMineTileIndex = 12;
export const mockMineTile = mockField.tiles[mockMineTileIndex];
export const mockConnectedSafeTilesForZeroTileIndexes =
	// Commenting to format the array on a single line.
	[0, 1, 2, 5, 4, 6, 8, 9];
export const mockConnectedSafeTilesForZeroTile =
	mockConnectedSafeTilesForZeroTileIndexes.map(
		(index) => mockField.tiles[index],
	);

export const updateAdjacentMineCount =
	require.requireActual("../createField").updateAdjacentMineCount;

export default jest.fn(() => mockField);
