import { Tile } from "../interface";
import getAdjacentTiles from "./getAdjacentTiles";

function* connectedSafeTilesGenerator(
  tiles: ReadonlyArray<Tile>,
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
  for (const adjacentTile of getAdjacentTiles(tiles, tile)) {
    yield* connectedSafeTilesGenerator(tiles, adjacentTile, seenTiles);
  }
}

export default function getConnectedSafeTiles(
  tiles: ReadonlyArray<Tile>,
  tile: Tile,
): ReadonlyArray<Tile> {
  return [...connectedSafeTilesGenerator(tiles, tile)];
}
