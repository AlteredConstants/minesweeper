import { describe, it, expect } from "bun:test";
import { updateInObject, updateInArray } from "./updateIn";

describe("updateInObject", () => {
	it("should return the original object if the same key value is given", () => {
		const original = { key: { subKey: 1 } };
		const updated = updateInObject(original, "key", original.key);
		expect(updated).toBe(original);
	});

	it("should return the original object if the original key value is null", () => {
		const original = { key: null };
		const updated = updateInObject(
			original,
			"key",
			// @ts-expect-error
			{ subKey: 2 },
		);
		expect(updated).toBe(original);
	});

	it("should return the original object if the original key value is undefined", () => {
		const original = {};
		const updated = updateInObject(
			original,
			"key" as never,
			// @ts-expect-error
			{ subKey: 2 },
		);
		expect(updated).toBe(original);
	});

	it("should return the original object if no new props given", () => {
		const original = { key: { subKey: 1 } };
		const updated = updateInObject(original, "key", {});
		expect(updated).toBe(original);
	});

	it("should return the original object if the prop values match", () => {
		const original = { key: { subKey: 1 } };
		const updated = updateInObject(original, "key", { subKey: 1 });
		expect(updated).toBe(original);
	});

	it("should return a new object if the prop values differ", () => {
		const original = { key: { subKey: 1 } };
		const updated = updateInObject(original, "key", { subKey: 2 });
		expect(updated).not.toBe(original);
		expect(updated).toEqual(expect.any(Object));
	});

	it("should return an object with the new prop values if the prop values differ", () => {
		const newSubKey = { ultraSubKey: 2 };
		const original = { key: { subKey: { ultraSubKey: 1 } } };
		const updated = updateInObject(original, "key", { subKey: newSubKey });
		expect(updated.key.subKey).toBe(newSubKey);
	});

	it("should return a new object with new props added", () => {
		type TestObj = { key: { subKey: number; otherSubKey?: number } };
		const original: TestObj = { key: { subKey: 1 } };
		const updated = updateInObject(original, "key", { otherSubKey: 2 });
		expect(updated).toEqual({ key: { subKey: 1, otherSubKey: 2 } });
	});
});

describe("updateInArray", () => {
	it("should accept a single index", () => {
		const original = [{ subKey: 1 }, { subKey: 2 }, { subKey: 3 }];
		const updated = updateInArray(original, 1, { subKey: 4 });
		expect(updated).toEqual([{ subKey: 1 }, { subKey: 4 }, { subKey: 3 }]);
	});

	it("should accept multiple indexes", () => {
		const original = [{ subKey: 1 }, { subKey: 2 }, { subKey: 3 }];
		const updated = updateInArray(original, [0, 2], { subKey: 4 });
		expect(updated).toEqual([{ subKey: 4 }, { subKey: 2 }, { subKey: 4 }]);
	});

	it("should return the original array if the same indexed value is given", () => {
		const original = [{ subKey: 1 }];
		const updated = updateInArray(original, 0, original[0]);
		expect(updated).toBe(original);
	});

	it("should return the original array if the original indexed value is null", () => {
		const original = [null];
		const updated = updateInArray(
			// @ts-expect-error
			original,
			0,
			{ subKey: 2 },
		);
		expect(updated).toBe(
			// @ts-expect-error
			original,
		);
	});

	it("should return the original array if the original indexed value is undefined", () => {
		// @ts-expect-error
		const original = [];
		const updated = updateInArray(
			// @ts-expect-error
			original,
			0,
			{ subKey: 2 },
		);
		expect(updated).toBe(
			// @ts-expect-error
			original,
		);
	});

	it("should return the original array if no new props given", () => {
		const original = [{ subKey: 1 }];
		const updated = updateInArray(original, 0, {});
		expect(updated).toBe(original);
	});

	it("should return the original array if the prop values match", () => {
		const original = [{ subKey: 1 }];
		const updated = updateInArray(original, 0, { subKey: 1 });
		expect(updated).toBe(original);
	});

	it("should return a new array if the prop values differ", () => {
		const original = [{ subKey: 1 }];
		const updated = updateInArray(original, 0, { subKey: 2 });
		expect(updated).not.toBe(original);
		expect(updated).toEqual(expect.any(Array));
	});

	it("should return an array with the new prop values if the prop values differ", () => {
		const newSubKey = { ultraSubKey: 2 };
		const original = [{ subKey: { ultraSubKey: 1 } }];
		const updated = updateInArray(original, 0, { subKey: newSubKey });
		expect(updated[0].subKey).toBe(newSubKey);
	});

	it("should return an array with new props added", () => {
		type TestObj = Array<{ subKey: number; otherSubKey?: number }>;
		const original: TestObj = [{ subKey: 1 }];
		const updated = updateInArray(original, 0, { otherSubKey: 2 });
		expect(updated).toEqual([{ subKey: 1, otherSubKey: 2 }]);
	});
});
