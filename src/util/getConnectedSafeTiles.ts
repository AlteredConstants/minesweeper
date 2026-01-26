import type { Tile } from "../interface";
import { generateAdjacentTiles } from "./getAdjacentTiles";

function* generateConnectedSafeTiles(
	tiles: readonly Tile[],
	tile: Tile,
	seenTiles = new Map<number, boolean>(),
): IterableIterator<Tile> {
	if (seenTiles.get(tile.index)) {
		return;
	}
	seenTiles.set(tile.index, true);
	yield tile;
	if (tile.adjacentMineCount !== 0 || tile.isMine) {
		return;
	}
	for (const adjacentTile of generateAdjacentTiles(tiles, tile)) {
		yield* generateConnectedSafeTiles(tiles, adjacentTile, seenTiles);
	}
}

export default function getConnectedSafeTiles(
	tiles: readonly Tile[],
	tile: Tile,
): readonly Tile[] {
	return Array.from(generateConnectedSafeTiles(tiles, tile));
}
