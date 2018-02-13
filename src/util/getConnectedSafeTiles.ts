import { Field, Tile } from "../interface";
import getAdjacentTiles from "./getAdjacentTiles";

function* connectedSafeTilesGenerator(
  field: Field,
  tile: Tile,
  seenTiles: Map<number, boolean> = new Map(),
): IterableIterator<Tile> {
  if (seenTiles.get(tile.index)) {
    return;
  }
  seenTiles.set(tile.index, true);
  yield tile;
  if (tile.adjacentMineCount !== 0 || tile.isMine) {
    return;
  }
  for (const adjacentTile of getAdjacentTiles(field, tile)) {
    yield* connectedSafeTilesGenerator(field, adjacentTile, seenTiles);
  }
}

export default function getConnectedSafeTiles(
  field: Field,
  tile: Tile,
): ReadonlyArray<Tile> {
  return [...connectedSafeTilesGenerator(field, tile)];
}
