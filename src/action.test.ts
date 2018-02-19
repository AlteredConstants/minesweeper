import * as creator from "./action";
import {
  mockConnectedSafeTilesForZeroTile,
  mockField,
  mockMineTile,
  mockSurroundedNumberTile,
  mockZeroTile,
} from "./util/__mocks__/createField";
import createField from "./util/createField";
import getConnectedSafeTiles from "./util/getConnectedSafeTiles";

jest.mock("./util/getConnectedSafeTiles");

describe("startNewField", () => {
  it("should call createField", () => {
    creator.startNewField("<Mock options>" as any);
    expect(createField).toHaveBeenCalledWith("<Mock options>");
  });

  it("should create a START_NEW_FIELD action", () => {
    const action = creator.startNewField("<Mock options>" as any);
    expect(action).toMatchSnapshot();
  });
});

describe("toggleFlagTile", () => {
  it("should create a TOGGLE_FLAG_TILE action", () => {
    const action = creator.toggleFlagTile(mockZeroTile);
    expect(action).toMatchSnapshot();
  });
});

describe("clearTile", () => {
  it("should create a CLEAR_TILE action", () => {
    const action = creator.clearTile(mockZeroTile);
    expect(action).toMatchSnapshot();
  });
});

describe("clearConnectedSafeTiles", () => {
  it("should call getConnectedSafeTiles", () => {
    creator.clearConnectedSafeTiles(mockField, mockZeroTile);
    expect(getConnectedSafeTiles).toHaveBeenCalledWith(
      mockField.tiles,
      mockZeroTile,
    );
  });

  it("should create a CLEAR_CONNECTED_SAFE_TILES action", () => {
    const action = creator.clearConnectedSafeTiles(mockField, mockZeroTile);
    expect(action).toMatchSnapshot();
  });
});

describe("tripMine", () => {
  it("should create a TRIP_MINE action", () => {
    const action = creator.tripMine();
    expect(action).toMatchSnapshot();
  });
});

describe("clear", () => {
  it("should create a thunk action", () => {
    const action = creator.clear(mockZeroTile);
    expect(action).toBeInstanceOf(Function);
  });

  it("should not dispatch any actions if the tile is already cleared", () => {
    const action = creator.clear({ ...mockZeroTile, isCleared: true });
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ game: { field: mockField } }));
    action(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
  });

  it("should dispatch a CLEAR_TILE action", () => {
    const action = creator.clear(mockZeroTile);
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ game: { field: mockField } }));
    action(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({
      type: "CLEAR_TILE",
      tile: mockZeroTile,
    });
  });

  it("should dispatch a TRIP_MINE action for a mine tile", () => {
    const action = creator.clear(mockMineTile);
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ game: {} }));
    action(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({ type: "TRIP_MINE" });
  });

  it("should dispatch a CLEAR_CONNECTED_SAFE_TILES action for a tile with no adjacent mines", () => {
    const action = creator.clear(mockZeroTile);
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ game: { field: mockField } }));
    action(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({
      type: "CLEAR_CONNECTED_SAFE_TILES",
      originTile: mockZeroTile,
      tiles: mockConnectedSafeTilesForZeroTile,
    });
  });

  it("should not dispatch a CLEAR_CONNECTED_SAFE_TILES action for a tile with adjacent mines", () => {
    const action = creator.clear(mockSurroundedNumberTile);
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ game: { field: mockField } }));
    action(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: "CLEAR_TILE",
      tile: mockSurroundedNumberTile,
    });
  });
});
