import { expect, it } from "bun:test";
import { createFieldModule, mockField } from "./__mocks__/createField";
import { distributeMines } from "./distributeMines";

// Use the real, unmocked function.
const { createField } = createFieldModule;

it("should create a field", () => {
	const field = createField({ width: 4, height: 4, mineCount: 4 });
	expect(field).toEqual(mockField);
});

it("should delegate to `distributeMines` for mine placement", () => {
	createField({ width: 4, height: 4, mineCount: 4 });
	expect(distributeMines).toHaveBeenCalledWith(16, 4);
});

it("should create a field with the correct number of tiles", () => {
	const field = createField({ width: 4, height: 4, mineCount: 4 });
	expect(field.tiles).toHaveLength(16);
});

it("should create a field with the correct number of mines", () => {
	const field = createField({ width: 4, height: 4, mineCount: 4 });
	expect(field.tiles.filter((t) => t.isMine)).toHaveLength(4);
});
