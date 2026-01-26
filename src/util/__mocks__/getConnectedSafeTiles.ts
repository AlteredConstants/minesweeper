import { isEqual } from "lodash/fp";
import {
	mockZeroTile,
	mockSurroundedNumberTile,
	mockConnectedSafeTilesForZeroTile,
} from "./createField";
import type { Field, Tile } from "../../interface";

function getConnectedSafeTiles(_field: Field, tile: Tile) {
	if (isEqual(tile, mockZeroTile)) {
		return mockConnectedSafeTilesForZeroTile;
	}
	if (isEqual(tile, mockSurroundedNumberTile)) {
		return [mockSurroundedNumberTile];
	}
	throw new Error("Unexpected tile argument.");
}

export default jest.fn(getConnectedSafeTiles);
