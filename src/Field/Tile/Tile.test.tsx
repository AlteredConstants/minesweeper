import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { mockNumberTile } from "../../util/__mocks__/createField";
import { TileActionType } from "../../reducer/tiles";
import { Tile as TileType } from "../../interface";
import Tile from "./Tile";

test("Clicking a covered tile should request the clear", () => {
	const onAction = jest.fn();
	const { getByRole } = render(
		<Tile tile={mockNumberTile} size={1} onAction={onAction} />,
	);

	fireEvent.click(getByRole("button"));

	expect(onAction).toHaveBeenCalledWith(TileActionType.Clear, mockNumberTile);
});

test("Clicking a cleared tile should not request anything", () => {
	const tile: TileType = { ...mockNumberTile, isCleared: true };
	const onAction = jest.fn();
	const { getByRole } = render(
		<Tile tile={tile} size={1} onAction={onAction} />,
	);

	fireEvent.click(getByRole("button"));

	expect(onAction).not.toHaveBeenCalled();
});

test("Clicking both buttons on a cleared tile should request the clearing of adjacent tiles", () => {
	const tile: TileType = { ...mockNumberTile, isCleared: true };
	const onAction = jest.fn();
	const { getByRole } = render(
		<Tile tile={tile} size={1} onAction={onAction} />,
	);

	fireEvent.mouseDown(getByRole("button"), { buttons: 3 });

	expect(onAction).toHaveBeenCalledTimes(0);

	fireEvent.mouseUp(getByRole("button"));

	expect(onAction).toHaveBeenCalledWith(TileActionType.ClearAdjacent, tile);
});

test("A cleared tile should show the contents", () => {
	const tile: TileType = { ...mockNumberTile, isCleared: true };
	const { container } = render(
		<Tile tile={tile} size={1} onAction={() => {}} />,
	);

	expect(container).toHaveTextContent("1");
});
