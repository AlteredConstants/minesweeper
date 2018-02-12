import * as creator from "./action";
import createField from "./util/createField";
import { mockField, mockZeroTile } from "./util/__mocks__/createField";
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
    expect(getConnectedSafeTiles).toHaveBeenCalledWith(mockField, mockZeroTile);
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

  describe("safe tile", () => {
    it("should create a thunk action", () => {
      const action = creator.clear(mockZeroTile);
      const dispatch = jest.fn();
      const getState = jest.fn(() => ({ game: mockField }));
      action(dispatch, getState);
    });
  });
});
