import { shuffle } from "lodash/fp";

export function distributeMines(
	fieldSize: number,
	mineCount: number,
): readonly boolean[] {
	return shuffle(
		Array<boolean>(fieldSize)
			.fill(true, 0, mineCount)
			.fill(false, mineCount, fieldSize),
	);
}
