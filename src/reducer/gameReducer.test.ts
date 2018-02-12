import * as freeze from "deep-freeze";
import reducer from "./gameReducer";
import { mockField as field } from "../util/__mocks__/createField";
import { Game } from "../interface";

const game = freeze<Game>({ field }) as Game;

it("should initialize correctly", () => {
  const state = reducer(undefined, {} as any);
  expect(state).toEqual({});
});

it("should return the given state when given an unrecognized action", () => {
  const original = {};
  const state = reducer(original, { type: "TOTALLY_NOT_A_REAL_ACTION" as any });
  expect(state).toBe(original);
});

it("should set the new field when given START_NEW_FIELD action", () => {
  const state = reducer({}, { type: "START_NEW_FIELD", field });
  expect(state).toEqual({ field });
});

it("should set the flag property when given TOGGLE_FLAG_TILE action", () => {
  const tile = field.tiles[0];
  const state = reducer(game, { type: "TOGGLE_FLAG_TILE", tile });
  expect(state.field.tiles[0]).toEqual({ ...tile, isFlagged: true });
});

it("should unset the flag property when given TOGGLE_FLAG_TILE action twice for the same tile", () => {
  let tile = field.tiles[0];
  let state = reducer(game, { type: "TOGGLE_FLAG_TILE", tile });
  tile = state.field.tiles[0];
  state = reducer(state, { type: "TOGGLE_FLAG_TILE", tile });
  expect(state.field.tiles[0]).toEqual({ ...tile, isFlagged: false });
});

it("should mark the tile as cleared when given CLEAR_TILE action", () => {
  const tile = field.tiles[0];
  const state = reducer(game, { type: "CLEAR_TILE", tile });
  expect(state.field.tiles[0]).toEqual({ ...tile, isCleared: true });
});

it("should mark all connected safe tiles as cleared when given CLEAR_CONNECTED_SAFE_TILES action for a safe tile", () => {
  const state = reducer(game, {
    type: "CLEAR_CONNECTED_SAFE_TILES",
    originTile: field.tiles[0],
    tiles: [field.tiles[0], field.tiles[1], field.tiles[4]],
  });
  const expectedTiles = [...field.tiles];
  expectedTiles[0] = { ...expectedTiles[0], isCleared: true };
  expectedTiles[1] = { ...expectedTiles[1], isCleared: true };
  expectedTiles[4] = { ...expectedTiles[4], isCleared: true };
  expect(state.field.tiles).toEqual(expectedTiles);
});

it("should mark the field as exploded when given TRIP_MINE action", () => {
  const state = reducer(game, { type: "TRIP_MINE" });
  expect(state.field.isExploded).toEqual(true);
});
