import { Tile } from "../interface";
import { getCoordinates } from "./getCoordinates";

function* generateAdjacentIndexes({
	width,
	height,
	index,
}: {
	width: number;
	height: number;
	index: number;
}): Generator<number> {
	const { row, column } = getCoordinates(index, width);
	const top = row - 1;
	const bottom = row + 1;
	const left = column - 1;
	const right = column + 1;

	function* generateRowAdjacentIndexes(rowOffset: number): Generator<number> {
		if (left >= 0) {
			yield rowOffset + left;
		}
		yield rowOffset + column;
		if (right < width) {
			yield rowOffset + right;
		}
	}

	if (top >= 0) {
		yield* generateRowAdjacentIndexes(width * top);
	}
	yield* generateRowAdjacentIndexes(width * row);
	if (bottom < height) {
		yield* generateRowAdjacentIndexes(width * bottom);
	}
}

const getDimensions = (tiles: readonly Tile[]) => {
	const lastTile = tiles[tiles.length - 1];
	return { width: lastTile.column + 1, height: lastTile.row + 1 };
};

/**
 * Gets the tile indexes adjacent to (surrounding) the given index,
 * including the index itself, in ascending order.
 * @param args.width - The field width
 * @param args.height - The field height
 * @param args.index - The tile index to get the adjacent indexes of.
 */
export function getAdjacentIndexes(args: {
	width: number;
	height: number;
	index: number;
}): number[] {
	return Array.from(generateAdjacentIndexes(args));
}

export function* generateAdjacentTiles(
	tiles: readonly Tile[],
	tile: Tile,
): Generator<Tile> {
	const adjacentIndexes = generateAdjacentIndexes({
		...getDimensions(tiles),
		index: tile.index,
	});
	for (const index of adjacentIndexes) {
		if (index !== tile.index) {
			yield tiles[index];
		}
	}
}

export function getAdjacentTiles(
	tiles: readonly Tile[],
	tile: Tile,
): readonly Tile[] {
	return Array.from(generateAdjacentTiles(tiles, tile));
}

export default getAdjacentTiles;
