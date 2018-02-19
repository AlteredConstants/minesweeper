import * as freeze from "deep-freeze";
import { FieldState, Game } from "../interface";
import {
  mockConnectedSafeTilesForZeroTile,
  mockField as field,
  mockMineTile,
  mockSafeTiles,
  mockZeroTile,
} from "../util/__mocks__/createField";
import reducer from "./gameReducer";

const game = freeze<Game>({ field }) as Game;

it("should initialize correctly", () => {
  const state = reducer(undefined, {} as any);
  expect(state).toEqual({ field: null });
});

it("should return the given state when given an unrecognized action", () => {
  const original = { field: null };
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

it("should mark all connected safe tiles as cleared when given CLEAR_TILE action for a safe tile", () => {
  const state = reducer(game, {
    type: "CLEAR_TILE",
    tile: mockZeroTile,
  });
  const expectedTiles = [...field.tiles];
  mockConnectedSafeTilesForZeroTile.forEach(({ index }) => {
    expectedTiles[index] = { ...expectedTiles[index], isCleared: true };
  });
  expect(state.field.tiles).toEqual(expectedTiles);
});

it("should mark the field as exploded when given CLEAR_TILE action for a mine tile", () => {
  const state = reducer(game, { type: "CLEAR_TILE", tile: mockMineTile });
  expect(state.field.state).toEqual(FieldState.Exploded);
});

it("should mark the field as cleared when all safe tiles are cleared", () => {
  const clearTileActions = mockSafeTiles.map(tile => ({
    type: "CLEAR_TILE",
    tile,
  }));
  const state = clearTileActions.reduce(reducer, game);
  expect(state.field.state).toEqual(FieldState.Cleared);
});
