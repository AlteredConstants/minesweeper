import { shuffle } from "lodash/fp"

export default function distributeMines(
  fieldSize: number,
  mineCount: number,
): readonly boolean[] {
  const field = Array<boolean>(fieldSize)
  return shuffle(
    field.fill(true, 0, mineCount).fill(false, mineCount, fieldSize),
  )
}
