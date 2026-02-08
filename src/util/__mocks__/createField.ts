import { mock } from "bun:test";
import freeze from "deep-freeze";
import { difference, range } from "lodash";
import type { StartedField } from "@/interface";
import * as createFieldModuleBase from "../createField";

export const mockFieldConfig = { width: 4, height: 4, mineCount: 4 };

export const mockField = freeze({
	height: 4,
	mineCount: 4,
	state: "active",
	tiles: [
		{
			adjacentMineCount: 0,
			column: 0,
			index: 0,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 0,
		},
		{
			adjacentMineCount: 0,
			column: 1,
			index: 1,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 0,
		},
		{
			adjacentMineCount: 1,
			column: 2,
			index: 2,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 0,
		},
		{
			adjacentMineCount: 1,
			column: 3,
			index: 3,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 0,
		},
		{
			adjacentMineCount: 0,
			column: 0,
			index: 4,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 1,
		},
		{
			adjacentMineCount: 1,
			column: 1,
			index: 5,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 1,
		},
		{
			adjacentMineCount: 2,
			column: 2,
			index: 6,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 1,
		},
		{
			adjacentMineCount: 1,
			column: 3,
			index: 7,
			isCleared: false,
			isFlagged: false,
			isMine: true,
			row: 1,
		},
		{
			adjacentMineCount: 1,
			column: 0,
			index: 8,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 2,
		},
		{
			adjacentMineCount: 2,
			column: 1,
			index: 9,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 2,
		},
		{
			adjacentMineCount: 2,
			column: 2,
			index: 10,
			isCleared: false,
			isFlagged: false,
			isMine: true,
			row: 2,
		},
		{
			adjacentMineCount: 3,
			column: 3,
			index: 11,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 2,
		},
		{
			adjacentMineCount: 0,
			column: 0,
			index: 12,
			isCleared: false,
			isFlagged: false,
			isMine: true,
			row: 3,
		},
		{
			adjacentMineCount: 2,
			column: 1,
			index: 13,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 3,
		},
		{
			adjacentMineCount: 2,
			column: 2,
			index: 14,
			isCleared: false,
			isFlagged: false,
			isMine: false,
			row: 3,
		},
		{
			adjacentMineCount: 1,
			column: 3,
			index: 15,
			isCleared: false,
			isFlagged: false,
			isMine: true,
			row: 3,
		},
	],
	width: 4,
} satisfies StartedField as StartedField);

export const mockTileIndexes = range(16);
export const mockMineTileIndexes = [7, 10, 12, 15];
export const mockMineTiles = mockMineTileIndexes.map((i) => mockField.tiles[i]);
export const mockSafeTileIndexes = difference(
	mockTileIndexes,
	mockMineTileIndexes,
);
export const mockSafeTiles = mockSafeTileIndexes.map((i) => mockField.tiles[i]);

export const mockZeroTileIndex = 4;
export const mockZeroTile = assertDefined(mockField.tiles[mockZeroTileIndex]);
export const mockNumberTileIndex = 5;
export const mockNumberTile = assertDefined(
	mockField.tiles[mockNumberTileIndex],
);
export const mockSurroundedNumberTileIndex = 13;
export const mockSurroundedNumberTile = assertDefined(
	mockField.tiles[mockSurroundedNumberTileIndex],
);
export const mockMineTileIndex = 12;
export const mockMineTile = assertDefined(mockField.tiles[mockMineTileIndex]);
export const mockConnectedSafeTilesForZeroTileIndexes = [
	0, 1, 2, 5, 4, 6, 8, 9,
];
export const mockConnectedSafeTilesForZeroTile =
	mockConnectedSafeTilesForZeroTileIndexes.map(
		(index) => mockField.tiles[index],
	);

export const createFieldModule = { ...createFieldModuleBase };

export const createFieldModuleMock = {
	createField: mock(function createFieldMock() {
		return mockField;
	}),
	updateAdjacentMineCount: mock(createFieldModuleBase.updateAdjacentMineCount),
} satisfies typeof createFieldModuleBase;

function assertDefined<T>(value: T | undefined): T {
	if (value === undefined) {
		throw new Error("Test value is unexpected undefined.");
	}
	return value;
}
