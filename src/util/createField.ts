import { flow, sumBy } from "lodash/fp"
import { FieldConfig, StartedField, Tile } from "../interface"
import distributeMines from "./distributeMines"
import { createAdjacentTilesGetter } from "./getAdjacentTiles"
import { getCoordinates } from "./getCoordinates"

const uncappedMap = <T, R = T>(
  iteratee: (value: T, index: number, array: readonly T[]) => R,
) => (array: readonly T[]): R[] => array.map(iteratee)

const createTilesCreator = (width: number) =>
  uncappedMap<boolean, Tile>((isMine, index) => ({
    index,
    ...getCoordinates(index, width),
    isMine,
    adjacentMineCount: 0,
    isCleared: false,
    isFlagged: false,
  }))

function getMines(
  fieldSize: number,
  mineCount: number,
  startIndex: number | undefined,
): readonly boolean[] {
  if (startIndex == null) {
    return distributeMines(fieldSize, mineCount)
  }
  const mines = distributeMines(fieldSize - 1, mineCount)
  return [...mines.slice(0, startIndex), false, ...mines.slice(startIndex)]
}

export const updateAdjacentMineCount = uncappedMap<Tile>((tile, _, tiles) => ({
  ...tile,
  adjacentMineCount: flow(
    createAdjacentTilesGetter(tiles),
    sumBy(adjacentTile => (adjacentTile.isMine ? 1 : 0)),
  )(tile),
}))

export default function createField(
  options: FieldConfig,
  startIndex?: number,
): StartedField {
  const { width, height, mineCount } = options
  const createTiles = createTilesCreator(width)
  const mines = getMines(width * height, mineCount, startIndex)
  const tiles = updateAdjacentMineCount(createTiles(mines))
  return {
    width,
    height,
    mineCount,
    tiles,
    state: "active",
  }
}

export type FieldCreator = typeof createField
