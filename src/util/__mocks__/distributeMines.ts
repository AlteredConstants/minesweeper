import { mock } from "bun:test";
import * as distributeMinesModuleBase from "../distributeMines";

/* Creates:
  0 0 1 1
  0 1 2 x
  1 2 x 3
  x 2 2 x
*/
const distributeMines = mock(function distributeMinesMock(
	fieldSize: number,
	mineCount: number,
) {
	if (fieldSize !== 16 || mineCount !== 4) {
		throw new Error("Mocked fields must be of size 16 (4x4) with 4 mines.");
	}
	const field = Array<boolean>(fieldSize).fill(false);
	field[7] = true;
	field[10] = true;
	field[12] = true;
	field[15] = true;
	return field;
});

export const distributeMinesModule = { ...distributeMinesModuleBase };

export const distributeMinesModuleMock = {
	distributeMines,
} satisfies typeof distributeMinesModuleBase;
