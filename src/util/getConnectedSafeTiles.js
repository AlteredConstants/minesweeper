import getAdjacentTiles from "./getAdjacentTiles";

function* connectedSafeTilesGenerator(field, tile, seenTiles = new Map()) {
  if (seenTiles.get(tile.index)) {
    return;
  }
  seenTiles.set(tile.index, true);
  yield tile;
  if (tile.adjacentMineCount !== 0) {
    return;
  }
  for (let adjacentTile of getAdjacentTiles(field, tile)) {
    yield* connectedSafeTilesGenerator(field, adjacentTile, seenTiles);
  }
}

export default function getConnectedSafeTiles(field, tile) {
  return [...connectedSafeTilesGenerator(field, tile)];
}
