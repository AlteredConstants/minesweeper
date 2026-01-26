import { FieldConfig, StartedField, Tile } from "../interface";
import distributeMines from "./distributeMines";
import getAdjacentTiles, { getAdjacentIndexes } from "./getAdjacentTiles";
import { getCoordinates } from "./getCoordinates";

function createTiles(
	width: number,
	mines: readonly boolean[],
): readonly Tile[] {
	return mines.map((isMine, index) => ({
		index,
		...getCoordinates(index, width),
		isMine,
		adjacentMineCount: 0,
		isCleared: false,
		isFlagged: false,
	}));
}

function getMines(
	{ width, height, mineCount }: FieldConfig,
	safelyClearedIndexes: number[],
): readonly boolean[] {
	const fieldSize = width * height;

	const mines = [
		...distributeMines(fieldSize - safelyClearedIndexes.length, mineCount),
	];

	// Add back in the missing indexes as safe tiles.
	for (const index of safelyClearedIndexes) {
		mines.splice(index, 0, false);
	}

	return mines;
}

export function updateAdjacentMineCount(
	tiles: readonly Tile[],
): readonly Tile[] {
	return tiles.map((tile) => ({
		...tile,
		adjacentMineCount: getAdjacentTiles(tiles, tile).filter((t) => t.isMine)
			.length,
	}));
}

export default function createField(
	options: FieldConfig,
	startIndex?: number,
): StartedField {
	const { width, height, mineCount } = options;

	// Exclude all of the adjacent tiles as well as the clicked tile from the
	// distribution so that they can be explicitly marked as cleared.
	const safelyClearedIndexes =
		startIndex != null ?
			getAdjacentIndexes({ width, height, index: startIndex })
		:	[];

	const mines = getMines(options, safelyClearedIndexes);
	const tiles = updateAdjacentMineCount(createTiles(width, mines));

	return { width, height, mineCount, tiles, state: "active" };
}

export type FieldCreator = typeof createField;
