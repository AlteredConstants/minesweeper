import { expect, it } from "bun:test";
import { distributeMinesModule } from "./__mocks__/distributeMines";

// Use the real, unmocked function.
const { distributeMines } = distributeMinesModule;

it("should create an array", () => {
	const field = distributeMines(9, 3);
	expect(field).toEqual(expect.any(Array));
});

it("should create an array of the specified size", () => {
	const field = distributeMines(9, 3);
	expect(field).toHaveLength(9);
});

it("should create an array containing `true` for each mine", () => {
	const field = distributeMines(9, 3);
	expect(field.filter((t) => t === true)).toHaveLength(3);
});

it("should create an array containing `false` for non-mines", () => {
	const field = distributeMines(9, 3);
	expect(field.filter((t) => t === false)).toHaveLength(6);
});
