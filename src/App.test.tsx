import { render, fireEvent, within } from "@testing-library/react";
import {
	mockConnectedSafeTilesForZeroTileIndexes,
	mockField,
	mockMineTileIndex,
	mockNumberTileIndex,
	mockSafeTileIndexes,
	mockTileIndexes,
	mockZeroTileIndex,
} from "./util/__mocks__/createField";
import { App } from "./App";
import { serialize } from "./util/fieldSerialization";

test("Clicking a mine tile should explode the field", () => {
	localStorage.setItem("field", serialize(mockField));
	const { getAllByRole, getByRole } = render(<App />);
	const tiles = getAllByRole("cell");
	const mineTile = tiles[mockMineTileIndex];

	fireEvent.click(within(mineTile).getByRole("button"));

	expect(mineTile).toHaveTextContent("💥");
	expect(getByRole("dialog")).toHaveTextContent("Boom");
});

test("Clicking all safe tiles should clear the field", () => {
	localStorage.setItem("field", serialize(mockField));
	const { getAllByRole, getByRole } = render(<App />);
	const tiles = getAllByRole("cell");

	for (const index of mockSafeTileIndexes) {
		fireEvent.click(within(tiles[index]).getByRole("button"));
	}

	expect(getByRole("dialog")).toHaveTextContent("Cleared");
});

test("Clicking a tile with no adjacent mines should clear all connected safe tiles", () => {
	localStorage.setItem("field", serialize(mockField));
	const { getAllByRole } = render(<App />);
	const tiles = getAllByRole("cell");
	const zeroTile = tiles[mockZeroTileIndex];

	fireEvent.click(within(zeroTile).getByRole("button"));

	for (const index of mockConnectedSafeTilesForZeroTileIndexes) {
		expect(tiles[index]).toHaveTextContent(/\d/);
	}
});

test("Clicking a tile with adjacent mines should not clear any other tiles", () => {
	localStorage.setItem("field", serialize(mockField));
	const { getAllByRole } = render(<App />);
	const tiles = getAllByRole("cell");
	const zeroTile = tiles[mockNumberTileIndex];

	fireEvent.click(within(zeroTile).getByRole("button"));

	for (const index of mockTileIndexes) {
		if (index === mockNumberTileIndex) {
			continue;
		}
		expect(tiles[index]).not.toHaveTextContent(/\d/);
	}
});
