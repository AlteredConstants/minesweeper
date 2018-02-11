import { isEqual } from "lodash/fp";
import {
  mockZeroTile,
  mockSurroundedNumberTile,
  mockConnectedSafeTilesForZeroTile,
} from "./createField";

function getConnectedSafeTiles(field, tile) {
  if (isEqual(tile, mockZeroTile)) {
    return mockConnectedSafeTilesForZeroTile;
  }
  if (isEqual(tile, mockSurroundedNumberTile)) {
    return [mockSurroundedNumberTile];
  }
  throw new Error("Unexpected tile argument.");
}

export default jest.fn(getConnectedSafeTiles);
