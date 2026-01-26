import {
	mockConnectedSafeTilesForZeroTile,
	mockField,
	mockZeroTile,
} from "../util/__mocks__/createField";
import reducer from "./tiles";

const { tiles } = mockField;

it("should set the flag property when given TOGGLE_FLAG_TILE action", () => {
	const tile = tiles[0];
	const state = reducer(tiles, { type: "TOGGLE_FLAG_TILE", tile });
	expect(state[0]).toEqual({ ...tile, isFlagged: true });
});

it("should unset the flag property when given TOGGLE_FLAG_TILE action twice for the same tile", () => {
	let tile = tiles[0];
	let state = reducer(tiles, { type: "TOGGLE_FLAG_TILE", tile });
	tile = state[0];
	state = reducer(state, { type: "TOGGLE_FLAG_TILE", tile });
	expect(state[0]).toEqual({ ...tile, isFlagged: false });
});

it("should mark the tile as cleared when given CLEAR_TILE action", () => {
	const tile = tiles[0];
	const state = reducer(tiles, { type: "CLEAR_TILE", tile });
	expect(state[0]).toEqual({ ...tile, isCleared: true });
});

it("should mark all connected safe tiles as cleared when given CLEAR_TILE action for a safe tile", () => {
	const state = reducer(tiles, { type: "CLEAR_TILE", tile: mockZeroTile });
	const expectedTiles = [...tiles];
	mockConnectedSafeTilesForZeroTile.forEach(({ index }) => {
		expectedTiles[index] = { ...expectedTiles[index], isCleared: true };
	});
	expect(state).toEqual(expectedTiles);
});
