import { Tile } from "../interface"
import { getAdjacentTiles, getConnectedSafeTiles, updateInArray } from "../util"

type Tiles = readonly Tile[]

export enum TileActionType {
  Clear = "CLEAR_TILE",
  ClearAdjacent = "CLEAR_ADJACENT_TILES",
  ToggleFlag = "TOGGLE_FLAG_TILE",
}

export interface TileAction {
  type: TileActionType
  tile: Tile
}

function setClearedTileFlag(state: Tiles, tiles: Tiles): Tiles {
  const indexes = tiles.filter((t) => !t.isCleared).map((t) => t.index)
  if (indexes.length === 0) {
    return state
  }
  return updateInArray(state, indexes, { isCleared: true })
}

function clearAllMines(state: Tiles): Tiles {
  const mineTiles = state.filter((t) => t.isMine)
  return setClearedTileFlag(state, mineTiles)
}

function clearConnectedSafeTiles(state: Tiles, tile: Tile): Tiles {
  const connectedSafeTiles = getConnectedSafeTiles(state, tile)
  return setClearedTileFlag(state, connectedSafeTiles)
}

function clearTile(state: Tiles, tile: Tile): Tiles {
  const nextState = setClearedTileFlag(state, [tile])
  if (tile.isMine) {
    return clearAllMines(nextState)
  }
  if (tile.adjacentMineCount === 0) {
    return clearConnectedSafeTiles(nextState, tile)
  }
  return nextState
}

export default function reducer(tiles: Tiles, action: TileAction): Tiles {
  switch (action.type) {
    case TileActionType.ToggleFlag: {
      const { index, isFlagged } = action.tile
      return updateInArray(tiles, index, { isFlagged: !isFlagged })
    }

    case TileActionType.Clear: {
      const { tile } = action
      return clearTile(tiles, tile)
    }

    case TileActionType.ClearAdjacent: {
      const { tile } = action
      const { isCleared } = tile
      if (!isCleared) {
        return tiles
      }
      const adjacentTiles = getAdjacentTiles(tiles, tile)
      const flaggedTilesCount = adjacentTiles.filter((t) => t.isFlagged).length
      if (flaggedTilesCount !== tile.adjacentMineCount) {
        return tiles
      }
      return adjacentTiles.filter((t) => !t.isFlagged).reduce(clearTile, tiles)
    }

    default: {
      const neverType: never = action.type
      throw new Error(`Unexpected action type: ${neverType}`)
    }
  }
}

export function isMineCleared(tiles: Tiles): boolean {
  return tiles.some((t) => t.isMine && t.isCleared)
}

export function areAllSafeTilesCleared(tiles: Tiles): boolean {
  return tiles.filter((t) => !t.isMine && !t.isCleared).length === 0
}
