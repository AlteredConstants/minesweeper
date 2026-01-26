import { pick } from "lodash/fp";
import type { StartedField, StartedFieldState, Tile } from "../interface";
import { areAllSafeTilesCleared, isMineCleared } from "../reducer/tiles";
import { updateAdjacentMineCount } from "./createField";
import { getCoordinates } from "./getCoordinates";

interface SerializedField {
	width: number;
	tiles: Array<{ isMine: boolean; isCleared: boolean; isFlagged: boolean }>;
}

function prepareSerialize(field: StartedField): SerializedField {
	const { width } = field;
	const tiles = field.tiles.map(pick(["isMine", "isCleared", "isFlagged"]));
	return { width, tiles };
}

function prepareDeserialize(field: SerializedField): StartedField {
	const { width } = field;
	const height = field.tiles.length / width;
	const mineCount = field.tiles.filter((t) => t.isMine).length;
	const tiles = updateAdjacentMineCount(
		field.tiles.map(({ isMine, isCleared, isFlagged }, index) => ({
			index,
			...getCoordinates(index, width),
			adjacentMineCount: 0,
			isMine,
			isCleared,
			isFlagged,
		})),
	);
	const state = getFieldState(tiles);

	return { width, height, mineCount, tiles, state };
}

function getFieldState(tiles: readonly Tile[]): StartedFieldState {
	if (isMineCleared(tiles)) {
		return "exploded";
	} else if (areAllSafeTilesCleared(tiles)) {
		return "cleared";
	} else {
		return "active";
	}
}

export function serialize(field: StartedField): string {
	return JSON.stringify(prepareSerialize(field));
}

export function deserialize(field: string): StartedField {
	return prepareDeserialize(JSON.parse(field));
}
