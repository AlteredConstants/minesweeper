import { fill } from "lodash/fp";

/* Creates:
  0 0 1 1
  0 1 2 x
  1 2 x 3
  x 2 2 x
*/
function distributeMines(fieldSize: number, mineCount: number) {
  if (fieldSize !== 16 || mineCount !== 4) {
    throw new Error("Mocked fields must be of size 16 (4x4) with 4 mines.");
  }
  const field = fill(0, fieldSize, false, Array(fieldSize));
  field[7] = true;
  field[10] = true;
  field[12] = true;
  field[15] = true;
  return field;
}

export default jest.fn(distributeMines);
