import getConnectedSafeTiles from "./getConnectedSafeTiles";
import {
  mockField,
  mockZeroTile,
  mockNumberTile,
  mockSurroundedNumberTile,
  mockMineTile,
  mockConnectedSafeTilesForZeroTile,
} from "./createField";

it("should return all connected safe tiles when given a zero tile", () => {
  const tiles = getConnectedSafeTiles(mockField, mockZeroTile);
  expect(tiles).toHaveLength(8);
  expect(tiles).toEqual(
    expect.arrayContaining(mockConnectedSafeTilesForZeroTile),
  );
});

it("should return only the given tile when it is a number tile next to a zero tile", () => {
  const tiles = getConnectedSafeTiles(mockField, mockNumberTile);
  expect(tiles).toEqual([expect.objectContaining({ index: 5 })]);
});

it("should return only the given tile when it is a number tile not next to a zero tile", () => {
  const tiles = getConnectedSafeTiles(mockField, mockSurroundedNumberTile);
  expect(tiles).toEqual([expect.objectContaining({ index: 13 })]);
});

it("should return only the given tile when it is a mine tile with no adjacent mines", () => {
  const tiles = getConnectedSafeTiles(mockField, mockMineTile);
  expect(tiles).toEqual([expect.objectContaining({ index: 12 })]);
});
