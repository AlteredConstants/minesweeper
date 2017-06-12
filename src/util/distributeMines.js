import { fill, shuffle } from "lodash/fp";

const getEmptyField = size => fill(0, size, false, Array(size));

export default function distributeMines(fieldSize, mineCount) {
  return shuffle(fill(0, mineCount, true, getEmptyField(fieldSize)));
}
