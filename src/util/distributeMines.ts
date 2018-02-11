import { shuffle } from "lodash/fp";

export default function distributeMines(
  fieldSize: number,
  mineCount: number,
): ReadonlyArray<boolean> {
  const field = Array<boolean>(fieldSize);
  return shuffle(
    field.fill(true, 0, mineCount).fill(false, mineCount, fieldSize),
  );
}
