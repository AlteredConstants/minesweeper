import getConnectedSafeTiles from "./getConnectedSafeTiles";
import field from "./testField";

it("should return all connected safe tiles when given a zero tile", () => {
  const tiles = getConnectedSafeTiles(field, field.tiles[4]);
  expect(tiles).toHaveLength(8);
  expect(tiles).toEqual(
    expect.arrayContaining(
      [0, 1, 2, 5, 4, 6, 8, 9].map(index => expect.objectContaining({ index })),
    ),
  );
});

it("should return only the given tile when it is a number tile next to a zero tile", () => {
  const tiles = getConnectedSafeTiles(field, field.tiles[5]);
  expect(tiles).toEqual([expect.objectContaining({ index: 5 })]);
});

it("should return only the given tile when it is a number tile not next to a zero tile", () => {
  const tiles = getConnectedSafeTiles(field, field.tiles[13]);
  expect(tiles).toEqual([expect.objectContaining({ index: 13 })]);
});

it("should return only the given tile when it is a mine tile with no adjacent mines", () => {
  const tiles = getConnectedSafeTiles(field, field.tiles[12]);
  expect(tiles).toEqual([expect.objectContaining({ index: 12 })]);
});
