import { Action } from "../action";
import {
  mockField as field,
  mockMineTile,
  mockSafeTiles,
  mockFieldConfig,
} from "../util/__mocks__/createField";
import reducer from "./field";

it("should initialize correctly", () => {
  const state = reducer(undefined, {} as any);
  expect(state).toEqual({ state: "init" });
});

it("should return the given state when given an unrecognized action", () => {
  const state = reducer(field, { type: "TOTALLY_NOT_A_REAL_ACTION" } as any);
  expect(state).toBe(field);
});

it("should set the new field when given START_NEW_FIELD action", () => {
  const state = reducer({} as any, {
    type: "START_NEW_FIELD",
    options: mockFieldConfig,
  });
  expect(state).toEqual(field);
});

it("should mark the field as exploded when given CLEAR_TILE action for a mine tile", () => {
  const state = reducer(field, { type: "CLEAR_TILE", tile: mockMineTile });
  expect(state.state).toEqual("exploded");
});

it("should mark the field as cleared when all safe tiles are cleared", () => {
  const clearTileActions = mockSafeTiles.map<Action>(tile => ({
    type: "CLEAR_TILE",
    tile,
  }));
  const newField = clearTileActions.reduce(reducer, field);
  expect(newField.state).toEqual("cleared");
});
