import {
	mockConnectedSafeTilesForZeroTile,
	mockField,
	mockMineTile,
	mockNumberTile,
	mockSurroundedNumberTile,
	mockZeroTile,
} from "./__mocks__/createField";
import getConnectedSafeTiles from "./getConnectedSafeTiles";

it("should return all connected safe tiles when given a zero tile", () => {
	const tiles = getConnectedSafeTiles(mockField.tiles, mockZeroTile);
	expect(tiles).toHaveLength(8);
	expect(tiles).toEqual(
		expect.arrayContaining(mockConnectedSafeTilesForZeroTile),
	);
});

it("should return only the given tile when it is a number tile next to a zero tile", () => {
	const tiles = getConnectedSafeTiles(mockField.tiles, mockNumberTile);
	expect(tiles).toEqual([expect.objectContaining({ index: 5 })]);
});

it("should return only the given tile when it is a number tile not next to a zero tile", () => {
	const tiles = getConnectedSafeTiles(
		mockField.tiles,
		mockSurroundedNumberTile,
	);
	expect(tiles).toEqual([expect.objectContaining({ index: 13 })]);
});

it("should return only the given tile when it is a mine tile with no adjacent mines", () => {
	const tiles = getConnectedSafeTiles(mockField.tiles, mockMineTile);
	expect(tiles).toEqual([expect.objectContaining({ index: 12 })]);
});
